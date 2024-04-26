import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import AllArtCraft from "../components/AllArtCraft/AllArtCraft";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyArtCraftList from "../components/MyArtCraftList/MyArtCraftList";
import Register from "../components/Register/Register";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-art-craft",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/add-craft-item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/my-art-craft-list",
        element: <MyArtCraftList></MyArtCraftList>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
