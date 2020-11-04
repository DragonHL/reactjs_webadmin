
import '../css/Overview.css';
import '../css/Container_Body_Table.css';
import '../css/DataTable.css';

import TableContentKindFood from './TableContentKindFood';


function ContainerKindFood() {


    return (
        <div className="body">

            <div class="container-body">
                <div class="sub-container">
                    <div class="title-button">
                        <h1 class="titleTable">Kind Food</h1>
                        <a class="btn btn-warning buttonAdd" href="./From Add And Edit Kind Food.html" role="button">
                            ADD </a>
                    </div>

                    <TableContentKindFood />

                </div>

            </div>
        </div>
    );
}

export default ContainerKindFood;