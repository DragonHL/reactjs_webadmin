
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';
import { Link } from "react-router-dom";


import TableContentVouchers from './TableContentVouchers';


function ContainerVouchers() {


    return (
        <div className="sub-container">
            
            <div class="title-button">
                <h1 class="titleTable">Vouchers</h1>
                {/* <a class="btn btn-warning buttonAdd" href="./From Add And Edit Discount.html" role="button">
                    ADD
                </a> */}
                <Link to="/webadmin/formInsertVouchers" className="btn btn-warning buttonAdd">ADD</Link>
            </div>

            <TableContentVouchers />

        </div>
    );
}

export default ContainerVouchers;