// eslint-disable-next-line no-unused-vars
import React from "react";

import Banner from "../pages/Shared/Banner/Banner";
import Footer from "../pages/Shared/Footer/Footer";
import LatestNews from "../pages/Shared/Banner/LatestNews";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import NavbarLink from "../pages/Shared/Navbar/Navbar";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
   return (
      <Container>
         <nav className="text-center">
            <Banner></Banner>
            <LatestNews></LatestNews>
            <NavbarLink></NavbarLink>
         </nav>
         <Container>
            <Row>
               <Col lg={3}>Left Nav</Col>
               <Col lg={6}>
                  <Outlet></Outlet>
               </Col>
               <Col lg={3}>
                  <RightNav></RightNav>
               </Col>
            </Row>
         </Container>

         <Footer></Footer>
      </Container>
   );
};

export default Main;
