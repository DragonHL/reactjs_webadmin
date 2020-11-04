
import '../css/Overview.css';
import '../css/Container_Body_Admin.css';
import '../css/Footer.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerAdminOverview from './ContainerAdminOverview';
import Footer from './Footer';

function AdminOverview() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerAdminOverview></ContainerAdminOverview>
            <Footer></Footer>
        </div>
    );
}

export default AdminOverview;