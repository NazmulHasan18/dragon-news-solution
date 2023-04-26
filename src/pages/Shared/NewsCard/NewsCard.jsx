/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
   const { _id, details, image_url, rating, title, author, total_view } = news;
   const { img, name, published_date } = author;
   return (
      <Card className="mb-4 rounded-0">
         <Card.Header className="d-flex align-items-center">
            <Image src={img} style={{ height: "40px" }} roundedCircle />
            <div className="ms-2 flex-grow-1">
               <h6 className="my-0">{name}</h6>
               <p className="my-0 ">{moment(published_date).format("MMMM Do YYYY")}</p>
            </div>
            <div>
               <FaRegBookmark></FaRegBookmark>
               <FaShareAlt></FaShareAlt>
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title className="fs-5">{title}</Card.Title>
            <Card.Img variant="top" src={image_url} className="my-3" />
            <Card.Text className="text-secondary">
               {details < 250 ? (
                  <>{details}</>
               ) : (
                  <>
                     {details.slice(0, 250)}... <br />
                     <Link className="text-decoration-none text-warning fw-bold" to={`/news/${_id}`}>
                        Read More
                     </Link>
                  </>
               )}
            </Card.Text>
         </Card.Body>
         <Card.Footer className="text-muted d-flex justify-content-between">
            <div>
               <Rating
                  placeholderRating={rating.number}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar />}
                  readonly
                  className="text-warning"
               />{" "}
               <span>{rating.number}</span>
            </div>
            <div>
               <FaEye></FaEye> <span>{total_view}</span>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsCard;
