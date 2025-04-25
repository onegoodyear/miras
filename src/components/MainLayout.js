import React, { useState } from "react";
import NavigationSidebar from "./NavigationSidebar"; // adjust the path
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      <NavigationSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
