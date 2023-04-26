// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
// import NewsCard from "../../Shared/NewsCard/NewsCard";

const Home = () => {
   const news = useLoaderData();
   console.log(news);
   return <div>{/* <NewsCard></NewsCard> */}</div>;
};

export default Home;
