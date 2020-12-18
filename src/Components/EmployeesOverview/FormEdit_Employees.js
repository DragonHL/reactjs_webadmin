

import { storage } from "../../FirebaseCofig/Firebase";

import '../../css/Overview.css';

import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import ServiceEmployee from "../../Service/EmployeeService"

import { useHistory } from "react-router-dom";

import moment from 'moment'


const FormEdit_Employees = (props) => {

    const initialFieldValues = {
        name: props.location.state.name,
        phone: props.location.state.phone,
        address: props.location.state.address,
        birthday: moment(props.location.state.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        startWork: moment(props.location.state.startWork, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        endWork: moment(props.location.state.endWork, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        role: props.location.state.role,
        imageUrl: props.location.state.imageUrl,
        key: props.location.state.key
    }

    const [valuesEmployees, setValuesEmployees] = useState(initialFieldValues);
    const [submitted, setSubmitted] = useState(false);
    const [image, setImage] = useState(null);
    const history = useHistory();

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
        if (image !== null) {
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
                            var data = (url !== null) ? {
                                name: valuesEmployees.name,
                                phone: valuesEmployees.phone,
                                address: valuesEmployees.address,
                                birthday: moment(valuesEmployees.birthday).format('DD-MM-YYYY'),
                                startWork: moment(valuesEmployees.startWork).format('DD-MM-YYYY'),
                                endWork: moment(valuesEmployees.endWork).format('DD-MM-YYYY'),
                                role: valuesEmployees.role,
                                imageUrl: url
                            } : {
                                    name: valuesEmployees.name,
                                    phone: valuesEmployees.phone,
                                    address: valuesEmployees.address,
                                    birthday: moment(valuesEmployees.birthday).format('DD-MM-YYYY'),
                                    startWork: moment(valuesEmployees.startWork).format('DD-MM-YYYY'),
                                    endWork: moment(valuesEmployees.endWork).format('DD-MM-YYYY'),
                                    role: valuesEmployees.role
                                };

                            ServiceEmployee.update(valuesEmployees.key, data)
                                .then(() => {
                                    setSubmitted(true);
                                    console.log("Update Employee Success!!!")
                                    history.push(`/webadmin/employees`);
                                })
                                .catch(e => {
                                    console.log(e);
                                });

                        })
                }
            )
        } else {
            var data = {
                name: valuesEmployees.name,
                phone: valuesEmployees.phone,
                address: valuesEmployees.address,
                birthday: moment(valuesEmployees.birthday).format('DD-MM-YYYY'),
                startWork: moment(valuesEmployees.startWork).format('DD-MM-YYYY'),
                endWork: moment(valuesEmployees.endWork).format('DD-MM-YYYY'),
                role: valuesEmployees.role
            };

            ServiceEmployee.update(valuesEmployees.key, data)
                .then(() => {
                    setSubmitted(true);
                    console.log("Update Employee Success!!!")
                    history.push(`/webadmin/employees`);
                })
                .catch(e => {
                    console.log(e);
                });

        }
    }

    function close() {
        history.push('/webadmin/employees')
}

    const hanleFormSubmit = e => {
        setValuesEmployees(initialFieldValues);
        setSubmitted(false);
    }

    return (
        <div className="sub-container">
            <h2 className="titleform">Cập nhật thông tin nhân viên</h2>
           
            <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

                <Form.Group className="row">
                    <Form.Group controlId="formName" className=" form__long">
                        <Form.Label>Tên: </Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Name Food"
                            value={valuesEmployees.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBirthday" className="form__short">
                        <Form.Label>Ngày sinh: </Form.Label>
                        <Form.Control
                            name="birthday"
                            type="date"
                            placeholder="Birthday"
                            // value={valuesEmployees.birthday}
                            value={valuesEmployees.birthday}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row">
                    <Form.Group controlId="formAddress" className="form__long">
                        <Form.Label>Địa chỉ: </Form.Label>
                        <Form.Control
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={valuesEmployees.address}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="form__short">
                        <Form.Label>Số điện thoại: </Form.Label>
                        <Form.Control
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={valuesEmployees.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form.Group>



                <Form.Group className="row" >
                    <Form.Group controlId="formStartWork" className="form__short">
                        <Form.Label>Ngày bắt đầu làm việc: </Form.Label>
                        <Form.Control
                            name="startWork"
                            type="date"
                            placeholder="Start Work"
                            value={valuesEmployees.startWork}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEndWork" className="form__short">
                        <Form.Label>Ngày kết thúc làm việc: </Form.Label>
                        <Form.Control
                            name="endWork"
                            type="date"
                            placeholder="End Work"
                            value={valuesEmployees.endWork}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="formRole" className=" form__short" >
                    <Form.Label>Quyền: </Form.Label>
                    <Form.Control
                        name="role"
                        type="text"
                        placeholder="Role"
                        value={valuesEmployees.role}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className=" form__short fileImageAddress margin-form " >
                    <Form.Label>Chọn ảnh: </Form.Label>
                    <Form.File
                        id="fileImageAddress"
                        onChange={handleChange}
                    // label="Choose Image:" 
                    />
                </Form.Group>

                <Form.Group className="row form__button" >
                    <Button onClick={saveEmployee} className="btn-add">Đồng ý</Button>
                    <Button onClick={close} className="btn-close" >Hủy</Button>
                </Form.Group>

            </Form>
        </div>
    );
}

export default FormEdit_Employees;