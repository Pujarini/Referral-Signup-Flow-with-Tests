import {
  render,
  cleanup,
  fireEvent
} from "@testing-library/react";
import {
  emptyConfirmPassword,
  emptyEmail,
  emptyPassword,
  matchPasswords,
  validEmail,
} from "../../constants/appConstants";
import React from "react";
import SignUpForm from "./SignUpForm";

// beforeEach(() => render(<SignUpForm/>));

afterEach(cleanup);

const setup = (elementId) => {
  const utils = render(<SignUpForm />);
  const input = utils.getByTestId(elementId);
  return { input, ...utils };
};


describe('testing Sign up Page',()=>{
    test.todo(
        "SignUp - Test Email input box/Password box/ confirm password box/sign up button is present"
      );
      test.todo('Sign up- Test Email should be valid')
      test.todo(
        'Sign Up - Test Password should match with Confirm Password , It gives error messsage as "Passwords do not match" while entering the password'
      );
      test.todo('Sign up- Password should show on click of eye')
      test.todo('Sign up- Sign up button showuld be disbaled by default')
      test.todo(
        "Sign Up - Sign Up button should be enabled as soon as User enters in email box and password"
      );
      test.todo('Sign up- Fields should not be empty on click of Sign upbutton')
})


describe("Basic Components are present", () => {
  test.skip("It tests email box/password Box/ confirm password box & sign up button is present", () => {
    const { getByTestId } = render(<SignUpForm />);
    const emailBox = getByTestId("email");
    const passwordBox = getByTestId("password");
    const confirmPasswordBox = getByTestId("confirmpassword");
    const signUpBtn = getByTestId("signup");
    expect(emailBox).toBeInTheDocument();
    expect(passwordBox).toBeInTheDocument();
    expect(confirmPasswordBox).toBeInTheDocument();
    expect(signUpBtn).toBeInTheDocument();
  });
});

describe("Error message validation on change of inputs", () => {
  test.skip("tests error message when user inputs incorrect email", () => {
    const { input } = setup("email");
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
    expect(input.classList[0]).toBe("form-input-error-email");
    expect(validEmail).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "" } });
    expect(input.classList[0]).toBe("form-input-error-email");
    expect(emptyEmail).toBeInTheDocument();
  });
  
  test.skip("error message when password do not match", () => {
    const passwords = { password1: "ok", password2: "bye" };
    const { getByTestId } = render(<SignUpForm />);
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: passwords.password1 } });
    expect(password.value).toBe(passwords.password1);
    const { confirmpassword } = getByTestId("confirmpassword");
    fireEvent.change(confirmpassword, {
      target: { value: passwords.password2 },
    });
    const button = getByTestId("signup");
    fireEvent.click(button);
    expect(matchPasswords).toBeInTheDocument();
  });
});

describe("Show password on click of eye", () => {
  test.skip("show password when the eye is closed", () => {
    const { container } = render(<SignUpForm />);
    const passwordinput = container.querySelector(".eye");
    const eye = passwordinput.querySelector("i");
    const inputType = passwordinput.querySelector("input").type;
    expect(inputType).toBe("password");
    fireEvent.click(eye);
    expect(inputType).toBe("text");
  });
});

describe.skip("validating fields are empty or not on click of sign up button", () => {
  test("Sign up button to be present and disabled", () => {
    const { input } = setup("signup");
    expect(input).toBeInTheDocument();
    expect(input.disabled).toEqual(true);
  });
  
  test("Sign up button to be enabled when user types email or password", () => {
    const { getByTestId } = render(<SignUpForm />);
    const email = getByTestId("email");
    fireEvent.change(email, { target: { value: "23" } });
    const signUpBtn = getByTestId("signup");
    expect(signUpBtn.disabled).toEqual(false);
  });
  test("Email typed but password not typed", () => {
    const { getByTestId } = render(<SignUpForm />);
    const email = getByTestId("email");
    fireEvent.change(email, { target: { value: "abc@xyz.com" } });
    const signUpBtn = getByTestId("signup");
    fireEvent.click(signUpBtn);
    expect(emptyPassword).toBeInTheDocument();
  });
  test("Email not typed but password & confirm password typed", () => {
    const { getByTestId } = render(<SignUpForm />);
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: "ok" } });
    const confirmPassword = getByTestId("confirmpassword");
    fireEvent.change(confirmPassword, { target: { value: "ok" } });
    const signUpBtn = getByTestId("signup");
    fireEvent.click(signUpBtn);
    expect(emptyEmail).toBeInTheDocument();
  });
  test("Email typed password typed but confirm password not typed", () => {
    const { getByTestId } = render(<SignUpForm />);
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: "ok" } });
    const signUpBtn = getByTestId("signup");
    fireEvent.click(signUpBtn);
    expect(emptyConfirmPassword).toBeInTheDocument();
  });
});
