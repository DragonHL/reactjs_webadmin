

import '../../css/Container_Body_Admin.css';

import CurveChart from './CurveChart';
import Piechart3d from './Piechart3d';

import React, { useState, useEffect } from 'react';

// import DatePicker from 'react-date-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
// registerLocale('es', es)
// import subDays from "date-fns/subDays";
import { subDays, addDays } from "date-fns";

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

    const [dataOrder, loadingOrder, errorOrder] = useList(OrderService.getAll());

    // moment(addDays(endDate, 1)).format('DD-MM-YYYY')

    // console.log("startDate ====> ", moment(startDate).format('DD-MM-YYYY'))
    // console.log("endDate ====> ", moment(endDate).format('DD-MM-YYYY'))

    // console.log("dataOrderadaf ======> ", dataOrder)


    var formtDateNow = moment(new Date()).format('DD-MM-YYYY');
    var formatStartDate = moment(startDate).format('DD-MM-YYYY');
    var formatEndDate = moment(endDate).format('DD-MM-YYYY');
    var arrayDateNow = formtDateNow.match(/\d+/g);
    var arrayStartDate = formatStartDate.match(/\d+/g);
    var arrayEndDate = formatEndDate.match(/\d+/g);
    // console.log("arrayDateNow ====> ", arrayDateNow)
    // console.log("arrayStartDate ====> ", arrayStartDate)
    // console.log("arrayEndDate ====> ", arrayEndDate)
    // console.log("arrayStartDate[1] ====> ", arrayEndDate[1])

    // function arrayStatisticalFollowMonth() {

    //     var totalPrice = 0;
    //     var count = 0;
    //     var month = 0;
    //     var arrayDateOfOrder = 0;
    //     for (var item of dataOrder) {
    //         arrayDateOfOrder = (item.val().date).match(/\d+/g);
            
    //             console.log("arrayStartDate[1] ====> ", arrayStartDate[1])
    //             console.log("arrayEndDate[1] ====> ", arrayEndDate[1])
    //             console.log("arrayDateOfOrder[1] ====> ", item.val().date)
    //         if (
    //             // (parseFloat(arrayDateOfOrder[1]) === 1) &&
    //             (parseFloat(arrayDateOfOrder[1]) === parseFloat(arrayStartDate[1])) && (parseFloat(arrayDateOfOrder[1]) === parseFloat(arrayEndDate[1])) &&
    //             (parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfOrder[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfOrder[2]))) {
    //             totalPrice += item.val().totalprice;
    //             month++;
    //             count++;
               
    //         }
    //          console.log("count ====> ", count)
    //             console.log("month ====> ", month)

    //     }

    //     // return totalPrice;
    // }

    // console.log("arrayStatisticalFollowMonth ====> ", arrayStatisticalFollowMonth())



    function statisticalMonth() {

        var totalPrice = 0;
        var count = 0;
        var arrayDateOfOrder = 0;
        for (var item of dataOrder) {
            arrayDateOfOrder = (item.val().date).match(/\d+/g);
            if ((parseFloat(arrayStartDate[0]) <= parseFloat(arrayDateOfOrder[0])) && (parseFloat(arrayDateOfOrder[0]) <= parseFloat(arrayEndDate[0])) &&
                (parseFloat(arrayDateOfOrder[1]) === parseFloat(arrayStartDate[1])) && (parseFloat(arrayDateOfOrder[1]) === parseFloat(arrayEndDate[1])) &&
                (parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfOrder[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfOrder[2]))) {
                totalPrice += item.val().totalprice;
                count++;
            }
        }
        // console.log("count ====> ", count)
        return totalPrice;
    }




    function statisticalYear() {

        var totalPrice = 0;
        var count = 0;
        var arrayDateOfOrder = 0;
        for (var item of dataOrder) {
            arrayDateOfOrder = (item.val().date).match(/\d+/g);
            if ((parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfOrder[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfOrder[2]))) {
                totalPrice += item.val().totalprice;
                count++;
            }
        }
        // console.log("count ====> ", count)
        return totalPrice;
    }

    // console.log("statisticalYear ====> ", statisticalYear())

    function statisticalDay() {
        var totalPrice = 0;
        var count = 0;
        var arrayDateOfOrder = 0;
        for (var item of dataOrder) {
            arrayDateOfOrder = (item.val().date).match(/\d+/g);
            if ((parseFloat(arrayDateNow[0]) === parseFloat(arrayDateOfOrder[0]))) {
                totalPrice += item.val().totalprice;
                count++;
            }
        }
        // console.log("count ====> ", count)
        return totalPrice;
    }



    return (
        <div className="sub-container">

            <h1 className="titleTable">Admin Overview</h1>
            <div className="box-date">
                <div className="dateStart">
                    <h6 className="titleTable">Date Start</h6>
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
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
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    // minDate={moment().add(1, startDate)}
                    // maxDate={addDays(new Date(), 5)}
                    />
                </div>
            </div>
            {/* {startDate} */}
            {/* {Statistical()} +  */}

            <div className="statistical_day_month_year">
                <div className="statistical_day">
                    <div className="title_statistical">
                        <p className="Day_Month_Year">Day</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">{statisticalDay()}</p>
                </div>
                <div className="statistical_month">
                    <div className="title_statistical">
                        <p className="Day_Month_Year">Month</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">{statisticalMonth()}</p>
                </div>

                <div className="statistical_year">
                    <div className="title_statistical">
                        <p className="Day_Month_Year">Year</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">{statisticalYear()}</p>
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