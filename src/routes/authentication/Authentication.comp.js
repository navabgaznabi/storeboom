import React from "react";
import SignUpComp from "../../components/sign-up/SignUp.comp";
import SignInComp from "../../components/sign-in/SignIn.comp";
import './Authentication.style.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInComp />
      <SignUpComp />
    </div>
  );
};

export default Authentication;
