
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerKindFood from './ContainerKindFood';
import Footer from './Footer';

function KindFood() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerKindFood></ContainerKindFood>
            <Footer></Footer>
        </div>
    );
}

export default KindFood;