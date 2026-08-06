import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="p-2">
      <Navbar />
      <div className="p-4 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
