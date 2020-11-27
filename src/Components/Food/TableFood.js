import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import FoodService from "../../Service/FoodService";
import KindFoodService from "../../Service/KindFoodService";

import { useList } from "react-firebase-hooks/database";

import { Button } from 'react-bootstrap';


const TableFood = (props) => {

//    console.log("props")
//  console.log(props.keyKindFood)
//  console.log(props.nameKindFood)

  const [nameKindFood, setValueNameKindFood] = useState(props.nameKindFood);
  const [keyKindFood, setValueKeyKindFood] = useState(props.keyKindFood);

  /* use react-firebase-hooks */

  const [dataFood, loading, error] = useList(FoodService.getAllFollowKindFood(keyKindFood));


  useEffect(() => {
    var count = 0;
      for(var db of dataFood){
        if(db.val().kindFoodID === props.keyKindFood){
          count += 1;
        }
      }

     KindFoodService.updateQuantity(props.keyKindFood, count).then(()=>{
       console.log("update quantity success!!!!!")
     })
  }, [dataFood]);


  function deleteFood(key) {
    FoodService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const dbFood = dataFood.filter(function (item, index) {
    if (item.val().status === 0) {
      return item;
    }
  })

  const rows = dbFood.map((dataF, index) => ({
    stt: (index + 1),
    name: dataF.val().nameFood,
    images: <img src={dataF.val().imagesFood} alt="" />,
    information: dataF.val().informationFood,
    kindFood: nameKindFood,
    price: dataF.val().price,
    edit: <Link
      to={{
        pathname: `/webadmin/formEditFood`,
        state: {
          key: dataF.key,
          nameFood: dataF.val().nameFood,
          imagesFood: dataF.val().imagesFood,
          informationFood: dataF.val().informationFood,
          nameKindFood: nameKindFood,
          keyKindFood: keyKindFood,
          price: dataF.val().price
        }
      }}
      className="btn btn-primary buttonEdit btn-table">Edit</Link>,

    delete: <Button className="btn btn-danger buttonEdit btn-table" onClick={() => deleteFood(dataF.key)} variant="danger">Delete</Button>

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
        sort: 'disabled',
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
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Edit',
        field: 'edit',
        sort: 'disabled',
        width: 100
      }
      ,
      {
        label: 'Delete',
        field: 'delete',
        sort: 'disabled',
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
    />
  );
}

export default TableFood;