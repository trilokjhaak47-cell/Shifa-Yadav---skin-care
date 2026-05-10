'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream lg:bg-transparent">
      {/* Background soft shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col justify-center py-12 lg:py-24"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-brand-sand text-brand-muted font-bold text-[10px] mb-8 w-fit">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
              <span className="uppercase tracking-widest">Expert Clinical Care</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
              Clear Skin Starts With <br/>
              <span className="text-brand-gold italic">Science-Backed</span> Care
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text-light mb-10 max-w-xl leading-relaxed">
              Get expert dermatology treatments for acne, pigmentation, hair fall, and more — guided by Dr. Shifa Yadav’s personalized approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-white rounded-full font-bold text-lg shadow-xl shadow-brand-gold/30 hover:bg-brand-brown transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Start Your Transformation</span>
                  <span className="text-xl">→</span>
                </motion.button>
              </Link>
              <a href="tel:+919910195029">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/50 text-brand-gold border border-brand-gold rounded-full font-bold text-lg shadow-lg hover:bg-brand-cream transition-all cursor-pointer flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  <span>Free Consultation</span>
                </motion.button>
              </a>
            </div>
            
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-6 md:gap-8 pt-8 border-t border-brand-sand w-full lg:w-fit">
              {[
                { title: "Certified", desc: "Expert Dermatologist" },
                { title: "Clinical", desc: "Science-Backed" },
                { title: "Proven", desc: "4500+ Patients" },
                { title: "Medalist", desc: "MD Gold Medalist" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-xs uppercase tracking-tighter text-brand-muted font-bold">{badge.title}</span>
                  <span className="text-[10px] text-brand-text-light/70">{badge.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 bg-brand-sand/20 relative min-h-[500px] lg:min-h-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent z-10 hidden lg:block" />
            
            {/* Aesthetic circle anchor */}
            <div className="absolute top-10 right-10 w-48 h-48 border-[1px] border-brand-gold rounded-full opacity-20 hidden lg:block" />

            <div className="relative w-full h-full lg:absolute lg:inset-0 z-0">
               <Image 
                src="https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778066868/photo_2026-05-06_16-57-32_rogfdm.jpg" 
                alt="Dr. Shifa Yadav" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            
            {/* Dr Identity Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 p-5 md:p-8 rounded-2xl border border-brand-sand backdrop-blur-md shadow-2xl z-20"
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">Dr. Shifa Yadav</h3>
              <p className="text-[10px] md:text-xs text-brand-muted uppercase tracking-widest mt-1 font-bold">Lead Dermatologist & Aesthetician</p>
              <div className="h-[1px] bg-brand-sand my-3 md:my-4" />
              <p className="text-[11px] md:text-xs leading-relaxed italic text-brand-text-light">
                &quot;My mission is to provide clinically-proven, personalized care that actually works for my patients.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
