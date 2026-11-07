import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote, ExternalLink, Award, Sparkles, MapPin } from 'lucide-react';
import { testimonials, brandConfig } from '../data/productionData';

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-[#030306]/80 backdrop-blur-[2px] text-white border-y border-white/10 overflow-hidden">
      {/* Background Lighting Vignettes */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
              <Award className="w-3.5 h-3.5" /> Verified Reputation & Partnerships
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-heading">
              TESTED ON STAGE. <br />
              <span className="text-metallic-gold">TRUSTED BY ORGANIZERS.</span>
            </h2>
          </div>

          {/* Google Rating Overview Badge */}
          <div className="mt-6 md:mt-0 flex items-center gap-4 p-4 rounded-2xl bg-[#0c0d16] border border-gold-500/30 shadow-xl">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gold-500/10 border border-gold-500/30">
              <span className="text-2xl font-black text-white font-heading">5.0</span>
              <div className="flex text-amber-400 gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                <span>Google Verified Partner</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Chennai, Tamil Nadu • 100% Client Satisfaction
              </p>
              <a
                href={brandConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-gold-400 hover:text-gold-300 mt-1"
              >
                <span>West Mambalam, Chennai</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#090a12] border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:shadow-[0_10px_35px_-10px_rgba(223,183,108,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {item.instagramUrl ? (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1 rounded-full text-[11px] font-mono uppercase bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/40 text-pink-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{item.badge}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-gold-500/10 border border-gold-500/25 text-gold-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-gold-500/20 absolute -top-4 -left-2 pointer-events-none" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic relative z-10 pl-2">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Event Detail */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white font-heading">
                      {item.author}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-gold-400 font-mono">
                    {item.role}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {item.event}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Bottom Subtle Metallic Accent */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-400 transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>

        {/* Partnership Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d0e19] via-[#141524] to-[#0d0e19] border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                Serving Chennai & Touring Across India
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Headquartered at West Mambalam, Chennai. Official Event Partners for CIPOFEST and premier colleges across Tamil Nadu.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg text-center hover:scale-105 transition-transform whitespace-nowrap"
          >
            Partner With Us For Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
