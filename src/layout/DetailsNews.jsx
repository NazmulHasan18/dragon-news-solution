// eslint-disable-next-line no-unused-vars
import React from "react";

import Banner from "../pages/Shared/Banner/Banner";
import Footer from "../pages/Shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import RightNav from "../pages/Shared/RightNav/RightNav";

const DetailsNews = () => {
   return (
      <Container>
         <nav className="text-center">
            <Banner></Banner>
         </nav>
         <Container>
            <Row>
               <Col lg={9}>
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

export default DetailsNews;
