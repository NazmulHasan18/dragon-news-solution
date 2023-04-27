/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const user = { displayName: "nazmul" };
   const authInfo = {
      user,
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;