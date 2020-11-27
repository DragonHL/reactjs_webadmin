import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableContentOrder = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 150
      }
      ,
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Employee',
        field: 'empolyee',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Payment',
        field: 'payment',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Total Price',
        field: 'totalPrice',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      }
      
    ],
    rows: [
      {
        id: '1',
        user: 'System Architect',
        time: '18:35:00',
        date: '19/9/1999',
        address: '29/39 Quan 1 TP.HCM',
        phone: '7984512310',
        empolyee: 'Tom',
        payment: 'Direct payment',
        totalPrice: 'Employee',
        status:  <button type="button" class="btn btn-danger p-0">Pending</button>
      }
     ,
      {
        id: '2',
        user: 'System Architect',
        time: '18:35:00',
        date: '19/9/1999',
        address: '29/39 Quan 1 TP.HCM',
        phone: '7984512310',
        empolyee: 'Tom',
        payment: 'Direct payment',
        totalPrice: 'Employee',
        status:  <button type="button" class="btn btn-success p-0">Delivered</button>
      }
     ,
      {
        id: '3',
        user: 'System Architect',
        time: '18:35:00',
        date: '19/9/1999',
        address: '29/39 Quan 1 TP.HCM',
        phone: '7984512310',
        empolyee: 'Tom',
        payment: 'Direct payment',
        totalPrice: 'Employee',
        status:   <button type="button" class="btn btn-danger p-0">Pending</button>
      }
     ,
      
      
     
    ]
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
}

export default TableContentOrder;