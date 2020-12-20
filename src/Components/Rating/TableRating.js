import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useList } from "react-firebase-hooks/database";
import RatingService from "../../Service/RatingService";
import moment from 'moment';

const TableRating = () => {

  const [dataRating, loading, error] = useList(RatingService.getAll());
  

  const rows = dataRating.map((dataR, index) => ({
    stt: (index + 1),
    nameUser: dataR.val().nameUser,
    comments: dataR.val().comments,
    food: dataR.val().foodID,
    favorite: (
      dataR.val().favorite === true) ?
      <img src="https://i.pinimg.com/originals/ee/31/7f/ee317f106d13672c84d1b8b3d544ddd5.gif" alt="Heart Red" /> :
      <img src="https://www.businessinsider.in/photo/67860158/heres-every-single-new-emoji-arriving-in-2019/White-heart.jpg" alt="Heart White" />,
    star: dataR.val().star,
    date: moment(dataR.val().date).format('DD-MM-YYYY'),

  }));


  const data = {
    columns: [

      {
        label: '',
        field: 'stt',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Tên khách hàng',
        field: 'nameUser',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Bình luận',
        field: 'comments',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Món ăn',
        field: 'food',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Yêu thích',
        field: 'favorite',
        sort: 'disabled',
        width: 150
      }
      ,
      {
        label: 'Số Sao',
        field: 'star',
        sort: 'asc',
        width: 50
      }
      ,
      {
        label: 'Ngày',
        field: 'date',
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
    />
  );
}

export default TableRating;