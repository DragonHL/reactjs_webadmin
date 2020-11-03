
import React,{Component} from 'react';




import '../css/Overview.css';
import '../css/Container_Body_Admin.css';
import '../css/Footer.css';
import '../css/Font_Google.css';


// library react-icons/bi or react-icons/fa ....
import { BiSearch } from 'react-icons/bi';
// import { GoThreeBars } from "react-icons/go";


class Header extends Component{
    
    render(){
        return (
            <div className="body">
    
                <div className="header">
    
                    <div className="logo-header">
                        <p className="titleLogoHeader1">My</p>
                        <p className="titleLogoHeader2">Restaurant</p>
                    </div>
    
                    <div className="navbar-header">
                        {/* <div className="iconMenu">
                            <GoThreeBars className="fas fa-bars"/> 

                        </div> */}
                        {/* <!-- Search form --> */}
                        <div className="search">
                            <input className="form-control iSearch" type="text" placeholder="Search..." aria-label="Search" />
                            <BiSearch className="fas fa-search" />
                        </div>
    
                        {/* <!-- information --> */}
                        <div className="informationAdmin">
                            <p className="nameAdminHeader">Bill Gates</p>
                            <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
                                alt="imageadmin" width="37px" height="37px" className="imageAdminHeader" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;




