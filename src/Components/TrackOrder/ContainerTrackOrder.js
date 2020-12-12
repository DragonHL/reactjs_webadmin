import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import '../../css/Overview.css';

import '../../css/Content_Track_Order.css';

import OrderService from '../../Service/OrderService'
import UserService from '../../Service/UserService'
import { useList } from 'react-firebase-hooks/database';

function ContainerTrackOrder() {

    const initialFieldValues = {
        idOrder: '',
        nameUser: '',
        imageUser: '',
        date: '',
        totalPrice: '',
        status: ''
    }



    const [valueTrackOrder, setValueTrackOrder] = useState(initialFieldValues);
    const [dataOrder, loadingOrder, errorOrder] = useList(OrderService.getAll());
    const [submitted, setSubmitted] = useState(false);

    const [dataUser, loadingUser, errorUser] = useList(UserService.getAllFollowStatus(0));

    useEffect(() => {
        search();
    }, [valueTrackOrder])


    const handleInputChange = e => {
        var { name, value } = e.target;
        setValueTrackOrder({ ...valueTrackOrder, [name]: value })
    }

    var arrayOrder = dataOrder.map((dataO, index) => ({
        billID: dataO.val().billid,
        userID: dataO.val().userID,
        totalPrice: dataO.val().totalprice,
        date: dataO.val().date,
        status: dataO.val().status
    }));


    var search = () => {

        // if (valueTrackOrder.idOrder !== '') {
        var arrTrackOrder = [];

        arrayOrder.forEach(function (currentValue) {
            // var check = false;
            if (parseFloat(valueTrackOrder.idOrder) === currentValue.billID) {
                // check = true;
                arrTrackOrder.push(currentValue)
            }
            // console.log("check =====> ", check);
        })


        // console.log("arrTrackOrder =====> ", arrTrackOrder);

        arrTrackOrder.forEach(function (item) {

            dataUser.forEach(function (user) {
                if (user.val().userID === item.userID) {
                    //   nameU = user.val().nameUser;
                    setValueTrackOrder({
                        idOrder: item.billID,
                        date: item.date,
                        nameUser: user.val().nameUser,
                        imageUser: user.val().imageUser,
                        totalPrice: item.totalPrice,
                        status: item.status
                    })
                }
            })
        })

    }

    const hanleFormSubmit = e => {
        setValueTrackOrder(initialFieldValues);
        setSubmitted(false);
    };

    if (valueTrackOrder.status === 0) {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">
                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li class="is-active">Đặt hàng</li>
                                <li>Chờ xử lý</li>
                                <li>Chuẩn bị</li>
                                <li>Giao</li>
                                <li>Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Hóa đơn- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order bg-warning">Đặt hàng</p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Ngày</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li class="is-active">Đặt hàng</li>
                                    <li>Chờ xử lý</li>
                                    <li>Chuẩn bị</li>
                                    <li>Giao</li>
                                    <li>Nhận</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else if (valueTrackOrder.status === 1) {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">
                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Track
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li class="is-active">Đặt hàng</li>
                                <li class="is-active">Chờ xử lý</li>
                                <li>Chuẩn bị</li>
                                <li>Giao</li>
                                <li>Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Hóa đơn- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order bg-secondary" >Chờ xử lý</p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Ngày</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>

                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li class="is-active">Đặt hàng</li>
                                    <li class="is-active">Chờ xử lý</li>
                                    <li>Chuẩn bị</li>
                                    <li>Giao</li>
                                    <li>Nhận</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else if (valueTrackOrder.status === 2) {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">

                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li class="is-active">Đặt hàng</li>
                                <li class="is-active">Chờ xử lý</li>
                                <li class="is-active">Chuẩn bị</li>
                                <li>Giao</li>
                                <li>Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Hóa đơn- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order bg-info">Chuẩn bị</p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Ngày</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>

                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li class="is-active">Đặt hàng</li>
                                    <li class="is-active">Chờ xử lý</li>
                                    <li class="is-active">Chuẩn bị</li>
                                    <li>Giao</li>
                                    <li>Nhận</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else if (valueTrackOrder.status === 3) {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">

                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li class="is-active">Đặt hàng</li>
                                <li class="is-active">Chờ xử lý</li>
                                <li class="is-active">Chuẩn bị</li>
                                <li class="is-active">Giao</li>
                                <li>Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Hóa đơn- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order bg-primary">Giao</p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Ngày</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>

                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li class="is-active">Ordered </li>
                                    <li class="is-active">Pending</li>
                                    <li class="is-active">Preparing</li>
                                    <li class="is-active">Giao</li>
                                    <li >Received</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else if (valueTrackOrder.status === 4) {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">

                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li class="is-active">Đặt hàng </li>
                                <li class="is-active">Chờ sử lý</li>
                                <li class="is-active">Chuẩn bị</li>
                                <li class="is-active">Giao</li>
                                <li class="is-active">Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Hóa đơn- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order bg-success">Nhận</p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Ngày</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>

                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li class="is-active">Đặt hàng </li>
                                    <li class="is-active">Chờ sử lý</li>
                                    <li class="is-active">Chuẩn bị</li>
                                    <li class="is-active">Giao</li>
                                    <li class="is-active">Nhận</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div className="sub-container">

                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">
                    {/* <h5>Track Order</h5> */}
                    <Form className="search-order" onSubmit={hanleFormSubmit}>
                        {/* <Form.Label>Track Order</Form.Label> */}
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button>
                    </Form>

                    <div class="track-order">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li>Đặt hàng</li>
                                <li>Chờ sử lý</li>
                                <li>Chuẩn bị</li>
                                <li>Giao</li>
                                <li>Nhận</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="information-search-order">
                    <div class="information-order">
                        <div class="title-infromation-search">
                            <h4>Khách hàng- {valueTrackOrder.idOrder}</h4>
                            <p class="text-value-track-order"></p>
                        </div>
                        <div class="body-information-search">
                            <div class="name-user">
                                <div class="image-user">
                                    <img src={valueTrackOrder.imageUser}
                                        alt="" />
                                </div>
                                <div class="title-user">
                                    <p class="title-value-search ">Tên khách hàng</p>
                                    <p class="text-value-search ">{valueTrackOrder.nameUser}</p>
                                </div>
                            </div>
                            <div class="order-total">
                                <div class="icon-order-total">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="order-total-user">
                                    <p class="title-value-search ">Tổng</p>
                                    <p class="text-value-search ">{valueTrackOrder.totalPrice}</p>
                                </div>
                            </div>

                            <div class="date-order">
                                <div class="icon-date-order">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="date-order-user">
                                    <p class="title-value-search ">Date</p>
                                    <p class="text-value-search ">{valueTrackOrder.date}</p>
                                </div>
                            </div>
                        </div>

                        <div class="track-order track-order-information">
                            <div class="steps">
                                <ul class="list-unstyled multi-steps">
                                    <li>Đặt hàng</li>
                                    <li>Chờ sử lý</li>
                                    <li>Chuẩn bị</li>
                                    <li>Giao</li>
                                    <li>Nhận</li>
                                </ul>
                            </div>
                        </div>
                        {/* ) : (

                    ) */}

                    </div>
                </div>

            </div>
        );
    }

}

export default ContainerTrackOrder;