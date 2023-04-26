import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DetailsNews from "../layout/DetailsNews";
import Home from "../pages/Home/Home/Home";
import CategoryNews from "../pages/Home/CategoryNews/CategoryNews";
import News from "../pages/News/News";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/news"),
         },
         {
            path: "/categories/:id",

            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
         },
      ],
   },
   {
      path: "/news",
      element: <DetailsNews></DetailsNews>,
      children: [
         {
            path: ":id",
            element: <News></News>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
         },
      ],
   },
]);

export default router;
