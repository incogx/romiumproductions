import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, Sparkles, ChevronRight, MessageSquare } from 'lucide-react';
import { brandConfig } from '../data/productionData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section
      const sections = ['home', 'services', 'work', 'about', 'equipment', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Equipment', href: '#equipment', id: 'equipment' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#050608]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-5 bg-gradient-to-b from-black/80 via-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Romium Productions Transparent Header Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Romium Productions Home"
            >
              <div className="relative transition-all duration-300">
                {/* Official transparent header logo provided by user */}
                <img
                  src="/assets/images/romium-logo-transparent.png"
                  alt="ROMIUM PRODUCTIONS - SOUND. LIGHT. STAGE."
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter brightness-105 drop-shadow-[0_2px_14px_rgba(223,183,108,0.25)]"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0c0d12]/60 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-gold-300'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-400/25 to-gold-600/20 rounded-full border border-gold-400/30 shadow-[0_0_15px_rgba(223,183,108,0.2)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Let's Talk CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold-500 via-amber-200 to-gold-600 rounded-full animate-shimmer" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0c0d12] px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-100 backdrop-blur-3xl transition-all duration-300 group-hover:bg-[#141620] group-hover:text-gold-300">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Let's Talk</span>
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Romium%20Productions,%20I%20would%20like%20to%20enquire%20about%20event%20production%20services.`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:text-gold-300"
                aria-label="Direct WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#14151e] border border-white/10 text-slate-200 hover:text-gold-300 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#07070a]/95 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all ${
                    activeSection === link.id
                      ? 'bg-gold-500/15 text-gold-300 border border-gold-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-gold-500/20"
                >
                  Let's Talk — Start A Project
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="text-metallic-gold font-mono font-semibold">SOUND • LIGHT • STAGE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
