// src/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

/**
 * Navbar
 * - active: optional string key of the active nav item (e.g. "register")
 * 
 */
<Link to="/register" className="text-slate-700 px-3 py-2 text-sm font-medium transition rounded-full hover:bg-teal-600 hover:text-white hover:shadow-sm">
  Register
</Link>
function Navbar({ active = null }) {
  const links = [
    { key: "home", label: "Home", href: "#home" },
    { key: "register", label: "Register", href: "#register" },
    { key: "community", label: "Community", href: "#community" },
    { key: "expo", label: "Expo Management", href: "#expo" },
    { key: "raceday", label: "Race Day", href: "#raceday" },
    { key: "results", label: "Results & Gallery", href: "#results" },
    { key: "dashboard", label: "Dashboard", href: "#dashboard" },
    { key: "admin", label: "Admin", href: "#admin" },
  ];

  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close mobile menu on outside click or ESC
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // toggle handler
  const toggle = () => setOpen((v) => !v);

  // close when clicking mobile link
  const handleLinkClick = () => setOpen(false);

  return (
    <header ref={navRef} className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* LEFT: badge + title */}
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: "linear-gradient(135deg,#0c9aa3,#05c6d7)" }}
            >
              MR
            </div>
            <div className="text-teal-600 font-semibold text-lg md:text-xl">Marathon Run</div>
          </div>

          {/* CENTER: desktop nav (centered) */}
          <nav className="flex-1 hidden lg:flex justify-center" aria-label="Primary">
            <ul className="flex items-center gap-4">
              {links.map(({ key, label, href }) => {
                const isActive = key === active;
                return (
                  <li key={key}>
                    {isActive ? (
                      <a
                        href={href}
                        className="inline-block px-4 py-2 rounded-full bg-teal-600 text-white font-medium shadow-sm"
                        aria-current="page"
                      >
                        {label}
                      </a>
                    ) : (
                      <a
                        href={href}
                        className="text-slate-700 px-3 py-2 text-sm font-medium transition rounded-full hover:bg-teal-600 hover:text-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT: auth buttons + mobile burger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
              >
                Sign In
              </button>

              <button
                type="button"
                className="px-4 py-1.5 rounded-lg text-white font-medium"
                style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}
              >
                Sign Up
              </button>
            </div>

            {/* mobile burger */}
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

      {/* MOBILE: slide-down panel (animated by max-height) */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-t`}
        style={{ maxHeight: open ? "520px" : "0px" }}
      >
        <div className="px-4 pt-4 pb-6">
          <ul className="space-y-2">
            {links.map(({ key, label, href }) => (
              <li key={key}>
                <a
                  href={href}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    key === active ? "bg-teal-50 text-teal-700" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile auth buttons */}
          <div className="mt-4 flex gap-3">
            <button onClick={() => setOpen(false)} className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700">
              Sign In
            </button>
            <button onClick={() => setOpen(false)} className="flex-1 px-4 py-2 rounded-lg text-white" style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Navbar