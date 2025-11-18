// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Register from "./Register";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./Footer";

/* Simple Home placeholder — replace with your actual homepage component */
function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto py-32 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-teal-700">Welcome — Marathon Run</h1>
        <p className="mt-4 text-slate-600">Use the navbar to navigate to Register / Sign In pages.</p>

        <div className="mt-10">
          <a href="/register" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
            Register Now
          </a>
        </div>

        {/* filler content so you can test scrolling / sticky nav */}
        <div className="mt-16 space-y-8 text-left">
          {Array.from({ length: 12 }).map((_, i) => (
            <p className="text-slate-600" key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet turpis non lorem
              molestie aliquet. Integer id mi ut eros luctus efficitur.
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navbar will stay on top and highlight active route automatically */}
        <Navbar />

        {/* Main content area - routes swap here */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* add other routes as needed */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;