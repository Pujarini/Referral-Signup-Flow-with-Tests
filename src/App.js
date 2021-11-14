import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./Screens/SignUp/SignUpForm";
import { Routes, Route } from "react-router-dom";
import OTPCheck from "./Screens/OTPCheck/OTPCheck";
import Referral from "./Screens/Referral/Referral";
import ReferralSucess from "./Screens/Referral/ReferralSucess";
import ReferralWait from "./Screens/Referral/ReferralWait";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="otp" element={<OTPCheck />} />
      <Route path="referral" element={<Referral />} />
      <Route path="/referral/:candidateId" element={<ReferralSucess />} />
      <Route path="/referral/wait/:listno" element={<ReferralWait />} />
    </Routes>
  );
}

export default App;
