'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

import Link from 'next/link';

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
        href="https://wa.me/919910195029?text=Hi%20I%20want%20to%20book%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          bottom: showSticky ? (typeof window !== 'undefined' && window.innerWidth < 768 ? '100px' : '24px') : '24px'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] flex items-center justify-center border-2 border-white group transition-all duration-300"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" className="drop-shadow-sm">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1.5 rounded-xl shadow-xl text-xs font-bold whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 border border-brand-sand/30">
          Chat with Dr. Shifa
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
                <div className="text-[8px] uppercase font-bold text-brand-gold tracking-[0.2em]">LIMITED SLOTS TODAY</div>
                <div className="text-xs font-bold text-brand-brown whitespace-nowrap">Book Your Appointment</div>
              </div>
              <Link 
                href="/book" 
                className="flex items-center space-x-2 bg-brand-brown text-white px-6 py-4 rounded-xl font-bold text-xs shadow-xl shadow-brand-brown/20 active:scale-95 transition-all text-center"
              >
                <Calendar size={16} />
                <span>Book Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
