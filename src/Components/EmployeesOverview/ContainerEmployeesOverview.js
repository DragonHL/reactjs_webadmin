
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentEmployees from './TableContentEmployees';

import {Link} from "react-router-dom";

function ContainerEmployeesOverview() {


    return (
        <div className="sub-container">

            {/* <div class="container-body">
                <div class="sub-container"> */}
                <div class="title-button">
                    <h1 class="titleTable">Nhân viên</h1>
                    <Link to="/webadmin/formInsertEmployee" className="linkSideBar btn btn-warning buttonAdd">Thêm mới</Link> 
                </div>
                    
                    <TableContentEmployees />

                {/* </div>

            </div> */}
        </div>
    );
}

export default ContainerEmployeesOverview;