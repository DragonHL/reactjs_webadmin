import React, { useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';

import EmployeeService from "../../Service/EmployeeService";
import OrderService from "../../Service/OrderService";



const TableContent_StatisticsBestSelling_FollowDay = (props) => {

  /* use react-firebase-hooks */

  const [bill, setBill] = useState([]);
  const [arrFoodFollowDate, setArrFoodFollowDate] = useState([]);

  useEffect(() => {

    setBill(props.bill);

    if (props.arrayStartDate && props.arrayEndDate) {
      arrFoodFollowDate.length = 0;
    }

  }, [props.bill, props.arrayStartDate, props.arrayEndDate, arrFoodFollowDate])


  // tạo ra bill mới có những thuộc tính của cart và lấy số lượng * giá
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
          billTemp.cart[ic].product.totalPrice = billTemp.cart[ic].quantity * billTemp.cart[ic].product.price;
          newBillDetail.push(billTemp.cart[ic].product);
        }
      }

      return newBillDetail;
    }

  }


  // lấy món ăn theo ngày
  function arrayFoodFollowDate() {
    var arrayDateOfBillDetail = [];

    for (var i in billDetail()) {
      arrayDateOfBillDetail = (billDetail()[i].date).match(/\d+/g);
      if (
        (parseFloat(props.arrayStartDate[0]) <= arrayDateOfBillDetail[0]) &&
        (arrayDateOfBillDetail[0] <= parseFloat(props.arrayEndDate[0])) &&
        (parseFloat(arrayDateOfBillDetail[1]) == parseFloat(props.arrayStartDate[1])) &&
        (parseFloat(arrayDateOfBillDetail[1]) == parseFloat(props.arrayEndDate[1])) &&
        (parseFloat(props.arrayStartDate[2]) === parseFloat(arrayDateOfBillDetail[2])) &&
        (parseFloat(props.arrayEndDate[2]) === parseFloat(arrayDateOfBillDetail[2]))
      ) {
        arrFoodFollowDate.push(billDetail()[i]);
      }
    }
    return arrFoodFollowDate;
  }

  // tính tổng và tổng số lượng theo tên món ăn
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

  // sắp xếp theo thứ tự từ cao đến thấp
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