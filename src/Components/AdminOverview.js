
import '../css/Overview.css';
import '../css/Container_Body_Admin.css';
import '../css/Footer.css';


// <!-- Use fontawesome -->
<script src="https://kit.fontawesome.com/f35a773c29.js" crossorigin="anonymous"></script>

// <!-- font google -->
// @import url('https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Roboto:wght@100&display=swap&Mogra&display=swap&Stalemate&display=swap')

    // <link
    //     href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Roboto:wght@100&display=swap&Mogra&display=swap&Stalemate&display=swap"
    //     rel="stylesheet"></link>

function AdminOverview() {
    return (
        <div className="body">

            <div className="header">

                <div className="logo-header">
                    <p className="titleLogoHeader1">My</p>
                    <p className="titleLogoHeader2">Restaurant</p>
                </div>

                <div className="navbar-header">

                    <div className="iconMenu">
                        <i className="fas fa-bars"></i>
                    </div>
                    {/* <!-- Search form --> */}
                    <div className="search">
                        <input className="form-control iSearch" type="text" placeholder="Search..." aria-label="Search" />
                        <i className="fas fa-search"></i>
                    </div>

                    {/* <!-- information --> */}
                    <div className="informationAdmin">

                        <p className="nameAdminHeader">Bill Gates</p>

                        <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
                            alt="Image Admin" width="37px" height="37px" className="imageAdminHeader" />

                    </div>
                </div>
            </div>


            {/* side-bar */}
            <div className="side-bar">
                <div className="informationAdmin-SideBar">
                    <a className="informationA" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">

                        <img src="https://image.thanhnien.vn/1080/uploaded/nthanhluan/2020_04_18/billgates_dlid.jpg"
                            alt="Image Admin" width="80px" height="80px" className="imageAdminSideBar" />

                        <p className="nameAminSideBar">Bill Gates </p>
                        <p className="role">Administrator </p>
                        <i className="fas fa-caret-down"></i>
                    </a>
                </div>

                {/* <!-- menu vertical edit profile and exit website --> */}
                <div className="collapse" id="collapseExample">
                    <ul className="nav flex-column">
                        <li className="nav-item-vertical">
                            <a className="nav-link-vertical active " href="#">Edit Profile</a>
                        </li>
                        <li className="nav-item-vertical ">
                            <a className="nav-link-vertical" href="#">Exit</a>
                        </li>

                    </ul>
                </div>

                {/* <!-- Title dash board --> */}
                <h4 className="titleDasboard">Dasdboard</h4>

                {/* <!-- List menu dash board --> */}
                <ul className="list-menu">
                    <li>
                        <a href="./Admin Overview.html">
                            <i className="fas fa-chart-pie"></i>
                            <p>Admin Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Customers Overview .html">
                            <i className="fas fa-users"></i>
                            <p>Custommer Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Employees Overview.html">
                            <i className="fas fa-user-tie"></i>
                            <p>Employee Overview</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Kind Food.html">
                            <i className="fas fa-concierge-bell"></i>
                            <p>Kind Food</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Order.html">
                            <i className="far fa-list-alt"></i>
                            <p>Order</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Track Order.html">
                            <i className="fas fa-truck"></i>
                            <p>Track Order</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Discount.html">
                            <i className="fas fa-user-tag"></i>
                            <p>Discount</p>
                        </a>
                    </li>
                    <li>
                        <a href="./Rating.html">
                            <i className="far fa-star"></i>
                            <p>Rating</p>
                        </a>
                    </li>
                </ul>
            </div>


            {/* content */}
            <div className="container-body">
                <div className="sub-container">
                    <h1 className="titleTable">Admin Overview</h1>

                    <div className="statistical_month_year">
                        <div className="statistical_month">
                            <div className="title_statistical">
                                <p className="Month_Year">Month</p>
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <p className="money">654789000</p>
                        </div>

                        <div className="statistical_year">
                            <div className="title_statistical">
                                <p className="Month_Year">Year</p>
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <p className="money">654789000</p>
                        </div>
                    </div>

                    <div className="chart">

                        <div id="curve_chart"></div>

                        <div id="piechart_3d"></div>

                    </div>


                </div>
            </div>

            <div className="footer">


            </div>

        </div>
    );
}

export default AdminOverview;