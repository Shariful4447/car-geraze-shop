import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NewUser from "../Pages/NewUser/NewUser";



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
      ],
    },
   ]);
   export default router;
   