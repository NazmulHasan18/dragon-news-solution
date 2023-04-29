// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ErrorPage = () => {
   const error = useRouteError();
   console.log(error);
   return (
      <div className="container text-center mt-5 pt-5">
         <h1 className="display-4 mt-5 pt-5">Oops!</h1>
         <p className="lead">Something went wrong.</p>
         <p className="error-code display-1">{error.statusText || "404"}</p>
         <p className="error-message">{error.message || "The page you are looking for does not exist."}</p>
         <Link to="/" className="btn btn-primary">
            Go Back
         </Link>
      </div>
   );
};

export default ErrorPage;
