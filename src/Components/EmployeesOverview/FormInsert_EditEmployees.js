
import firebaseDB from "../../FirebaseCofig/Firebase";
import { storage } from "../../FirebaseCofig/Firebase";

import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { Component, useRef, useState } from 'react';

import ServiceEmployee from "../../Service/EmployeeService"




const FormInsert_EditEmployees = () => {

    const initialFieldValues = {
        name: '',
        phone: '',
        address: '',
        birthday: '',
        startWork: '',
        endWork: '',
        role: '',
        imageUrl: ''
    }

    const [valuesEmployees, setValuesEmployees] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValuesEmployees({ ...valuesEmployees, [name]: value })
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const saveEmployee = () => {

        const uploadTask = storage.ref(`imagesEmployees/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("imagesEmployees")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        var data = {
                            name: valuesEmployees.name,
                            phone: valuesEmployees.phone,
                            address: valuesEmployees.address,
                            birthday: valuesEmployees.birthday,
                            startWork: valuesEmployees.startWork,
                            endWork: valuesEmployees.endWork,
                            role: valuesEmployees.role,
                            imageUrl: url
                        };

                        ServiceEmployee.create(data)
                            .then(() => {
                                setSubmitted(true);
                            })
                            .catch(e => {
                                console.log(e);
                            });

                    })
            }
        )
    }

    const handleUpload = (e, obj) => {
        const uploadTask = storage.ref(`imagesEmployees/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("imagesEmployees")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    })
            }
        )



    };

    const hanleFormSubmit = e => {
        setValuesEmployees(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">
            <h2 className="titleform">Form Add And Edit Food</h2>
            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Name Food"

                        value={valuesEmployees.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control
                        name="phone"
                        type="text"
                        placeholder="Phone"

                        value={valuesEmployees.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control name="address" type="text" placeholder="Address"

                        value={valuesEmployees.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday: </Form.Label>
                    <Form.Control name="birthday" type="text" placeholder="Birthday"

                        value={valuesEmployees.birthday}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formStartWork">
                    <Form.Label>StartWork: </Form.Label>
                    <Form.Control name="startWork" type="text" placeholder="Start Work"

                        value={valuesEmployees.startWork}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEndWork">
                    <Form.Label>EndWork: </Form.Label>
                    <Form.Control name="endWork" type="text" placeholder="End Work"

                        value={valuesEmployees.endWork}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formRole">
                    <Form.Label>Role: </Form.Label>
                    <Form.Control name="role" type="text" placeholder="Role"

                        value={valuesEmployees.role}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File 
                    id="fileImageAddress" 
                    onChange={handleChange} 
                    label="Choose Image:" />
                </Form.Group>
                
                <Button onClick={saveEmployee} >
                    Submit
                </Button>
            </Form>

            {/* variant="primary" type="submit" */}
        </div>
    );
}

export default FormInsert_EditEmployees;