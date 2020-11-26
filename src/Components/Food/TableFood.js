import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import FoodService from "../../Service/FoodService";
import { useList } from "react-firebase-hooks/database";

import firebase from "../../FirebaseCofig/Firebase";

const db = firebase.ref("/Food");

const TableFood = (props) => {

  // console.log("-----------------------table food-------------------------")
  // console.log(props.key)
  // console.log(props.nameKindFood)


  const [nameKindFood, setValueNameKindFood] = useState(props.nameKindFood);

  /* use react-firebase-hooks */
 
  const [dataFood, loading, error] = useList(FoodService.getAllFollowKindFood(nameKindFood));

  console.log("-------------------table food follow kind food------------------")
  console.log(dataFood)

  const dbFood = dataFood.filter(function(item) {
    console.log("item.val().status ")
    console.log(item.val().status )

    for (var key in item) {
      console.log("key ")
      console.log(key )
    }
    
  })

  console.log("dbFood")
    console.log(dbFood)

  const rows = dataFood.map((dataF,index) => ({
    stt: (index + 1),
    name: dataF.val().name,
    images: <img src={dataF.val().imageUrl} alt="" />,
    information: dataF.val().information,
    kindFood: dataF.val().nameKindFood,
    
    edit: <Link 
    to={{pathname: `/webadmin/formEditFood/${dataF.val().nameKindFood}&&${dataF.key}`,
    state:{key: dataF.key, name: dataF.val().name, images: dataF.val().imageUrl, information: dataF.val().information, nameKF: dataF.val().nameKindFood}}}
    className="btn btn-primary buttonEdit btn-table">Edit</Link>,

    delete: <a class="btn btn-danger buttonDelete btn-table" href="/#" target="_blank" role="button">Delete</a>
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
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Images',
        field: 'images',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Information',
        field: 'information',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Kind Food',
        field: 'kindFood',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Delete',
        field: 'delete',
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

    // bordered
    />
  );
}

export default TableFood;