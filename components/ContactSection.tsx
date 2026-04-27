'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Calendar,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or WhatsApp
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after some time if needed, or keep success message
    // setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-brand-sand/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Support & Care</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
                Get In Touch With Us
              </h2>
              <p className="text-brand-text-light text-lg leading-relaxed max-w-md">
                Have questions or need expert skin advice? We&apos;re here to help you achieve your skin goals.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone size={20} />, label: "Phone Number", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: <Mail size={20} />, label: "Email Address", value: "care@drshifayadav.com", href: "mailto:care@drshifayadav.com" },
                { icon: <MapPin size={20} />, label: "Clinic Address", value: "Sector 42, Golf Course Road, Gurugram, India", href: "https://maps.google.com" },
                { icon: <Clock size={20} />, label: "Working Hours", value: "Mon – Sat, 10 AM – 7 PM", href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-sand/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-muted mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-brand-brown hover:text-brand-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-brand-brown">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-brand-sand/50 space-y-6">
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20"
              >
                <MessageCircle size={24} fill="white" />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <div className="flex items-center space-x-2 text-brand-text-light/60 font-medium italic">
                <CheckCircle2 size={16} className="text-brand-gold" />
                <span>Consult with a certified dermatologist for safe, science-backed treatments.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-brand-sand/30 border border-brand-sand/30 relative">
              <div className="absolute top-0 right-0 p-8 text-brand-gold/10">
                <Calendar size={120} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Book Your Appointment</h3>
                <p className="text-brand-text-light mb-10">Start your journey to clear, healthy skin today.</p>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          placeholder="Dr. John Doe"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium placeholder:text-brand-muted/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+91 00000 00000"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium placeholder:text-brand-muted/40"
                        />
                      </div>

                      <div className="space-y-2 relative">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Select Treatment</label>
                        <div className="relative">
                          <select 
                            name="treatment"
                            required
                            onChange={handleChange}
                            className="w-full bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown appearance-none"
                          >
                            <option value="">Choose a treatment</option>
                            <option value="acne">Acne Treatment</option>
                            <option value="pigmentation">Pigmentation</option>
                            <option value="hair">Hair Fall</option>
                            <option value="anti-aging">Anti-Aging</option>
                            <option value="consultation">General Consultation</option>
                          </select>
                          <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Preferred Date</label>
                          <input 
                            type="date" 
                            name="date"
                            required
                            onChange={handleChange}
                            className="w-full bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Preferred Time</label>
                          <input 
                            type="time" 
                            name="time"
                            required
                            onChange={handleChange}
                            className="w-full bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-brand-brown text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-brown/20 flex items-center justify-center space-x-3 group transition-all hover:bg-brand-dark"
                      >
                        <span>Book Appointment Now</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <div className="pt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {[
                          "Certified Dermatologist",
                          "Safe & Proven Treatments",
                          "Personalized Skin Care Plan"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-[10px] uppercase font-black tracking-tighter text-brand-muted">
                            <CheckCircle2 size={12} className="text-brand-gold" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-center text-[11px] font-bold text-brand-muted/50 uppercase tracking-widest mt-4">
                        Usually responds within 10 minutes on WhatsApp
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-brand-brown">Appointment Requested!</h4>
                      <p className="text-brand-text-light">
                        Your appointment request has been submitted. We will contact you shortly to confirm your slot.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline decoration-brand-gold underline-offset-4"
                      >
                        View Form Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
