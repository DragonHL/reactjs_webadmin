
import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';

import { storage } from "../../FirebaseCofig/Firebase";

import React, { useState } from 'react';

import ServiceKindFood from "../../Service/KindFoodService";

import { useHistory } from "react-router-dom";

function FormInsert_EditKindFood(props) {

    const initialFieldValues = {
        nameKindFood: props.location.state.nameKindFood,
        quantity: props.location.state.quantity,
        imagesKindFood: props.location.state.imagesUrl,
        key: props.location.state.key
    }

    const [valuesKindFood, setValueKindFood] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);
    const history = useHistory();

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
                                nameKindFood: valuesKindFood.nameKindFood,
                                quantity: valuesKindFood.quantity,
                                imagesKindFood: url
                            } : {
                                    nameKindFood: valuesKindFood.nameKindFood,
                                    quantity: valuesKindFood.quantity,
                                };

                            ServiceKindFood.update(valuesKindFood.key, data)
                                .then(() => {
                                    setSubmitted(true);
                                    console.log("success!!!")
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
            };

            ServiceKindFood.update(valuesKindFood.key, data)
                .then(() => {
                    setSubmitted(true);
                    console.log("success!!!")
                    history.push(`/webadmin/kindFood`);
                })
                .catch(e => {
                    console.log(e);
                });


        }
    }

    function close() {
        history.push('/webadmin/kindFood')
}

    const hanleFormSubmit = e => {
        setValueKindFood(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">
            <h2 className="titleform">Cập nhật thông tin loại món ăn</h2>
          
            <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

                <Form.Group controlId="formName" className=" form__long">
                    <Form.Label> Tên loại món: </Form.Label>
                    <Form.Control
                        name="nameKindFood"
                        type="text"
                        placeholder="Name Kind Food"
                        value={valuesKindFood.nameKindFood}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className=" form__short fileImageAddress margin-form" >
                    <Form.Label>Chọn ảnh: </Form.Label>
                    <Form.File
                        id="fileImageAddress"
                        onChange={handleChange}
                    // label="Choose Image:" 
                    />
                </Form.Group>

                <Form.Group className="row form__button" >
                    <Button onClick={saveKindFood} className="btn-add">Đồng ý</Button>
                    <Button onClick={close} className="btn-close" >Hủy</Button>
                </Form.Group>

            </Form>


        </div>
    );
}

export default FormInsert_EditKindFood;