import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useList } from 'react-firebase-hooks/database';
import OrderService from '../../Service/OrderService';
import UserService from "../../Service/UserService";
import { Button } from 'react-bootstrap';

const TableContentOrder = props => {
  const [dataBill, loading, error] = useList(OrderService.getAll());
  const [dataUser, loadingUser, errorUser] = useList(UserService.getAllFollowStatus(0));

  const StyleStatus = {
    height: '38px',
    padding: 'inherit',
    borderRadius: '4px',

  };


  const rows = dataBill.map((data, index) => ({
    stt: index + 1,
    userID: data.val().userID,
    nameUser: nameUser(data),
    address: data.val().address,
    cart: data.val().cart,
    date: data.val().date,
    payment: data.val().payment,
    phone: data.val().phone,
    status: data.val().status,
    totalprice: data.val().totalprice,
    detail: (
      <Link
        to={{
          pathname: `/webadmin/detail`,
          state: {
            cart: data.val().cart,
          },

        }}
        className="btn btn-primary buttonEdit btn-table"
      >
        Show
      </Link>
    ),

    confirm: (
      // <p className="text-white btn-confirm btn-success" >Confirm</p>
      (data.val().status === 1) ? <Button onClick={() => OrderService.updateStatus(data.key, 2)} variant="warning">Ordered</Button> :
        (data.val().status === 2) ? <Button onClick={() => OrderService.updateStatus(data.key, 3)} variant="secondary">Pending</Button> :
          (data.val().status === 3) ? <p className="text-white bg-info my-auto " style={StyleStatus} >Preparing</p> :
            (data.val().status === 4) ? <p className="text-white bg-primary my-auto" style={StyleStatus}>Delivery</p> : <p className="text-white bg-success my-auto" style={StyleStatus}>Received</p>
    ),
  }));


  function nameUser(data) {
    var nameU;
    dataUser.forEach(function (user) {
      // console.log("user.key ", user.val().userID )
      // console.log("dataUV.val().userID ", dataUV.val().userID)
      // console.log("user.val().nameUser ",user.val().nameUser)
      if (user.val().userID === data.val().userID) {
        nameU = user.val().nameUser;
      }
    })
    return nameU;
  }

  const data = {
    columns: [
      {
        label: '',
        field: 'stt',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'User ID',
        field: 'userID',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Name User',
        field: 'nameUser',
        sort: 'asc',
        width: 270,
      }
      ,
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Payment',
        field: 'payment',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Total',
        field: 'totalprice',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Detail',
        field: 'detail',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Confirm',
        field: 'confirm',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: rows,
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
};

export default TableContentOrder;
