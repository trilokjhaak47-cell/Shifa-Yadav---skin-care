'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

const FloatingCTA = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after hero section
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919910195029"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </motion.a>

      {/* Sticky Mobile Book Button */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full p-4 z-40 md:hidden"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-brand-sand p-2 rounded-2xl shadow-2xl flex items-center space-x-2">
              <div className="flex-1 px-4">
                <div className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Next Available</div>
                <div className="text-sm font-bold text-brand-brown">Today, 2:00 PM onwards</div>
              </div>
              <a 
                href="#contact" 
                className="flex items-center space-x-2 bg-brand-brown text-white px-6 py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand-brown/20 active:scale-95 transition-all"
              >
                <Calendar size={18} />
                <span>Book Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
