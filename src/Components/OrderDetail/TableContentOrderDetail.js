import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';

import { useList } from "react-firebase-hooks/database";

import KindFoodService from "../../Service/KindFoodService";

const TableContentOrderDetail = (props) => {

  const [dataKindFood, loadingKindFood, errorKindFood] = useList(KindFoodService.getAllFollowStatus(0));

  const [dataDetail, setDataDetail] = useState(props.cart);


  var OrderDetail = [];
  for (var i in dataDetail) {
    dataDetail[i].product.quantity = dataDetail[i].quantity;
    OrderDetail.push(dataDetail[i].product);
    // console.log(dataDetail[i].quantity, "i")
  }

  function nameKindFood() {
    var name = "";
    for (var o of OrderDetail) {
      for (var d of dataKindFood) {
        // console.log('d.key', d.key)
        // console.log('o.kindFoodID', o.kindFoodID)
        if (d.key === o.kindFoodID) {
          name = d.val().nameKindFood;
          // console.log('d.kindFoodID', d.kindFoodID)
        }
      }
    }
    return name;
  }
  // console.log("nameKindFood()", OrderDetail)

  const rows = OrderDetail.map((dataOD, index) => ({
    stt: (index + 1),
    kindFood: nameKindFood(),
    nameFood: dataOD.nameFood,
    imagesFood: <img src={dataOD.imagesFood} alt="" />,
    price: dataOD.price
  }));


  const data = {
    columns: [
      {
        label: '',
        field: 'stt',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Kind Food',
        field: 'kindFood',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Name Food',
        field: 'nameFood',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Images Food',
        field: 'imagesFood',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 100
      }

    ],

    rows: rows

  };

  return (
    <MDBDataTable
      striped
      hover
      data={data}
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={5}
      pagesAmount={5}

    // bordered
    // data={{ columns: data.columns, rows: rows }} 
    />
  );
}

export default TableContentOrderDetail;




