// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

const CategoryNews = () => {
   const categoryNews = useLoaderData();

   // console.log(categoryNews.length);
   return (
      <div>
         {categoryNews.length !== 0 ? (
            categoryNews.map((category) => <NewsCard key={category._id} news={category}></NewsCard>)
         ) : (
            <h3>No News In This Category</h3>
         )}
      </div>
   );
};

export default CategoryNews;
