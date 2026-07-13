import { createBrowserRouter, Navigate } from "react-router-dom";
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
  { path: "book", element: <Navigate to="/books" replace />, },
  { path: "browse", element: <Navigate to="/books" replace />, },
  { path: "*", element: <NotFound />, },
]);

export default router;