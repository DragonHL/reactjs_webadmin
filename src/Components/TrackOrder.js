
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerTrackOrder from './ContainerTrackOrder';
import Footer from './Footer';

function TrackOrder() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerTrackOrder></ContainerTrackOrder>
            <Footer></Footer>
        </div>
    );
}

export default TrackOrder;