
import '../../css/Container_Body_Table.css';


import TableFood from './TableFood';
import {Link} from "react-router-dom";

function ContainerFood() {
    return (

        <div class="sub-container">
            <div class="title-button">
                <h1 class="titleTable">Food</h1>
          
                {/* <a class="btn btn-warning buttonAdd" href="./From Add And Edit Food.html" role="button">
                    ADD
                </a> */}
                <Link to="/formFood" className="btn btn-warning buttonAdd">ADD</Link>
            </div>
            <TableFood />
        </div>
    );
}

export default ContainerFood;




