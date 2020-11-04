import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableContentCustomers = () => {
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
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Mail',
        field: 'mail',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 150
      }
      ,
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Birthday',
        field: 'birthday',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Images',
        field: 'images',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Start Work',
        field: 'startWork',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'End Work',
        field: 'endWork',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Role',
        field: 'role',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        id: '1',
        name: 'System Architect',
        age: '18',
        mail: 'sa@gmail.com',
        phone: '78946512',
        address: '29/39 Quan 1 TP.HCM',
        birthday: '19/9/1999',
        images: 
        <img
        src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  
        alt=""/>,
        startWork: '19/9/2019',
        endWork: 'Null',
        role: 'Employee',
      }
     ,
      {
        id: '2',
        name: 'System Architect',
        age: '18',
        mail: 'sa@gmail.com',
        phone: '78946512',
        address: '29/39 Quan 1 TP.HCM',
        birthday: '19/9/1999',
        images: 
        <img
        src="https://image1.masterfile.com/getImage/NjE0LTA5MTI3NDc0ZW4uMDAwMDAwMDA=AJ4TBp/614-09127474en_Masterfile.jpg"  
        alt=""/>,
        startWork: '19/9/2019',
        endWork: 'Null',
        role: 'Employee',
      }
     ,
      {
        id: '3',
        name: 'System Architect',
        age: '18',
        mail: 'sa@gmail.com',
        phone: '78946512',
        address: '29/39 Quan 1 TP.HCM',
        birthday: '19/9/1999',
        images: 
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6zzLUMeSm7zTuL65asWu07V0X5K376rFdJw&usqp=CAU" 
        alt=""/>,
        startWork: '19/9/2019',
        endWork: 'Null',
        role: 'Employee',
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

export default TableContentCustomers;