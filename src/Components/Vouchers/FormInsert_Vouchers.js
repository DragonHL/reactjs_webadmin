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

function FormInsert_EditVouchers() {
  const [dataUser, loading, error] = useList(UserService.getAll());


  const initialFieldValues = {
    code: '',
    discount: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    status: '',
  };

  const [valuesVouchers, setValuesVouchers] = useState(initialFieldValues);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const handleInputChange = e => {
    var { name, value } = e.target;
    setValuesVouchers({ ...valuesVouchers, [name]: value });
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
    history.push('/webadmin/vouchers')
  }

  const hanleFormSubmit = e => {
    setValuesVouchers(initialFieldValues);
    setSubmitted(false);
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
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDiscount" className="form__long margin-form">
          <Form.Label> Giảm giá: </Form.Label>
          <Form.Control
            name="discount"
            type="text"
            placeholder="Number Discount"
            value={valuesVouchers.discount}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="form__long margin-form">
          <Form.Label> Thông tin: </Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            value={valuesVouchers.description}
            onChange={handleInputChange}
            as="textarea" rows={3}
          />
        </Form.Group>

        <Form.Group className="row margin-form" >
          <Form.Group controlId="formDateStart" className="form__short">
            <Form.Label> Ngày bắt đầu: </Form.Label>
            <Form.Control
              name="dateStart"
              type="date"
              placeholder="Date Start"
              value={valuesVouchers.dateStart}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formDateEnd" className="form__short ">
            <Form.Label> Ngày kết thúc: </Form.Label>
            <Form.Control
              name="dateEnd"
              type="date"
              placeholder="Date End"
              value={valuesVouchers.dateEnd}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group className="row form__button" >
          <Button onClick={saveVouchers} className="btn-add">Thêm </Button>
          <Button onClick={close} className="btn-close">Hủy</Button>
        </Form.Group>
      </Form>

    </div>
  );
}

export default FormInsert_EditVouchers;
