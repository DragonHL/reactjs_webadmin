
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';
import { Link } from "react-router-dom";


import TableContentDiscount from './TableContentDiscount';


function ContainerDiscount() {


    return (
        <div className="sub-container">
            
            <div class="title-button">
                <h1 class="titleTable">Discount</h1>
                {/* <a class="btn btn-warning buttonAdd" href="./From Add And Edit Discount.html" role="button">
                    ADD
                </a> */}
                <Link to="/webadmin/formInsertDiscount" className="btn btn-warning buttonAdd">ADD</Link>
            </div>

            <TableContentDiscount />

        </div>
    );
}

export default ContainerDiscount;