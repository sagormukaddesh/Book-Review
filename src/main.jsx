import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import MainLayout from './pages/MainLayout/MainLayout.jsx';
import Book from './Components/Book/Book.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead/PagesToRead.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`/blogs.json`)
      },
      {
        path: '/blog/:id',
        element: <Book></Book>,
        loader: () => fetch(`/blogs.json`),

      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch(`/blogs.json`)
      },
      {
        path: '/pagesRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch(`blogs.json`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>

      },
      {
        path: '/login',
        element: <Login></Login>
      }




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
