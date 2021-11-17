import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./SignUpForm.css";

const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;

const EyeSlash = <FontAwesomeIcon className="icon" icon={faEyeSlash} />;

function SignUpForm() {
  const [fields, setfields] = useState({});
  const [errors, seterrors] = useState({});
  const [show, setshow] = useState(false);
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }

    if (fields["password"] !== fields["confirmPassword"]) {
      formIsValid = false;
      errors["password"] = "Passwords do not match";
    }

    seterrors(errors);
    return formIsValid;
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form submitted");
      navigate("/otp");
    } else {
      console.log("Form has errors.");
    }
  };

  const handleChange = (e) => {
    let fieldValue = { ...fields };
    fieldValue[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    errors[e.target.name] = "";
    setfields(fieldValue);
    seterrors(errors);
  };

  const showpassword = () => {
    setshow(!show);
    passwordRef.current.type = show ? "password" : "text";
  };

  return (
    <div>
      <form
        name="referral-form"
        className="referral-form"
        onSubmit={contactSubmit}
      >
        <h1>Login</h1>
        <br />
        <input
          className="form-input-email"
          refs="email"
          name="email"
          type="text"
          size="30"
          placeholder="Enter your Email"
          onChange={handleChange}
          value={fields["email"]}
        />
        <span className="error">{errors["email"]}</span>
        <br />
        <input
          className="form-input-password"
          ref={passwordRef}
          data-testid="password"
          type="password"
          placeholder="Enter Password"
          value={fields["password"]}
          name="password"
          onChange={handleChange}
        ></input>
        {show ? (
          <i onClick={showpassword}>{Eye}</i>
        ) : (
          <i onClick={showpassword}>{EyeSlash}</i>
        )}
        <span className="error">{errors["password"]}</span>
        <br />

        <input
          className="form-input-confirmpassword"
          type="password"
          data-testid="confirmpassword"
          placeholder="Confirm Password"
          value={fields["confirmpassword"]}
          name="confirmPassword"
          onChange={handleChange}
        ></input>

        <button className="form-input-submit" id="submit" value="Submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
