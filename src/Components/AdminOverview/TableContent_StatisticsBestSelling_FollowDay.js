import React, { useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';

import EmployeeService from "../../Service/EmployeeService";
import OrderService from "../../Service/OrderService";


const TableContent_StatisticsBestSelling_FollowDay = (props) => {

  /* use react-firebase-hooks */
  const [dataEmployees, loading, error] = useList(EmployeeService.getAllFollowStatus(0));

  const [arrayStartDate, setArrayStartDate] = useState(props.arrayStartDate);
  const [arrayEndDate, setArrayEndDate] = useState(props.arrayEndDate);
  const [dataBill, setDataBill] = useList(OrderService.getAll());
  const [bill, setBill] = useState([]);

  useEffect(() => {
    setBill(props.bill)
    setArrayStartDate(props.arrayStartDate)
    setArrayEndDate(props.arrayEndDate)
  }, [props.bill, props.arrayStartDate, props.arrayEndDate])

  function billDetail() {
    var newBillDetail = []
    for (var ib in bill) {
      var billTemp = {
        cart: bill[ib].val().cart,
        date: bill[ib].val().date,
      }

      for (var ic in billTemp.cart) {
        billTemp.cart[ic].product.quantity = billTemp.cart[ic].quantity;
        billTemp.cart[ic].product.date = billTemp.date;
        billTemp.cart[ic].product.totalPrice = billTemp.cart[ic].quantity * billTemp.cart[ic].product.price
        newBillDetail.push(billTemp.cart[ic].product)
      }
    }

    return newBillDetail;
  }


  var arrayBillDetailSort = billDetail().sort(function (a, b) {
    // console.log("   billDetail().date =====> ",   billDetail().date)
    return (b.totalPrice - a.totalPrice);
  })

  // console.log("   arrayBillDetailSort =====> ", arrayBillDetailSort)



  function arrayFoodBestSelling() {
    var arrayDateOfBillDetail = [];
    var arrFoodBestSelling = []
    for (var i in arrayBillDetailSort) {
      arrayDateOfBillDetail = (arrayBillDetailSort[i].date).match(/\d+/g);
      if (
        (parseFloat(arrayStartDate[0]) <= arrayDateOfBillDetail[0]) && (arrayDateOfBillDetail[0] <= parseFloat(arrayEndDate[0])) &&
        (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayStartDate[1])) && (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayEndDate[1])) &&
        (parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfBillDetail[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfBillDetail[2]))
      ) {
        arrFoodBestSelling.push(arrayBillDetailSort[i]);
      }
      if (i === 2) {
        break;
      }
    }
    return arrFoodBestSelling;
  }








  const rows = arrayFoodBestSelling().map((dataBDS, index) => ({
    stt: (index + 1),
    idFood: dataBDS.id,
    nameFood: dataBDS.nameFood,
    imagesFood: <img src={dataBDS.imagesFood} alt="" />,
    totalPrice: dataBDS.totalPrice

  }));



  const data = {
    columns: [
      {
        label: '#',
        field: 'stt',
        sort: 'asc',
        width: 20
      }
      ,
      {
        label: 'ID Food',
        field: 'idFood',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Name Food',
        field: 'nameFood',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Images',
        field: 'imagesFood',
        sort: 'disabled',
        width: 100
      },
      ,
      {
        label: 'Total Price',
        field: 'totalPrice',
        sort: 'disabled',
        width: 100
      }

    ],

    rows: rows
  };



  return (
    <MDBDataTable
      hover
      data={data}
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={5}
      pagesAmount={5}
      small
      pagesAmount={2}
    // data={{ columns: data.columns, rows: rows }} 
    // bordered

    />

  );

}

export default TableContent_StatisticsBestSelling_FollowDay;