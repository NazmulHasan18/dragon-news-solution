import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DetailsNews from "../layout/DetailsNews";
import Home from "../pages/Home/Home/Home";
import CategoryNews from "../pages/Home/CategoryNews/CategoryNews";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/Error/Error";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://dragon-news-server-nazmulhasan18.vercel.app/news"),
         },
         {
            path: "/categories/:id",

            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) =>
               fetch(`https://dragon-news-server-nazmulhasan18.vercel.app/categories/${params.id}`),
         },
      ],
   },
   {
      path: "/news",
      element: <DetailsNews></DetailsNews>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: ":id",
            element: (
               <PrivateRoute>
                  <News></News>
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(`https://dragon-news-server-nazmulhasan18.vercel.app/news/${params.id}`),
         },
      ],
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
   {
      path: "/profile",
      element: <Profile></Profile>,
      errorElement: <ErrorPage></ErrorPage>,
   },
]);

export default router;
