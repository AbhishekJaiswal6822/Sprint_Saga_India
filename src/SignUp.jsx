// src/SignUp.jsx
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center pt-20 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8 border">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Create an Account</h2>
        <p className="text-slate-500 mb-6">
          Join the Marathon Run community and register for the event.
        </p>

        {/* Form */}
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-teal-400"
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full px-3 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-teal-400"
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter a password"
          className="w-full px-3 py-2 border rounded-lg mb-6 focus:ring-2 focus:ring-teal-400"
        />

        {/* Submit Button */}
        <button
          className="w-full py-2 rounded-lg text-white font-semibold cursor-pointer"
          style={{ background: "linear-gradient(90deg,#05c6d7,#0c9aa3)" }}
        >
          Create Account
        </button>

        {/* Already have account? */}
        <div className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-teal-600 font-medium">
            Sign in here
          </Link>
        </div>

        <div className="text-center mt-3 text-sm">
          <Link to="/" className="text-teal-500">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}


export default SignUp;