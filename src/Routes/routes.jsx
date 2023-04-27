import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DetailsNews from "../layout/DetailsNews";
import Home from "../pages/Home/Home/Home";
import CategoryNews from "../pages/Home/CategoryNews/CategoryNews";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

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
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
      ],
   },
]);

export default router;
