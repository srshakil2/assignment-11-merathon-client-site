import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componnets/Home";
import AuthProvider from "./AuthProvider/AuthProvider";
import Mainleout from "./componnets/Mainleout/Mainleout";
import Login from "./componnets/From/Login";
import SingUp from "./componnets/From/SingUp";
import MarathonPage from "./componnets/MarathonPageLayout/MarathonPage";
import Details from "./componnets/MarathonDetails/Details";
import Register from "./componnets/From/Register";
import MyApply from "./componnets/MarathonDetails/MyApply";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Mainleout></Mainleout>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        // privet
        path: "/marathons",
        element: <MarathonPage></MarathonPage>,
      },
      {
        // privet
        path: "/marathons/:id",
        element: <Details></Details>,
      },
      {
        // privet
        path: "/marathons/register/:id",
        element: <Register></Register>,
      },
      {
        // privet
        path: "/marathons/myApply",
        element: <MyApply></MyApply>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
