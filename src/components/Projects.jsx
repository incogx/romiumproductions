import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Users, 
  ArrowUpRight, 
  X, 
  Instagram, 
  CheckCircle2, 
  Award,
  Volume2,
  Lightbulb,
  Monitor,
  Flame,
  Calendar
} from 'lucide-react';
import { sampleProjects } from '../data/productionData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = sampleProjects[0]; // CIPOFEST'26

  return (
    <section id="work" className="relative py-28 bg-[#030306]/80 backdrop-blur-[2px] text-white overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
              <Award className="w-3.5 h-3.5" /> Verified Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading">
              BUILT TO BE <br />
              <span className="text-metallic-gold">EXPERIENCED.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified Live Projects
            </span>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm text-left md:text-right">
              Explore real-world event executions, official campus partnerships, and touring-grade concert rigs.
            </p>
          </div>
        </div>

        {/* Featured Real Project Hero Card: CIPOFEST'26 */}
        {featured && (
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-[#090a12] border border-gold-500/40 shadow-2xl shadow-black/80 group"
            >
              {/* Background Concert Stage Imagery */}
              <div className="relative min-h-[580px] sm:min-h-[500px] md:min-h-[520px] w-full overflow-hidden bg-black flex flex-col justify-between p-5 sm:p-8 md:p-10">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-115 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a12] via-[#090a12]/75 to-black/40" />
                
                {/* Top Badges */}
                <div className="relative flex flex-wrap items-center justify-between gap-3 z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-gradient-to-r from-gold-500 to-amber-400 text-black shadow-lg">
                      {featured.sampleNotice}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-black/70 backdrop-blur-md text-slate-200 border border-white/20">
                      {featured.categoryLabel}
                    </span>
                  </div>

                  {/* Direct Instagram Link Button */}
                  <a
                    href={featured.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/90 hover:bg-pink-600 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg transition-transform hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View Official Post on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-4 pt-10">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md">
                      <Users className="w-4 h-4 text-gold-400" /> {featured.audience}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md">
                      <MapPin className="w-4 h-4 text-gold-400" /> {featured.venue}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading uppercase tracking-tight">
                    {featured.title}
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
                    {featured.description}
                  </p>

                  {/* Rig Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {featured.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/10 border border-white/15 text-slate-200 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Details Bar */}
              <div className="p-6 sm:p-8 bg-[#0b0c15] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white uppercase block">
                      CIPET : IPT Chennai Partnership
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Turnkey line array acoustics, moving heads, and pro-show live coordination.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    View Rig Details
                  </button>
                  <a
                    href={featured.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg text-center hover:scale-105 transition-transform"
                  >
                    Open Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 3 Real Production Execution Pillars (Replacing fake project fillers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          <div className="p-8 rounded-2xl bg-[#0a0b12] border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white font-heading">
              College Culturals & Mega Fests
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Official event partners for premier institutions like CIPET IPT Chennai. We engineer high-decibel line arrays, heavy-duty stage rigging, and high-energy pro-show DJ experiences.
            </p>
            <div className="pt-2 text-xs font-mono text-gold-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 5,000+ Crowd Capacity
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a0b12] border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Volume2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white font-heading">
              Concert Sound & Touring Rigging
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Touring-grade RCF HDL30-A line arrays with RDNet networked control, high-output cardioid subwoofers, and Allen & Heath 96kHz digital mixing consoles.
            </p>
            <div className="pt-2 text-xs font-mono text-gold-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 137 dB Peak Acoustic SPL
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a0b12] border border-white/10 hover:border-gold-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Monitor className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white font-heading">
              Intelligent Lighting & 4K LED Walls
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Synchronized Sharpy 17R beams, B-EYE washes, and high-refresh P3.9 / P2.6 LED video walls delivering crystal-clear visuals and broadcast camera readiness.
            </p>
            <div className="pt-2 text-xs font-mono text-gold-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 3840Hz Anti-Moiré Panels
            </div>
          </div>
        </div>

        {/* Partnership Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0d0e19] via-[#151726] to-[#0d0e19] border border-gold-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Official Technical Partnerships
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Host Your Next Event With Romium Productions
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Whether you are organizing a university cultural festival, an open-air concert, or a corporate summit, get verified touring-grade audio, lighting, and stage infrastructure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-300 to-gold-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg text-center hover:scale-105 transition-transform"
            >
              Inquire Event Partnership
            </a>
            <a
              href="https://www.instagram.com/p/DfPhr0wnwKr/?cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0a0b12] border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center hover:border-gold-500/50 flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram Post</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0c0d14] rounded-2xl border border-gold-500/30 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-[#0c0d14]/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-gold-400 border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-gold-500/20 text-gold-300 border border-gold-500/40">
                    {selectedProject.sampleNotice}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Audience</span>
                    <span className="text-sm font-bold text-white">{selectedProject.audience}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Venue</span>
                    <span className="text-sm font-bold text-white">{selectedProject.venue}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-gold-400 mb-2">Production Scope</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">Key Rigging Elements</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#161724] border border-white/10 text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
                  <a
                    href={selectedProject.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View Post on Instagram</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg text-center"
                  >
                    Discuss Stage Plan
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
