
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';

function FormInsert_EditKindFood() {


    return (
        <div className="sub-container">
            <h2 className="titleform">Form Add And Edit Kind Food</h2>
            <Form>
                <Form.Group controlId="formId">
                    <Form.Label>Id:</Form.Label>
                    <Form.Control type="text" placeholder="Id " />

                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name Kind Food: </Form.Label>
                    <Form.Control type="text" placeholder="Name Kind Food" />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control type="text" placeholder="Quantity" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="fileImageKindFood" label="Choose Image:" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    );
}

export default FormInsert_EditKindFood;