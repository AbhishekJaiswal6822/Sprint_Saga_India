// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

// Your real Home.jsx (the one with HeroSection, Countdown, Sponsors, etc.)
import Home from "./Home";

// Other pages
import Register from "./Register";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResultsGallery from "./ResultsGallery";
import AdminDashboard from "./AdminDashboard";
import Accomodation from "./Accomodation";
import AdminAccommodation from "./AdminAccommodation";

// scroll from top 
import ScrollToTop from "./ScrollToTop";

// under maintenance
import UnderMaintenance from "./UnderMaintenance";


// faqs 
import Faqs from "./Faqs";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">

        {/* Navbar always on top */}
        <Navbar />

        {/* Route area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/results" element={<ResultsGallery />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/accommodation" element={<Accomodation />} />
            <Route path="/admin/accommodation" element={<AdminAccommodation />} />
            <Route path="/community" element={<UnderMaintenance />} />
            <Route path="/expo" element={<UnderMaintenance />} />
            <Route path="/raceday" element={<UnderMaintenance />} />
            <Route path="/dashboard" element={<UnderMaintenance />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy&policies" element={<PrivacyPolicy/>}/>

          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
