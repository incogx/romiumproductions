import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function CinematicBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Hook into document scroll
  const { scrollYProgress } = useScroll();

  // Smooth scroll spring for Apple-like buttery acceleration and deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Apple-style multi-stage transformations across the page
  // 0.0 = Hero, 0.25 = Services, 0.5 = Work, 0.75 = Equipment, 1.0 = Contact
  const videoScale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [1.02, 1.18, 1.08, 1.22]);
  const videoY = useTransform(smoothProgress, [0, 1], ['0%', '-12%']);
  const stageDarkness = useTransform(smoothProgress, [0, 0.25, 0.55, 0.8, 1], [0.15, 0.65, 0.55, 0.68, 0.82]);
  const beamAngleLeft = useTransform(smoothProgress, [0, 0.5, 1], [-25, 15, -10]);
  const beamAngleRight = useTransform(smoothProgress, [0, 0.5, 1], [25, -20, 15]);
  const beamIntensity = useTransform(smoothProgress, [0, 0.25, 0.6, 1], [0.25, 0.2, 0.35, 0.2]);
  const laserOpacity = useTransform(smoothProgress, [0, 0.35, 0.55, 0.85], [0.15, 0.45, 0.55, 0.2]);

  // Ensure autoplay triggers reliably on all devices
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play();
            }
          });
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#030305]">
      {/* Layer 1: Transforming Live Video / Stage Canvas */}
      <motion.div
        style={{
          scale: videoScale,
          y: videoY,
        }}
        className="absolute inset-0 w-full h-full transform-gpu origin-center"
      >
        {/* HTML5 Background Video - Frontal & Vibrant */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover filter contrast-110 saturate-120 transition-opacity duration-700 ${
            videoLoaded ? 'opacity-95' : 'opacity-85'
          }`}
        >
          <source src="/assets/videos/concert-stage.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Layer 2: Apple-Style Dynamic Contrast Curtain for Readability on Scroll */}
      <motion.div
        style={{
          opacity: stageDarkness,
        }}
        className="absolute inset-0 bg-[#030305] transition-opacity duration-300 pointer-events-none"
      />

      {/* Soft Edge Blending (Keeps hero center clear and video frontal) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/60 via-transparent to-[#030305] pointer-events-none" />

      {/* Layer 3: Moving Head Beams (Angle and Sweep Physically Drive by Scroll!) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Moving Head Beam */}
        <motion.div
          style={{
            rotate: beamAngleLeft,
            opacity: beamIntensity,
          }}
          className="absolute -top-32 left-[12%] w-48 sm:w-72 h-[1200px] bg-gradient-to-b from-white/40 via-gold-400/25 to-transparent blur-3xl transform-gpu origin-top"
        />

        {/* Right Moving Head Beam */}
        <motion.div
          style={{
            rotate: beamAngleRight,
            opacity: beamIntensity,
          }}
          className="absolute -top-32 right-[12%] w-48 sm:w-72 h-[1200px] bg-gradient-to-b from-white/40 via-gold-400/25 to-transparent blur-3xl transform-gpu origin-top"
        />

        {/* Center Stage Spotlight Cone */}
        <motion.div
          style={{
            opacity: beamIntensity,
          }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[900px] bg-gradient-to-b from-white/20 via-gold-500/10 to-transparent blur-3xl"
        />

        {/* Stage Laser Vector Grid (Appears during festival & portfolio scroll depths) */}
        <motion.div
          style={{
            opacity: laserOpacity,
          }}
          className="absolute inset-x-0 top-1/4 h-96 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.15),transparent_70%)] blur-2xl transform-gpu pointer-events-none"
        />
      </div>

      {/* Ambient Stage Dust / Atmospheric Haze Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(223,183,108,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
    </div>
  );
}
