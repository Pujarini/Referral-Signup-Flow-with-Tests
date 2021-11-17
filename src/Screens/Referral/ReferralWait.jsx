import React from 'react';
import {useParams} from 'react-router-dom';

function ReferralWait() {
    const params = useParams();
    console.log(params);
    return (
        <>
        <div className="referral-wait">
            <p>{`You are in waiting line number ${params.listno}`}</p>
            
        </div>
        </>
    )
}

export default ReferralWait
