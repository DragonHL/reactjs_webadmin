import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useList } from 'react-firebase-hooks/database';
import OrderService from '../../Service/OrderService';
import UserService from "../../Service/UserService";
import { Button } from 'react-bootstrap';

const TableContentOrder = props => {
  const [dataBill, loading, error] = useList(OrderService.getAll());
  const [dataUser, loadingUser, errorUser] = useList(UserService.getAllFollowStatus(0));

  const StyleStatus = {
    
    height: '62px',
    padding: 'inherit',
    borderRadius: '4px',

  };


  const rows = dataBill.map((data, index) => ({
    stt: index + 1,
    orderID: data.val().billid,
    userID: data.val().userID,
    nameUser: nameUser(data),
    address: data.val().address,
    cart: data.val().cart,
    date: data.val().date,
    payment: data.val().payment,
    phone: data.val().phone,
    // status: data.val().status,
    totalprice: data.val().totalprice,
    detail: (
      <Link
        to={{
          pathname: `/webadmin/detail`,
          state: {
            cart: data.val().cart,
          },

        }}
        className="btn btn-primary buttonEdit btn-table"
      >
        Xem
      </Link>
    ),
    //     <p className="text-white bg-primary my-auto" style={StyleStatus}>Delivery</p>
    // <p className="text-white bg-info my-auto " style={StyleStatus} >Preparing</p>
    confirm: (
      // <p className="text-white btn-confirm btn-success" >Confirm</p>
      (data.val().status === 0) ? <Button onClick={() => OrderService.updateStatus(data.key, 1)} variant="warning" style={StyleStatus}>Đặt hàng</Button> :
        (data.val().status === 1) ? <Button onClick={() => OrderService.updateStatus(data.key, 2)} variant="secondary" style={StyleStatus}>Chờ xử lý</Button> :
          (data.val().status === 2) ? <Button onClick={() => OrderService.updateStatus(data.key, 3)} variant="info" style={StyleStatus}>Chuẩn bị</Button> :
            (data.val().status === 3) ?  <p className="text-white bg-primary my-auto" style={StyleStatus}>Giao hàng</p> : 
             <p className="text-white bg-success my-auto" style={StyleStatus}>Nhận hàng</p>
    ),
  }));


  function nameUser(data) {
    var nameU;
    dataUser.forEach(function (user) {
      if (user.val().userID === data.val().userID) {
        nameU = user.val().nameUser;
      }
    })
    return nameU;
  }

  const data = {
    columns: [
      {
        label: '',
        field: 'stt',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'ID đặt hàng',
        field: 'orderID',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'ID khách hàng',
        field: 'userID',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Tên khách hàng',
        field: 'nameUser',
        sort: 'asc',
        width: 270,
      }
      ,
      {
        label: 'Địa chỉ',
        field: 'address',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Ngày',
        field: 'date',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Thanh toán',
        field: 'payment',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'SĐT',
        field: 'phone',
        sort: 'asc',
        width: 100,
      }
      // ,
      // {
      //   label: 'Status',
      //   field: 'status',
      //   sort: 'asc',
      //   width: 100,
      // }
      ,
      {
        label: 'Tổng giá',
        field: 'totalprice',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Chi tiết',
        field: 'detail',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Xác nhận',
        field: 'confirm',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: rows,
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
};

export default TableContentOrder;
