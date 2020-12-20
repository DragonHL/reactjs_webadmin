import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";

import VouchersService from "../../Service/VouchersService";
import { Button } from 'react-bootstrap';

const TableContentVouchers = (props) => {

  const [dataVouchers, loading, error] = useList(VouchersService.getAllFollowStatus(0));

  function deleteTutorial(key) {
    VouchersService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rows = dataVouchers.map((dataD, index) => ({

    stt: (index + 1),
    code: dataD.val().code,
    discount: dataD.val().discount,
    description: dataD.val().description,
    dateStart: dataD.val().dateStart,
    dateEnd: dataD.val().dateEnd,
    show: <Link to={{
      pathname: `/webadmin/userVouchers`,
      state: {
        key: dataD.key,
        code: dataD.val().code,
      }
    }}
      className="btn btn-primary buttonEdit btn-table">Xem</Link>,
    edit: <Link to={{
      pathname: `/webadmin/formEditVouchers`,
      state: {
        key: dataD.key,
        code: dataD.val().code,
        discount: dataD.val().discount,
        description: dataD.val().description,
        dateStart: dataD.val().dateStart,
        dateEnd: dataD.val().dateEnd,
      }
    }}
      className="btn btn-success buttonEdit btn-table ">Sửa</Link>,
    delete: <Button
      className="btn btn-danger buttonEdit btn-table"
      onClick={() => deleteTutorial(dataD.key)} >Xóa</Button>

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
        label: 'Mã',
        field: 'code',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Giảm giá',
        field: 'discount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Mô tả',
        field: 'description',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Bắt đầu',
        field: 'dateStart',
        sort: 'asc',
        width: 150
      }
      ,
      {
        label: 'Kết thúc',
        field: 'dateEnd',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Xem',
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
      hover
      data={data}
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={5}
      pagesAmount={5}
      small
    // bordered
    // data={{ columns: data.columns, rows: rows }} 
    />
  );
}

export default TableContentVouchers;