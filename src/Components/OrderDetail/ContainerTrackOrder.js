import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import '../../css/Overview.css';

import '../../css/Content_Track_Order.css';

import OrderService from '../../Service/OrderService'
import UserService from '../../Service/UserService'
import { useList } from 'react-firebase-hooks/database';

function ContainerTrackOrder(props) {

    // props.orderID

    // const initialFieldValues = {
    //     idOrder: props.orderID,
    //     nameUser: props.nameUser,
    //     imageUser: props.imageUser,
    //     date: props.date,
    //     totalPrice: props.totalprice,
    //     status: props.status
    // }
    const initialFieldValues = {
        idOrder: '',
        nameUser: '',
        imageUser: '',
        date: '',
        totalPrice: '',
        status: props.status
    }

    // console.log(" props.orderID =====> ", props.orderID);
    // console.log(" props.userID =====> ", props.userID);

    const [valueTrackOrder, setValueTrackOrder] = useState(initialFieldValues);
    // const [dataOrder, loadingOrder, errorOrder] = useList(OrderService.getAll());
    const [dataOrder, loadingOrder, errorOrder] = useList(OrderService.getBillFollowBillId(props.orderID));
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState(props.status);

    const [dataUser, loadingUser, errorUser] = useList(UserService.getUserFollowUserID(props.userID));



    useEffect(() => {
        arrayOrder();
        setData();
        setData().forEach(function (item) {
            setValueTrackOrder({
                idOrder: item.idOrder,
                nameUser: item.nameUser,
                imageUser: item.imageUser,
                date: item.date,
                totalPrice: item.totalPrice,
                status: item.status
            })

        })
    }, [dataOrder,dataUser , setValueTrackOrder])



    const handleInputChange = e => {
        var { name, value } = e.target;
        setValueTrackOrder({ ...valueTrackOrder, [name]: value })
    }

    function arrayOrder() {
        var arr = dataOrder.map((item, index) => ({
            idOrder: item.val().billid,
            userID: item.val().userID,
            totalPrice: item.val().totalprice,
            date: item.val().date,
            status: item.val().status
        }));
        return arr;
    }

    function arrayUser() {
        var arr = dataUser.map((item, index) => ({
            nameUser: item.val().nameUser,
            imageUser: item.val().imageUser,
        }));
        return arr;
    }


    function setData() {
        var array = [];
        let order;
        arrayOrder().forEach(function (item) {
            arrayUser().forEach(function (user) {
                order = {
                    idOrder: item.idOrder,
                    date: item.date,
                    nameUser: user.nameUser,
                    imageUser: user.imageUser,
                    totalPrice: item.totalPrice,
                    status: item.status
                }

                array.push(order);


            })
        })
        return array;
    }

    if (valueTrackOrder.status === 0) {
        return (
            <div className="sub-container ">
                
                <h1 className="titleTable">Theo dõi đơn hàng</h1>

                <div class="search-track-order">
                    <Form className="search-order" >
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        {/* <Button className="btn btn-primary btn-track" onClick={() => search} >
                            Tìm
                    </Button> */}
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
                    <Form className="search-order" >
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        {/* <Button className="btn btn-primary btn-track" onClick={search} >
                            Track
                    </Button> */}
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

                    <Form className="search-order" >
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        {/* <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button> */}
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

                    <Form className="search-order" >
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        {/* <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button> */}
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

                    <Form className="search-order" >
                        <Form.Group id="search" className="search-trackOrder">
                            <Form.Control
                                className="form-control "
                                name="idOrder"
                                type="number"
                                placeholder="Search"
                                value={valueTrackOrder.idOrder}
                                onChange={handleInputChange} />
                        </Form.Group>
                        {/* <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button> */}
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
                    <Form className="search-order" >
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
                        {/* <Button className="btn btn-primary btn-track" onClick={search} >
                            Tìm
                    </Button> */}
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