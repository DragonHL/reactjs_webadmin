
// // import 'font-awesome/css/font-awesome.min.css'


// import React,{Component} from 'react';

// import '../js/LibraryScript';


// import '../css/Overview.css';
// import '../css/Container_Body_Admin.css';
// import '../css/Footer.css';
// import '../css/Font_Google.css';


// // library react-icons/bi or react-icons/fa ....
// import { BiSearch } from 'react-icons/bi';
// import { GoThreeBars } from "react-icons/go";


// class test extends Component{
//     constructor() {
//         super();
//         this.state = {
//           mobileView: false,
//           showSidebar: true
//         };
//         this.updateViewState = this.updateViewState.bind(this);
//         this.toggleSideBar = this.toggleSideBar.bind(this);
//       }

//       updateViewState() {
//         if (!this.state.mobileView && document.documentElement.clientWidth < 1024) {
//           this.setState({
//             mobileView: true,
//             showSidebar: false
//           });
//         } else if (document.documentElement.clientWidth > 1024) {
//           this.setState({
//             mobileView: false,
//             showSidebar: true
//           });
//         }
//       }
//       toggleSideBar() {
//         this.setState({
//           showSidebar: !this.state.showSidebar
//         });
//       }
//       componentWillMount() {
//         this.updateViewState();
//       }
//       componentDidMount() {
//         window.addEventListener("resize", this.updateViewState);
//       }
//       componentWillUnmount() {
//         window.removeEventListener("resize", this.updateViewState);
//       }

//     render(){
//         let containerClass = 'container';
//         if (this.state.mobileView) containerClass = containerClass + ' mobileview';
//         return (
//             <div className="body">
    
//                 <div className="header">
    
//                     <div className="logo-header">
//                         <p className="titleLogoHeader1">My</p>
//                         <p className="titleLogoHeader2">Restaurant</p>
//                     </div>
    
//                     <div className="navbar-header">
//                         <div className="iconMenu">
//                             <GoThreeBars className="fas fa-bars" onClick={this.toggleSideBar}> 
                            
//                             </GoThreeBars>
//                         </div>
//                         {/* <!-- Search form --> */}
//                         <div className="search">
//                             <input className="form-control iSearch" type="text" placeholder="Search..." aria-label="Search" />
//                             <BiSearch className="fas fa-search" />
//                         </div>
    
//                         {/* <!-- information --> */}
//                         <div className="informationAdmin">
//                             <p className="nameAdminHeader">Bill Gates</p>
//                             <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
//                                 alt="Image Admin." width="37px" height="37px" className="imageAdminHeader" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Header;