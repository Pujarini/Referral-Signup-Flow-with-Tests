import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './OTPCheck.css';

function OTPCheck() {
const [otp, setotp] = useState(new Array(4).fill(""));
const [verificationmsg, setverificationmsg] = useState("");
const navigate = useNavigate();

// const  randomNumber=(min, max)=> { 
//     return Math.floor(Math.random() * (max - min) + min);
// } 

const handleChange = (e,index)=>{
    if(isNaN(e.value)) return false;
    setotp([...otp.map((data,idx)=> (idx === index ? e.value : data))]);
    setverificationmsg("")
    if(e.nextSibling){
        e.nextSibling.focus();
    }
}

const verifyOTP = ()=>{
    if(otp.join('')==="7878"){
        navigate("/referral");
    }
    if(!otp.join("")){
        setverificationmsg("Please Enter OTP");
    }else{
    setverificationmsg("OOPS! you entered wrong OTP ");
    }

} 

const clearOTP = ()=>{
    setotp([...otp.map(e=> "")])
    setverificationmsg("")
}
    
    return (
        <div className="otp-container">
           <h4>Enter the otp for verification</h4>
           <div className="user-input">
           {otp.map((data,index)=>{
               return(
                   <input className="otp-field"
                   type="text"
                   name="otp"
                   maxLength="1"
                   key={index}
                   value={data}
                   onChange={(e)=>handleChange(e.target,index)}
                   >
                   </input>
               )
           })}
           </div>
           <p className="error">{verificationmsg}</p>
           <p className="otp">{`Generated otp is 7878`}</p>
           <div className="otp-operations">
           <button onClick={clearOTP} className="clear-otp-button">clear</button>
           <button onClick={verifyOTP} className="verify-otp-button">Verify Otp</button>
           </div>
        </div>
    )
}

export default OTPCheck;
