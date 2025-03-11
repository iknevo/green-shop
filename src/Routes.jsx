import { createBrowserRouter, Navigate } from "react-router";
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
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default myRouter;
