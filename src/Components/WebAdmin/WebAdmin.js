
import '../../css/Overview.css';
import '../../css/Footer.css';

import React from "react";
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import RouterURL from '../Router/RouterURL';
import Footer from '../Footer/Footer';




function WebAdmin() {


    return (
        <div >
            <Header ></Header>
            <SideBar ></SideBar>
            <div className="container-body">
                <RouterURL></RouterURL>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default WebAdmin;