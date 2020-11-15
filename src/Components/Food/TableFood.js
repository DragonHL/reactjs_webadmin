import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link} from "react-router-dom";

const TableFood = () => {
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
        label: 'Information',
        field: 'information',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Kind Food',
        field: 'kindFood',
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
        information: '19',
        kindFood:'Cake',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
          <Link to="/webadmin/formFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
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
            src="https://www.lifeloveandsugar.com/wp-content/uploads/2018/01/Moist-Vanilla-Layer-Cake5.jpg"
            alt="" />,
        information: '19',
        kindFood:'Cake',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
          <Link to="/webadmin/formFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
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
            src="https://www.lifeloveandsugar.com/wp-content/uploads/2018/01/Moist-Vanilla-Layer-Cake5.jpg"
            alt="" />,
        information: '19',
        kindFood:'Cake',
        edit:
          // <a class="btn btn-primary buttonEdit btn-table" href="/#"
          //   target="_blank"
          //   role="button">
          //   Edit</a>
          <Link to="/webadmin/formFood" className="btn btn-primary buttonEdit btn-table">Edit</Link>
        ,
        delete:
          <a class="btn btn-danger buttonDelete btn-table" href="/#"
            target="_blank"
            role="button">
            Delete</a>
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

export default TableFood;