
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentKindFood from './TableContentKindFood';


function ContainerKindFood() {


    return (
        <div className="sub-container">

            <div class="title-button">
                <h1 class="titleTable">Kind Food</h1>
                <a class="btn btn-warning buttonAdd" href="/formKindFood" role="button">
                    ADD </a>
                    
            </div>

            <TableContentKindFood />


        </div>
    );
}

export default ContainerKindFood;