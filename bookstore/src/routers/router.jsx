import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import Uploadbook from "../dashboard/Uploadbook";
import Managebook from "../dashboard/Managebook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        }
        ,
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
       {
        path:'/book/:id',
        element:<SingleBook/>,
        loader:({params})=>fetch(`http://localhost:3000/book/${params.id}`)
          },
          {
            path:"/sign-up",
            element:<SignUp/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/logout',
            element:<Logout/>
          },
          {
            path:'/admin/dashboard',
            element:<DashboardLayout/>,
            children:[
              {
                   path:"/admin/dashboard",
                   element:<PrivateRoute></PrivateRoute>
              },
              {
                path:"/admin/dashboard/upload",
                element:<Uploadbook/>
              },
              {
                path:"/admin/dashboard/manage",
                element:<Managebook/>
              },
              {
                path:"/admin/dashboard/edit-book/:id",
                element:<EditBook/>,
                loader:({params})=>fetch(`http://localhost:3000/book/${params.id}`)
              },
            
            ]
            
          }
    ]
  },
]);
export default router