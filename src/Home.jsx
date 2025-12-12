// src/Home.jsx
import React from "react";
import HeroSection from "./Hero";
import EventCountdown from "./EventCountdown";
import EventInformation from "./EventInformation";
import RaceCategories from "./RaceCategories";
import PrizesRewards from "./PrizesRewards";
import Sponsors from "./Sponsors";
import CallToAction from "./CallToAction";

function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <EventCountdown />
      <EventInformation />
      <RaceCategories />
      <PrizesRewards />
      <Sponsors />
      <CallToAction />
    </main>
  );
}

export default Home;
