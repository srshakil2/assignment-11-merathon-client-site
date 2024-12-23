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
