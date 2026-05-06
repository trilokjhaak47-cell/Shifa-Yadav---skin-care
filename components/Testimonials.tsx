'use client';

import React from 'react';
import { motion } from 'motion/react';
import Script from 'next/script';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Trusted Presence</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight">Patient Reviews</h2>
          </motion.div>
        </div>

        {/* Elfsight Widget */}
        <div className="min-h-[400px]">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-750d0fed-7012-40fa-9837-e375a8285c17" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
