/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(AuthContext);
   const location = useLocation();
   console.log(location);
   if (loader) {
      return (
         <>
            <div
               className="progress mt-5  w-75 mx-auto"
               role="progressbar"
               aria-label="Animated striped example"
               aria-valuenow="75"
               aria-valuemin="0"
               aria-valuemax="100"
            >
               <div
                  className="progress-bar progress-bar-striped progress-bar-animated pt-5"
                  style={{ width: "50%" }}
               ></div>
            </div>
         </>
      );
   }
   if (user) {
      return children;
   }

   return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
