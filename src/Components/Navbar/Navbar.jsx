import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Palette,
  BookOpen,
  Menu,
  X,
  Drama,
  ArrowLeft,
  FileText,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-[#0071e3]" />
              <span className="text-xl font-bold text-gray-900">
                Creativity in Early Childhood
              </span>
            </div>
          </NavLink>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 transition-colors ${
                  isActive
                    ? "text-[#0071e3] font-medium"
                    : "text-gray-600 hover:text-[#0071e3] font-medium"
                }`
              }
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/art"
              className={({ isActive }) =>
                `flex items-center space-x-1 transition-colors ${
                  isActive
                    ? "text-pink-600 font-medium"
                    : "text-gray-600 hover:text-[#0071e3] font-medium"
                }`
              }
            >
              <Palette className="h-4 w-4" />
              <span>Art</span>
            </NavLink>
            <NavLink
              to="/drama-puppetry"
              className={({ isActive }) =>
                `flex items-center space-x-1 transition-colors ${
                  isActive
                    ? "text-purple-600 font-medium"
                    : "text-gray-600 hover:text-[#0071e3] font-medium"
                }`
              }
            >
              <Drama className="h-4 w-4" />
              <span>Drama & Puppetry</span>
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            <Home className="h-5 w-5 mr-3" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-pink-50 text-pink-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            <Palette className="h-5 w-5 mr-3" />
            <span>Art</span>
          </NavLink>
          <NavLink
            to="/drama-puppetry"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            <Drama className="h-5 w-5 mr-3" />
            <span>Drama & Puppetry</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
