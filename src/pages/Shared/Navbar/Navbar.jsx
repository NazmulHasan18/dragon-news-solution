// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarLink = () => {
   return (
      <div className="my-3">
         <Navbar>
            <Container>
               <Nav className="mx-auto ">
                  <Link className="text-decoration-none text-secondary mx-3" to="/">
                     Home
                  </Link>
                  <Link className="text-decoration-none text-secondary mx-3" to="/about">
                     About
                  </Link>
                  <Link className="text-decoration-none text-secondary mx-3" to="/career">
                     Career
                  </Link>
               </Nav>
               <Nav className=" align-items-center">
                  <Link className="text-decoration-none text-secondary mx-3" to="/profile">
                     <FaUserCircle className="fs-3" />
                  </Link>
                  <Button variant="secondary" className="rounded-0 fw-bold text-white">
                     Login
                  </Button>
               </Nav>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavbarLink;
