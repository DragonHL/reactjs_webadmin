
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';

import { storage } from "../../FirebaseCofig/Firebase";

import React, {useState } from 'react';

import ServiceKindFood from "../../Service/KindFoodService"

function FormInsert_EditKindFood(props) {

    const initialFieldValues = {
        name: props.location.state.nameKindFood,
        quantity: props.location.state.quantity,
        imageUrl: props.location.state.imagesUrl,
        key: props.location.state.key
    }

    const [valuesKindFood, setValueKindFood] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValueKindFood({ ...valuesKindFood, [name]: value })
    }

    const handleChange = e => {
        if (e.target.files[0]) {
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
                                name: valuesKindFood.name,
                                quantity: valuesKindFood.quantity,
                                imageUrl: url
                            } : {
                                    name: valuesKindFood.name,
                                    quantity: valuesKindFood.quantity,
                                };

                            ServiceKindFood.update(valuesKindFood.key, data)
                                .then(() => {
                                    setSubmitted(true);
                                    console.log("success!!!")
                                })
                                .catch(e => {
                                    console.log(e);
                                });

                        })
                }
            )
        } else {
            var data = {
                name: valuesKindFood.name,
                quantity: valuesKindFood.quantity,
            };

            ServiceKindFood.update(valuesKindFood.key, data)
                .then(() => {
                    setSubmitted(true);
                    console.log("success!!!")
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
            <h2 className="titleform">Form Edit Kind Food</h2>
            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formName">
                    <Form.Label> Name Kind Food: </Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Name Kind Food"
                        value={valuesKindFood.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label> Quantity: </Form.Label>
                    <Form.Control
                        name="quantity"
                        value={valuesKindFood.quantity}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Quantity" />
                </Form.Group>

                <Form.Group>
                    <Form.File
                        id="fileImageKindFood"
                        label="Choose Image:"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button
                    onClick={saveKindFood}
                >
                    Submit
                </Button>
            </Form>


        </div>
    );
}

export default FormInsert_EditKindFood;