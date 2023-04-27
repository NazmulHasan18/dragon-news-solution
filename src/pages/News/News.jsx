// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from "./EditorsInsight/EditorsInsight";

const News = () => {
   const news = useLoaderData();
   const { details, image_url, title, category_id } = news;
   return (
      <div>
         <Card className="p-3">
            <Card.Img variant="top" src={image_url} />
            <Card.Body className="ps-0">
               <Card.Title>{title}</Card.Title>
               <Card.Text>{details}</Card.Text>
               <Link to={`/categories/${category_id}`}>
                  <Button variant="danger">
                     <FaArrowLeft></FaArrowLeft> All news in this category
                  </Button>
               </Link>
            </Card.Body>
         </Card>
         <EditorsInsight>
            <p>Editors Insight</p>
         </EditorsInsight>
      </div>
   );
};

export default News;
