import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { brandConfig } from '../data/productionData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'About Romium', href: '#about' },
    { name: 'Equipment Arsenal', href: '#equipment' },
    { name: 'Contact & Tech Riders', href: '#contact' },
  ];

  const servicesList = [
    'Professional Sound Systems (RCF HDL30-A)',
    'Intelligent Stage Lighting & DMX',
    'High-Definition P3 / P2.6 LED Walls',
    'Aluminum Truss & Roof Rigging',
    'DJ Lineup & Cinematic 4K Photography',
    'Turnkey Event Stage Management',
  ];

  return (
    <footer className="relative bg-[#020204] text-white border-t border-white/10 overflow-hidden">
      {/* Background Lighting Vignette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/romium-logo-transparent.png"
                alt="ROMIUM PRODUCTIONS"
                className="h-14 sm:h-18 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] filter brightness-105"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold uppercase tracking-wider text-white font-heading">
                ROMIUM PRODUCTIONS
              </h3>
              <p className="text-xs font-mono font-bold tracking-[0.35em] text-metallic-gold uppercase">
                SOUND. LIGHT. STAGE.
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premium professional event production agency delivering touring-grade concert sound, intelligent moving heads, high-refresh LED video walls, and heavy-duty truss architecture.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brandConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0d0e17] border border-white/10 hover:border-gold-500/50 hover:text-gold-400 flex items-center justify-center text-slate-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0d0e17] border border-white/10 hover:border-gold-500/50 hover:text-gold-400 flex items-center justify-center text-slate-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#0d0e17] border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-gold-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {servicesList.map((svc, i) => (
                <li key={i} className="hover:text-slate-200 transition-colors">
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href={`tel:${brandConfig.phone}`}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{brandConfig.displayPhone}</span>
              </a>
              <a
                href={`mailto:${brandConfig.email}`}
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="truncate">{brandConfig.email}</span>
              </a>
              <a
                href={brandConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="truncate">@romiumproductions</span>
              </a>
              <a
                href={brandConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 hover:text-gold-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{brandConfig.address}</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-[#0c0d15] border border-white/5 text-[11px] font-mono text-slate-400 mt-4">
              <span className="text-gold-400 block font-semibold mb-0.5">24/7 Production Desk:</span>
              On-demand tech rider matching & sound reinforcement support.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">ROMIUM PRODUCTIONS</strong>. All Rights Reserved. Official Tagline: <span className="text-metallic-gold font-mono">SOUND. LIGHT. STAGE.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">TÜV RATED RIGS • DMX512 • RDNET</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#12131d] border border-white/10 hover:border-gold-500/50 hover:text-gold-300 text-slate-300 transition-all"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
