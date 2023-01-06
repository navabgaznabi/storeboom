// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Function to Perfrming CURD ON firestore DB.
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//Function for authenticating
import {
  getAuth, //To get auth check of user
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJY6gqgG2fjbq0EF9Kzq_aFnLkWaG2kI",
  authDomain: "storeboom-965ea.firebaseapp.com",
  projectId: "storeboom-965ea",
  storageBucket: "storeboom-965ea.appspot.com",
  messagingSenderId: "634516745806",
  appId: "1:634516745806:web:3ebab3555dc1b914cc1d1f",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   promt: "select_account",
// });

export const auth = getAuth();

export const signInWithGooglePopup = async () =>{
  return await signInWithPopup(auth, googleProvider);
}

export const db = getFirestore(firebaseapp);

//create user In DB using auth
export const createUserDocumentUsingAuth = async (userObj, additionalvalue) => {
  const { displayName, email, photoURL } = userObj;
  const userDocRef = doc(db, "users", userObj.uid);

  const userDocSnapShot = await getDoc(userDocRef);

  if (!userDocSnapShot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalvalue,
      });

      console.log("userCollection created");
    } catch (err) {
      console.log("Error Occured While Saving User:", err);
    }
    return userDocRef;
  } else {
    console.log("User Already Exist");
  }
};

export const createUserByEmailAndPasswordWithAuth = async (
  displayName,
  email,
  password
) => {
  try {
    if (!email || !password) return;
    const userObj = await createUserWithEmailAndPassword(auth, email, password);
    return await createUserDocumentUsingAuth(userObj.user, { displayName });
  } catch (error) {
    alert(error.code);
  }
};

export const userSignInWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}