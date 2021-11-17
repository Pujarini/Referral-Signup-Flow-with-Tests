import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate} from "react-router-dom";
import './Referral.css';

export default function Referral() {
  const [show, setshow] = useState(false);
  const [referralCode, setreferralCode] = useState("");
  const [errors, seterrors] = useState(null);
  const navigate= useNavigate();

  function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

  const handleCode = (e) => {
    setreferralCode(e.target.value);
    seterrors("")
  };

  const verifyCode = (e) => {
    if (referralCode === "ABHI") {
      navigate(`/referral/${uuid()}`);
    }
    seterrors("This is an incorrect code")
  };


  return (
    <div className="referral-container">
      <h2>Referral Screen</h2>
      <button className="yes-referral-code" onClick={() => setshow(!show)}>Do you have referral code?</button>
      <button className="no-referral-code" onClick={()=> navigate(`/referral/wait/${randomNumber(1,1000)}`)}>
        Nah I don't have referral code
      </button>
      {show && (
        <div className="referral-input">
          <input
            type="text"
            placeholder="type referral code"
            value={referralCode}
            onChange={(e) => handleCode(e)}
          ></input>
          <p className="errors">{errors}</p>
          <button onClick={verifyCode}>Verify</button>
        </div>
      )}
    </div>
  );
}
