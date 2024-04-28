import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyArtCraftList from "../components/MyArtCraftList/MyArtCraftList";
import Register from "../components/Register/Register";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomeCraftDetails from "../components/HomeCraftDetails/HomeCraftDetails";
import UpdateCraft from "../components/UpdateCraft/UpdateCraft";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/crafts/:id",
        element: (
          <PrivateRoute>
            <HomeCraftDetails></HomeCraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },
      {
        path: "/all-art-craft/",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch(`http://localhost:5000/crafts`),
      },
      {
        path: "/add-craft-item",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <PrivateRoute>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoute>
        ),
        // loader: () =>
        //   fetch(
        //     "https://b9a10-server-side-md-ashikur-rahman-ashik.vercel.app/crafts"
        //   ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },
    ],
  },
]);
