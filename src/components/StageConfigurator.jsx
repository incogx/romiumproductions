import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sliders, 
  Volume2, 
  Lightbulb, 
  Monitor, 
  Layers, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Zap,
  ArrowRight
} from 'lucide-react';
import { brandConfig } from '../data/productionData';

export default function StageConfigurator() {
  const [crowdScale, setCrowdScale] = useState('medium'); // small, medium, large, mega
  const [venueType, setVenueType] = useState('outdoor');
  const [includeSound, setIncludeSound] = useState(true);
  const [includeLighting, setIncludeLighting] = useState(true);
  const [includeLed, setIncludeLed] = useState(true);
  const [includeTruss, setIncludeTruss] = useState(true);
  const [includeDj, setIncludeDj] = useState(false);

  // Configuration mapping based on scale
  const configurations = {
    small: {
      label: "500 – 1,000 Attendees",
      subLabel: "Intimate Concert / Corporate Gala",
      lineArray: "8x RCF HDL 30-A Modules (4 per hang)",
      subs: "4x RCF SUB 9006-AS Dual 18\" Subwoofers",
      lighting: "12x Sharpy 17R Beams + 8x LED Washes",
      ledWall: "20ft x 10ft P2.6 UHD Backdrop (200 sq.ft)",
      truss: "30x20ft Aluminum Box Truss Structure",
      power: "62.5 kVA Silent DG Set Recommendation",
    },
    medium: {
      label: "1,500 – 4,000 Attendees",
      subLabel: "College Cultural / Pro-Show Stage",
      lineArray: "16x RCF HDL 30-A Modules (8 per hang)",
      subs: "8x RCF SUB 9006-AS Dual 18\" Subwoofers (Cardioid Array)",
      lighting: "24x Sharpy 17R Beams + 16x B-EYE Washes + 4x Blinders",
      ledWall: "32ft x 14ft P3.9 High-Refresh Outdoor LED (450 sq.ft)",
      truss: "40x30ft Ground Support Goalpost / Roof System",
      power: "125 kVA Silent DG Set Recommendation",
    },
    large: {
      label: "5,000 – 10,000 Attendees",
      subLabel: "Arena Concert / Festival Secondary Stage",
      lineArray: "24x RCF HDL 30-A Modules (12 per hang)",
      subs: "12x RCF SUB 9006-AS Subwoofers + Front Fills",
      lighting: "36x Intelligent Moving Fixtures + Laser Projectors + Cryo CO2",
      ledWall: "48ft x 18ft Modular P3.9 Curved Screen + Dual IMAG Side Wings",
      truss: "50x40ft Four-Tower Heavy-Duty Ground Support Truss",
      power: "250 kVA Synchronized Dual DG Backup",
    },
    mega: {
      label: "12,000 – 25,000+ Attendees",
      subLabel: "Stadium Concert / Headline Festival Mainstage",
      lineArray: "32x RCF HDL 30-A Modules + 8x Delay Tower Stacks",
      subs: "16x Dual 18\" High-Output End-Fire Sub Array",
      lighting: "56x Moving Heads (Beams/Profiles/Washes) + Atomic Strobes",
      ledWall: "60ft x 24ft Panoramic Center Stage + 2x 20ft IMAG Stadium Screens",
      truss: "60x50ft Heavy-Duty Aluminum Rigging with Motorized Hoists",
      power: "350+ kVA High-Redundancy Twin Generator Sync",
    }
  };

  const currentSpec = configurations[crowdScale];

  // Pre-fill WhatsApp message with the configured spec
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Romium Productions,\n\nI configured an event specification on your website:\n• Crowd Size: ${currentSpec.label}\n• Venue: ${venueType.toUpperCase()}\n• Sound: ${includeSound ? currentSpec.lineArray : 'Not needed'}\n• Subwoofers: ${includeSound ? currentSpec.subs : 'Not needed'}\n• Lighting: ${includeLighting ? currentSpec.lighting : 'Not needed'}\n• LED Screen: ${includeLed ? currentSpec.ledWall : 'Not needed'}\n• Trussing: ${includeTruss ? currentSpec.truss : 'Not needed'}\n• DJ & Photo: ${includeDj ? 'Requested' : 'No'}\n\nPlease share availability and quotation.`
    );
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="relative py-24 bg-[#05060b] text-white border-y border-white/10 overflow-hidden">
      {/* Background Stage Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <Sliders className="w-3.5 h-3.5" /> Interactive Production Configurator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading">
            STAGE & TECH SPEC <span className="text-metallic-gold">ESTIMATOR.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your expected audience capacity and venue parameters. Our algorithmic engine maps the exact acoustic dispersion, lighting fixture count, and truss specifications required for zero-distortion coverage.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b0c13] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-8 shadow-xl">
            {/* 1. Crowd Scale Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-gold-400 block mb-3">
                1. Expected Audience Scale
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'small', label: 'Up to 1k', sub: 'Intimate' },
                  { id: 'medium', label: '1.5k – 4k', sub: 'Pro-Show' },
                  { id: 'large', label: '5k – 10k', sub: 'Arena' },
                  { id: 'mega', label: '12k – 25k+', sub: 'Stadium' },
                ].map((scale) => (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setCrowdScale(scale.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      crowdScale === scale.id
                        ? 'bg-gradient-to-br from-gold-500/20 to-amber-500/10 border-gold-400 text-white shadow-[0_0_15px_rgba(223,183,108,0.2)]'
                        : 'bg-[#12131d] border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold block">{scale.label}</div>
                    <div className="text-[10px] font-mono text-gold-400/80 uppercase">{scale.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Venue Format Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-gold-400 block mb-3">
                2. Venue Environment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'outdoor', label: 'Open-Air Ground' },
                  { id: 'indoor', label: 'Auditorium / Hall' },
                  { id: 'stadium', label: 'Stadium / Arena' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVenueType(v.id)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                      venueType === v.id
                        ? 'bg-white/10 border-gold-400 text-gold-300'
                        : 'bg-[#12131d] border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Production Elements Toggle */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-gold-400 block mb-3">
                3. Technical Modules Required
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeSound(!includeSound)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                    includeSound ? 'bg-gold-500/10 border-gold-500/40 text-white' : 'bg-[#12131d] border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Volume2 className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-bold uppercase">Sound Line Array</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${includeSound ? 'text-gold-400' : 'text-slate-600'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeLighting(!includeLighting)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                    includeLighting ? 'bg-gold-500/10 border-gold-500/40 text-white' : 'bg-[#12131d] border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Lightbulb className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-bold uppercase">Intelligent Lighting</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${includeLighting ? 'text-gold-400' : 'text-slate-600'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeLed(!includeLed)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                    includeLed ? 'bg-gold-500/10 border-gold-500/40 text-white' : 'bg-[#12131d] border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-bold uppercase">LED Video Wall</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${includeLed ? 'text-gold-400' : 'text-slate-600'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeTruss(!includeTruss)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                    includeTruss ? 'bg-gold-500/10 border-gold-500/40 text-white' : 'bg-[#12131d] border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-bold uppercase">Truss & Roof Rig</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${includeTruss ? 'text-gold-400' : 'text-slate-600'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Generated Spec Sheet (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0f101a] to-[#07070d] rounded-2xl p-6 sm:p-8 border border-gold-500/30 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">
                  Engineered Blueprint
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {currentSpec.label}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-[11px] font-mono text-gold-300">
                {currentSpec.subLabel}
              </span>
            </div>

            {/* Generated Rig Breakdown */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block uppercase">Acoustic Line Array Hang</span>
                <span className="text-slate-100 font-bold block">{currentSpec.lineArray}</span>
                <span className="text-gold-400/90 text-[10px] block">{currentSpec.subs}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block uppercase">Intelligent Lighting Rig</span>
                <span className="text-slate-100 font-bold block">{currentSpec.lighting}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block uppercase">Video Wall Dimensions</span>
                <span className="text-slate-100 font-bold block">{currentSpec.ledWall}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[11px] block uppercase">Stage Rigging & Power Provision</span>
                <span className="text-slate-100 font-bold block">{currentSpec.truss}</span>
                <span className="text-cyan-400 text-[10px] block">{currentSpec.power}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send This Rig via WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>Or Request Written Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
