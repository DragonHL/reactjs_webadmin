

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

  

    const [dataOrder, loadingOrder, errorOrder] = useList(
        OrderService.getTotalPriceFollowDate(
            moment(startDate).format('DD-MM-YYYY'),
            moment(endDate).format('DD-MM-YYYY') 
        ));

    // moment(addDays(endDate, 1)).format('DD-MM-YYYY')

    console.log("startDate ====> ", startDate)
    console.log("endDate ====> ", endDate)

    console.log("dataOrderadaf ======> ", dataOrder)




    function getDateStart() {
        var dateTime = moment(startDate).format('DD-MM-YYYY');
        // console.log("date =====> ", dateTime);
        return dateTime;
    }

    // console.log("getDateStart ====> ", getDateStart())

    function compareDate() {
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

        // var dateOrder = "";
        // for (var date of dataOrder) {
        //     dateOrder = date.val().date;
        // }

        // const dates = dataOrder.map((dataOD, index) => ({
        //     date: dataOD.val().date
        // }));

        // console.log("dates ====> ", dates)

        // var dateOrder = "";
        // for (var d of dates) {
        //     dateOrder = d.date;

        // }

        // console.log("dateOrder ====> ", dateOrder.match(/\d+/g))
        // arrayStartDate[1] === arrayEndDate[1] && arrayStartDate[2] === arrayEndDate[2]

            var totalPrice = 0;
            var count = 0;
            for (var date of dataOrder) {
                // console.log("totalprice ==> ", date.val().totalprice)
                // console.log("date ==> ", date.val().date)

                // if(date.val().date === )
                totalPrice += date.val().totalprice;
                count++;
                // console.log("-----------------------------------------------------------")
            }
            console.log("count ====> ", count)
            return totalPrice;
        }
        // return
    

    console.log("arrayDate ====> ", compareDate())



    // // thông kê
        // function Statistical() {
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

            <div className="statistical_month_year">
                <div className="statistical_month">
                    <div className="title_statistical">
                        <p className="Month_Year">Statistical</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">{compareDate()}</p>
                </div>

                {/* <div className="statistical_year">
                    <div className="title_statistical">
                        <p className="Month_Year">Year</p>
                        <FaDollarSign className="fas fa-dollar-sign" />
                    </div>
                    <p className="money">654789000</p>
                </div> */}
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