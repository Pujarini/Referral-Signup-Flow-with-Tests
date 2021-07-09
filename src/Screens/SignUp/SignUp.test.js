import {render } from '@testing-library/react';
import React from 'react';
import SignUpForm from './SignUpForm';

test.todo('SignUp - Test Email input box is present');

test('it tests email is present',()=>{
    const {getByTestId}= render(<SignUpForm/>)
    const emailInput= getByTestId('email');
    expect(emailInput).toBeInTheDocument();
})

test.todo('SignUp - Test password/Confirm password is present')
test('expect password box to pe present', () => {
    const {getByTestId}= render(<SignUpForm/>)
    const password = getByTestId('password');
    expect (password).toBeInTheDocument();
    const confirmpassword = getByTestId('confirmpassword');
    expect(confirmpassword).toBeInTheDocument();
  });

  

  test.todo('Sign Up - Test Password should match with Confirm Password , It gives error messsage as "Passwords do not match" while entering the password');
  test.skip('expect both password to match', () => {
    const passwords={password1:'ok',password2:'bye'}
    const {getByTestId}= render(<SignUpForm/>)
    const password = getByTestId('password');
    password.value= passwords.password1;
    const confirmpassword = getByTestId('confirmpassword');
    confirmpassword.value= passwords.password2
    expect('Passwords do not match').toBeInTheDocument();
  });
  test.todo('Sign Up - Sign Up button should be present and disabled by default');

  test.skip('Sign up button to be present and disabled', () => {
    const {getByTestId}= render(<SignUpForm/>)
    const signUpBtn = getByTestId('sign-up');
    expect (signUpBtn).toHaveAttribute('disabled');
  });

  test.todo('Sign Up - Sign Up button should be enabled as soon as User enters in email box and password');

  test.todo('Sign Up - User gives emailID without @ and . , It gives error messsage as "Please enter valid Email Id" on click of sign up button');
  test.todo('Sign Up - User does not provide Email id/ password/ confirm password, It gives error message for respective fields for email id: Please enter Email ID, password : Please enter password, confirm pswrd: Please confirm your password');


