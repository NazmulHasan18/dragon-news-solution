// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Banner from "../pages/Shared/Banner/Banner";
import Footer from "../pages/Shared/Footer/Footer";
import LatestNews from "../pages/Shared/Banner/LatestNews";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div>
         <nav>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
         </nav>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;
