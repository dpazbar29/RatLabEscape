import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GameplaySection from './components/GameplaySection';
import FeaturesSection from './components/FeaturesSection';
import StorySection from './components/StorySection';
import ContactSection from './components/ContactSection';
import TrailerSection from './components/TrailerSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GameplaySection />
      <FeaturesSection />
      <StorySection />
      <TrailerSection />
      <ContactSection />
    </>
  );
}

export default App;
