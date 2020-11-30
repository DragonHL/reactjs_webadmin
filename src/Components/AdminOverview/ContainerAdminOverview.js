

import '../../css/Container_Body_Admin.css';

import CurveChart from './CurveChart';
import Piechart3d from './Piechart3d';

import React, { useState } from 'react';

import DatePicker from 'react-date-picker';

import OrderService from '../../Service/OrderService';

import { useList } from "react-firebase-hooks/database";

import {
    FaDollarSign
} from "react-icons/fa";

function ContainerAdminOverview() {

    const [valueDate, onChangeDate] = useState(new Date().toISOString());

    const [dataOrder, loadingOrder, errorOrder] = useList(OrderService.getTotalPriceFollowDate("26/11/2020","28/11/2020"));

    console.log("date ======> ",valueDate)

    


// function Statistical(){
//     var totalPrice = 0;
//     var count =0;
    
//     for(var i of dataOrder){
//         // console.log("totalprice ==> ", i.val().totalprice)
//         // console.log("date ==> ", i.val().date)
//         totalPrice += i.val().totalprice;
//         count++;
//         // console.log("-----------------------------------------------------------")
//     }

//     console.log("count ====> ", count)
//     return totalPrice;
// }

// console.log("Statistical ====> ", Statistical())

    return (
        <div className="sub-container">

            <h1 className="titleTable">Admin Overview</h1>
            <div>
                <DatePicker
                    onChange={onChangeDate}
                    value={valueDate}
                />
            </div>

            

            <div className="statistical_month_year">
                <div className="statistical_month">
                    <div className="title_statistical">
                        <p className="Month_Year">Statistical</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money"></p>
                </div>

                <div className="statistical_year">
                    <div className="title_statistical">
                        <p className="Month_Year">Year</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">654789000</p>
                </div>
            </div>

            <div className="chart">

                <div id="curve_chart">
                    <CurveChart />
                </div>

                <div id="piechart_3d">
                    <Piechart3d />
                </div>

            </div>


        </div>
    );
}

export default ContainerAdminOverview;