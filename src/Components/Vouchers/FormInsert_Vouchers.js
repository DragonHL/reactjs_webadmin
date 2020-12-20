
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useList } from 'react-firebase-hooks/database';

import VouchersService from '../../Service/VouchersService';
import UserService from '../../Service/UserService';
import User_VouchersService from '../../Service/User_VouchersService';
import moment from 'moment';

const codeRE = /[a-zA-Z0-9]/;
const disRE = /[0-9]/;
const desRE = /[a-zA-Z]/;

function FormInsert_EditVouchers() {
  const [dataUser, loading, error] = useList(UserService.getAll());

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const initialFieldValues = {
    code: makeid(19),
    discount: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    status: '',
    codeErr: '',
    disErr: '',
    desErr: '',
    daySErr: '',
    dayEErr: '',
  };

  const [valuesVouchers, setValuesVouchers] = useState(initialFieldValues);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setValuesVouchers(prevData => {
          return {
            ...prevData,
            codeErr: '',
            disErr: '',
            desErr: '',
            daySErr: '',
            dayEErr: '',
          };
        });
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    },
    [
      valuesVouchers.codeErr,
      valuesVouchers.disErr,
      valuesVouchers.desErr,
      valuesVouchers.daySErr,
      valuesVouchers.dayEErr,
    ]
  );

  const handleInputChange = e => {
    var { name, value } = e.target;
    setValuesVouchers(prevData => {
      return { ...prevData, [name]: value };
    });
  };
  // check ky tu
  const checkValidation = (re, check, err) => {
    if (!re.test(check)) {
      setValuesVouchers(prevData => {
        return {
          ...valuesVouchers,
          [err]: 'Dữ liệu nhập vào không hợp lệ!',
        };
      });
      return false;
    } else {
      setValuesVouchers(prevData => {
        return { ...valuesVouchers, [err]: '' };
      });
    }

    return true;
  };
  // check rong
  const checkNull = (check, err) => {
    if (check.length === 0) {
      setValuesVouchers(prevData => {
        return {
          ...valuesVouchers,
          [err]: 'Mời chọn ngày',
        };
      });
      return false;
    } else {
      setValuesVouchers(prevData => {
        return { ...valuesVouchers, [err]: '' };
      });
    }
  };

  const saveVouchers = () => {
    var promise = new Promise(function (resolve, reject) {
      var data = {
        code: valuesVouchers.code,
        discount: parseFloat(valuesVouchers.discount),
        description: valuesVouchers.description,
        dateStart: moment(valuesVouchers.dateStart).format('DD-MM-YYYY'),
        dateEnd: moment(valuesVouchers.dateEnd).format('DD-MM-YYYY'),
        status: 0,
      };
      var voucher = VouchersService.create(data);

      resolve(voucher);
    });

    promise
      .then(function (voucher) {

        //push notifi to app
        fetch('https://onesignal.com/api/v1/notifications', {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            'Authorization': 'Basic ZDgwNzFiNmYtNjlkYi00YWFmLTkzZTEtN2E4MWVjNmNkNDVl'
          },
          body: JSON.stringify({
            app_id: "4ea7262f-90b7-4995-94c7-a4a360e30637",
            included_segments: ["All"],
            // include_player_ids: ["26f4d008-a34a-4637-b085-a19472991034"],
            contents: { "en": "Đặt ngay để được giảm giá: " + valuesVouchers.description },
            headings: { "en": "Tặng bạn mã giảm giá " + valuesVouchers.discount + " %" },
            big_picture: "https://firebasestorage.googleapis.com/v0/b/duanttn.appspot.com/o/icon%2Fgift1_home.jpg?alt=media&token=846b99fa-d92a-45b6-9a1a-916c71f3fae7",
            large_icon: "https://firebasestorage.googleapis.com/v0/b/duanttn.appspot.com/o/icon%2Fvoucher.png?alt=media&token=ebb0a3c8-133f-4d8f-9423-6595ba515c89",
            small_icon: "https://firebasestorage.googleapis.com/v0/b/duanttn.appspot.com/o/icon%2Fvoucher.png?alt=media&token=ebb0a3c8-133f-4d8f-9423-6595ba515c89",
            data: { "customdata": "some_value" },

          })
        }).then((response) => response.json())
          .then((json) => {
            console.log("json", json);
          })
          .catch((error) => {
            console.error(error);
          });

        for (var user of dataUser) {
          var dataUserVouchers = {
            userID: user.val().userID,
            voucherId: voucher.key,
            status: 0,
          };
          User_VouchersService.create(dataUserVouchers).then(() => {

            console.log('create User_VouchersService Success!!!!!');
            setSubmitted(true);
            history.push(`/webadmin/vouchers`);
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function close() {
    history.push('/webadmin/vouchers');
  }

  const hanleFormSubmit = e => {
    e.preventDefault();

    if (
      checkValidation(codeRE, valuesVouchers.code, 'codeErr') &&
      checkValidation(disRE, valuesVouchers.discount, 'disErr') &&
      checkValidation(desRE, valuesVouchers.description, 'desErr')
      // checkNull (valuesVouchers.dateStart, 'daySErr') &&
      // checkNull (valuesVouchers.dateEnd, 'dayEErr')
    ) {
      setValuesVouchers(valuesVouchers);
      saveVouchers();
      setSubmitted(false);
    }
  };

  return (
    <div className="sub-container">

      <h2 className="titleform">Thêm phiếu giảm giá</h2>

      <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

        <Form.Group controlId="formCode" className="form__long margin-form">
          <Form.Label> Mã: </Form.Label>
          <Form.Control
            name="code"
            type="text"
            placeholder="Code"
            value={valuesVouchers.code}
            onChange={e => handleInputChange(e)}
            className={valuesVouchers.codeErr ? 'err' : null}
          />
          {valuesVouchers.codeErr &&
            <h6 style={{ color: 'red' }}>{valuesVouchers.codeErr}</h6>}
        </Form.Group>

        <Form.Group controlId="formDiscount" className="form__long margin-form">
          <Form.Label> Giảm giá: </Form.Label>
          <Form.Control
            name="discount"
            type="number"
            placeholder="Number Discount"
            value={valuesVouchers.discount}
            onChange={e => handleInputChange(e)}
            className={valuesVouchers.disErr ? 'err' : null}
          />
          {valuesVouchers.disErr &&
            <h6 style={{ color: 'red' }}>{valuesVouchers.disErr}</h6>}
        </Form.Group>

        <Form.Group
          controlId="formDescription"
          className="form__long margin-form"
        >
          <Form.Label> Thông tin: </Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            value={valuesVouchers.description}
            onChange={e => handleInputChange(e)}
            className={valuesVouchers.desErr ? 'err' : null}
            as="textarea"
            rows={3}
          />
          {valuesVouchers.desErr &&
            <h6 style={{ color: 'red' }}>{valuesVouchers.desErr}</h6>}
        </Form.Group>

        <Form.Group className="row margin-form">
          <Form.Group controlId="formDateStart" className="form__short">
            <Form.Label> Ngày bắt đầu: </Form.Label>
            <Form.Control
              name="dateStart"
              type="date"
              placeholder="Date Start"
              value={valuesVouchers.dateStart}
              onChange={e => handleInputChange(e)}
              className={valuesVouchers.daySErr ? 'err' : null}
            />
            {valuesVouchers.daySErr &&
              <h6 style={{ color: 'red' }}>{valuesVouchers.daySErr}</h6>}
          </Form.Group>

          <Form.Group controlId="formDateEnd" className="form__short ">
            <Form.Label> Ngày kết thúc: </Form.Label>
            <Form.Control
              name="dateEnd"
              type="date"
              placeholder="Date End"
              value={valuesVouchers.dateEnd}
              onChange={e => handleInputChange(e)}
              className={valuesVouchers.dayEErr ? 'err' : null}
            />
            {valuesVouchers.dayEErr &&
              <h6 style={{ color: 'red' }}>{valuesVouchers.dayEErr}</h6>}
          </Form.Group>
        </Form.Group>

        <Form.Group className="row form__button">
          <Button type="Submit" className="btn-add">Thêm </Button>
          <Button onClick={close} className="btn-close">Hủy</Button>
        </Form.Group>
      </Form>

    </div>
  );
}

export default FormInsert_EditVouchers;

