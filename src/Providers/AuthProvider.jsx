/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const [loader, setLoader] = useState(true);

   // !Here user Account created

   const createEmailAccount = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // !Here User Account Logged in

   const loginEmailAccount = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   // !Here is the observer for user observing

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/firebase.User
         console.log(user);
         setUser(user);
         setLoader(false);
         // ...
      });
      return () => {
         unsubscribe();
      };
   }, []);

   // !Here Update user profile information

   const profileUpdater = (name, url) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: url,
      });
   };

   // !Here User Log Out Code

   const logOut = () => {
      signOut(auth)
         .then(() => {
            // Sign-out successful.
         })
         .catch((error) => {
            console.log(error);
         });
   };

   // !This is the context api value provider

   const authInfo = {
      auth,
      user,
      createEmailAccount,
      loginEmailAccount,
      logOut,
      profileUpdater,
      loader,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
