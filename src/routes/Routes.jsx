import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import "../index.css"
import Categories from "../components/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/category/:id',
        element:<Categories></Categories>,
        loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
]);


export default router;

