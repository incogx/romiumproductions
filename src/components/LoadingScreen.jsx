import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030305] text-white select-none overflow-hidden"
    >
      {/* Ambient concert stage lighting in loader */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute -top-20 left-1/3 w-64 h-[500px] bg-gradient-to-b from-white/10 via-gold-400/5 to-transparent rotate-[-15deg] blur-2xl opacity-40 pointer-events-none" />
        <div className="absolute -top-20 right-1/3 w-64 h-[500px] bg-gradient-to-b from-white/10 via-gold-400/5 to-transparent rotate-[15deg] blur-2xl opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full text-center">
        {/* Official Logo emblem container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          {/* Subtle gold backlight behind logo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-gold-500/25 via-silver-400/20 to-gold-500/25 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          
          <div className="relative p-3">
            <img
              src="/assets/images/romium-logo-transparent.png"
              alt="Romium Productions"
              className="h-24 sm:h-32 md:h-36 w-auto object-contain mx-auto relative z-10 drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)] filter brightness-105"
            />
            {/* Shimmer sweep effect */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2 mb-8"
        >
          <div className="text-xs uppercase tracking-[0.4em] font-semibold text-silver-300">
            Professional Event Production
          </div>
          <div className="text-sm font-semibold tracking-[0.35em] text-metallic-gold">
            SOUND • LIGHT • STAGE
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full bg-[#12131a] rounded-full h-[3px] overflow-hidden border border-white/5 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-600 via-gold-300 to-white"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="flex justify-between w-full mt-3 text-[11px] font-mono tracking-widest text-slate-500">
          <span>INITIALIZING RIG</span>
          <span className="text-gold-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
