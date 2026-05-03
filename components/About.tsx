'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Atom, UserRound, ShieldCheck } from 'lucide-react';

const About = () => {
  const trustPoints = [
    { 
      title: "Certified Dermatologist", 
      icon: GraduationCap 
    },
    { 
      title: "Science-Based Approach", 
      icon: Atom 
    },
    { 
      title: "Personalized Solutions", 
      icon: UserRound 
    },
    { 
      title: "Long-Term Results", 
      icon: ShieldCheck 
    }
  ];

  const stats = [
    { label: "Happy Patients", value: "10,000+" },
    { label: "Proven Methods", value: "Clinical" },
    { label: "Skin Guidance", value: "Trusted" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-cream/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">The Expert Behind Your Glow</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
            About Dr. Shifa Yadav
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-brand-muted mb-8">
            A trusted dermatologist focused on science-backed skin and hair treatments.
          </p>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto mb-8" />
          <p className="text-lg text-brand-text-light leading-relaxed max-w-3xl mx-auto">
            Dr. Shifa Yadav is a qualified dermatologist dedicated to providing safe, effective, and personalized skincare solutions. With a strong focus on science-backed treatments, she helps patients overcome acne, pigmentation, hair fall, and other skin concerns with confidence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-brand-sand pb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-serif font-bold text-brand-brown mb-1">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -10 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-brand-sand/30 shadow-sm transition-all hover:shadow-2xl hover:shadow-brand-sand/30 group flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full scale-150 blur-sm group-hover:bg-brand-gold/20 transition-colors" />
                <div className="relative w-12 h-12 rounded-full bg-brand-cream/50 flex items-center justify-center text-brand-gold border border-brand-gold/10">
                  <point.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              <h4 className="font-bold text-brand-dark uppercase tracking-widest text-[10px] md:text-xs leading-tight">
                {point.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
