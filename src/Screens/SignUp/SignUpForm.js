import React, { useState, useRef } from "react";
import Validator from "validator";
import {
  emptyConfirmPassword,
  emptyEmail,
  emptyPassword,
  matchPasswords,
  validEmail,
} from "../../constants/appConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;

const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash}/>;

function SignUpForm() {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = formdata;
  const [show, setshow] = useState(false);
  const [errors, seterrors] = useState({})
  const pass = useRef();

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validateForm = ()=>{
      let isValid= true
    if(Validator.isEmpty(email)){
        isValid= true;
        seterrors({email:emptyEmail})
    }else if(Validator.isEmail(email)){
        seterrors({email:validEmail})
    }
    if(password !== confirmPassword){
        seterrors({password:matchPasswords})
    }
  }
  const submit = (e) => {
    e.preventDefault();
    if(validateForm()){
        setformdata({
            email: "",
            password: "",
            confirmPassword:""
          });
          setshow(false);
    }
  };

  const showpassword = () => {
    setshow(!show);
    pass.current.type = show ? "password" : "text";
  };

  return (
    <div>
      <form>
        <div className="grid">
          <div className="label">Email:</div>
          <input
          data-testid='email'
            type="email"
            value={email}
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          ></input>
          <span>{errors.email}</span>
          <div className="label">Password:</div>
          <div className="eye">
            <input
              ref={pass}
              data-testid='password'
              type="password"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={handleChange}
            ></input>
             <input
              type="password"
              data-testid='confirmpassword'
              placeholder="Confirm Password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            ></input>

            {show ? (
              <i onClick={showpassword}>{Eye}</i>
            ) : (
              <i onClick={showpassword}>{EyeSlash}</i>
            )}
          </div>

          <div>
            <input type="submit" name="submit" onClick={submit}></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
