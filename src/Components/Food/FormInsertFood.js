
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import { storage } from "../../FirebaseCofig/Firebase";

import FoodService from "../../Service/FoodService"

import { useHistory } from "react-router-dom";



function FormInsertFood(props) {

    // console.log("---------------------table food-----------------------")
    // console.log(props.location.state)
    // console.log("---------------------name-----------------------")
    // console.log(props.location.state.name)
    // console.log("-----------------------id---------------------")
    // console.log(props.location.state.key)


    // const [keyKindFood, setValueKeyKindFood] = useState (props.location.state.key);
    // const [nameKindFood, setValueNameKindFood] = useState (props.location.state.name);

    // const [nameKindFood, setValueNameKindFood] = useState(props.nameKindFood);
    const history = useHistory();

    const initialFieldValues = {
        name: '',
        information: '',
        nameKindFood: props.location.state.nameKindFood,
        imageUrl: ''
    }

    const [valuesFood, setValueFood] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);

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
                                name: valuesFood.name,
                                information: valuesFood.information,
                                nameKindFood: valuesFood.nameKindFood,
                                imageUrl: url,
                                status: 0
                            } : {
                                name: valuesFood.name,
                                information: valuesFood.information,
                                nameKindFood: valuesFood.nameKindFood,
                                imageUrl: null,
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

                        })
                }
            )
        } else {
            var data = {
                name: valuesFood.name,
                information: valuesFood.information,
                nameKindFood: valuesFood.nameKindFood,
                imageUrl: null,
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

                <Form.Group controlId="formKindFood">
                    <Form.Label>Kind Food: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Kind Food"
                        value={initialFieldValues.nameKindFood}
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