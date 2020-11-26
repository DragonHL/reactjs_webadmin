import React, { useState }  from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link} from "react-router-dom";
import KindFoodService from "../../Service/KindFoodService";
import { useList } from "react-firebase-hooks/database";

import { Button } from 'react-bootstrap';

const TableContentKindFood = (props) => {

  const [dataKindFood, loading, error] = useList(KindFoodService.getAllFollowStatus(0));

  const [keyKindFood, setValueKeyKindFood] = useState (dataKindFood.key);

  function deleteKindFood (key) {
    KindFoodService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rows = dataKindFood.map((dataKF, index) => ({
    stt: (index + 1) ,
    name: dataKF.val().name,
    images: <img src={dataKF.val().imageUrl} alt="" />,
    quantity: dataKF.val().quantity,
    show: <Link to={{pathname: `/webadmin/food`,state:{nameKindFood: dataKF.val().name}}} className="btn btn-primary buttonShow btn-table">Show</Link>,
    edit: 
    <Link to={{
      pathname: `/webadmin/formEditKindFood/${dataKF.val().name}&&${dataKF.key}`,
      state:{nameKindFood: dataKF.val().name, key: dataKF.key, quantity: dataKF.val().quantity, imagesUrl: dataKF.val().imageUrl 
      }}} 
      className="btn btn-primary buttonEdit btn-table">Edit</Link>,
    delete: <Button className="btn btn-danger buttonEdit btn-table" onClick={() => deleteKindFood(dataKF.key)} variant="danger">Delete</Button>
    
// &&${dataKF.key}
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
        label: 'Quantity',
        field: 'quantity',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Show Food',
        field: 'show',
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
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={5} 
      pagesAmount={5}
      // proSelect
      // bordered
    />
  );
}

export default TableContentKindFood;