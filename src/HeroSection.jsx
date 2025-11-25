// src/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-linear-to-b from-cyan-50 via-teal-50/40 to-cyan-50">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Date + location pill */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold shadow-sm mb-8">
          March 15, 2024 • Central Park, NYC
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-700 mb-8">
          Marathon Run 2024
        </h1>

        {/* Subheading */}
        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-slate-600 leading-relaxed mb-10">
          Join thousands of runners in the most exciting marathon event of the
          year. Challenge yourself, achieve your goals, and cross the finish
          line with pride.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full text-white font-semibold shadow-lg bg-linear-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 transition"
          >
            Register Now
          </Link>

          <a
            href="#results"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full text-teal-700 font-semibold bg-white border border-teal-100 shadow-sm hover:bg-teal-50 transition"
          >
            View Results
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
