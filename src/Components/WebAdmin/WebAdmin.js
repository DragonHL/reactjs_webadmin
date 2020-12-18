
import '../../css/Overview.css';
import '../../css/Footer.css';

// import React from "react";
import React, { useState } from "react";
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import RouterURL from '../Router/RouterURL';
import Footer from '../Footer/Footer';




function WebAdmin() {
    const [openSideBar, setOpenSideBar] = useState(false);
    // console.log("webadmin =======>", openSideBar)

    const styleContainer = {
        width:"82%"
    };
    if(openSideBar){
        
        styleContainer.width="82%"
    }else {
        styleContainer.width="100%"
    }
    return (
        < >
            <Header openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}></Header>
            <SideBar openSideBar={openSideBar}></SideBar>
            <div className="container-body" style={styleContainer}>
                <RouterURL></RouterURL>
            </div>
            <Footer></Footer>
        </>
    );
}

export default WebAdmin;