
import '../css/Overview.css';
import '../css/Container_Body_Table.css';
import '../css/DataTable.css';

import TableContentOrder from './TableContentOrder';


function ContainerOrder() {


    return (
        <div className="body">

            <div class="container-body">
                <div class="sub-container">
                <h1 class="titleTable">Order</h1>

                    <TableContentOrder />

                </div>

            </div>
        </div>
    );
}

export default ContainerOrder;