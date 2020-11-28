
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";

import VouchersService from "../../Service/VouchersService";
import UserService from "../../Service/UserService";
import User_VouchersService from "../../Service/User_VouchersService";



function FormInsert_EditVouchers() {

    const [dataUser, loading, error] = useList(UserService.getAllFollowStatus(0));

    const initialFieldValues = {
        code: '',
        discount: '',
        description: '',
        dateStart: '',
        dateEnd: '',
        status: ''
    }


    const [valuesVouchers, setValuesVouchers] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValuesVouchers({ ...valuesVouchers, [name]: value })
    }


    const saveVouchers = () => {

        var promise = new Promise(function (resolve, reject) {
            var data = {
                code: valuesVouchers.code,
                discount: valuesVouchers.discount,
                description: valuesVouchers.description,
                dateStart: valuesVouchers.dateStart,
                dateEnd: valuesVouchers.dateEnd,
                status: 0,
            };
            var voucher = VouchersService.create(data)

            resolve(voucher);
        })

        promise
            .then(function (voucher) {
                console.log("voucher2")
                console.log(voucher)
                for (var user of dataUser) {

                    var dataUserVouchers = {
                        userId: user.key,
                        voucherId: voucher.key,
                        status: 0
                    }
                    User_VouchersService.create(dataUserVouchers).then(() => {
                        console.log("create User_VouchersService Success!!!!!")
                        setSubmitted(true);
                        history.push(`/webadmin/vouchers`);
                    })
                }

            })
            .catch(function (error) {
                console.log(error)
            })

    }


    const hanleFormSubmit = e => {
        setValuesVouchers(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">

            <h2 className="titleform">Form Add Vouchers</h2>

            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formCode">
                    <Form.Label> Code: </Form.Label>
                    <Form.Control
                        name="code"
                        type="text"
                        placeholder="Code"
                        value={valuesVouchers.code}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDiscount">
                    <Form.Label> Discount: </Form.Label>
                    <Form.Control
                        name="discount"
                        type="text"
                        placeholder="Number Discount"
                        value={valuesVouchers.discount}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label> Description: </Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={valuesVouchers.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDateStart">
                    <Form.Label> Date Start: </Form.Label>
                    <Form.Control
                        name="dateStart"
                        type="text"
                        placeholder="Date Start"
                        value={valuesVouchers.dateStart}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDateEnd">
                    <Form.Label> Date End: </Form.Label>
                    <Form.Control
                        name="dateEnd"
                        type="text"
                        placeholder="Date End"
                        value={valuesVouchers.dateEnd}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button onClick={saveVouchers}>
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default FormInsert_EditVouchers;