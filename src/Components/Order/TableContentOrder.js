import React, { useEffect } from 'react';
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
    // paddingTop: '18px ',
    borderRadius: '4px',
    minWidth: '100px'

  };

  const StyleStatus2 = {
    height: '62px',
    paddingTop: '18px ',
    borderRadius: '4px',
    minWidth: '100px',
    marginBottom: '0'
  }

  useEffect(() => {
    bill()

  }, [dataBill, dataUser])

  function bill() {
    var arrItem = [];
    dataBill.forEach(function (currentValue) {
      arrItem.push(currentValue)
    })
    return arrItem;
  }

  


  const rows = bill().map((data, index) => ({
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
            orderID: data.val().billid,
            nameUser: nameUser(data),
            imageUser: imageUser(data),
            date: data.val().date,
            status: data.val().status,
            totalprice: data.val().totalprice,
            userID: data.val().userID,
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
            (data.val().status === 3) ? <p className="text-white bg-primary" style={StyleStatus2}>Giao hàng</p> :
              <p className="text-white bg-success my-auto" style={StyleStatus2}>Nhận hàng</p>
    ),
  }));

  console.log("rows ==========> ", rows)
  function nameUser(data) {
    var nameU;
    dataUser.forEach(function (user) {
      if (user.val().userID === data.val().userID) {
        nameU = user.val().nameUser;
      }
    })
    return nameU;
  }

  function imageUser(data) {
    var imgUser;
    dataUser.forEach(function (user) {
      if (user.val().userID === data.val().userID) {
        imgUser = user.val().imgUser;
      }
    })
    return imgUser;
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
        width: 150,
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
