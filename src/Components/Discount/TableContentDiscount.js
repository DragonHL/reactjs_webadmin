import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";

import DiscountService from "../../Service/DiscountService";

const TableContentDiscount = () => {

  const [dataDiscount, loading, error] = useList(DiscountService.getAll());

  const rows = dataDiscount.map((tutorial, index) => ({
    stt: (index + 1),
    code: tutorial.val().code,
    discount: tutorial.val().discount,
    description: tutorial.val().description,
    dateStart: tutorial.val().dateStart,
    dateEnd: tutorial.val().dateEnd,
    edit: <Link to="/webadmin/formDiscount" className="btn btn-primary buttonEdit btn-table">Edit</Link>,
    delete: <a className="btn btn-danger buttonEdit btn-table" href="/#" role="button">Delete</a>,
    
  }));


  const data = {
    columns: [
      {
        label: '',
        field: 'stt',
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

export default TableContentDiscount;