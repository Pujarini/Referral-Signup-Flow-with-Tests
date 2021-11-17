import React from 'react';
import{useParams} from 'react-router-dom';
import './Referral.css';

function ReferralSucess() {
    const params= useParams();
    return (
        <div className="referral-success">
            <div className="content">Congratulations! you got referred 🎉
            <p>{`Candidate ID: ${params.candidateId}`}</p>
            </div>
        </div>
    )
}

export default ReferralSucess;