// src/routes/index.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Details from '../pages/Details';
import AddBook from '../pages/AddBook';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Home page as entry
  },
  {
    path: '/books',
    element: <Browse />, // Show all books
  },
  {
    path: '/books/:category',
    element: <Browse />, // Filter by category
  },
  {
    path: '/books/:category/:id',
    element: <Details />, // Book details
  },
  {
    path: '/add',
    element: <AddBook />, // Add new book
  },
  {
    path: '*',
    element: <NotFound />, // 404 page
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
