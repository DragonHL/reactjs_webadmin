
import '../css/Overview.css';
function AdminOverview(){
    return(
        <div class="header">

        <div class="logo-header">
            <p class="titleLogoHeader1">My</p>
            <p class="titleLogoHeader2">Restaurant</p>
        </div>

        <div className="navbar-header">

            <div className="iconMenu">
                <i className="fas fa-bars"></i>
            </div>
            {/* <!-- Search form --> */}
            <div className="search">
                <input className="form-control iSearch" type="text" placeholder="Search..." aria-label="Search"/>
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

    );
}

export default AdminOverview;