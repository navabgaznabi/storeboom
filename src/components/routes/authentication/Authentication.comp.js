import React from "react";
import SignUpComp from "../../signUp/SignUp.comp";
import {
  signInWithGooglePopup,
  createUserDocumentUsingAuth,
} from "../../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const docRef = await createUserDocumentUsingAuth(response.user);
    console.log(docRef);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpComp />
    </div>
  );
};

export default Authentication;
