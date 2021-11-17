REFERRAL SYSTEM
-----------------------------------

This repo is created to make a referral System using following packages 

* react-router-dom 6
* React testing library
* uuid
* jest



### Login Form Component with all email and password validations ###

    * Email needs to  be valid eg: abc@gmail.com else given an error Email is not valid
    * Email cannot be empty else give an error that Email is empty
    * Password cannot be empty else give error Password cannot be empty
    * Confirm password cannot be empty as well and it should match the password else it will give error that Passwords don't match

### OTP screen Component ###

- On OTP screen the user has to enter the correct OTP

    * If correct OTP entered the user is directed to referral screen
    * If incorrect OTP then user gets an error message

### Referral Screen ###

    * If user has referral code then he is asked to enter and if it correct he is referred. It is incorrect he gets error message
    * If user does'nt have referral code then he is in waiting line to be referred

Below is a workflow of how I have executed/worked on  the project : 

![SignupFlow](https://user-images.githubusercontent.com/34391629/125035735-cf7e6d80-e0af-11eb-9e0f-c5c7a8589dd0.png)
