
import '../css/Overview.css';
import '../css/Container_Body_Table.css';
import '../css/DataTable.css';

import TableContentCustomers from './TableContentCustomers';


function ContainerCustomersOverview() {


    return (
        <div className="body">

            <div class="container-body">
                <div class="sub-container">
                    <h1 class="titleTable">Customers Overview</h1>

                    <TableContentCustomers />

                </div>

            </div>
        </div>
    );
}

export default ContainerCustomersOverview;