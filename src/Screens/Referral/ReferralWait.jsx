import React from 'react';
import {useParams} from 'react-router-dom';

function ReferralWait() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            {`You are in waiting line number ${params.listno}`}
        </div>
    )
}

export default ReferralWait
