import React, { useState, useEffect } from "react";
import NavigationSidebar from "./NavigationSidebar"; // adjust the path
import { Outlet, useLocation } from "react-router-dom";
import { MdSchool } from "react-icons/md";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden">
      <NavigationSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow px-6 h-16">
          {/* Left side: Page title and description */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>

          {/* Right side: Notification + Profile */}
          <div className="flex items-center">
            <button className="relative mr-4">
              🔔
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <span className="mr-4 font-semibold">Khaled Elghamedi</span>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="h-10 w-auto md:h-12 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
