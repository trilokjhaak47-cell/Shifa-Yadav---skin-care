'use client';

import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  const trustPoints = [
    { title: "Certified Dermatologist", desc: "Board-certified expertise in clinical and aesthetic dermatology." },
    { title: "Science-Based Approach", desc: "Every treatment protocol is backed by rigorous clinical data." },
    { title: "Personalized Solutions", desc: "Customized treatment plans tailored to your unique skin biology." },
    { title: "Long-Term Results", desc: "We focus on sustainable skin health rather than quick fixes." }
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-brand-sand pb-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-serif font-bold text-brand-brown mb-1">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="p-8 rounded-[2rem] bg-brand-cream/50 border border-brand-sand transition-all hover:border-brand-gold/30 hover:bg-white hover:shadow-xl hover:shadow-brand-sand/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 group-hover:scale-150 transition-transform" />
                <div>
                  <h4 className="font-bold text-brand-brown mb-2 uppercase tracking-wide text-sm">{point.title}</h4>
                  <p className="text-sm text-brand-text-light leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
