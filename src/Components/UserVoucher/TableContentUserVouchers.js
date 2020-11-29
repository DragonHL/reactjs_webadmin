import React from 'react';
import { MDBDataTable } from 'mdbreact';

import { useList } from "react-firebase-hooks/database";

import User_VouchersService from "../../Service/User_VouchersService";
import UserService from "../../Service/UserService";

import { Button } from 'react-bootstrap';


const TableContentUserVouchers = (props) => {

  const [dataUserVouchers, loadingUserVouchers, errorUserVouchers] = useList(User_VouchersService.getAllFollowVoucherId(props.voucherId));
  // const [dataUser, loadingUser, errorUser] = useList(UserService.getAll());
  const [dataUser, loadingUser, errorUser] = useList(UserService.getAllFollowStatus(0));

  console.log(dataUser)

  const rows = dataUserVouchers.map((dataUV, index) => ({
   
    stt: (index + 1),
    voucher: props.code,
    // user: name(dataUV) + dataUV.val().userID, // check User
    user: name(dataUV),
    status: (dataUV.val().status === 0) ? <Button variant="success">Not Used</Button> : <Button variant="danger">&ensp;&nbsp; Used &nbsp;&ensp;</Button>,

  }));

  function name(dataUV) {
    var nameU;
    dataUser.forEach(function (user) {
      // console.log("user.key")
      // console.log(user.key )
      // console.log("dataUV.val().userID")
      // console.log(dataUV.val().userID)
      // console.log(user.val().nameUser)
      if (user.key === dataUV.val().userID) {
        nameU = user.val().nameUser;
      }
    })
    return nameU;
  }

  console.log("rows")
  console.log(rows.user)
 

  const data = {
    columns: [
      {
        label: '',
        field: 'stt',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Voucher',
        field: 'voucher',
        sort: 'asc',
        width: 170
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
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

export default TableContentUserVouchers;




