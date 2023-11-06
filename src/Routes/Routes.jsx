import { createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import FoodItems from "../Pages/FoodItems/FoodItems";
import FourOFour from "../Pages/FourOFour/FourOFour";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import AddNewFood from "../Pages/AddNewFood/AddNewFood";
import MyOrderedFood from "../Pages/MyOrderedFood/MyOrderedFood";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <FourOFour></FourOFour>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/fooditems',
        element: <FoodItems></FoodItems>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/myaddedfood',
        element: <PrivateRoutes><MyAddedFood></MyAddedFood></PrivateRoutes>
      },
      {
        path: '/addnewfood',
        element:<PrivateRoutes><AddNewFood></AddNewFood></PrivateRoutes>
      },
      {
        path: '/myorderedfood',
        element: <PrivateRoutes><MyOrderedFood></MyOrderedFood></PrivateRoutes>
      },

    ]
  },
]);

export default router;