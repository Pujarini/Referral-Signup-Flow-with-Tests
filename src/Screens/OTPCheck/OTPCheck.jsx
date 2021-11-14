import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function OTPCheck() {
const [otp, setotp] = useState(new Array(4).fill(""));
const [verificationmsg, setverificationmsg] = useState("");
const navigate = useNavigate();

const  randomNumber=(min, max)=> { 
    return Math.floor(Math.random() * (max - min) + min);
} 

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
    setverificationmsg("OOPS! you entered wrong OTP ");

} 

const clearOTP = ()=>{
    setotp([...otp.map(e=> "")])
}
    
    return (
        <div>
           <p>Enter the otp for verification</p>
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
           <p>{verificationmsg}</p>
           <p>{`Generated otp is 7878`}</p>
           <button onClick={clearOTP}>clear</button>
           <button onClick={verifyOTP}>Verify Otp</button>
        </div>
    )
}

export default OTPCheck;
