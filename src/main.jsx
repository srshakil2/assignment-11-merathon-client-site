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
import Addmerathon from "./componnets/From/Addmerathon";
import Mymarathon from "./componnets/MarathonDetails/Mymarathon";
import Marathons from "./componnets/MarathonPageLayout/Marathons";
import Privet from "./componnets/Privet/Privet";
import ErrorPage from "./componnets/ErrorPage";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <Privet>
            <Marathons></Marathons>
          </Privet>
        ),
      },
      {
        // privet
        path: "/addmarathon",
        element: (
          <Privet>
            <Addmerathon></Addmerathon>
          </Privet>
        ),
      },
      {
        // privet
        path: "/myMarathon",
        element: (
          <Privet>
            <Mymarathon></Mymarathon>
          </Privet>
        ),
      },

      {
        // privet
        path: "/marathons/:id",
        element: (
          <Privet>
            <Details></Details>
          </Privet>
        ),
      },
      {
        // privet
        path: "/marathons/register/:id",
        element: (
          <Privet>
            <Register></Register>
          </Privet>
        ),
      },
      {
        // privet
        path: "/marathons/myApply",
        element: (
          <Privet>
            <MyApply></MyApply>
          </Privet>
        ),
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
