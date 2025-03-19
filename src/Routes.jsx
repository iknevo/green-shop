import { createBrowserRouter, Navigate } from "react-router";
import Auth from "./features/authentication/Auth";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import Cart from "./features/cart/Cart";
import { DefaultLayout } from "./layouts";
import { Home, Shop } from "./pages";
import Blogs from "./pages/Blogs";

const myRouter = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <Navigate to="home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/auth",
        element: <Auth />,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:productId",
        element: <Shop />,
      },
      {
        path: "shop/cart",
        element: <Cart />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default myRouter;
