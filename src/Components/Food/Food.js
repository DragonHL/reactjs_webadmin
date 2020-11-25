
import '../../css/Container_Body_Table.css';

import React from 'react';
import TableFood from './TableFood';
import { Link } from "react-router-dom";

// 
function ContainerFood(props) {


    console.log(props.location.state)
    console.log("---------------------name-----------------------")
    console.log(props.location.state.name)
    console.log("-----------------------id---------------------")
    console.log(props.location.state.id)
    console.log("--------------------------------------------")


    return (

        <div class="sub-container">
            <div class="title-button">
                <h1 class="titleTable">Food</h1>
                <Link to="/webadmin/formFood" className="btn btn-warning buttonAdd">ADD</Link>
            </div>
            <TableFood />
        </div>
    );
}

export default ContainerFood;




