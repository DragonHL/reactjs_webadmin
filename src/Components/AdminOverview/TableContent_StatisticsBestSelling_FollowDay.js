import React, { useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';

import EmployeeService from "../../Service/EmployeeService";
import OrderService from "../../Service/OrderService";
import { Component } from "react";


const TableContent_StatisticsBestSelling_FollowDay = (props) => {

  /* use react-firebase-hooks */
  const [dataEmployees, loading, error] = useList(EmployeeService.getAllFollowStatus(0));

  const [arrayStartDate, setArrayStartDate] = useState(props.arrayStartDate);
  const [arrayEndDate, setArrayEndDate] = useState(props.arrayEndDate);
  const [dataBill, setDataBill] = useList(OrderService.getAll());
  const [bill, setBill] = useState([]);
  const [foodSort, setFoodSort] = useState([]);



  useEffect(() => {

    setBill(props.bill)
    setArrayStartDate(props.arrayStartDate)
    setArrayEndDate(props.arrayEndDate)

    // setFoodSort(arrayFoodBestSelling())

  }, [props.bill, props.arrayStartDate, props.arrayEndDate])

  function billDetail() {
    if (bill !== null) {
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

  }

  // var billDetail()  = billDetail().sort(function (a, b) {
  //   // console.log("   billDetail().date =====> ",   billDetail().date)
  //   return (b.totalPrice - a.totalPrice);
  // })





  function arrayFoodFollowDate() {
    var arrayDateOfBillDetail = [];
    var arrFoodFollowDate = []

    for (var i in billDetail()) {
      arrayDateOfBillDetail = (billDetail()[i].date).match(/\d+/g);
      if (
        (parseFloat(arrayStartDate[0]) <= arrayDateOfBillDetail[0]) && (arrayDateOfBillDetail[0] <= parseFloat(arrayEndDate[0])) &&
        (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayStartDate[1])) && (parseFloat(arrayDateOfBillDetail[1]) === parseFloat(arrayEndDate[1])) &&
        (parseFloat(arrayStartDate[2]) <= parseFloat(arrayDateOfBillDetail[2])) && (parseFloat(arrayEndDate[2]) <= parseFloat(arrayDateOfBillDetail[2]))
      ) {
        arrFoodFollowDate.push(billDetail()[i]);
      }
    }






    // let totalPrice = 0;
    // let totalQuantity = 0;
    // let count = 0;
    // let index = 0;
    // var arrayFood = [];
    // var arrayFood2 = [];
    // let totalPriceFollowNameFood = null;
    // for (var item1 in arrFoodFollowDate) {
    //   for (var item2 in arrFoodFollowDate) {
    //     if (arrFoodFollowDate[item1].nameFood === arrFoodFollowDate[item2].nameFood) {


    //       arrFoodFollowDate[item1].totalPrice += arrFoodFollowDate[item2].totalPrice;
    //       arrFoodFollowDate[item1].totalQuantity += arrFoodFollowDate[item2].quantity;


    //       // console.log("count =====> ", arrFoodFollowDate [item1].nameFood + "/" + arrFoodFollowDate [item1].date + "/" + "---------------->" + arrFoodFollowDate [item2].totalPrice)
    //       // console.log("totalPrice =====> ",arrFoodFollowDate [item1].nameFood + "/" + arrFoodFollowDate [item1].date + "/" + "---=============---->" + totalPrice + "====> " + totalQuantity)

    //       count++;

    //       if (count === 1) {
    //         arrayFood.push(arrFoodFollowDate[item1])
    //       }

    //       // totalPriceFollowNameFood = {
    //       //   id: arrFoodFollowDate[item1].id,
    //       //   imagesFood: arrFoodFollowDate[item1].imagesFood,
    //       //   informationFood: arrFoodFollowDate[item1].informationFood,
    //       //   nameFood: arrFoodFollowDate[item1].nameFood,
    //       //   price: arrFoodFollowDate[item1].price,
    //       //   quantity: totalQuantity,
    //       //   totalPrice: totalPrice
    //       // }


    //     }


    //   }



    //   // arrayFood.push(totalPriceFollowNameFood);

    //   console.log("arrayFood =====> ", arrayFood);





    //   totalPrice = 0;
    //   totalQuantity = 0;
    //   count = 0;
    // }



    return arrFoodFollowDate;
  }


  var arrayFoodFollowNameFood = arrayFoodFollowDate().reduce((accumulator, currentValue) => {
    var existItem = accumulator.find((item) => item.nameFood === currentValue.nameFood);
    if (existItem) {
      existItem.quantity += currentValue.quantity;
      existItem.totalPrice += currentValue.totalPrice;
      return accumulator;
    }
    accumulator.push(currentValue);
    return accumulator;
  }, []);


  var arrayFoodSort = arrayFoodFollowNameFood.sort((a, b) => {

    if (a.totalPrice < b.totalPrice) {
      return 1;
    }
    if (a.totalPrice > b.totalPrice) {
      return -1;
    }
    return 0;
  });


  var rows = arrayFoodSort.filter(function (item, index) {
    if (index <= 9) {
      return item;
    }
  }).map((item, index) => ({
    stt: (index + 1),
    nameFood: item.nameFood,
    imagesFood: <img src={item.imagesFood} alt="" />,
    quantity: item.quantity,
    totalPrice: item.totalPrice
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
        label: 'Món ăn',
        field: 'nameFood',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ảnh',
        field: 'imagesFood',
        sort: 'disabled',
        width: 100
      }
      ,
      {
        label: 'Số lượng',
        field: 'quantity',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Tổng',
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