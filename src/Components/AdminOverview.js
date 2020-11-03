
import '../css/Overview.css';
import '../css/Container_Body_Admin.css';
import '../css/Footer.css';
import Header from './Header';
import SideBar from './SideBar';
import ContentAdminOverview from './ContentAdminOverview';
import Footer from './Footer';

function AdminOverview() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContentAdminOverview></ContentAdminOverview>
            <Footer></Footer>
        </div>
    );
}

export default AdminOverview;