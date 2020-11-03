
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContentCustomersOverview from './ContentCustomersOverview';
import Footer from './Footer';

function CustomersOverview() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContentCustomersOverview></ContentCustomersOverview>
            <Footer></Footer>
        </div>
    );
}

export default CustomersOverview;