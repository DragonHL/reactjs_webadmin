import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";

const TableContentDiscount = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Code',
        field: 'code',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Discount',
        field: 'discount',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Date Start',
        field: 'dateStart',
        sort: 'asc',
        width: 150
      }
      ,
      {
        label: 'Date End',
        field: 'dateEnd',
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
    rows: [
      {
        id: '1',
        code: '9999999',
        discount: '10%',
        description: 'SALE 10%',
        dateStart: '25/10/2020',
        dateEnd: '7984512310',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#" role="button">
          //   Edit </a>
          <Link to="/formDiscount" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a className="btn btn-danger buttonEdit btn-table" href="/#" role="button">
            Delete</a>,

      }
      ,
      {
        id: '1',
        code: '9999999',
        discount: '10%',
        description: 'SALE 10%',
        dateStart: '25/10/2020',
        dateEnd: '7984512310',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#" role="button">
          //   Edit </a>
          <Link to="/formDiscount" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a class="btn btn-danger buttonEdit btn-table" href="/#" role="button">
            Delete</a>,

      }
      ,
      {
        id: '1',
        code: '9999999',
        discount: '10%',
        description: 'SALE 10%',
        dateStart: '25/10/2020',
        dateEnd: '7984512310',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#" role="button">
          //   Edit </a>
          <Link to="/formDiscount" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a class="btn btn-danger buttonEdit btn-table" href="/#" role="button">
            Delete</a>,

      }
      ,




    ]
  };

  return (
    <MDBDataTable
      striped
      // bordered
      hover
      data={data}
    />
  );
}

export default TableContentDiscount;