
import firebaseDB  from "../../FirebaseCofig/Firebase";
import {storage } from "../../FirebaseCofig/Firebase";

import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { Component, useRef, useState } from 'react';




const FormInsert_EditEmployees = (props) => {

    const initialFieldValues = {
        id: '',
        name: '',
        phone: '',
        address: '',
        birthday: '',
        startWork: '',
        endWork: '',
        role: ''
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,[name]: value
        })
    }

    const idRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const birthdayRef = useRef();
    const startWorkRef = useRef();
    const endWorkRef = useRef();
    const roleRef = useRef();

    const [image, setImage] = useState(null);

    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e, obj) => {
        const uploadTask = storage.ref(`imagesEmployees/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            ()=>{
                storage.ref("imagesEmployees")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    console.log(url);
                })
            }
        )


        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })


        firebaseDB.ref('employees').child('contacts').push(
            obj,
            err => {
              if(err){
                console.log(err)
              }
            }
          )
          
    };

    console.log("image: ", image);
    // console.log("image Name: ", image.name);

    const hanleFormSubmit = e => {
        e.prevenDefault();
        props.addOrdit(values)
    }
   

    return (
        <div className="sub-container">
            <h2 className="titleform">Form Add And Edit Food</h2>
            <Form onSubmit={hanleFormSubmit}>
                <Form.Group controlId="formId">
                    <Form.Label>Id:</Form.Label>
                    <Form.Control ref={idRef} name="id" type="text" placeholder="Id "
                    onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control ref={nameRef} name="name" type="text" placeholder="Name Food" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control ref={phoneRef} name="phone" type="text" placeholder="Phone" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control ref={addressRef} name="address" type="text" placeholder="Address" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday: </Form.Label>
                    <Form.Control ref={birthdayRef} name="birthday" type="text" placeholder="Birthday" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formStartWork">
                    <Form.Label>StartWork: </Form.Label>
                    <Form.Control ref={startWorkRef} name="startWork" type="text" placeholder="Start Work" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEndWork">
                    <Form.Label>EndWork: </Form.Label>
                    <Form.Control ref={endWorkRef} name="endWork" type="text" placeholder="End Work" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formRole">
                    <Form.Label>Role: </Form.Label>
                    <Form.Control ref={roleRef} name="role" type="text" placeholder="Role" 
                     onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File id="fileImageAddress" onChange={handleChange} label="Choose Image:" />
                </Form.Group>
{/* onClick = {}  */}
                <Button onClick = {handleUpload} >
                    Submit
                </Button>
            </Form>

{/* variant="primary" type="submit" */}
        </div>
    );
}

export default FormInsert_EditEmployees;