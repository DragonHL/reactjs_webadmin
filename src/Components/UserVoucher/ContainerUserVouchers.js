
import '../../css/Container_Body_Table.css';
import '../../css/DataTable.css';

import TableContentUserVouchers from './TableContentUserVouchers';

import React, { useState } from 'react';

function ContainerUserVouchers(props) {
    // oucherId={props.location.state.key} code={props.location.state.code}
    const [valueVoucherId, setVoucherID] = useState(props.location.state.key);
    const [valueCode, setCode] = useState(props.location.state.code);

    return (
        <div className="sub-container">

            <h1 class="titleTable">Danh sách giảm giá</h1>

            <TableContentUserVouchers 
            voucherId={valueVoucherId} 
            code={valueCode} 
            />

        </div>
    );
}

export default ContainerUserVouchers;