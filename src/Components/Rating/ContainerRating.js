
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableRating from './TableRating';


function ContainerRating() {


    return (
        <div className="sub-container">

            <h1 class="titleTable">Đánh giá</h1>

            <TableRating />

        </div>
    );
}

export default ContainerRating;