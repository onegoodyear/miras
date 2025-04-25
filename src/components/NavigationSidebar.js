import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaHome,
  FaTruck,
  FaBoxes,
  FaFileAlt,
  FaBell,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const NavigationSidebar = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useState("Abdellatif Feghouli");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    {
      name: "dashboard",
      path: "/dashboard",
      label: "Dashboard",
      icon: <FaHome />,
    },
    {
      name: "ressources",
      path: "/dashboard",
      label: "Ressources",
      icon: <FaBoxes />,
    },
    {
      name: "Quiz",
      path: "/quiz",
      label: "Quiz",
      icon: <FaFileAlt />,
    },
    {
      name: "notifications",
      path: "/notifications",
      label: "Notifications",
      icon: <FaBell />,
      badge: 3, // You can dynamically set this value
    },
  ];

  const settingsItems = [
    {
      name: "settings",
      path: "/settings",
      label: "Settings",
      icon: <FaCog />,
    },
    {
      name: "help",
      path: "/help",
      label: "Help Center",
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <div className="relative">
      {/* Mobile Header - Fixed at the top */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm p-4 flex justify-between items-center z-30">
        <button
          onClick={toggleMobileMenu}
          className="text-darkOcean"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-darkOcean">LogiBridge</h1>
        <div className="relative">
          <MdSchool className="text-identity text-xl" />
          <span className="absolute -top-1 -right-1 bg-background text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
      </header>

      {/* Sidebar - Positioned below the mobile header */}
      <aside
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:block fixed md:static inset-0 md:inset-auto md:left-0 mt-16 md:mt-0 w-full md:w-64 bg-white shadow-md z-20 overflow-y-auto`}
      >
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="bg-gradient-to-r from-crimsonRed to-goldenYellow p-2 rounded-lg">
                <MdSchool className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-darkOcean">
                LogiBridge
              </span>
            </Link>
            <button
              className="md:hidden text-darkOcean"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition ${
                    activeTab === item.name
                      ? "bg-skyBlue/10 text-darkOcean font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`text-lg ${
                      activeTab === item.name ? "text-skyBlue" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-crimsonRed text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Settings Section */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              Settings
            </h3>
            <ul className="space-y-2">
              {settingsItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition ${
                      activeTab === item.name
                        ? "bg-skyBlue/10 text-darkOcean font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        activeTab === item.name
                          ? "text-skyBlue"
                          : "text-gray-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-3 p-3 rounded-lg transition w-full text-gray-600 hover:bg-gray-100">
                  <span className="text-lg text-gray-500">
                    <FaSignOutAlt />
                  </span>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* User Profile Card */}
        <div className="p-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-crimsonRed to-goldenYellow flex items-center justify-center text-white">
              {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
            </div>
            <div>
              <p className="font-medium text-darkOcean">
                {user?.displayName || user?.email?.split("@")[0] || "User"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.userType === "Transportateur"
                  ? "Transport Provider"
                  : "Business Account"}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavigationSidebar;
