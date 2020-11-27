import AdminOverview from "../AdminOverview/ContainerAdminOverview";
import UserOverview from "../UserOverview/ContainerUserOverview";
import EmployeesOverview from "../EmployeesOverview/ContainerEmployeesOverview";
import KindFood from "../KindFood/ContainerKindFood";
import Order from "../Order/ContainerOrder";
import TrackOrder from "../TrackOrder/ContainerTrackOrder";

import Vouchers from "../Vouchers/ContainerVouchers";
import UserVoucher from "../UserVoucher/ContainerUserVouchers";

import Rating from "../Rating/ContainerRating";
import Food from "../Food/Food";

import FormInsert_KindFood from "../KindFood/FormInsert_KindFood";
import FormEdit_KindFood from "../KindFood/FormEdit_KindFood";

import FormInsertFood from "../Food/FormInsertFood";
import FormEditFood from "../Food/FormEditFood";

import FormInsert_Vouchers from "../Vouchers/FormInsert_Vouchers";
import FormEdit_Vouchers from "../Vouchers/FormEdit_Vouchers";

import FormInsert_Employees from "../EmployeesOverview/FormInsert_Employees";
import FormEdit_Employees from "../EmployeesOverview/FormEdit_Employees";



// import Login from "../Login/Login";



import {Route} from "react-router-dom";




function RouterURL() {

   

    return (

            <div >

                <Route  exact path="/webadmin/admin" component={AdminOverview} />
                <Route path="/webadmin/user" component={UserOverview} />
                <Route path="/webadmin/employees" component={EmployeesOverview} />
                <Route path="/webadmin/kindFood" component={KindFood} />
                <Route path="/webadmin/order" component={Order} />
                <Route path="/webadmin/trackOrder" component={TrackOrder} />

                <Route path="/webadmin/vouchers" component={Vouchers} />
                <Route path="/webadmin/userVouchers" component={UserVoucher} />

                <Route path="/webadmin/rating" component={Rating} />
                <Route path="/webadmin/food" component={Food} />

                <Route path="/webadmin/formInsertKindFood" component={FormInsert_KindFood} />
                <Route path="/webadmin/formEditKindFood" component={FormEdit_KindFood} />

                <Route path="/webadmin/formInsertFood" component={FormInsertFood} />
                <Route path="/webadmin/formEditFood" component={FormEditFood} />

                <Route path="/webadmin/formInsertVouchers" component={FormInsert_Vouchers} />
                <Route path="/webadmin/formEditVouchers" component={FormEdit_Vouchers} />
                
                <Route path="/webadmin/formInsertEmployee" component={FormInsert_Employees} />
                <Route path="/webadmin/formEditEmployee" component={FormEdit_Employees} />





                {/* <Route path="/login" component={Login} /> */}
                
            </div>


    );
}

export default RouterURL;