
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerDiscount from './ContainerDiscount';
import Footer from './Footer';

function Discount() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerDiscount></ContainerDiscount>
            <Footer></Footer>
        </div>
    );
}

export default Discount;