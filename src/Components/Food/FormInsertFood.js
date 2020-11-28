
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import { storage } from "../../FirebaseCofig/Firebase";

import FoodService from "../../Service/FoodService"


import { useHistory } from "react-router-dom";



function FormInsertFood(props) {

    // console.log("-----------------------id---------------------")
    // console.log(props.location.state.keyKindFood)


    const initialFieldValues = {
        name: '',
        information: '',
        nameKindFood: props.location.state.nameKindFood,
        kindFoodID: props.location.state.keyKindFood,
        price: '',
        imageUrl: '',
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
                                nameFood: valuesFood.name,
                                informationFood: valuesFood.information,
                                // nameKindFood: valuesFood.nameKindFood,
                                kindFoodID: props.location.state.keyKindFood,
                                price: valuesFood.price,
                                imagesFood: url,
                                status: 0
                            } : {
                                nameFood: valuesFood.name,
                                informationFood: valuesFood.information,
                                kindFoodID: props.location.state.keyKindFood,
                                imagesFood: null,
                                price: valuesFood.price,
                                status: 0
                            };

                            FoodService.create(data)
                                .then(() => {
                                    setSubmitted(true);
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
                nameFood: valuesFood.name,
                informationFood: valuesFood.information,
                kindFoodID: props.location.state.keyKindFood,
                imagesFood: null,
                price: valuesFood.price,
                status: 0
            };

            FoodService.create(data)
                .then(() => {
                    setSubmitted(true);
                    history.push('/webadmin/food', { nameKindFood: props.location.state.nameKindFood })
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
            <h2 className="titleform">Form Add Food</h2>
            <Form onSubmit={hanleFormSubmit}>

                <Form.Group controlId="formName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Name Food"
                        value={valuesFood.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formInformation">
                    <Form.Label>Information: </Form.Label>
                    <Form.Control
                        name="information"
                        type="text"
                        placeholder="Information"
                        value={valuesFood.information}
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
                        value={valuesFood.nameKindFood}
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

export default FormInsertFood;