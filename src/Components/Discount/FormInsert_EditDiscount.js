
import '../../css/Overview.css';
import '../../css/Form_Add.css';

import { Form, Button } from 'react-bootstrap';

function FormInsert_EditDiscount() {
    return (
        <div className="sub-container">
           
              <h2 className="titleform">Form Add And Edit Discount</h2>  

            <Form>
                
                <Form.Group controlId="formId">
                    <Form.Label>Id:</Form.Label>
                    <Form.Control type="text" placeholder="Id " />

                </Form.Group>

                <Form.Group controlId="formCode">
                    <Form.Label>Code: </Form.Label>
                    <Form.Control type="text" placeholder="Code" />
                </Form.Group>

                <Form.Group controlId="formDiscount">
                    <Form.Label>Discount: </Form.Label>
                    <Form.Control type="text" placeholder="Number Discount" />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                </Form.Group>

                <Form.Group controlId="formDateStart">
                    <Form.Label>Date Start: </Form.Label>
                    <Form.Control type="text" placeholder="Date Start" />
                </Form.Group>

                <Form.Group controlId="formDateEnd">
                    <Form.Label>Date End: </Form.Label>
                    <Form.Control type="text" placeholder="Date End" />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    );
}

export default FormInsert_EditDiscount;