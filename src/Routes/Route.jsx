import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import MoviesCard from "../Components/MoviesCard";
import Movies from "../Pages/Movies";
import ErrorPage from "../Pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
           path:"/",
           Component: Home 
        },
        {
          path:'/movies',
          Component:Movies
        },
        {
          path:'*',
          Component: ErrorPage
        }
    ]
  },
]);