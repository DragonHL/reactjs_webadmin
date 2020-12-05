import React, { useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';

import EmployeeService from "../../Service/EmployeeService";
import OrderService from "../../Service/OrderService";
import { Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

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
  }, [props.bill,props.arrayStartDate, props.arrayEndDate ])

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

  // console.log("billDetail =====> ", billDetail())

  // count = 0;
  var arrayDateOfBillDetail = 0;
  // var arrayBillDetailSort = []
  for (var i in billDetail()) {
    arrayDateOfBillDetail = (billDetail()[i].date).match(/\d+/g);
    // console.log(" arrayDateOfBillDetail =====> ", arrayDateOfBillDetail)
    // console.log(" arrayStartDate =====> ", arrayStartDate)
    // console.log(" arrayEndDate =====> ", arrayEndDate)

    if (
      (parseFloat(arrayStartDate[0]) <= parseFloat(arrayDateOfBillDetail[0])) && (parseFloat(arrayDateOfBillDetail[0]) <= parseFloat(arrayEndDate[0])) &&
      (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayStartDate[1])) && (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayEndDate[1])) &&
      (parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfBillDetail[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfBillDetail[2]))
    ) {
      // arrayBillDetailSort= billDetail().sort(function(a, b){
      //     return ( b.totalPrice - a.totalPrice );
      //   })
    }
    // console.log(" arrayDateOfBillDetail =====> ", arrayDateOfBillDetail)
    // console.log(" billDetail()[i].totalPrice =====> ", billDetail()[i].totalPrice)
    // console.log(" billDetail() =====> ", billDetail())
  }

var arrayBillDetailSort= billDetail().sort(function(a, b){
  console.log("   billDetail().date =====> ",   billDetail().date)
    return ( b.totalPrice - a.totalPrice );
  })

  // console.log("   billDetail() =====> ",   arrayBillDetailSort)




  const rows = arrayBillDetailSort.map((dataBDS, index) => ({
    stt: (index + 1),
    idFood: dataBDS.id,
    nameFood: dataBDS.nameFood,
    imagesFood:  <img src={dataBDS.imagesFood} alt=""/>,
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
    // data={{ columns: data.columns, rows: rows }} 
    // bordered

    />

  );

}

export default TableContent_StatisticsBestSelling_FollowDay;