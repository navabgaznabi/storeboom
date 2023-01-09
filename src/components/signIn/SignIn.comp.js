import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { userSignInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import ButtonComp from "../button/Button.comp";
import FormInputComp from "../form-input/FormInput.comp";
import "./signIn.scss";

const SignInComp = () => {
  const fromField = {
    email: "",
    password: "",
  };

  const [formFieldValue, setformFieldValue] = useState(fromField);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFieldValue({
      ...formFieldValue,
      [name]: value,
    });
  };

  const resetFormField = () => {
    setformFieldValue(fromField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formFieldValue;
      await userSignInWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      alert(error.code);
      console.log(error.code, " ", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComp
          required
          label="Email"
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={formFieldValue.email}
        ></FormInputComp>

        <FormInputComp
          required
          label="Password"
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={formFieldValue.password}
        ></FormInputComp>
        <div className="buttons-container">
          <ButtonComp type="submit">Sign In</ButtonComp>
          <ButtonComp type="button" buttonType="google" onClick={logGoogleUser}>
            Google SignIn
          </ButtonComp>
        </div>
      </form>
    </div>
  );
};

export default SignInComp;
