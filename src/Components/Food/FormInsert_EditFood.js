
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';

function FormInsert_EditKindFood() {


    return (
        <div className="sub-container">
            <h2 className="titleform">Form Add And Edit Food</h2>
            <Form>

                <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Name Food" />
                </Form.Group>

                <Form.Group controlId="formInformation">
                    <Form.Label>Information: </Form.Label>
                    <Form.Control type="text" placeholder="Information" />
                </Form.Group>

                <Form.Group controlId="formKindFood">
                    <Form.Label>Kind Food: </Form.Label>
                    <Form.Control type="text" placeholder="Kind Food" />
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