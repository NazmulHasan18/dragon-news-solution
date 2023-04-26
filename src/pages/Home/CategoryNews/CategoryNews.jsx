import React from "react";
import { useParams } from "react-router-dom";

const CategoryNews = () => {
   const id = useParams();
   return (
      <div>
         <h2>Category{id}</h2>
      </div>
   );
};

export default CategoryNews;
