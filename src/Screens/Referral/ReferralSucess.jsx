import React from 'react';
import{useParams} from 'react-router-dom';

function ReferralSucess() {
    const params= useParams();
    console.log(params);
    return (
        <div>
            Hey! you got referred 
            <p>{`Candidate ID: ${params.candidateId}`}</p>
        </div>
    )
}

export default ReferralSucess;