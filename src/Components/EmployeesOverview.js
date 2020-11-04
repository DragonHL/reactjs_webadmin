
import '../css/Overview.css';
import Header from './Header';
import SideBar from './SideBar';
import ContainerEmployeesOverview from './ContainerEmployeesOverview';
import Footer from './Footer';

function CustomersOverview() {
    return (
        <div className="body">
            <Header></Header>
            <SideBar></SideBar>
            <ContainerEmployeesOverview></ContainerEmployeesOverview>
            <Footer></Footer>
        </div>
    );
}

export default CustomersOverview;