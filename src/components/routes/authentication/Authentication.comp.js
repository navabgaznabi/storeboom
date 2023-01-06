import React from "react";
import SignUpComp from "../../signUp/SignUp.comp";
import SignInComp from "../../signIn/SignIn.comp";
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
