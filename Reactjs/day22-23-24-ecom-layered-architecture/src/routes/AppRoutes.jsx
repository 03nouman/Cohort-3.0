import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/features/authSlice";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/product/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import { hydrateUserAction } from "../features/auth/state/features/authAction";
import AboutPage from "../shared/ui/pages/AboutPage";
import {
  useAllCategories,
  useAllProduct,
} from "../features/product/hooks/useProductHook";

const AppRoutes = () => {
  let dispatch = useDispatch();
  let { data: catagories } = useAllCategories();
  let { data: products } = useAllProduct();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
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
              element: <HomePage products={products} catagories={catagories} />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
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

export default AppRoutes;
