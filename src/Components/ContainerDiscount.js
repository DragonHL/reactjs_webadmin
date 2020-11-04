
import '../css/Overview.css';
import '../css/Container_Body_Table.css';
import '../css/DataTable.css';

import TableContentDiscount from './TableContentDiscount';


function ContainerOrder() {


    return (
        <div className="body">

            <div class="container-body">
                <div class="sub-container">
                <div class="title-button">
                <h1 class="titleTable">Discount</h1>
                <a class="btn btn-warning buttonAdd" href="./From Add And Edit Discount.html" role="button">
                    ADD
                </a>
            </div>

                    <TableContentDiscount />

                </div>

            </div>
        </div>
    );
}

export default ContainerOrder;