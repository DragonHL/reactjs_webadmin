
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentEmployees from './TableContentEmployees';


function ContainerEmployeesOverview() {


    return (
        <div className="sub-container">

            {/* <div class="container-body">
                <div class="sub-container"> */}
                    <h1 class="titleTable">Employees Overview</h1>

                    <TableContentEmployees />

                {/* </div>

            </div> */}
        </div>
    );
}

export default ContainerEmployeesOverview;