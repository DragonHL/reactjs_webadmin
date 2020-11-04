
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerOrder from './ContainerOrder';
import Footer from './Footer';

function Order() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerOrder></ContainerOrder>
            <Footer></Footer>
        </div>
    );
}

export default Order;