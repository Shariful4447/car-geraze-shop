import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NewUser from "../Pages/NewUser/NewUser";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
       {
        path: "table",
        element: <NewUser></NewUser>
       },
       {
        path: "login",
        element: <Login></Login>
       },
       {
        path: "register",
        element: <Register></Register>
       },
       {
        path: "checkout/:id",
        element: <ServiceDetails></ServiceDetails>
       },
       {
        path: "checkout",
        element: <CheckOut></CheckOut>
       },
      ],
    },
   ]);
   export default router;
   