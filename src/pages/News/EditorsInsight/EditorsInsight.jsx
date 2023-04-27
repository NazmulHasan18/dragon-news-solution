/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const EditorsInsight = ({ children, leftNav }) => {
   const leftNavbar = leftNav;

   return (
      <div className="mt-4">
         <h5>{children}</h5>
         {leftNavbar ? (
            <Row lg={1} xs={1} md={1} className="g-4 pt-0">
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img1} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img2} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img3} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         ) : (
            <Row xs={1} md={2} lg={3} className="g-4 pt-0">
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img1} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           {" "}
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img2} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           {" "}
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={img3} />
                     <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <Card.Text>
                           {" "}
                           <FaRegCalendar></FaRegCalendar> Jan 4, 2022
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         )}
      </div>
   );
};

export default EditorsInsight;
