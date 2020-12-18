import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';

import { useList } from "react-firebase-hooks/database";

import User_VouchersService from "../../Service/User_VouchersService";
import UserService from "../../Service/UserService";

import { Button } from 'react-bootstrap';


const TableContentUserVouchers = (props) => {
  const [voucherId, setVoucherID] = useState(props.voucherId);

  const [dataUserVouchers, loadingUserVouchers, errorUserVouchers] = useList(User_VouchersService.getAllFollowVoucherId(voucherId));

  const [dataUser, loadingUser, errorUser] = useList(UserService.getAllFollowStatus(0));


  const rows = dataUserVouchers.map((dataUV, index) => ({
   
    stt: (index + 1),
    voucher: props.code,
    idUser: dataUV.val().userID,
    user: name(dataUV),
    status: (dataUV.val().status === 0) ? <Button variant="success">Not Used</Button> : <Button variant="danger" style={{width: "92.6px"}} >Used</Button>,

  }));

  function name(dataUV) {
    var nameU;
    dataUser.forEach(function (user) {
      // console.log("user.key ", user.val().userID )
      // console.log("dataUV.val().userID ", dataUV.val().userID)
      // console.log("user.val().nameUser ",user.val().nameUser)
      if (user.val().userID === dataUV.val().userID) {
        nameU = user.val().nameUser;
      }
    })
    return nameU;
  }

  
  // console.log("rows")
  // console.log(rows.user)
 

  const data = {
    columns: [
      {
        label: '#',
        field: 'stt',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Giảm giá',
        field: 'voucher',
        sort: 'asc',
        width: 170
      },
      {
        label: 'ID khách hàng',
        field: 'idUser',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Tên khách hàng',
        field: 'user',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Trạng thái',
        field: 'status',
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
      small
    // bordered
    // data={{ columns: data.columns, rows: rows }} 
    />
  );
}

export default TableContentUserVouchers;




