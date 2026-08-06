import React, { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
// import PublicProtected from "./protected/PublicProtected";
// import MainProtected from "./protected/MainProtected";
// import RegisterPage from "../pages/RegisterPage";
// import LoginPage from "../pages/LoginPage";
// import HomePage from "../pages/HomePage";
// import ShopPage from "../pages/ShopPage";
// import AboutPage from "../pages/AboutPage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PublicProtected = lazy(() => import("./protected/PublicProtected"));
const MainProtected = lazy(() => import("./protected/MainProtected"));

const Approutes = () => {
  // console.log("application re-render...");

  let dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("Hydration processed...");

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("Unauthorized access. Please login first.");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
