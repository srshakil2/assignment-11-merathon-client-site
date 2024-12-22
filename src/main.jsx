import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componnets/Home";
import AuthProvider from "./AuthProvider/AuthProvider";
import Mainleout from "./componnets/Mainleout/Mainleout";

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
