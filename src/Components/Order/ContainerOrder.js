
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentOrder from './TableContentOrder';


function ContainerOrder() {

    return (
        <div className="sub-container">

            <h1 class="titleTable tile_order">Hóa đơn</h1>

            <TableContentOrder />

        </div>
    );
}

export default ContainerOrder;