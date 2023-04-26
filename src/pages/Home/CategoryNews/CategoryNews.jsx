// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const CategoryNews = () => {
   const { id } = useParams();
   console.log(id);
   return (
      <div>
         <h2>Category{id}</h2>
      </div>
   );
};

export default CategoryNews;
