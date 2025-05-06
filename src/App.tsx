import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Reasons from './components/Reasons';
import Speakers from './components/Speakers';
import ThemeTracks from './components/ThemeTracks';
import Tickets from './components/Tickets';
import Sponsors from './components/Sponsors';
import Organizers from './components/Organizers';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Reservation from './components/Reservation';

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <Reasons />
    <Speakers />
    <ThemeTracks /> 
    <Tickets />
    <Sponsors />
    <Organizers />
    <Footer /> 
    <CookieConsent /> 
    <Reservation isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />  
    </>
    
  );
}

export default App;
