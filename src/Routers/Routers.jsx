import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AllBooks from "../Pages/AllBooks";
import DetailsBook from "../components/DetailsBook";
import MorePages from "../Pages/MorePages";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRoute from "../components/PrivetRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<AllBooks></AllBooks>
        },
        {
            path:'/detailsBook/:id',
            element:<DetailsBook></DetailsBook>
        },
        {
          path:'/topBook',
          element:<PrivetRoute><MorePages></MorePages></PrivetRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);
  