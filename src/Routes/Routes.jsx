import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import FoodItems from "../Pages/FoodItems/FoodItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
              path:'/',
              element:<Home></Home>  
            },
            {
              path:'/blog',
              element:<Blog></Blog> 
            },
            {
              path:'/fooditems',
              element:<FoodItems></FoodItems>
            },
        ]
    },
]);

export default router;