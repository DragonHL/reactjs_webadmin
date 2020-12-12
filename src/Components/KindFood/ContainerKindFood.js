
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentKindFood from './TableContentKindFood';

import {Link} from "react-router-dom";

function ContainerKindFood( ) {



    return (
        <div className="sub-container">

            <div class="title-button">
                <h1 class="titleTable">Loại món</h1>

                <Link 
                to = "/webadmin/formInsertKindFood" 
                className = "linkSideBar btn btn-warning buttonAdd">Thêm mới</Link> 
                    
            </div>

            <TableContentKindFood />


        </div>
    );
}

export default ContainerKindFood;