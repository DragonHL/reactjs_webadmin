import React, { useState } from 'react';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentOrderDetail from './TableContentOrderDetail';
import ContainerTrackOrder from './ContainerTrackOrder';



function ContainerOrderDetail(props) {

//   const [dataDetail, setDataDetail] = useState(props.location.state.cart);

    return (
        <div className="sub-container">

            <h1 class="titleTable">Chi tiết hóa đơn</h1>

            <TableContentOrderDetail 
            cart={props.location.state.cart}
            />
            <div className="line-top-track-order"></div>
            <ContainerTrackOrder 
            orderID = {props.location.state.orderID}
            userID= {props.location.state.userID}
            />
        </div>
    );
}

export default ContainerOrderDetail;