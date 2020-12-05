import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useList } from "react-firebase-hooks/database";
import UserService from "../../Service/UserService";
import { Button } from 'react-bootstrap';

const TableContentUser = () => {

  const [dataUser, loading, error] = useList(UserService.getAllFollowStatus(0));

  const rows = dataUser.map((dataU, index) => ({
    stt: (index + 1) ,
    userID: dataU.val().userID,
    nameUser: dataU.val().nameUser,
    mailUser: dataU.val().mailUser,
    // passwordUser:dataU.val().passwordUser,
    phoneUser:dataU.val().phoneUser,
    addressUser:dataU.val().address,
    imageUser:<img src={dataU.val().imageUser} alt="" />,
    status:(dataU.val().status === 0) ? <Button variant="success">Activate</Button> : <Button variant="danger"> Delete </Button>,
    dateCreated:dataU.val().dateCreate,
    dateUpdate:dataU.val().dateUpdate,

  }));

// "Activate" : "Delete" 

  const data = {
    columns: [
      {
        label: '#',
        field: 'stt',
        sort: 'disabled',
        // width: 100
      },
      {
        label: 'ID User',
        field: 'userID',
        sort: 'asc',
        // width: 500
      }
      ,
      {
        label: 'Name',
        field: 'nameUser',
        sort: 'asc',
        // width: 150
      },
      {
        label: 'Mail',
        field: 'mailUser',
        sort: 'asc',
        // width: 100
      },
      {
        label: 'Phone',
        field: 'phoneUser',
        sort: 'asc',
        // width: 100
      },
      {
        label: 'Address',
        field: 'addressUser',
        sort: 'asc',
        // width: 150
      },
      {
        label: 'Images',
        field: 'imageUser',
        sort: 'disabled',
        // width: 100
      }
      ,
      {
        label: 'Status',
        field: 'status',
        sort: 'disabled',
        // width: 100
      }
      ,
      {
        label: 'Date Created',
        field: 'dateCreated',
        sort: 'asc',
        // width: 100
      }
      ,
      {
        label: 'Date Update',
        field: 'dateUpdate',
        sort: 'asc',
        // width: 100
      }
     
    ],

    rows: rows
    
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
}

export default TableContentUser;