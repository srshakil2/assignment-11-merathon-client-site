import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase";

export const MyMainContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const singUphandel = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  // singin func
  const singinhhandel = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //
  // google login func
  const provider = new GoogleAuthProvider();
  const handelGoogleLogIn = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };
  //
  // logOut fonc
  const handelLogOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  //
  // use effect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (courenUser) => {
      if (courenUser) {
        setUser(courenUser);
      }
      setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  //
  // provider object
  const data = {
    loding,
    setLoding,
    user,
    setUser,
    singUphandel,
    singinhhandel,
    handelGoogleLogIn,
    handelLogOut,
  };
  return (
    <MyMainContext.Provider value={data}>{children}</MyMainContext.Provider>
  );
};

export default AuthProvider;
