import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Details from "../pages/Details";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        element: <Browse />,
      },
      {
        path: "books/:category",
        element: <Browse />,
      },
      {
        path: "books/:category/:id",
        element: <Details />,
      },
      {
        path: "add",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;