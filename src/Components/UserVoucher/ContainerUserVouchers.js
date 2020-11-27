
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';
import { Link } from "react-router-dom";


import TableContentUserVouchers from './TableContentUserVouchers';


function ContainerUserVouchers(props) {
    // oucherId={props.location.state.key} code={props.location.state.code}

    return (
        <div className="sub-container">

                <h1 class="titleTable">User Vouchers</h1>


            <TableContentUserVouchers voucherId={props.location.state.key} code={props.location.state.code}/>

        </div>
    );
}

export default ContainerUserVouchers;