
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerCustomersOverview from './ContainerCustomersOverview';
import Footer from './Footer';

function CustomersOverview() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerCustomersOverview></ContainerCustomersOverview>
            <Footer></Footer>
        </div>
    );
}

export default CustomersOverview;