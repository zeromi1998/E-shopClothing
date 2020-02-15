import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signupcomponent/sign.up.component";
import "./style.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    {" "}
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUpPage;
