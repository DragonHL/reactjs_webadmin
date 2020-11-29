import React, {useState} from 'react';
import {MDBDataTable} from 'mdbreact';
import OrderService from '../../Service/OrderService';
import {Link} from 'react-router-dom';
import {useList} from 'react-firebase-hooks/database';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const TableContentOrder = props => {
  const [dataBill, loading, error] = useList (OrderService.getAll ());

  const rows = dataBill.map ((data, index) => ({
    stt: index + 1,
    userID: data.val ().userID,
    address: data.val ().address,
    cart: data.val ().cart,
    date: data.val ().date,
    payment: data.val ().payment,
    phone: data.val ().phone,
    status: data.val ().status,
    totalprice: data.val ().totalprice,

  
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
      <p className="bg-success text-white btn-confirm" >Confirm</p>
    ),
  }));

  const data = {
    columns: [
      {
        label: 'STT',
        field: 'stt',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'User',
        field: 'userID',
        sort: 'asc',
        width: 270,
      },
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
      striped
      hover
      data={data}
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={5}
      pagesAmount={5}
      // bordered
    />
  );
};

export default TableContentOrder;
