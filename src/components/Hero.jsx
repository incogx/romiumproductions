import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Flame, Radio, Volume2, Sparkles, ChevronRight } from 'lucide-react';
import { brandConfig } from '../data/productionData';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX / clientWidth - 0.5) * 40;
      const y = (e.clientY / clientHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-16"
    >
      {/* Subtle Atmospheric Stage Lighting (Complements live video) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Overhead Truss Matrix Silhouette Overlay */}
        <div className="absolute top-0 inset-x-0 h-40 bg-truss-pattern opacity-25 mask-gradient-b" />

        {/* Subtle Ambient Gold Stage Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-gradient-to-b from-gold-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111219]/90 border border-gold-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(223,183,108,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
            Touring-Grade Production Agency
          </span>
        </motion.div>

        {/* Official Romium Emblem (Spotlight + Truss Icon) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 relative group max-w-xs mx-auto flex items-center justify-center"
        >
          {/* Subtle warm stage spotlight glow behind emblem */}
          <div className="absolute -inset-6 bg-gradient-to-r from-gold-500/25 via-amber-400/30 to-gold-500/25 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          <img
            src="/assets/images/romium-emblem.png"
            alt="Romium Emblem"
            className="h-24 sm:h-32 md:h-36 w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_12px_35px_rgba(223,183,108,0.35)] filter brightness-105 relative z-10"
          />
        </motion.div>

        {/* Primary Headline: Typography from Brief */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-1 sm:space-y-2 mb-6"
        >
          <h2 className="text-sm sm:text-lg md:text-xl font-mono tracking-[0.3em] uppercase text-silver-200 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            WE DON'T JUST CREATE EVENTS.
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase font-heading drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            WE CREATE <span className="text-metallic-gold">EXPERIENCES.</span>
          </h1>
        </motion.div>

        {/* Brand Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3 mb-10 max-w-3xl"
        >
          <div className="inline-block relative">
            <span className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.2em] uppercase text-metallic-silver font-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              ROMIUM PRODUCTIONS
            </span>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-1" />
          </div>

          <div className="text-sm sm:text-base md:text-lg font-bold tracking-[0.45em] text-gold-300 uppercase font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            SOUND • LIGHT • STAGE
          </div>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto pt-2 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Delivering high-decibel acoustic clarity, synchronized moving-head choreography, 
            high-refresh LED visuals, and heavy-duty truss architecture for premier concerts, 
            cultural festivals, and landmark events.
          </p>
        </motion.div>

        {/* Action Buttons: EXPLORE OUR WORK & START A PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollToSection('work')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-300 to-gold-600 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(223,183,108,0.45)] hover:shadow-[0_0_50px_rgba(223,183,108,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE OUR WORK</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0d0e14]/90 hover:bg-[#151622] text-white border border-white/30 hover:border-gold-500/80 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>START A PROJECT</span>
            <Sparkles className="w-4 h-4 text-gold-400 transition-transform group-hover:rotate-45" />
          </button>
        </motion.div>

        {/* Real-time Technical Pill Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-left w-full max-w-4xl pt-6 border-t border-white/15"
        >
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            <Volume2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-100">RCF HDL30-A</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-wider">Acoustic Arrays</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            <Flame className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-100">DMX Moving Beams</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-wider">Synchronized FX</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            <Radio className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-100">P3.9 / P2.6 LED</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-wider">3840Hz Displays</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            <Sparkles className="w-5 h-5 text-silver-300 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-100">Global Truss F34</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-wider">TÜV Certified Rig</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-col items-center cursor-pointer group"
          onClick={() => scrollToSection('services')}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400 font-mono group-hover:text-gold-300 transition-colors">
            SCROLL TO DISCOVER
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="mt-2 w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-gold-500/50"
          >
            <div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
