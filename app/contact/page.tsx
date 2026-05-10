'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  User,
  Smartphone,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    
    if (!name || !phone) return;

    const professionalMessage = `Hello Dr. Shifa Yadav Clinic,\n\n` +
      `I would like to get in touch regarding a consultation.\n\n` +
      `Name: ${name}\n` +
      `Phone Number: ${phone}\n\n` +
      `Message:\n${message || 'No additional message.'}`;

    const encodedMessage = encodeURIComponent(professionalMessage);
    const whatsappUrl = `https://wa.me/919910195029?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white selection:bg-brand-gold/20">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-44 pb-24 overflow-hidden bg-brand-cream lg:bg-transparent">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Support & Care</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-brand-text-light text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Get in touch with us for appointments, consultations, or any queries.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-6">Our Information</h3>
                <p className="text-brand-text-light text-lg mb-10 max-w-md">
                  We are here to assist you. Feel free to reach out through any of our contact channels.
                </p>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-cream/50 flex items-center justify-center text-brand-gold shrink-0 transition-transform group-hover:scale-110">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1.5">Phone Number</h4>
                      <a href="tel:+919910195029" className="text-xl md:text-2xl font-bold text-brand-brown hover:text-brand-gold transition-colors block">
                        +91 99101 95029
                      </a>
                      <p className="text-xs text-brand-text-light/60 mt-1 italic">Click to call for immediate help</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-cream/50 flex items-center justify-center text-brand-gold shrink-0 transition-transform group-hover:scale-110">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1.5">Clinic Address</h4>
                      <p className="text-xl font-bold text-brand-brown leading-tight">
                        H NO. 764, Sector 17-A,<br className="hidden md:block"/> Gurugram, Haryana
                      </p>
                      <p className="text-sm font-medium text-brand-text-light mt-1">Near HUDA Market</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-cream/50 flex items-center justify-center text-brand-gold shrink-0 transition-transform group-hover:scale-110">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1.5">Working Hours</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center w-64 md:w-72">
                          <span className="text-sm font-bold text-brand-brown">Sunday</span>
                          <span className="text-sm font-bold text-brand-gold">12:00 PM – 4:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center w-64 md:w-72">
                          <span className="text-sm font-bold text-brand-brown">Mon, Tue, Thu</span>
                          <span className="text-sm font-bold text-brand-gold">4:00 PM – 7:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center w-64 md:w-72 opacity-50">
                          <span className="text-xs font-medium text-brand-muted">Wed, Fri, Sat</span>
                          <span className="text-xs font-medium text-brand-muted">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Trust Elements */}
              <div className="pt-10 border-t border-brand-sand/30 flex flex-wrap gap-8">
                <div className="flex items-center space-x-2 text-[10px] font-bold text-brand-muted uppercase tracking-[.2em]">
                  <CheckCircle2 size={14} className="text-brand-gold" />
                  <span>Certified Care</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-brand-muted uppercase tracking-[.2em]">
                  <CheckCircle2 size={14} className="text-brand-gold" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-sand/40 border border-brand-sand/30"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Send a Message</h3>
                    <p className="text-brand-text-light mb-8 font-medium">Leave your details and we will get back to you.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                          <User size={12} /> Full Name
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          placeholder="Your Name"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/20 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                          <Smartphone size={12} /> Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+91 00000 00000"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/20 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                          <MessageSquare size={12} /> Message
                        </label>
                        <textarea 
                          name="message"
                          rows={4}
                          placeholder="How can we help you?"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/20 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full bg-brand-brown text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-[.2em] shadow-xl shadow-brand-brown/20 flex items-center justify-center space-x-3 hover:bg-brand-dark transition-all"
                      >
                        <span>Send Message</span>
                        <Send size={18} />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Message Sent!</h3>
                    <p className="text-brand-text-light text-lg mb-8 leading-relaxed">
                      Your message has been sent. We will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline decoration-brand-gold underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[350px] bg-white rounded-[1.5rem] overflow-hidden shadow-2xl shadow-brand-sand/40 border border-brand-sand/30 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.007719251747!2d77.06084117528316!3d28.479314175748716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196376f502f1%3A0xa961d3479a2d03ba!2sDr.%20Shifa%20Yadav%20skin%2C%20hair%2C%20nail%20specialist!5e0!3m2!1sen!2sin!4v1777409903858!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] brightness-[1.02]"
            ></iframe>
            
            <div className="absolute top-6 right-6">
              <a 
                href="https://maps.google.com/?q=Dr.+Shifa+Yadav+skin,+hair,+nail+specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-md text-brand-dark px-5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center space-x-2 border border-brand-sand/30 hover:bg-white transition-all hover:scale-105"
              >
                <ExternalLink size={14} className="text-brand-gold" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-8">
            Need Immediate Assistance?
          </h2>
          <p className="text-brand-text-light text-lg mb-12 max-w-2xl mx-auto">
            Our experts are ready to assist you. Call us or chat on WhatsApp for quick scheduling and clinical advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+919910195029" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 bg-brand-brown text-white rounded-full font-bold shadow-2xl shadow-brand-brown/20 hover:bg-brand-dark transition-all"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.button>
            </a>
            
            <a href="https://wa.me/919910195029" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold shadow-2xl shadow-green-500/20"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Chat</span>
                <ChevronRight size={18} />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
