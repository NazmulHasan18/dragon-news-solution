// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";
// import NewsCard from "../../Shared/NewsCard/NewsCard";

const Home = () => {
   const news = useLoaderData();
   console.log(news);
   return (
      <div>
         {news.map((category) => (
            <NewsCard key={category._id} news={category}></NewsCard>
         ))}
      </div>
   );
};

export default Home;
