import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableRating = () => {
  const data = {
    columns: [

      {
        label: 'User',
        field: 'user',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Name Food',
        field: 'nameFood',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Start',
        field: 'start',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Favorite',
        field: 'favorite',
        sort: 'asc',
        width: 150
      }
      ,
      {
        label: 'Comments',
        field: 'comments',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      }
     
      
    ],
    rows: [
      {
        user: 'System Architect',
        nameFood: 'Cake',
        start: '5',
        favorite: 'Like',
        comments: 'Null',
        date: '5/11/2020',
      }
     ,
      {
        user: 'System Architect',
        nameFood: 'Cake',
        start: '5',
        favorite: 'Like',
        comments: 'Null',
        date: '5/11/2020',
      }
     ,
      {
        user: 'System Architect',
        nameFood: 'Cake',
        start: '5',
        favorite: 'Like',
        comments: 'Null',
        date: '5/11/2020',
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

export default TableRating;