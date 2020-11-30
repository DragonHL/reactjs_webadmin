

import '../../css/Container_Body_Admin.css';

import CurveChart from './CurveChart';
import Piechart3d from './Piechart3d';

import React, { useState, useEffect } from 'react';

// import DatePicker from 'react-date-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
// registerLocale('es', es)

import OrderService from '../../Service/OrderService';

import { useList } from "react-firebase-hooks/database";

import moment from 'moment'

import {
    FaDollarSign
} from "react-icons/fa";

function ContainerAdminOverview() {

    const [valueDateStart, setChangeDateStart] = useState(new Date());

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
// OrderService.getTotalPriceFollowDate('26/11/2020', '30/11/2020')
    const [dataOrder, loadingOrder, errorOrder] = useList(getData());


    console.log("dataOrderadaf ======> ", dataOrder)




    // function getDateStart() {
    //     var dateTime = moment(valueDateStart).format('DD-MM-YYYY');
    //     console.log("date =====> ", dateTime);
    //     return dateTime;
    // }

    // function compareDate() {
    //     var arrayDate = getDateStart().match(/\d+/g);
    //     return arrayDate;
    // }

    // console.log("arrayDate ====> ", compareDate())


    function getDateStart(date) {
        var dateStart = setStartDate(date);
    
        // var totalPrice = 0;
        // var count = 0;

        // for (var i of dataOrder) {
        //     // console.log("totalprice ==> ", i.val().totalprice)
        //     // console.log("date ==> ", i.val().date)
        //     totalPrice += i.val().totalprice;
        //     count++;
        //     // console.log("-----------------------------------------------------------")
        // }

        // console.log("count ====> ", count)

        // console.log("Statistical ====> ", totalPrice)
        return dateStart;
    }

    function getDateEnd(date) {
        var dateEnd = setEndDate(date)
        return dateEnd;
    }

    function getData(){
        const dataOrder = OrderService.getTotalPriceFollowDate('26/12/2020', '30/12/2020');
        console.log("dataOrder ====> ", dataOrder)
        // const data = useList(OrderService.getTotalPriceFollowDate(startDate, '30/12/2020'));
        // console.log("data ====> ", data)

        return dataOrder;
    }


// thông kê
    // function Statistical(dataOrder) {
    //     var totalPrice = 0;
    //     var count = 0;

    //     for (var i of dataOrder) {
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
            <div className="box-date">
                <div className="dateStart">
                    <h6 className="titleTable">Date Start</h6>
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={startDate}
                        onChange={date => getDateStart(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>

                <div className="dateEnd">
                    <h6 className="titleTable">Date End</h6>
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={endDate}
                        onChange={date => getDateEnd(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
            </div>

            {/* {Statistical()} +  */}

            <div className="statistical_month_year">
                <div className="statistical_month">
                    <div className="title_statistical">
                        <p className="Month_Year">Statistical</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money"> </p>
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