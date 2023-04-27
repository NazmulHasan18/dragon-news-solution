// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavbarLink = () => {
   const { user } = useContext(AuthContext);
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
                  {user ? (
                     <>
                        <Link className="text-decoration-none text-secondary " to="/profile">
                           <FaUserCircle className="fs-3" />
                        </Link>
                        <Button variant="secondary" className="ms-2 rounded-0 fw-bold text-white">
                           Logout
                        </Button>
                     </>
                  ) : (
                     <>
                        <Link to="/login">
                           <Button variant="secondary" className="rounded-0 fw-bold text-white">
                              Login
                           </Button>
                        </Link>
                        <Link to="/register">
                           <Button variant="secondary" className="ms-2 rounded-0 fw-bold text-white">
                              Register
                           </Button>
                        </Link>
                     </>
                  )}
               </Nav>
            </Container>
         </Navbar>
      </div>
   );
};

export default NavbarLink;
