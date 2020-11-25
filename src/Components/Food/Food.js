
import '../../css/Container_Body_Table.css';

import React, { useState } from 'react';
import TableFood from './TableFood';
import { Link } from "react-router-dom";

function ContainerFood(props) {
    
    console.log("------------------------------------------------")
    console.log(props.location.state)
    console.log("---------------------name-----------------------")
    console.log(props.location.state.name)
    console.log("-----------------------id---------------------")
    console.log(props.location.state.key)
    console.log("--------------------------------------------")

    const [keyKindFood, setValueKeyKindFood] = useState (props.location.state.key);
    const [nameKindFood, setValueNameKindFood] = useState (props.location.state.name);
    

    return (

        <div class="sub-container">
            <div class="title-button">
                <h1 class="titleTable">Food</h1>
                
                <Link to={{pathname: `/webadmin/formFood/${keyKindFood}&&${nameKindFood}`,state:{key: keyKindFood, name: nameKindFood }}}  className="btn btn-warning buttonAdd">ADD</Link>
            </div>
            <TableFood nameKindFood={ props.location.state.name } />
        </div>
    );
}

export default ContainerFood;




