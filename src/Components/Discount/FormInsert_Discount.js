
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DiscountService from "../../Service/DiscountService"

function FormInsert_EditDiscount() {

    const initialFieldValues = {
        code: '',
        discount: '',
        description: '',
        dateStart: '',
        dateEnd: '',
        status: ''
    }

    const [valuesDiscounts, setValuesDiscount] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValuesDiscount({ ...valuesDiscounts, [name]: value })
    }

    const saveDiscount = () => {
        var data = {
            code: valuesDiscounts.code,
            discount: valuesDiscounts.discount,
            description: valuesDiscounts.description,
            dateStart: valuesDiscounts.dateStart,
            dateEnd: valuesDiscounts.dateEnd,
            status: 0
        };

        DiscountService.create(data)
            .then(() => {
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const hanleFormSubmit = e => {
        setValuesDiscount(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">

            <h2 className="titleform">Form Add Discount</h2>

            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formCode">
                    <Form.Label> Code: </Form.Label>
                    <Form.Control
                        name="code"
                        type="text"
                        placeholder="Code"
                        value={valuesDiscounts.code}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDiscount">
                    <Form.Label> Discount: </Form.Label>
                    <Form.Control
                        name="discount"
                        type="text"
                        placeholder="Number Discount"
                        value={valuesDiscounts.discount}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label> Description: </Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={valuesDiscounts.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDateStart">
                    <Form.Label> Date Start: </Form.Label>
                    <Form.Control
                        name="dateStart"
                        type="text"
                        placeholder="Date Start"
                        value={valuesDiscounts.dateStart}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDateEnd">
                    <Form.Label> Date End: </Form.Label>
                    <Form.Control
                        name="dateEnd"
                        type="text"
                        placeholder="Date End"
                        value={valuesDiscounts.dateEnd}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button onClick={saveDiscount}>
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default FormInsert_EditDiscount;