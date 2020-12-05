import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";

import { useAuth } from '../../Service/LoginService'


import '../../css/Overview.css';


// library bootstrap
// https://react-bootstrap.github.io/utilities/transitions/
import Collapse from 'react-bootstrap/Collapse';


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


function SideBar ()  {
    const [open, setOpen] = useState(false);

    const { currentUser, logout } = useAuth();
    const  history  = useHistory();

    async function handleLogout(){
        // setError('')
        try{
            await logout();
            history.push('/')
        }catch{
            // setError('Failed to log out')
            console.log('Failed to log out')
        }
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
                                    <a className="nav-link-vertical active " href="/#">Edit Profile</a>
                                </li>
                                <li className="nav-item-vertical ">
                                    {/* <a className="nav-link-vertical" href="/#">Exit</a> */}
                                    <Link to="/" className="nav-link-vertical" onClick={handleLogout}>Log Out</Link>
                                </li>

                            </ul>

                        </div>
                    </Collapse>

                    {/* <!-- Title dash board --> */}
                    <h4 className="titleDasboard">Dashboard</h4>


                    {/* <!-- List menu dash board --> */}
                    <ul className="list-menu">
                        <li>
                            <Link to="/webadmin/admin" className="linkSideBar">
                                <FaChartPie className="fas fa-chart-pie i" />
                                <p>Statistical</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/user" className="linkSideBar">
                                <FaUsers className="fas fa-users i" />
                                <p>User Overview</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/employees" className="linkSideBar">
                                <FaUserTie className="fas fa-user-tie i" />
                                <p>Employee Overview</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/kindFood" className="linkSideBar">
                                <FaConciergeBell className="fas fa-concierge-bell i" />
                                <p>Kind Food</p>
                            </Link>

                        </li>
                        <li>
                            <Link to="/webadmin/order" className="linkSideBar">
                                <FaRegListAlt className="far fa-list-alt i" />
                                <p>Order</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/trackOrder" className="linkSideBar">
                                <FaTruck className="fas fa-truck i" />
                                <p>Track Order</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/vouchers" className="linkSideBar">
                                <FaUserTag className="fas fa-user-tag i" />
                                <p>Vouchers</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webadmin/rating" className="linkSideBar">
                                <GiStarsStack className="far fa-star i" />
                                <p>Rating</p>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
        
    );
}

export default SideBar;