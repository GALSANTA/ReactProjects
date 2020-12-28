import React from 'react';
import { useParams } from 'react-router-dom';

function Param() {
    const { id } = useParams();
    return(
        <div className="Param">
            {id}
        </div>
    );
}

export default Param;