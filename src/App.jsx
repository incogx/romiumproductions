import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CinematicBackground from './components/CinematicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Equipment from './components/Equipment';
import StageConfigurator from './components/StageConfigurator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback timer to ensure loading screen resolves
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#030305] text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <CinematicBackground />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Equipment />
        <StageConfigurator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
