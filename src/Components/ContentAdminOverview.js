
import '../css/Overview.css';
import '../css/Container_Body_Admin.css';

import CurveChart from './CurveChart';
import Piechart3d from './Piechart3d';

function ContentAdminOverview() {
    return (
        <div className="body">

            {/* content */}
            <div className="container-body">
                <div className="sub-container">
                    <h1 className="titleTable">Admin Overview</h1>

                    <div className="statistical_month_year">
                        <div className="statistical_month">
                            <div className="title_statistical">
                                <p className="Month_Year">Month</p>
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <p className="money">654789000</p>
                        </div>

                        <div className="statistical_year">
                            <div className="title_statistical">
                                <p className="Month_Year">Year</p>
                                <i className="fas fa-dollar-sign"></i>
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
            </div>

        </div>
    );
}

export default ContentAdminOverview;