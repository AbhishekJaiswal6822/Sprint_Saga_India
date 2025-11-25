// Footer.jsx
import React from "react";
import { FaDeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* About */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-3">Marathon Run 2024</h4>
              <p className="text-slate-400 leading-relaxed">
                The premier marathon event bringing together runners from around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-3">

                <li><Link to="/register" className="text-slate-300 hover:text-white">Register</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/accommodation">Accommodation</Link></li>

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
              <p className="text-slate-300">abhishekjaiswal68774@gmail.com</p>
              <p className="text-slate-300 mt-2">+91 9076402682</p>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mt-10" />

          {/* Copyright */}
          <div className="mt-6 text-center text-slate-400">
            © {new Date().getFullYear()} Abhishek Jaiswal. All rights reserved.
          </div>
        </div>
      </footer>
    </>

  );
}

export default Footer;
