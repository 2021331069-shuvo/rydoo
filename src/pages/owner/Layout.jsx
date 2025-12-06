import React from "react";
import { Outlet } from "react-router-dom";
import NavbarOwner from "../../components/Owner/NavbarOwner";
import Sidebar from "../../components/Owner/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarOwner />

      <div className="flex">
        {/* Fixed sidebar */}
        <Sidebar />

        {/* Right content, shifted by sidebar width */}
        <main className="flex-1 ml-52 md:ml-60 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
