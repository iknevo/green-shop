import { createBrowserRouter, Navigate } from "react-router";
import AccountDetails from "./features/account/AccountDetails";
import AccountOrders from "./features/account/AccountOrders";
import AccountPassword from "./features/account/AccountPassword.jsx";
import AccountAddress from "./features/account/AccoutAddress.jsx";
import Auth from "./features/authentication/Auth";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import Cart from "./features/cart/Cart";
import { DefaultLayout } from "./layouts";
import { Home, Shop } from "./pages";
import Account from "./pages/Account";
import Blogs from "./pages/Blogs";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";

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
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
        children: [
          {
            element: <Navigate to="details" replace />,
            index: true,
          },
          { path: "details", element: <AccountDetails /> },
          { path: "orders", element: <AccountOrders /> },
          { path: "address", element: <AccountAddress /> },
          { path: "password", element: <AccountPassword /> },
        ],
      },
    ],
  },
]);

export default myRouter;
