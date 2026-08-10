import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayout = () => {
  return (
    <div className="p-2">
      <div>
        <Navbar />
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
