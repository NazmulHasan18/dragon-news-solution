// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";
import NavbarLink from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
   return (
      <div className="bg-primary-subtle pb-5 pt-2" style={{ minHeight: "100vh" }}>
         <Container>
            <NavbarLink></NavbarLink>
            <Outlet></Outlet>
         </Container>
      </div>
   );
};

export default LoginLayout;
