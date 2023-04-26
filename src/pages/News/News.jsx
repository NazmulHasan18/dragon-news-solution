// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
   const news = useLoaderData();
   return (
      <div>
         <h2>details news</h2>
      </div>
   );
};

export default News;
