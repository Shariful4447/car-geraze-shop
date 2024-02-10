import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NewUser from "../Pages/NewUser/NewUser";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";



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
        path: "services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
       },
       {
        path: "checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
       },
       {
        path: "all-bookings",
        element: <Bookings></Bookings>
       
       },
      ],
    },
   ]);
   export default router;
   