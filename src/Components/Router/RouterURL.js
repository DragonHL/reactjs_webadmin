import AdminOverview from "../AdminOverview/ContainerAdminOverview";
import CustomersOverview from "../CustomersOverview/ContainerCustomersOverview";
import EmployeesOverview from "../EmployeesOverview/ContainerEmployeesOverview";
import KindFood from "../KindFood/ContainerKindFood";
import Order from "../Order/ContainerOrder";
import TrackOrder from "../TrackOrder/ContainerTrackOrder";
import Discount from "../Discount/ContainerDiscount";
import Rating from "../Rating/ContainerRating";
import Food from "../Food/Food";

import FormInsert_EditKindFood from "../KindFood/FormInsert_EditKindFood";
import FormInsert_EditFood from "../Food/FormInsert_EditFood";
import FormInsert_EditDiscount from "../Discount/FormInsert_EditDiscount";

// import Login from "../Login/Login";



import {Route} from "react-router-dom";




function RouterURL() {
    return (

            <div >

                <Route  exact path="/webadmin/admin" component={AdminOverview} />
                <Route path="/webadmin/customer" component={CustomersOverview} />
                <Route path="/webadmin/employees" component={EmployeesOverview} />
                <Route path="/webadmin/kindFood" component={KindFood} />
                <Route path="/webadmin/order" component={Order} />
                <Route path="/webadmin/trackOrder" component={TrackOrder} />
                <Route path="/webadmin/discount" component={Discount} />
                <Route path="/webadmin/rating" component={Rating} />
                <Route path="/webadmin/food" component={Food} />

                <Route path="/webadmin/formKindFood" component={FormInsert_EditKindFood} />
                <Route path="/webadmin/formFood" component={FormInsert_EditFood} />
                <Route path="/webadmin/formDiscount" component={FormInsert_EditDiscount} />

                {/* <Route path="/login" component={Login} /> */}
                
            </div>


    );
}

export default RouterURL;