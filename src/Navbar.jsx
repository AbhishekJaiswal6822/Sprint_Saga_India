// src/Navbar.jsx
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // route -> activeKey
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
        {/* Single header row - aligns everything perfectly */}
        <div className="h-16 flex items-center justify-between">

          {/* LEFT: logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" onClick={closeMenu} aria-label="Sprints Saga India - Home">
              <img
                src={logo}
                alt="Sprints Saga India"
                className="object-contain w-24 sm:w-28 md:w-36 h-16"
                draggable={false}
              />
            </Link>
          </div>

          {/* CENTER: mobile H1 OR desktop nav (keeps perfect center alignment) */}
          <div className="flex-1 flex items-center justify-center">
            {/* Mobile H1 (visible on small screens only) */}
            <h1 className="md:hidden text-center text-lg font-extrabold text-slate-800 tracking-wide">
              Sprints Saga India
            </h1>

            {/* Desktop nav (hidden on small screens) */}
            <nav className="hidden lg:flex" aria-label="Primary">
              <ul className="flex items-center gap-3">
                {links.map(({ key, label, to }) => (
                  <li key={key} className="whitespace-nowrap">
                    {key === activeKey ? (
                      <Link
                        to={to}
                        className="inline-block px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium shadow-sm"
                        aria-current="page"
                      >
                        {label}
                      </Link>
                    ) : (
                      <Link
                        to={to}
                        className="inline-block px-3 py-2 text-sm text-slate-700 rounded-full hover:bg-teal-600 hover:text-white transition"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT: auth buttons + burger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* desktop auth */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/signin"
                className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-sm"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="px-4 py-1.5 rounded-lg text-white text-sm"
                style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}
              >
                Sign Up
              </Link>
            </div>

            {/* mobile burger */}
            <button
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="block lg:hidden p-2 rounded-md text-2xl text-slate-700"
            >
              {open ? <AiOutlineClose /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white border-t transition-all ${open ? "block" : "hidden"}`}
      >
        <div className="px-4 pt-4 pb-6">
          <ul className="space-y-2">
            {links.map(({ key, label, to }) => (
              <li key={key}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    key === activeKey ? "bg-teal-50 text-teal-700" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile auth */}
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
