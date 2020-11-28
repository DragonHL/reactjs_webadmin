
import '../../css/Overview.css';
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';


import TableContentUser from './TableContentUser';


function ContainerUserOverview() {


    return (
        <div className="sub-container">

            <h1 class="titleTable">User Overview</h1>

            <TableContentUser />

        </div>
    );
}

export default ContainerUserOverview;