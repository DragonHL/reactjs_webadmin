
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';

import { storage } from "../../FirebaseCofig/Firebase";

import React, { useState } from 'react';

import ServiceKindFood from "../../Service/KindFoodService";

import { useHistory } from "react-router-dom";

function FormInsert_KindFood() {

    const initialFieldValues = {
        nameKindFood: '',
        quantity: '',
        imagesKindFood: '',

    }

    const [valuesKindFood, setValueKindFood] = useState (initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);
    const history = useHistory();

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValueKindFood({ ...valuesKindFood, [name]: value })
    }

    const handleChange = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const saveKindFood = () => {
        if (image !== null) {
        const uploadTask = storage.ref(`imagesKindFood/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("imagesKindFood")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        var data = (url !== null) ? {
                            nameKindFood: valuesKindFood.nameKindFood,
                            quantity: valuesKindFood.quantity,
                            imagesKindFood: url,
                            status: 0
                        } : {
                            name: valuesKindFood.nameKindFood,
                            quantity: valuesKindFood.quantity,
                            imagesKindFood: null,
                            status: 0
                        };

                        ServiceKindFood.create(data)
                            .then(() => {
                                setSubmitted(true);
                                history.push(`/webadmin/kindFood`);
                            })
                            .catch(e => {
                                console.log(e);
                            });

                    })
            }
        )
        } else {
            var data = {
                nameKindFood: valuesKindFood.nameKindFood,
                quantity: valuesKindFood.quantity,
                imagesKindFood: null,
                status: 0
            };

            ServiceKindFood.create(data)
                .then(() => {
                    setSubmitted(true);
                    history.push(`/webadmin/kindFood`);
                })
                .catch(e => {
                    console.log(e);
                });

        }
    }

    const hanleFormSubmit = e => {
        setValueKindFood(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">
            <h2 className="titleform">Form Add Kind Food</h2>
            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formName">
                    <Form.Label> Name Kind Food: </Form.Label>
                    <Form.Control 
                    name="nameKindFood"
                    type="text" 
                    placeholder="Name Kind Food"
                    value={valuesKindFood.nameKindFood}
                    onChange={handleInputChange}
                    />
                </Form.Group>

                {/* <Form.Group controlId="formQuantity">
                    <Form.Label> Quantity: </Form.Label>
                    <Form.Control
                    name="quantity"
                    value={valuesKindFood.quantity}
                    onChange={handleInputChange} 
                    type="text" 
                    placeholder="Quantity" />
                </Form.Group> */}

                <Form.Group>
                    <Form.File 
                    id="fileImageKindFood" 
                    label="Choose Image:"
                    onChange={handleChange} 
                    />
                </Form.Group>

                <Button 
                onClick={saveKindFood}
                // variant="primary" 
                // type="submit"
                >
                    Submit
                </Button>
            </Form>


        </div>
    );
}

export default FormInsert_KindFood;