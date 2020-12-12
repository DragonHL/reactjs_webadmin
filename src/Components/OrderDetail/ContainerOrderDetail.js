
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentOrderDetail from './TableContentOrderDetail';

function ContainerOrderDetail(props) {
    // oucherId={props.location.state.key} code={props.location.state.code}
    // console.log(props.location.state.cart)
    return (
        <div className="sub-container">

            <h1 class="titleTable">Chi tiết hóa đơn</h1>

            <TableContentOrderDetail 
            // voucherId={props.location.state.key} 
            // code={props.location.state.code} 
            cart= {props.location.state.cart}
            />

        </div>
    );
}

export default ContainerOrderDetail;