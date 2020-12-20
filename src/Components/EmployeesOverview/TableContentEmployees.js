import React from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';

import EmployeeService from "../../Service/EmployeeService";
import { Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

const TableContentEmployees = (props) => {

  /* use react-firebase-hooks */
  const [dataEmployees, loading, error] = useList(EmployeeService.getAllFollowStatus(0));


  function deleteEmployee (key) {
    EmployeeService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rows = dataEmployees.map((dataE, index) => ({
    stt: (index + 1),
    name: dataE.val().name,
    phone: dataE.val().phone,
    address: dataE.val().address,
    birthday: dataE.val().birthday,
    images: <img src={dataE.val().imageUrl} alt=""/>,
    startWork: dataE.val().startWork,
    endWork: dataE.val().endWork,
    role: dataE.val().role,

    edit: <Link to={{
      pathname: `/webadmin/formEditEmployee/${dataE.val().name}&&${dataE.key}`,
      state: {
        name: dataE.val().name, key: dataE.key, phone: dataE.val().phone, address: dataE.val().address,
        birthday: dataE.val().birthday, imagesUrl: dataE.val().imageUrl,
        startWork: dataE.val().startWork, endWork: dataE.val().endWork, role: dataE.val().role,
      }
    }}
      className="btn btn-success buttonEdit btn-table">Sửa</Link>,
    delete: <Button className="btn btn-danger btn-table" onClick={() => deleteEmployee(dataE.key)} >Xóa</Button>
    
    
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
        label: 'Tên',
        field: 'name',
        sort: 'asc',
        width: 170
      },
      {
        label: 'SĐT',
        field: 'phone',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Địa chỉ',
        field: 'address',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Ngày sinh',
        field: 'birthday',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Ảnh',
        field: 'images',
        sort: 'disabled',
        width: 100
      },
      {
        label: 'Bắt đầu',
        field: 'startWork',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Kết thúc',
        field: 'endWork',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Quyền',
        field: 'role',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sửa',
        field: 'edit',
        sort: 'disabled',
        width: 100
      },
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
    // data={{ columns: data.columns, rows: rows }} 
    // bordered

    />

  );

}

export default TableContentEmployees;