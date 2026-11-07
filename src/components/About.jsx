import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Volume2, 
  Lightbulb, 
  Monitor, 
  Layers, 
  ShieldCheck, 
  Flame, 
  Award, 
  CheckCircle2,
  Users 
} from 'lucide-react';
import { stats, leadershipTeam } from '../data/productionData';

export default function About() {
  const highlights = [
    {
      icon: Volume2,
      title: "Professional Sound Systems",
      description: "Touring line arrays calibrated with acoustic measurement tools for pinpoint sonic clarity across every seat."
    },
    {
      icon: Lightbulb,
      title: "Intelligent Lighting Setups",
      description: "Timecoded moving head beams, profile spots, and architectural washes creating breathtaking visual drama."
    },
    {
      icon: Monitor,
      title: "LED Display Solutions",
      description: "Ultra-high-definition, high-refresh rate indoor/outdoor LED screens with flawless 4K video switching."
    },
    {
      icon: Layers,
      title: "Stage & Truss Infrastructure",
      description: "TÜV-certified aluminum trusses, goalposts, and modular stages engineered for strict structural safety."
    },
    {
      icon: ShieldCheck,
      title: "Event Production Coordination",
      description: "From artist rider fulfillment to stage cue-calling and power redundancy, ensuring zero-stress execution."
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#05060a]/80 backdrop-blur-[2px] text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Split Layout: Philosophy & Official Logo Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" /> Technical Precision & Artistry
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading leading-tight">
              WE BRING THE VISION <br />
              <span className="text-metallic-gold">TO LIFE.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-white">ROMIUM PRODUCTIONS</strong>, we sit at the intersection of heavy engineering and immersive showcraft. We believe an event is more than just speakers and spotlights—it is an emotional journey where sound hits the chest, light shapes the atmosphere, and the stage becomes an iconic centerpiece.
              </p>
              <p className="text-slate-400">
                Bringing together world-class technical expertise, cutting-edge stage design, and an uncompromising inventory of touring-grade equipment, we empower festival organizers, corporate directors, educational institutions, and luxury event planners to execute without compromise.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Touring-Spec Concert Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Timecoded DMX Light Shows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Certified Rigging & Load Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Dual-Redundant Power & Signal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage Graphic with Official Romium 3D Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border border-gold-500/30 bg-[#0a0b12] p-6 shadow-2xl shadow-black/80 group">
              {/* Gold glow beam behind logo card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 via-silver-400/20 to-gold-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative rounded-xl overflow-hidden bg-black/90 border border-white/10 p-4">
                {/* Official Romium Dark 3D Logo */}
                <img
                  src="/assets/images/romium-logo-dark.jpg"
                  alt="ROMIUM PRODUCTIONS — SOUND. LIGHT. STAGE."
                  className="w-full h-auto object-contain rounded-lg"
                />

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-gold-400 font-semibold">ESTABLISHED RIG QUALITY</span>
                  <span>100% SPEC COMPLIANT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#090a10] border border-white/10 hover:border-gold-500/40 transition-colors text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-metallic-gold mb-1 font-heading">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Leadership & The Visionary Team */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <Users className="w-3.5 h-3.5" /> Leadership & Vision
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase font-heading leading-tight">
              The Minds Behind <span className="text-metallic-gold">The Stage</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Powered by over a decade of frontline vendor sound engineering, touring logistics, and creative media vision.
            </p>
          </div>

          {/* Full-Width Panoramic Team Photo (Completely Uncropped — Shows Entire Team) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-10 rounded-3xl overflow-hidden border border-gold-500/30 bg-[#0a0b12] shadow-2xl relative group"
          >
            {/* Ambient gold glow halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 via-amber-500/15 to-gold-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            
            <div className="relative overflow-hidden bg-black/60">
              <img
                src="/assets/images/romium-team-leadership.jpg"
                alt="Romium Productions Core Leadership Team — Naveen Kumar P, Abdul Kaif J, Sarvesh"
                className="w-full h-auto max-h-[580px] object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Status Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-[11px] font-mono text-gold-300 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ON-GROUND PRODUCTION LEADERSHIP</span>
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="relative p-5 sm:p-6 bg-[#0b0c15] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-white font-heading">
                  Romium Productions Core Leadership Team
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Live Event Operations & Turnkey Production Management • Chennai, India
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-[11px] font-mono text-gold-400 font-bold uppercase w-fit">
                Verified On-Ground Team
              </div>
            </div>
          </motion.div>

          {/* 3 Executive Leader Cards (Side-by-Side Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-[#0c0d16] border border-white/10 hover:border-gold-500/40 hover:bg-[#10111d] transition-all duration-300 group shadow-lg relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold-500/10 transition-colors" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {leader.role}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {leader.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-white group-hover:text-gold-200 transition-colors font-heading tracking-wide mb-1">
                    {leader.name}
                  </h4>
                  <div className="text-xs text-gold-400 font-mono font-semibold mb-3">
                    {leader.experience}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {leader.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-gold-400 flex-shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5 Core Pillars Breakdown */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 mb-2">
              Integrated Production Capabilities
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-white uppercase font-heading">
              Built on Five Pillars of Technical Execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0d14] border border-white/5 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-gold-200 transition-colors mb-2 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}

            {/* Turnkey Promise card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12131e] to-[#0c0d14] border border-gold-500/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-300 mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-heading">
                  The Romium Standard
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every stage is simulated digitally, load-checked, and acoustically measured before the crowd enters the gates.
                </p>
              </div>
              <div className="pt-4 text-xs font-mono text-metallic-gold font-semibold uppercase">
                SOUND • LIGHT • STAGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
