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
    </>
    
  );
}

export default App;
