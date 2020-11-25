
import '../../css/Container_Body_Table.css';

import React, { useState, useEffect } from 'react';
import TableFood from './TableFood';
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function ContainerFood({ history, match }) {

    //   const { name } = useParams();
    const { path } = match;
    const { name } = match.params;


    console.log(path)
    console.log(name)
    console.log(path.name)


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




