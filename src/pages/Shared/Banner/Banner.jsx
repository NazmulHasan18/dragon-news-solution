// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";

const Banner = () => {
   return (
      <div className="mt-4">
         <img src={logo} alt="" />
         <p className="text-secondary mt-3 mb-2">Journalism Without Fear or Favour</p>
         <p className="text-secondary fw-semibold mb-4">
            <span className="text-dark"> {moment().format("dddd,")}</span>
            {moment().format(" MMMM DD, YYYY")}
         </p>
      </div>
   );
};

export default Banner;
