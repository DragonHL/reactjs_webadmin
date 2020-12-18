
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import VouchersService from "../../Service/VouchersService";
import { useHistory } from "react-router-dom";
import moment from 'moment';

function FormEdit_Vouchers(props) {

    const initialFieldValues = {
        code: props.location.state.code,
        discount: props.location.state.discount,
        description: props.location.state.description,
        dateStart: moment(props.location.state.dateStart, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        dateEnd: moment(props.location.state.dateEnd, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        key: props.location.state.key,
    }

    const [valuesDiscounts, setValuesDiscount] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValuesDiscount({ ...valuesDiscounts, [name]: value })
    }

    const saveDiscount = () => {
        var data = {
            code: valuesDiscounts.code,
            discount: valuesDiscounts.discount,
            description: valuesDiscounts.description,
            dateStart: moment(valuesDiscounts.dateStart).format('DD-MM-YYYY'),
            dateEnd: moment(valuesDiscounts.dateEnd).format('DD-MM-YYYY')
        };

        VouchersService.update(valuesDiscounts.key, data)
            .then(() => {
                setSubmitted(true);
                console.log("Update Vouchers Success!!")
                history.push(`/webadmin/vouchers`);
            })
            .catch(e => {
                console.log(e);
            });
    }

    function close() {
        history.push('/webadmin/vouchers')
    }

    const hanleFormSubmit = e => {
        setValuesDiscount(initialFieldValues);
        setSubmitted(false);
    }

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
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDiscount" className="form__long margin-form">
                    <Form.Label> Giảm giá: </Form.Label>
                    <Form.Control
                        name="discount"
                        type="text"
                        placeholder="Number Discount"
                        value={valuesDiscounts.discount}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription" className="form__long margin-form">
                    <Form.Label> Thông tin: </Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={valuesDiscounts.description}
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



                <Form.Group className="row form__button" >
                    <Button onClick={saveDiscount} className="btn-add">Đồng ý</Button>
                    <Button onClick={close} className="btn-close">Hủy</Button>
                </Form.Group>
            </Form>


        </div>
    );
}

export default FormEdit_Vouchers;