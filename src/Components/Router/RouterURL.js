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



import {Route} from "react-router-dom";


function RouterURL() {
    return (

            <div className="App">

                <Route exact path="/" component={AdminOverview} />
                <Route path="/customer" component={CustomersOverview} />
                <Route path="/employees" component={EmployeesOverview} />
                <Route path="/kindFood" component={KindFood} />
                <Route path="/order" component={Order} />
                <Route path="/trackOrder" component={TrackOrder} />
                <Route path="/discount" component={Discount} />
                <Route path="/rating" component={Rating} />
                <Route path="/food" component={Food} />

                <Route path="/formKindFood" component={FormInsert_EditKindFood} />
                <Route path="/formFood" component={FormInsert_EditFood} />
                <Route path="/formDiscount" component={FormInsert_EditDiscount} />
                
            </div>


    );
}

export default RouterURL;