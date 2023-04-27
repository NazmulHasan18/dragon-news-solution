// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import facebook from "../../../assets/Facebook.png";
import twitter from "../../../assets/Twitter.png";
import instagram from "../../../assets/instagram.png";
import bgImg from "../../../assets/bg.png";
import { Link } from "react-router-dom";
import QZone from "../../Home/QZone/QZone";

// eslint-disable-next-line react/prop-types
const RightNav = ({ show }) => {
   return (
      <>
         <div>
            <h4 className="mb-3">Login With</h4>
            <div>
               <Button variant="outline-primary" className="w-100 mb-3">
                  <FaGoogle /> Login With Google
               </Button>
               <Button variant="outline-secondary" className="w-100 mb-3">
                  <FaGithub /> Login With Github
               </Button>
            </div>
         </div>
         <div className="my-4">
            <h4 className="mb-3">Find Us On</h4>
            <ListGroup>
               <ListGroup.Item>
                  <Link className="text-decoration-none text-secondary">
                     {" "}
                     <img src={facebook} alt="" /> Facebook
                  </Link>
               </ListGroup.Item>
               <ListGroup.Item className="text-secondary">
                  <Link className="text-decoration-none text-secondary">
                     {" "}
                     <img src={twitter} alt="" /> Twitter
                  </Link>
               </ListGroup.Item>
               <ListGroup.Item className="text-secondary">
                  <Link className="text-decoration-none text-secondary">
                     {" "}
                     <img src={instagram} alt="" /> Instagram
                  </Link>
               </ListGroup.Item>
            </ListGroup>
         </div>
         <QZone></QZone>
         {show && (
            <div
               className="mt-4 text-center text-white"
               style={{ backgroundImage: `url(${bgImg})`, padding: "65px 39px" }}
            >
               <h2>Create an Amazing Newspaper</h2>
               <p className="fs-5 mt-4">
                  Discover thousands of options, easy to customize layouts, one-click to import demo and much
                  more.
               </p>
               <Button variant="danger rounded-0 my-4 px-4 fs-5 py-3">Learn More</Button>
            </div>
         )}
      </>
   );
};

export default RightNav;
