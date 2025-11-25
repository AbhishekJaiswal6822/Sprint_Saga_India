// src/Navbar.jsx
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // active route
  const path = location.pathname;
  let activeKey = null;

  if (path === "/") activeKey = "home";
  else if (path.startsWith("/register")) activeKey = "register";
  else if (path.startsWith("/community")) activeKey = "community";
  else if (path.startsWith("/expo")) activeKey = "expo";
  else if (path.startsWith("/raceday")) activeKey = "raceday";
  else if (path.startsWith("/results")) activeKey = "results";
  else if (path.startsWith("/dashboard")) activeKey = "dashboard";
  else if (path.startsWith("/admin")) activeKey = "admin";

  const links = [
    { key: "home", label: "Home", to: "/" },
    { key: "register", label: "Register", to: "/register" },
    { key: "community", label: "Community", to: "/community" },
    { key: "expo", label: "Expo Management", to: "/expo" },
    { key: "raceday", label: "Race Day", to: "/raceday" },
    { key: "results", label: "Results & Gallery", to: "/results" },
    { key: "dashboard", label: "Dashboard", to: "/dashboard" },
    { key: "admin", label: "Admin", to: "/admin" },
  ];

  const toggle = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* fixed height for all pages */}
        <div className="h-16 flex items-center justify-between">
          {/* LEFT: logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: "linear-gradient(135deg,#0c9aa3,#05c6d7)" }}
            >
              MR
            </div>
            <div className="text-teal-600 font-semibold text-lg md:text-xl whitespace-nowrap">
              Marathon Run
            </div>
          </Link>

          {/* CENTER: desktop nav */}
          <nav
            className="flex-1 hidden lg:flex justify-center"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-3">
              {links.map(({ key, label, to }) => {
                const isActive = key === activeKey;
                return (
                  <li key={key} className="whitespace-nowrap">
                    {isActive ? (
                      <Link
                        to={to}
                        className="inline-block px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium shadow-sm whitespace-nowrap"
                        aria-current="page"
                      >
                        {label}
                      </Link>
                    ) : (
                      <Link
                        to={to}
                        className="inline-block text-slate-700 px-3 py-2 text-sm font-medium transition rounded-full hover:bg-teal-600 hover:text-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200 whitespace-nowrap"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT: auth + burger */}
          <div className="flex items-center gap-3">
            {/* desktop auth buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/signin"
                className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition text-sm whitespace-nowrap"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="px-4 py-1.5 rounded-lg text-white font-medium text-sm whitespace-nowrap"
                style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}
              >
                Sign Up
              </Link>
            </div>

            {/* burger button (mobile only) */}
            <button
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="block lg:hidden p-2 rounded-md text-2xl text-slate-700 hover:bg-slate-100"
            >
              {open ? <AiOutlineClose /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white border-t transition-all ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6">
          <ul className="space-y-2">
            {links.map(({ key, label, to }) => (
              <li key={key}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    key === activeKey
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile auth buttons */}
          <div className="mt-4 flex gap-3">
            <Link
              to="/signin"
              onClick={closeMenu}
              className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-center text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={closeMenu}
              className="flex-1 px-4 py-2 rounded-lg text-white text-center text-sm"
              style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
