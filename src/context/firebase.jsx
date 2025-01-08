import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCEtCuIvk1EDHcY_EwrthpG-g7EQq7e1kw",
  authDomain: "booktards-64d48.firebaseapp.com",
  projectId: "booktards-64d48",
  storageBucket: "booktards-64d48.firebasestorage.app",
  messagingSenderId: "435966349431",
  appId: "1:435966349431:web:d20f19739be1fe56de3672",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
