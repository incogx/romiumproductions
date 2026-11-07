import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Building,
  User,
  ArrowRight,
  Instagram
} from 'lucide-react';
import { brandConfig } from '../data/productionData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Concert / Music Festival',
    eventDate: '',
    eventLocation: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Concert / Music Festival',
    'College Cultural / Fest',
    'Corporate Summit / Conference',
    'Luxury Wedding / Sangeet',
    'DJ Night / Club Event',
    'Stage & Lighting Installation',
    'Equipment Rental (Dry/Wet)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Romium Productions,\n\nI would like to initiate an event production inquiry:\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Email: ${formData.email || 'Not provided'}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Event Date: ${formData.eventDate || 'TBD'}\n` +
      `• Location: ${formData.eventLocation || 'TBD'}\n` +
      `• Requirements: ${formData.message || 'General Enquiry'}\n\nPlease share your tech rider availability and quotation.`
    );
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030305] text-white overflow-hidden">
      {/* Background Concert Ambience */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-heading">
            LET'S CREATE SOMETHING <br />
            <span className="text-metallic-gold">UNFORGETTABLE.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Tell us about your event, venue dimensions, and technical requirements. Our production directors and audio engineers will engineer your turnkey stage plan.
          </p>
        </div>

        {/* 2-Column Layout: Form & Quick Direct Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0a0b12] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our production team will review your requirements for <strong className="text-white">{formData.eventType}</strong> and contact you promptly.
                  </p>
                </div>

                {/* Instant WhatsApp Redirection button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Concert / Music Festival',
                        eventDate: '',
                        eventLocation: '',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      {eventTypes.map((type, i) => (
                        <option key={i} value={type} className="bg-[#12131d] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Event Date */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Event Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Location */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Event Venue / City *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="eventLocation"
                        required
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="City, State / Venue Name"
                        className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                    Requirements / Tech Rider Details
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about expected crowd size, stage dimensions, artist technical rider, or preferred lighting and LED wall sizes..."
                    className="w-full bg-[#12131d] border border-white/10 focus:border-gold-500 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-gold-500 via-amber-300 to-gold-600 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#141522] hover:bg-[#1a1c2e] text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Quick Direct Contact Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Romium Direct Contact Card */}
            <div className="bg-[#0b0c13] rounded-2xl border border-gold-500/25 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-gold-400 tracking-widest uppercase block mb-1">
                  Production Headquarters
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  ROMIUM PRODUCTIONS
                </h3>
                <div className="text-xs font-mono font-semibold text-metallic-gold tracking-widest uppercase mt-0.5">
                  SOUND • LIGHT • STAGE
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
                <a
                  href={`tel:${brandConfig.phone}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] hover:bg-white/5 border border-white/5 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-gold-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Booking Line</span>
                    <span className="text-white font-bold group-hover:text-gold-300 transition-colors">
                      {brandConfig.displayPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Romium%20Productions,%20I%20would%20like%20to%20discuss%20event%20production%20services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] hover:bg-white/5 border border-white/5 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Instant WhatsApp Desk</span>
                    <span className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                      Chat with Production Manager
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${brandConfig.email}?subject=Romium%20Productions%20Event%20Inquiry`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] hover:bg-white/5 border border-white/5 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-gold-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Technical Riders & RFPs</span>
                    <span className="text-white font-bold group-hover:text-gold-300 transition-colors">
                      {brandConfig.email}
                    </span>
                  </div>
                </a>

                <a
                  href={brandConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] hover:bg-white/5 border border-white/5 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Instagram Feed & Live Stories</span>
                    <span className="text-white font-bold group-hover:text-pink-400 transition-colors">
                      @romiumproductions
                    </span>
                  </div>
                </a>

                <a
                  href={brandConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] hover:bg-white/5 border border-white/5 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Official Headquarters</span>
                    <span className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed block group-hover:text-gold-300 transition-colors">
                      {brandConfig.address}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-gold-400 mt-1">
                      <span>View on Google Maps</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#12131d] border border-white/5">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Turnaround Time</span>
                    <span className="text-slate-200">
                      {brandConfig.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Logo Display Tile */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-4">
              <img
                src="/assets/images/romium-emblem.png"
                alt="Romium Emblem"
                className="w-14 h-14 object-contain rounded-lg border border-gold-500/30 p-1 bg-[#090a0f]"
              />
              <div>
                <div className="text-xs font-bold uppercase text-white font-heading">
                  ROMIUM PRODUCTIONS
                </div>
                <div className="text-[10px] font-mono text-metallic-gold uppercase tracking-wider">
                  SOUND • LIGHT • STAGE
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Touring rigs. Flawless execution. Zero acoustic compromises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
