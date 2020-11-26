import React, {filter} from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";

import DiscountService from "../../Service/DiscountService";
import { Button } from 'react-bootstrap';

const TableContentDiscount = (props) => {

  const [dataDiscount, loading, error] = useList(DiscountService.getAllFollowStatus(0));
  // const [dataDiscountFollowCode, loading2, error2] = useList(DiscountService.getAllFollowCode("NZPAXCKW"));

  // console.log("dataDiscount")
  // console.log(dataDiscount)
  
  function deleteTutorial (key) {
    DiscountService.remove(key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rows = dataDiscount.map((dataD, index) => ({
    
    stt: (index + 1),
    code: dataD.val().code,
    discount: dataD.val().discount,
    description: dataD.val().description,
    dateStart: dataD.val().dateStart,
    dateEnd: dataD.val().dateEnd,
    edit: <Link to={{
      pathname: `/webadmin/formEditDiscount`,
      state:{
        key: dataD.key,
        code: dataD.val().code,
        discount: dataD.val().discount,
        description: dataD.val().description,
        dateStart: dataD.val().dateStart,
        dateEnd: dataD.val().dateEnd, 
      }}}
    className="btn btn-primary buttonEdit btn-table">Edit</Link>,
    delete: <Button className="btn btn-danger buttonEdit btn-table" onClick={() => deleteTutorial(dataD.key)} variant="danger">Delete</Button>
    
    
    // <a className="btn btn-danger buttonEdit btn-table" onClick={this.deleteTutorial(dataD.key)} href="/#" role="button">Delete</a>,
    
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