
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import VouchersService from '../../Service/VouchersService';
import {useHistory} from 'react-router-dom';
import moment from 'moment';

const codeRE = /[a-zA-Z0-9]/;
const disRE = /[0-9]/;
const desRE = /[a-zA-Z]/;
function FormEdit_Vouchers (props) {
  const initialFieldValues = {
    code: props.location.state.code,
    discount: props.location.state.discount,
    description: props.location.state.description,
    dateStart: moment (props.location.state.dateStart, 'DD/MM/YYYY').format (
      'YYYY-MM-DD'
    ),
    dateEnd: moment (props.location.state.dateEnd, 'DD/MM/YYYY').format (
      'YYYY-MM-DD'
    ),
    key: props.location.state.key,
    codeErr: '',
    disErr: '',
    desErr: '',
  };

  const [valuesDiscounts, setValuesDiscount] = useState (initialFieldValues);
  const [submitted, setSubmitted] = useState (false);
  const history = useHistory ();

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValuesDiscount (prevData => {
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
        clearTimeout (timer);
      };
    },
    [
      valuesDiscounts.codeErr,
      valuesDiscounts.disErr,
      valuesDiscounts.desErr,
      valuesDiscounts.daySErr,
      valuesDiscounts.dayEErr,
    ]
  );

  const handleInputChange = e => {
    var {name, value} = e.target;
    setValuesDiscount (prevData => {
      return {...prevData, [name]: value};
    });
  };

  // check ky tu
  const checkValidation = (re, check, err) => {
    if (!re.test (check)) {
      setValuesDiscount (prevData => {
        return {
          ...valuesDiscounts,
          [err]: 'Dữ liệu nhập vào không hợp lệ!',
        };
      });
      return false;
    } else {
      setValuesDiscount (prevData => {
        return {...valuesDiscounts, [err]: ''};
      });
    }

    return true;
  };

  const saveDiscount = () => {
    var data = {
      code: valuesDiscounts.code,
      discount: valuesDiscounts.discount,
      description: valuesDiscounts.description,
      dateStart: moment (valuesDiscounts.dateStart).format ('DD-MM-YYYY'),
      dateEnd: moment (valuesDiscounts.dateEnd).format ('DD-MM-YYYY'),
    };

    VouchersService.update (valuesDiscounts.key, data)
      .then (() => {
        setSubmitted (true);
        console.log ('Update Vouchers Success!!');
        history.push (`/webadmin/vouchers`);
      })
      .catch (e => {
        console.log (e);
      });
  };

  function close () {
    history.push ('/webadmin/vouchers');
  }

  const hanleFormSubmit = e => {
    e.preventDefault ();
    if (
      checkValidation (codeRE, valuesDiscounts.code, 'codeErr') &&
      checkValidation (disRE, valuesDiscounts.discount, 'disErr') &&
      checkValidation (desRE, valuesDiscounts.description, 'desErr')
    ) {
      setValuesDiscount (valuesDiscounts);
      saveDiscount();
      setSubmitted (false);
    }
  };

  return (
    <div className="sub-container">

      <h2 className="titleform">Cập nhật thông tin giảm giá</h2>

      <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

        <Form.Group controlId="formCode" className="form__long margin-form">
          <Form.Label> Mã: </Form.Label>
          <Form.Control
            name="code"
            type="text"
            placeholder="Code"
            value={valuesDiscounts.code}
            onChange={e => handleInputChange (e)}
            className={valuesDiscounts.codeErr ? 'err' : null}
          />
          {valuesDiscounts.codeErr &&
                <h6 style={{color: 'red'}}>{valuesDiscounts.codeErr}</h6>}
        </Form.Group>

        <Form.Group controlId="formDiscount" className="form__long margin-form">
          <Form.Label> Giảm giá: </Form.Label>
          <Form.Control
            name="discount"
            type="number"
            placeholder="Number Discount"
            value={valuesDiscounts.discount}
            onChange={e => handleInputChange (e)}
            className={valuesDiscounts.disErr ? 'err' : null}
          />
          {valuesDiscounts.disErr &&
                <h6 style={{color: 'red'}}>{valuesDiscounts.disErr}</h6>}
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
            value={valuesDiscounts.description}
            onChange={e => handleInputChange (e)}
            className={valuesDiscounts.desErr ? 'err' : null}
            as="textarea"
            rows={3}
          />
           {valuesDiscounts.desErr &&
                <h6 style={{color: 'red'}}>{valuesDiscounts.desErr}</h6>}
        </Form.Group>

        <Form.Group className="row margin-form">
          <Form.Group controlId="formDateStart" className="form__short">
            <Form.Label> Ngày bắt đầu: </Form.Label>
            <Form.Control
              name="dateStart"
              type="date"
              placeholder="Date Start"
              value={valuesDiscounts.dateStart}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formDateEnd" className="form__short ">
            <Form.Label> Ngày kết thúc: </Form.Label>
            <Form.Control
              name="dateEnd"
              type="date"
              placeholder="Date End"
              value={valuesDiscounts.dateEnd}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group className="row form__button">
          <Button type="Submit" className="btn-add">Đồng ý</Button>
          <Button onClick={close} className="btn-close">Hủy</Button>
        </Form.Group>
      </Form>

    </div>
  );
}

export default FormEdit_Vouchers;
