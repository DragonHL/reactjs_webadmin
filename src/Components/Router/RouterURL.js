import AdminOverview from "../AdminOverview/ContainerAdminOverview";
import CustomersOverview from "../CustomersOverview/ContainerCustomersOverview";
import EmployeesOverview from "../EmployeesOverview/ContainerEmployeesOverview";
import KindFood from "../KindFood/ContainerKindFood";
import Order from "../Order/ContainerOrder";
import TrackOrder from "../TrackOrder/ContainerTrackOrder";
import Discount from "../Discount/ContainerDiscount";
import Rating from "../Rating/ContainerRating";
import Food from "../Food/Food";

import FormInsert_KindFood from "../KindFood/FormInsert_KindFood";
import FormEdit_KindFood from "../KindFood/FormEdit_KindFood";

import FormInsertFood from "../Food/FormInsertFood";
import FormEditFood from "../Food/FormEditFood";

import FormInsert_Discount from "../Discount/FormInsert_Discount";
import FormEdit_Discount from "../Discount/FormEdit_Discount";

import FormInsert_Employees from "../EmployeesOverview/FormInsert_Employees";
import FormEdit_Employees from "../EmployeesOverview/FormEdit_Employees";

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

                <Route path="/webadmin/formInsertKindFood" component={FormInsert_KindFood} />
                <Route path="/webadmin/formEditKindFood" component={FormEdit_KindFood} />

                <Route path="/webadmin/formInsertFood" component={FormInsertFood} />
                <Route path="/webadmin/formEditFood" component={FormEditFood} />

                <Route path="/webadmin/formInsertDiscount" component={FormInsert_Discount} />
                <Route path="/webadmin/formEditDiscount" component={FormEdit_Discount} />
                
                <Route path="/webadmin/formInsertEmployee" component={FormInsert_Employees} />
                <Route path="/webadmin/formEditEmployee" component={FormEdit_Employees} />



                {/* <Route path="/login" component={Login} /> */}
                
            </div>


    );
}

export default RouterURL;