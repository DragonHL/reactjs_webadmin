
import '../../css/Container_Body_Table.css';

import React, { useState } from 'react';
import TableFood from './TableFood';
import { Link } from "react-router-dom";

function ContainerFood(props) {

    // console.log("------------------------------------------------")
    // console.log(props.location.state)
    // console.log(props.location.state.key)

    const [keyKindFood, setValueKeyKindFood] = useState (props.location.state.keyKindFood);
    const [nameKindFood, setValueNameKindFood] = useState (props.location.state.nameKindFood);


    return (

        <div class="sub-container">
            <div class="title-button">
                <h1 class="titleTable">{nameKindFood}</h1>

                <Link to={{
                    pathname: `/webadmin/formInsertFood`,
                    state: {
                        keyKindFood: keyKindFood,
                        nameKindFood: nameKindFood
                    }
                }}
                    className="btn btn-warning buttonAdd">Thêm mới</Link>

            </div>

            <TableFood
                keyKindFood={keyKindFood}
                nameKindFood={nameKindFood}
            />

        </div>
    );
}

export default ContainerFood;




