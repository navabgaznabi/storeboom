import React from "react";
import { useState } from "react";
import { createUserByEmailAndPasswordWithAuth } from "../../utils/firebase/firebase.utils";
import ButtonComp from "../button/Button.comp";
import FormInputComp from "../form-input/FormInput.comp";

import './signUp.scss'

const SignUpComp = () => {
  const fromField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFieldValue, setformFieldValue] = useState(fromField);

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
    const { displayName, email, password, confirmPassword } = formFieldValue;
    if (password !== confirmPassword) {
      alert("Password DoesNot match!");
      return;
    }
    try {
      await createUserByEmailAndPasswordWithAuth(displayName, email, password);
      resetFormField();
    } catch (error) {
      console.log(error.code, " ", error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComp
          required
          label="Display Name"
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={formFieldValue.displayName}
        ></FormInputComp>

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

        <FormInputComp
          required
          label="Confirm Password"
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={formFieldValue.confirmPassword}
        ></FormInputComp>
        <ButtonComp type='submit'>
            Sign Up
        </ButtonComp>
      </form>
    </div>
  );
};

export default SignUpComp;
