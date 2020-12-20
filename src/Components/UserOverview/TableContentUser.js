import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useList } from "react-firebase-hooks/database";
import UserService from "../../Service/UserService";
import { Button } from 'react-bootstrap';

const TableContentUser = () => {

  const [dataUser, loading, error] = useList(UserService.getAllFollowStatus(0));

  const rows = dataUser.map((dataU, index) => ({
    stt: (index + 1) ,
    userID: dataU.val().userID,
    nameUser: dataU.val().nameUser,
    mailUser: dataU.val().mailUser,
    phoneUser:dataU.val().phoneUser,
    addressUser:dataU.val().address,
    imageUser:<img src={dataU.val().imageUser} alt="" />,
    status:(dataU.val().status === 0) ? <Button variant="success">Hoạt động</Button> : <Button variant="danger"> Không hoạt động </Button>,
    dateCreated:dataU.val().dateCreate,
    dateUpdate:dataU.val().dateUpdate,

  }));



  const data = {
    columns: [
      {
        label: '#',
        field: 'stt',
        sort: 'disabled',
        // width: 100
      },
      {
        label: 'ID Người dùng',
        field: 'userID',
        sort: 'asc',
        // width: 500
      }
      ,
      {
        label: 'Tên',
        field: 'nameUser',
        sort: 'asc',
        // width: 150
      },
      {
        label: 'Mail',
        field: 'mailUser',
        sort: 'asc',
        // width: 100
      },
      {
        label: 'SĐT',
        field: 'phoneUser',
        sort: 'asc',
        // width: 100
      },
      {
        label: 'Địa chỉ',
        field: 'addressUser',
        sort: 'asc',
        // width: 150
      },
      {
        label: 'Ảnh',
        field: 'imageUser',
        sort: 'disabled',
        // width: 100
      }
      ,
      {
        label: 'Trạng thái',
        field: 'status',
        sort: 'disabled',
        // width: 100
      }
      ,
      {
        label: 'Ngày tạo',
        field: 'dateCreated',
        sort: 'asc',
        // width: 100
      }
      ,
      {
        label: 'Cập nhật',
        field: 'dateUpdate',
        sort: 'asc',
        // width: 100
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
    />
  );
}

export default TableContentUser;