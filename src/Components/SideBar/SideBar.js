import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from '../../Service/LoginService'

import { Form, Button, Card, Alert } from 'react-bootstrap';

import '../../css/Overview.css';


// library bootstrap
// https://react-bootstrap.github.io/utilities/transitions/
import Collapse from 'react-bootstrap/Collapse';
import Modal from "react-bootstrap/Modal";


// library react-icons/bi or react-icons/fa ....
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaCaretDown,
    FaChartPie,
    FaUsers,
    FaUserTie,
    FaConciergeBell,
    FaRegListAlt,
    FaTruck,
    FaUserTag
} from "react-icons/fa";

import { GiStarsStack } from "react-icons/gi";


function SideBar() {
    const [open, setOpen] = useState(false);

    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        // setError('')
        try {
            await logout();
            history.push('/')
        } catch {
            // setError('Failed to log out')
            console.log('Failed to log out')
        }
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const StyleModal = {
        margin: "150px 0 0 0",
        
    };

    const StyleLinkProfile = {
        textDecoration: "none",
        cursor: "pointer"
    };

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)



    const [isShow, setIsShow] = useState(false)

    async function handleSubmit(e) {
        console.log("alo")
        e.preventDefault();

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            handleClose()
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }



    return (
        // ref={}
        <div className="body" >

            {/* side-bar */}
            <div className="side-bar" >

                <div class="informationAdmin-SideBar"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <a class="informationA" data-toggle="collapse" href="#setting" role="button" aria-expanded="false"
                        aria-controls="setting">

                        <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
                            alt="imageadmin" width="80px" height="80px" class="imageAdminSideBar" />

                        <p class="nameAminSideBar">{currentUser.email} </p>
                        <p class="role">Administrator </p>
                        <FaCaretDown class="fas fa-caret-down" />
                    </a>
                </div>


                {/* <!-- menu vertical edit profile and exit website --> */}
                <Collapse in={open}>
                    <div id="example-collapse-text" >

                        <ul className="nav flex-column">
                            <li className="nav-item-vertical">
                                <a className="nav-link-vertical active link-profile" onClick={handleShow} style={StyleLinkProfile}>Đổi mật khẩu</a>
                                
                                
                                <Modal show={show} onHide={handleClose} style={StyleModal} >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Đổi mật khẩu</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body >
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group id="email" className="input_email">
                                                <Form.Control ref={emailRef} className="form_login input_email" type="email" placeholder="Email" required />
                                            </Form.Group>
                                            <Button className="w-100" type="submit" className="button_reset_pass" >
                                                Gửi
                                            </Button>
                                            <Button onClick={handleClose} className="w-100  mt-4 mb-5"  className="button_cancel">
                                                Hủy
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                    {/* <Modal.Footer> */}



                                    {/* <Button variant="secondary" onClick={handleClose}>
                                            Đóng
          </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Gửi
          </Button> */}
                                    {/* </Modal.Footer> */}
                                </Modal>
                            </li>
                            <li className="nav-item-vertical ">
                                {/* <a className="nav-link-vertical" href="/#">Exit</a> */}
                                <Link to="/" className="nav-link-vertical link-profile" onClick={handleLogout} style={StyleLinkProfile}>Đăng xuất</Link>
                            </li>

                        </ul>

                    </div>
                </Collapse>

                {/* <!-- Title dash board --> */}
                <h4 className="titleDasboard">Bảng điều khiển</h4>


                {/* <!-- List menu dash board --> */}
                <ul className="list-menu">
                    <li>
                        <Link to="/webadmin/admin" className="linkSideBar">
                            <FaChartPie className="fas fa-chart-pie i" />
                            <p>Thống kê</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/user" className="linkSideBar">
                            <FaUsers className="fas fa-users i" />
                            <p>Khách hàng</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/employees" className="linkSideBar">
                            <FaUserTie className="fas fa-user-tie i" />
                            <p>Nhân viên</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/kindFood" className="linkSideBar">
                            <FaConciergeBell className="fas fa-concierge-bell i" />
                            <p>Loại món</p>
                        </Link>

                    </li>
                    <li>
                        <Link to="/webadmin/order" className="linkSideBar">
                            <FaRegListAlt className="far fa-list-alt i" />
                            <p>Hóa đơn</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/trackOrder" className="linkSideBar">
                            <FaTruck className="fas fa-truck i" />
                            <p>Theo dõi đơn hàng</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/vouchers" className="linkSideBar">
                            <FaUserTag className="fas fa-user-tag i" />
                            <p>Giảm giá</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/webadmin/rating" className="linkSideBar">
                            <GiStarsStack className="far fa-star i" />
                            <p>Đánh giá</p>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>

    );
}

export default SideBar;