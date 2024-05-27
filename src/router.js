import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import User from "./views/User";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Dashboards from "./views/Dashboards";
import ReloginLayout from "./components/ReloginLayout";
import UserForm from "./views/UserForm";
import CreateForm from "./views/CreateForm";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children:[
        {
          path: "/dashboards",
          element: <Dashboards />
        },
        {
          path: "/users",
          element: <User />
        },
        {
          path: "/user/new",
          element: <CreateForm />
        },
        {
          path: "/user/:id",
          element: <UserForm />
        }
      ]
    },
    {
      path: "/",
      element:<ReloginLayout />,
      children:[
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        }
      ]
    },
    {
        path: "*",
        element: <NotFound />
      }
  ]);

  

  export default router;