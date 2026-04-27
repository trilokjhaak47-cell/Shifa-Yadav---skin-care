'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="bg-brand-sand text-brand-muted py-1.5 overflow-hidden relative z-[60] border-b border-brand-brown/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex items-center space-x-12"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>Limited Time: 20% Off Your First Skin Consultation</span>
            <Sparkles size={12} />
            <span>Free Skin Analysis on First Appointment</span>
            <Sparkles size={12} />
            <span>Book Your Slot Today</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopBanner;
