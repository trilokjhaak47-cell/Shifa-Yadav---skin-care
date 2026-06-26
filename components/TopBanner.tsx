'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const TopBanner = () => {
  return (
    <Link 
      href="/book" 
      className="block bg-brand-sand text-brand-muted py-1.5 overflow-hidden relative z-[60] border-b border-brand-brown/5 cursor-pointer hover:opacity-95 transition-opacity"
    >
      <motion.div 
        animate={{ x: [0, -1200] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex items-center space-x-12"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>10% Off on Your First Skin Consultation – Offer Will End Soon</span>
            <Sparkles size={12} />
            <span>✨ Special Offer: Underarm Laser Hair Reduction Trial for Just ₹75</span>
            <Sparkles size={12} />
            <span className="font-bold underline text-brand-muted hover:text-brand-gold transition-colors">Claim Offer →</span>
          </div>
        ))}
      </motion.div>
    </Link>
  );
};

export default TopBanner;
