

import '../../css/Container_Body_Admin.css';

import CurveChart from './CurveChart';
import Piechart3d from './Piechart3d';



import {
    FaDollarSign
} from "react-icons/fa";

function ContainerAdminOverview() {
    return (
        <div className="sub-container">

            {/* content */}
            {/* <div className="container-body">
                 <div className="sub-container"> */}
                    <h1 className="titleTable">Admin Overview</h1>

                    <div className="statistical_month_year">
                        <div className="statistical_month">
                            <div className="title_statistical">
                                <p className="Month_Year">Month</p>
                                <FaDollarSign className="fas fa-dollar-sign"/>
                                {/* <i className="fas fa-dollar-sign"></i> */}
                            </div>
                            <p className="money">654789000</p>
                        </div>

                        <div className="statistical_year">
                            <div className="title_statistical">
                                <p className="Month_Year">Year</p>
                                <FaDollarSign className="fas fa-dollar-sign"/>
                                {/* <i className="fas fa-dollar-sign"></i> */}
                            </div>
                            <p className="money">654789000</p>
                        </div>
                    </div>

                    <div className="chart">

                        <div id="curve_chart">
                            <CurveChart/>
                        </div>


                        <div id="piechart_3d">
                            <Piechart3d/>
                        </div>

                    </div>


                 </div>
        //      </div>

        //  </div>
    );
}

export default ContainerAdminOverview;