import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Palette,
  BookOpen,
  Menu,
  X,
  Drama,
  Music,
  Languages,
  Atom,
  Cpu,
  Calculator,
  Landmark,
  Combine,
  Construction,
  FileSliders,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Navigation links data
  const navLinks = [
    { path: "/", name: "Home", icon: Home, activeColor: "text-[#0071e3]" },
    { path: "/art", name: "Art", icon: Palette, activeColor: "text-pink-600" },
    {
      path: "/drama-puppetry",
      name: "Drama & Puppetry",
      icon: Drama,
      activeColor: "text-purple-600",
    },
    {
      path: "/movement-music",
      name: "Movement & Music",
      icon: Music,
      activeColor: "text-purple-600",
    },
    {
      path: "/language-literacy",
      name: "Language & Literacy",
      icon: Languages,
      activeColor: "text-purple-600",
    },
    {
      path: "/science",
      name: "Science",
      icon: Atom,
      activeColor: "text-purple-600",
    },
    {
      path: "/engineering",
      name: "Engineering",
      icon: Construction,
      activeColor: "text-purple-600",
    },
    {
      path: "/technologies",
      name: "Technologies",
      icon: Cpu,
      activeColor: "text-purple-600",
    },
    {
      path: "/mathematics-numeracy",
      name: "Mathematics & Numeracy",
      icon: Calculator,
      activeColor: "text-purple-600",
    },
    {
      path: "/humanities-social-sciences",
      name: "Humanities & Social Science",
      icon: Landmark,
      activeColor: "text-purple-600",
    },
    {
      path: "/integrated-curriculum",
      name: "Integrated Curriculum",
      icon: Combine,
      activeColor: "text-purple-600",
    },
    {
      path: "/reference",
      name: "References",
      icon: FileSliders,
      activeColor: "text-purple-600",
    },
  ];

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-[#0071e3]" />
              <span className="text-xl font-bold text-gray-900">
                Creativity in Early Childhood
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-1 transition-colors px-2 py-1 rounded ${
                      isActive
                        ? `${link.activeColor} font-medium`
                        : "text-gray-600 hover:text-[#0071e3] font-medium"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? `bg-indigo-50 ${link.activeColor}`
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
