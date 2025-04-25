import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBoxes,
  FaFileAlt,
  FaBell,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const NavigationSidebar = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = {
    displayName: "Abdellatif Feghouli",
    email: "abdellatif@example.com",
    userType: "Student",
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      name: "home",
      path: "/home",
      label: "Home",
      icon: <FaHome className="text-lg" />,
    },
    {
      name: "ressources",
      path: "/ressources",
      label: "Resources",
      icon: <FaBoxes className="text-lg" />,
    },
    {
      name: "quiz",
      path: "/quiz",
      label: "Quiz",
      icon: <FaFileAlt className="text-lg" />,
    },
    {
      name: "notifications",
      path: "/notifications",
      label: "Notifications",
      icon: <FaBell className="text-lg" />,
      badge: 3,
    },
    {
      name: "profile",
      path: "/profile",
        label: "Profile",
        icon: <FaUserGraduate className="text-lg" />,
    }
  ];

  const settingsItems = [
    {
      name: "settings",
      path: "/settings",
      label: "Settings",
      icon: <FaCog className="text-lg" />,
    },
    {
      name: "help",
      path: "/help",
      label: "Help Center",
      icon: <FaQuestionCircle className="text-lg" />,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-secondary p-2 rounded-lg text-white shadow-md"
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
            d={
              mobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-full max-w-xs md:max-w-xs md:w-64 bg-white text-gray-800 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:z-0 shadow-lg border-r border-gray-200`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 flex items-center justify-between gap-3 border-b border-gray-200">
            <Link
              to="/dashboard"
              className="flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-2 rounded-lg bg-secondary text-white">
                <MdSchool className="text-xl" />
              </div>
              <span className="text-xl font-bold tracking-wide">Miras</span>
            </Link>
            <div className="flex md:hidden justify-end">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-800"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-5">
            <div className="mb-8">
              <h3 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        setActiveTab(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        activeTab === item.name
                          ? "bg-secondary/10 text-secondary font-medium border-l-4 border-primary"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Settings */}
            <div>
              <ul className="space-y-2">
                {settingsItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        setActiveTab(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        activeTab === item.name
                          ? "bg-primary/10 text-primary font-medium border-l-4 border-primary"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      console.log("Logging out...");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
                  >
                    <FaSignOutAlt className="text-lg" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-5 border-t border-gray-200">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white font-bold">
                {user.displayName.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {user.displayName}
                </p>
                <p className="text-xs text-gray-500">{user.userType}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavigationSidebar;
