import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link,Outlet,useNavigate} from "react-router-dom";

export default function Referral() {
  const [show, setshow] = useState(false);
  const [referralCode, setreferralCode] = useState("");
  const [errors, seterrors] = useState(null);
  const navigate= useNavigate();

  function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

  const handleCode = (e) => {
    // console.log(e.target.value);
    setreferralCode(e.target.value);
  };

  const verifyCode = (e) => {

    // referralCode
    if (referralCode === "ABHI") {
      navigate(`/referral/${uuid()}`);
      // <Outlet/>
    }
console.log("no match");
    

    //  console.log(referralCode);
  };


  return (
    <div>
      Hi you are on referral Screen
      {show && (
        <>
          <input
            type="text"
            placeholder="type referral code"
            value={referralCode}
            onChange={(e) => handleCode(e)}
          ></input>
          <button onClick={verifyCode}>Verify</button>
        </>
      )}
      <button onClick={() => setshow(true)}>Do you have referral code?</button>
      <button onClick={()=> navigate(`/referral/wait/${randomNumber(1,1000)}`)}>
        Nah I don't have referral code
      </button>
    </div>
  );
}
