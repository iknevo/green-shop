import { createBrowserRouter, Navigate } from "react-router";
import { DefaultLayout } from "./layout";
import { Home } from "./pages";

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
    ],
  },
]);

export default myRouter;
