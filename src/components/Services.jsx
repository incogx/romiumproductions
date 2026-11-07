import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  Lightbulb, 
  Monitor, 
  Layers, 
  Camera, 
  CalendarCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Sparkles,
  Zap
} from 'lucide-react';
import { services } from '../data/productionData';

const iconMap = {
  'sound-systems': Volume2,
  'stage-lighting': Lightbulb,
  'led-walls': Monitor,
  'truss-structures': Layers,
  'dj-photography': Camera,
  'event-management': CalendarCheck,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (!selectedService) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);

  return (
    <section id="services" className="relative py-28 bg-[#050609]/80 backdrop-blur-[2px] text-white overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
              <Zap className="w-3.5 h-3.5" /> Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading">
              EVERYTHING BEHIND <br />
              <span className="text-metallic-gold">THE EXPERIENCE.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            From acoustic engineering to synchronized intelligent lighting, our integrated production ecosystem powers unforgettable live spectacles.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#0c0d13] border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(223,183,108,0.2)] flex flex-col justify-between"
              >
                {/* Image Container with Cinematic Zoom Effect */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-110 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d13] via-[#0c0d13]/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Corner Expand Action */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-400 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Service Icon floating above image */}
                  <div className="absolute bottom-4 left-6 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-gold-400 group-hover:border-gold-500/60 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-200 transition-colors duration-300 mb-2.5 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Quick Feature Checklist preview */}
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                    
                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-gold-400/90 group-hover:text-gold-300">
                      <span>VIEW SPECS & RIDER</span>
                      <span className="text-[10px] tracking-widest uppercase opacity-75">Click to expand</span>
                    </div>
                  </div>
                </div>

                {/* Bottom metallic accent strip */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Details Lightbox Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-3 sm:p-6 py-4 sm:py-6 overflow-y-auto overscroll-contain">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl min-h-0 bg-[#0c0d14] rounded-2xl border border-gold-500/30 shadow-2xl shadow-black overflow-hidden z-10 max-h-[calc(100dvh-2rem)] sm:max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-44 sm:h-64 w-full flex-shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-[#0c0d14]/60 to-black/30" />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-gold-400 hover:bg-black/90 transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-gold-500/20 text-gold-300 border border-gold-500/40">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="min-h-0 p-4 sm:p-8 overflow-y-auto overscroll-contain touch-pan-y space-y-5 sm:space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
                    Service Overview
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedService.shortDesc}
                  </p>
                </div>

                {/* Key Technical Inclusions */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-gold-400 mb-3">
                    Production Inclusions & Tech Specs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141520] border border-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics & Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Audience Scale
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {selectedService.audienceCoverage}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Ideal Deployment
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {selectedService.idealFor}
                    </span>
                  </div>
                </div>

                {/* CTA inside modal */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    Ready to engineer your event tech rider?
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 text-center"
                  >
                    Request Tech Quotation
                  </a>
                </div>
              </div>
            </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
