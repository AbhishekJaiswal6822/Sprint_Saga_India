import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './HeroSection.jsx'
import EventCountdown from './EventCountdown.jsx'
import EventInformation from './EventInformation.jsx'
import RaceCategories from './RaceCategories.jsx'
import PrizesRewards from './PrizesRewards.jsx'
import Sponsors from './Sponsors.jsx'
import CallToAction from './CallToAction.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
 
   <>
    
    <Navbar />
    <HeroSection />
    <EventCountdown />
    <EventInformation />
    <RaceCategories />
    <PrizesRewards />
    <Sponsors />
    <CallToAction />
    <Footer />
   </>
  
)
