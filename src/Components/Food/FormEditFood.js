
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import { storage } from "../../FirebaseCofig/Firebase";

import FoodService from "../../Service/FoodService"

import { useHistory } from "react-router-dom";

function FormEditFood(props) {

    // console.log("---------------------table food-----------------------")
    // console.log(props.location.state) // get param on address web
    // console.log(props.location.state.price) 

    const initialFieldValues = {
        nameFood: props.location.state.nameFood,
        informationFood: props.location.state.informationFood,
        nameKindFood: props.location.state.nameKindFood,
        imagesFood: props.location.state.imagesFood,
        price: props.location.state.price,
        key: props.location.state.key
    }

    const [valuesFood, setValueFood] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);
    const history = useHistory();

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValueFood({ ...valuesFood, [name]: value })
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const saveKindFood = () => {
        if (image !== null) {
            const uploadTask = storage.ref(`imagesFood/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref("imagesFood")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {

                            var data = (url !== null) ? {
                                nameFood: valuesFood.nameFood,
                                informationFood: valuesFood.informationFood,
                                nameKindFood: valuesFood.nameKindFood,
                                price: valuesFood.price,
                                imagesFood: url
                            } : {
                                    nameFood: valuesFood.nameFood,
                                    informationFood: valuesFood.informationFood,
                                    nameKindFood: valuesFood.nameKindFood,
                                    price: valuesFood.price,
                                };

                            FoodService.update(valuesFood.key, data)
                                .then(() => {
                                    setSubmitted(true);
                                    console.log("success!!!")
                                    history.push('/webadmin/food', { keyKindFood: props.location.state.keyKindFood, nameKindFood: props.location.state.nameKindFood })
                                })
                                .catch(e => {
                                    console.log(e);
                                });

                        })
                }
            )
        } else {
            var data = {
                nameFood: valuesFood.nameFood,
                informationFood: valuesFood.informationFood,
                nameKindFood: valuesFood.nameKindFood,
                price: valuesFood.price,
            };

            FoodService.update(valuesFood.key, data)
                .then(() => {
                    setSubmitted(true);
                    console.log("success!!!")
                    history.push('/webadmin/food', { keyKindFood: props.location.state.keyKindFood, nameKindFood: props.location.state.nameKindFood })
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    const hanleFormSubmit = e => {
        setValueFood(initialFieldValues);
        setSubmitted(false);
    }


    return (
        <div className="sub-container">
            <h2 className="titleform">Form Edit Food</h2>
            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        name="nameFood"
                        type="text"
                        placeholder="Name Food"
                        value={valuesFood.nameFood}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formInformation">
                    <Form.Label>Information: </Form.Label>
                    <Form.Control
                        name="informationFood"
                        type="text"
                        placeholder="Information"
                        value={valuesFood.informationFood}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPriceFood">
                    <Form.Label>Price Food: </Form.Label>
                    <Form.Control
                        name="price"
                        type="text"
                        placeholder="Price Food"
                        value={valuesFood.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formKindFood">
                    <Form.Label>Kind Food: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Kind Food"
                        value={props.location.state.nameKindFood}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File
                        id="fileImageKindFood"
                        label="Choose Image:"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button onClick={saveKindFood}>
                    Submit
                </Button>
            </Form>


        </div>
    );
}

export default FormEditFood;