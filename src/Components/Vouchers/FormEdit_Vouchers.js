
import '../../css/Overview.css';
import '../../css/Form_Add.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import VouchersService from "../../Service/VouchersService";
import { useHistory } from "react-router-dom";

function FormEdit_Vouchers(props) {

    const initialFieldValues = {
        code: props.location.state.code,
        discount: props.location.state.discount,
        description: props.location.state.description,
        dateStart: props.location.state.dateStart,
        dateEnd: props.location.state.dateEnd,
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
            dateStart: valuesDiscounts.dateStart,
            dateEnd: valuesDiscounts.dateEnd
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

    const hanleFormSubmit = e => {
        setValuesDiscount(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">

            <h2 className="titleform">Form Edit Vouchers</h2>

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

export default FormEdit_Vouchers;