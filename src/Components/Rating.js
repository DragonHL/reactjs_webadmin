
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerRating from './ContainerRating';
import Footer from './Footer';

function Rating() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerRating></ContainerRating>
            <Footer></Footer>
        </div>
    );
}

export default Rating;