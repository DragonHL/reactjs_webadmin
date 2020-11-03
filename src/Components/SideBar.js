import React, { useState } from "react";
import '../css/Overview.css';
import '../css/Container_Body_Admin.css';
import '../css/Footer.css';

import '../js/Overview';


// library bootstrap
// https://react-bootstrap.github.io/utilities/transitions/
import Collapse from 'react-bootstrap/Collapse';


// library react-icons/bi or react-icons/fa ....
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCaretDown } from "react-icons/fa";



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
                        {/* <div className="collapse " id="collapseExample" > */}
                            <ul className="nav flex-column">
                                <li className="nav-item-vertical">
                                    <a className="nav-link-vertical active " href="/#">Edit Profile</a>
                                </li>
                                <li className="nav-item-vertical ">
                                    <a className="nav-link-vertical" href="/#">Exit</a>
                                </li>

                            </ul>
                        {/* </div> */}
                    </div>
                </Collapse>

                {/* <!-- Title dash board --> */}
                <h4 className="titleDasboard">Dasdboard</h4>

                {/* <!-- List menu dash board --> */}
                <ul className="list-menu">
                    <li>
                        <a href="./Admin Overview.html">
                            {/* <i className="fas fa-chart-pie"></i> */}
                            <p>Admin Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Customers Overview .html">
                            {/* <i className="fas fa-users"></i> */}
                            <p>Custommer Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Employees Overview.html">
                            {/* <i className="fas fa-user-tie"></i> */}
                            <p>Employee Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Kind Food.html">
                            {/* <i className="fas fa-concierge-bell"></i> */}
                            <p>Kind Food</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Order.html">
                            {/* <i className="far fa-list-alt"></i> */}
                            <p>Order</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Track Order.html">
                            {/* <i className="fas fa-truck"></i> */}
                            <p>Track Order</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Discount.html">
                            {/* <i className="fas fa-user-tag"></i> */}
                            <p>Discount</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Rating.html">
                            {/* <i className="far fa-star"></i> */}
                            <p>Rating</p>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default SideBar;