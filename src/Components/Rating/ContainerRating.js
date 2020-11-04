
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableRating from './TableRating';


function ContainerRating() {


    return (
        <div className="sub-container">

            {/* <div class="container-body">
                <div class="sub-container"> */}
                    <h1 class="titleTable">Rating</h1>
                  

                    <TableRating />

                {/* </div>

            </div> */}
        </div>
    );
}

export default ContainerRating;