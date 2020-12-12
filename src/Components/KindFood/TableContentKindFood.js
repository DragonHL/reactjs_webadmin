import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import KindFoodService from "../../Service/KindFoodService";

import { useList } from "react-firebase-hooks/database";

import { Button } from 'react-bootstrap';

const TableContentKindFood = (props) => {

  const [dataKindFood, loading, error] = useList(KindFoodService.getAllFollowStatus(0));

  const [keyKindFood, setValueKeyKindFood] = useState(dataKindFood.key);

  function deleteKindFood(key) {
    KindFoodService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };




  const rows = dataKindFood.map((dataKF, index) => ({
    stt: (index + 1),
    name: dataKF.val().nameKindFood,
    images: <img src={dataKF.val().imagesKindFood} alt="" />,
    quantity: dataKF.val().quantity,
    show: <Link
      to={{
        pathname: `/webadmin/food`,
        state: {
          nameKindFood: dataKF.val().nameKindFood,
          keyKindFood: dataKF.key
        }
      }}
      className="btn btn-primary buttonShow btn-table" style={{padding: "6px 0"}}>Món ăn</Link>,
    edit:
      <Link to={{
        pathname: `/webadmin/formEditKindFood/${dataKF.val().nameKindFood}&&${dataKF.key}`,
        state: {
          nameKindFood: dataKF.val().nameKindFood,
          key: dataKF.key,
          quantity: dataKF.val().quantity,
          imagesUrl: dataKF.val().imagesKindFood
        }
      }}
        className="btn btn-success buttonEdit btn-table">Sửa</Link>,
    delete: <Button className="btn btn-danger buttonEdit btn-table" onClick={() => deleteKindFood(dataKF.key)} variant="danger">Xóa</Button>

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
        label: 'Tên',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Ảnh',
        field: 'images',
        sort: 'disabled',
        width: 100
      }
      ,
      {
        label: 'Số lượng',
        field: 'quantity',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Món ăn',
        field: 'show',
        sort: 'disabled',
        width: 100
      }
      ,
      {
        label: 'Sửa',
        field: 'edit',
        sort: 'disabled',
        width: 100
      }
      ,
      {
        label: 'Xóa',
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
    // proSelect
    // bordered
    />
  );
}

export default TableContentKindFood;