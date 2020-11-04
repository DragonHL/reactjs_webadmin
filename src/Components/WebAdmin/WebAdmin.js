
import '../../css/Overview.css';
import '../../css/Footer.css';


import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import RouterURL from '../Router/RouterURL';
import Footer from '../Footer/Footer';

import {BrowserRouter as Router} from "react-router-dom";


function WebAdmin() {
    return (
        <Router>
            <div className="body">
                <Header></Header>
                <SideBar></SideBar>
                <div className="container-body">
                    <RouterURL></RouterURL>
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default WebAdmin;