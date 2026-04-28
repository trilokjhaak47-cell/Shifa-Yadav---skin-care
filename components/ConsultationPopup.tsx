'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageCircle, Sparkles } from 'lucide-react';

const ConsultationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenConsultationPopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenConsultationPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none sm:items-end sm:justify-start lg:justify-center">
          {/* Backdrop for mobile focus - optional, keeping it subtle or just the card */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-brand-dark/10 backdrop-blur-sm pointer-events-auto md:hidden"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="relative w-full max-w-sm bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-brand-sand/30 p-6 md:p-8 pointer-events-auto overflow-hidden group"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cream rounded-full blur-3xl opacity-50" />
            
            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-dark hover:bg-brand-cream/50 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-gold">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark leading-tight">
                  Get Free Skin Consultation
                </h3>
              </div>

              <p className="text-brand-text-light text-sm mb-8 leading-relaxed font-medium">
                Not sure which treatment is right for you? Talk to our expert and get personalized guidance.
              </p>

              <div className="space-y-3">
                <a href="tel:+919910195029" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-brand-brown text-white rounded-2xl font-bold text-sm tracking-widest uppercase shadow-lg shadow-brand-brown/20 hover:bg-brand-dark transition-all"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </motion.button>
                </a>

                <a 
                  href="https://wa.me/919910195029?text=Hi%20I%20want%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-sm tracking-widest uppercase shadow-lg shadow-green-500/20 transition-all border border-green-600/10"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Chat</span>
                  </motion.button>
                </a>
              </div>
              
              <button 
                onClick={closePopup}
                className="w-full mt-4 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-muted hover:text-brand-gold transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
