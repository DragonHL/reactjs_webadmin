import React, { useState, Component, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { MDBDataTable } from 'mdbreact';
import Firebase from "../../FirebaseCofig/Firebase";
import EmployeeService from "../../Service/EmployeeService";

import FormInsert from "../EmployeesOverview/FormInsert_EditEmployees"
import {Link} from "react-router-dom";

const TableContentEmployees = () => {

    /* use react-firebase-hooks */
  const [dataEmployees, loading, error] = useList(EmployeeService.getAll());

  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);

  // const setActiveTutorial = (tutorial, index) => {
  //   const {
  //     id,
  //     name,
  //     // age,
  //     // mail,
  //     phone,
  //     address,
  //     birthday,
  //     images,
  //     startWork,
  //     endWork,
  //     role, } = tutorial.val();

  //   setCurrentTutorial({
  //     id: tutorial.key,
  //     name,
  //     // age,
  //     // mail,
  //     phone,
  //     address,
  //     birthday,
  //     images,
  //     startWork,
  //     endWork,
  //     role,
  //   });

  //   setCurrentIndex(index);
  // }
  // console.log(tutorials) // data

  const rows = dataEmployees.map((dataE, index) => ({
    stt: (index + 1),
    name: dataE.val().name,
    age: dataE.val().age,
    mail: dataE.val().mail,
    phone: dataE.val().phone,
    address: dataE.val().address,
    birthday: dataE.val().birthday,
    images: <img src={dataE.val().imageUrl} alt="" />,
    startWork: dataE.val().startWork,
    endWork: dataE.val().endWork,
    role: dataE.val().role,
    edit: <Link to="/webadmin/formEmployee" className="btn btn-primary buttonEdit btn-table">Edit</Link>,
    delete: <a className="btn btn-danger buttonEdit btn-table" href="/#" role="button">Delete</a>,
  }));



  const data = {
    columns: [
      {
        label: 'STT',
        field: 'stt',
        sort: 'asc',
        width: 20
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Birthday',
        field: 'birthday',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Images',
        field: 'images',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start Work',
        field: 'startWork',
        sort: 'asc',
        width: 100
      },
      {
        label: 'End Work',
        field: 'endWork',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Role',
        field: 'role',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100
      },
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

      // data={{ columns: data.columns, rows: rows }} 
      // bordered

    />

  );

}

export default TableContentEmployees;