import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link} from "react-router-dom";
import KindFoodService from "../../Service/KindFoodService";
import { useList } from "react-firebase-hooks/database";

const TableContentKindFood = () => {

  const [dataKindFood, loading, error] = useList(KindFoodService.getAll());

  const rows = dataKindFood.map((dataKF, index) => ({
    stt: (index + 1) ,
    name: dataKF.val().name,
    images: <img src={dataKF.val().imageUrl} alt="" />,
    quantity: dataKF.val().quantity,
    show: <Link to={{pathname: `/webadmin/food/${dataKF.val().name}&&${dataKF.key}`,state:{name: dataKF.val().name, id: dataKF.key}}} className="btn btn-primary buttonShow btn-table">Show</Link>,
    edit: <Link to="/webadmin/formFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>,
    delete: <a className="btn btn-danger buttonEdit btn-table" href="/#" role="button">Delete</a>,
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