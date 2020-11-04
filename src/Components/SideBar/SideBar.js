import React, { useState } from "react";
import {Link} from "react-router-dom";

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


function SideBar() {
    const [open, setOpen] = useState(false);
    return (
        
            <div className="body">

                {/* side-bar */}
                <div className="side-bar">

                    <div class="informationAdmin-SideBar"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <a class="informationA" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                            aria-controls="collapseExample">

                            <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
                                alt="imageadmin" width="80px" height="80px" class="imageAdminSideBar" />

                            <p class="nameAminSideBar">Bill Gates </p>
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
                                    <a className="nav-link-vertical" href="/#">Exit</a>
                                </li>

                            </ul>

                        </div>
                    </Collapse>

                    {/* <!-- Title dash board --> */}
                    <h4 className="titleDasboard">Dasdboard</h4>


                    {/* <!-- List menu dash board --> */}
                    <ul className="list-menu">
                        <li>
                            <Link to="/" className="linkSideBar">
                                <FaChartPie className="fas fa-chart-pie i" />
                                <p>Admin Overview</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/customer" className="linkSideBar">
                                <FaUsers className="fas fa-users i" />
                                <p>Custommer Overview</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/employees" className="linkSideBar">
                                <FaUserTie className="fas fa-user-tie i" />
                                <p>Employee Overview</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/kindFood" className="linkSideBar">
                                <FaConciergeBell className="fas fa-concierge-bell i" />
                                <p>Kind Food</p>
                            </Link>

                        </li>
                        <li>
                            <Link to="/order" className="linkSideBar">
                                <FaRegListAlt className="far fa-list-alt i" />
                                <p>Order</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/trackOrder" className="linkSideBar">
                                <FaTruck className="fas fa-truck i" />
                                <p>Track Order</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/discount" className="linkSideBar">
                                <FaUserTag className="fas fa-user-tag i" />
                                <p>Discount</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/rating" className="linkSideBar">
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