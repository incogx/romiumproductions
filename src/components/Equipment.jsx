import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Volume2, 
  Lightbulb, 
  Monitor, 
  Layers, 
  Check, 
  FileText, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { equipmentCatalog, brandConfig } from '../data/productionData';

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Arsenal', icon: Cpu },
    { id: 'audio', label: 'Audio Systems', icon: Volume2 },
    { id: 'lighting', label: 'Stage Lighting', icon: Lightbulb },
    { id: 'video', label: 'LED Video Walls', icon: Monitor },
    { id: 'rigging', label: 'Truss & Rigging', icon: Layers },
  ];

  // Flatten or filter items
  const displayItems = activeCategory === 'all'
    ? equipmentCatalog.flatMap(cat => cat.items)
    : equipmentCatalog.find(cat => cat.category === activeCategory)?.items || [];

  return (
    <section id="equipment" className="relative py-28 bg-[#030306]/80 backdrop-blur-[2px] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
              <Cpu className="w-3.5 h-3.5" /> Technical Inventory
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading">
              TOURING-GRADE <br />
              <span className="text-metallic-gold">EQUIPMENT & CAPABILITIES.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 100% Genuine Certified Hardware
            </span>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm text-left md:text-right">
              We invest exclusively in tier-one industry standard audio, lighting, and video gear calibrated to rider specifications.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-gold-400 to-amber-400 shadow-[0_0_20px_rgba(223,183,108,0.25)]'
                    : 'text-slate-400 bg-[#0c0d14] border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-[#0a0b12] border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:shadow-[0_10px_35px_-10px_rgba(223,183,108,0.15)] flex flex-col sm:flex-row"
              >
                {/* Equipment Thumbnail with zoom */}
                <div className="relative w-full sm:w-2/5 h-56 sm:h-auto min-h-[200px] overflow-hidden bg-black flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-[#0a0b12]/30 to-[#0a0b12]" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/75 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      Rider Standard
                    </span>
                  </div>
                </div>

                {/* Technical Specifications Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gold-400 mb-1">
                      {item.type}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors font-heading mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 italic mb-4">
                      "{item.highlight}"
                    </p>

                    {/* Bullet Specs */}
                    <div className="space-y-1.5 border-t border-white/5 pt-3">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Touring Spec
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider transition-colors"
                    >
                      <span>Inquire Availability</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tech Rider Action Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#10121c] via-[#161826] to-[#10121c] border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Have an Artist Tech Rider to Match?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Send us your artist's hospitality or technical rider. Our audio engineers and stage riggers will verify patch sheets, SPL targets, and stage layouts within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg text-center hover:scale-105 transition-transform"
            >
              Submit Tech Rider
            </a>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Romium%20Productions,%20I%20have%20an%20artist%20tech%20rider%20I%20would%20like%20to%20send.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0a0b12] border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center hover:border-gold-500/50 transition-colors"
            >
              WhatsApp Us Rider
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
