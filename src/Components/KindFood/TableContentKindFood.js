import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link} from "react-router-dom";

const TableContentKindFood = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Images',
        field: 'images',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Quantity',
        field: 'quantity',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Show Food',
        field: 'show',
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
        name: 'System Architect',
        images:
          <img
            src="https://www.lifeloveandsugar.com/wp-content/uploads/2018/01/Moist-Vanilla-Layer-Cake5.jpg"
            alt="" />,
        quantity: '19',
        show:
          // <a class="btn btn-primary buttonShow btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Show </a>
          <Link to="/food" className="btn btn-primary buttonShow btn-table">Show</Link>
        ,
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
            <Link to="/formKindFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a class="btn btn-danger buttonDelete btn-table" href="/#"
            target="_blank"
            role="button">
            Delete</a>
      }
      ,
      {
        id: '2',
        name: 'System Architect',
        images:
          <img
            src="https://i.pinimg.com/564x/16/8f/d5/168fd5b9097a7729297651ba613ede5f.jpg"
            alt="" />,
        quantity: '19',
        show:
          // <a class="btn btn-primary buttonShow btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Show </a>
          <Link to="/food" className="btn btn-primary buttonShow btn-table">Show</Link>
        ,
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
          <Link to="/formKindFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a class="btn btn-danger buttonDelete btn-table" href="/#"
            target="_blank"
            role="button">
            Delete</a>
      }
      ,
      {
        id: '3',
        name: 'System Architect',
        images:
          <img
            src="https://i.pinimg.com/564x/eb/ef/9b/ebef9b5a9be2c4d4c7b259fc76a93dd9.jpg"
            alt="" />,
        quantity: '19',
        show:
          // <a class="btn btn-primary buttonShow btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Show </a>
            <Link to="/food" className="btn btn-primary buttonShow btn-table">Show</Link>
        ,
        edit:
          // <a className="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
          <Link to="/formKindFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a className="btn btn-danger buttonDelete btn-table" href="/#" role="button"
            target="_blank"
          >
            Delete</a>
      }




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

export default TableContentKindFood;