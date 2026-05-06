'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, Shield, Trophy } from 'lucide-react';

const cards = [
  {
    title: "Professional Affiliations",
    icon: Building2,
    items: [
      { name: "Kaya Skin Clinic", role: "Senior Consultant Dermatologist" },
      { name: "Artemis Hospital, Gurugram", role: "Consultant Dermatologist" }
    ]
  },
  {
    title: "Fellowships & Training",
    icon: Globe,
    items: [
      { name: "National Skin Centre, Singapore", role: "Visiting Observer" },
      { name: "IADVL Fellowship", role: "" },
      { name: "ACSI Dermatosurgery Fellowship", role: "" }
    ]
  },
  {
    title: "Professional Memberships",
    icon: Shield,
    items: [
      { name: "IADVL", role: "Indian Association of Dermatology, Venereology and Leprosy" },
      { name: "PDS", role: "Pigmentary Dermatology Society" },
      { name: "ACSI", role: "Association of Cutaneous Surgeons of India" }
    ]
  },
  {
    title: "Awards & Recognition",
    icon: Trophy,
    items: [
      { name: "MD Gold Medalist", role: "", isSpecial: true },
      { name: "Allergan Medical Institute", role: "Trained in Fillers & Botox" }
    ]
  }
];

const Expertise = () => {
  return (
    <section className="pt-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2c241d 0%, #1f1a16 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight text-brand-cream"
          >
            Trusted Expertise & Professional Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-sand/70 max-w-2xl mx-auto text-lg italic"
          >
            “Advanced dermatology care backed by medical excellence, global training, and professional affiliations.”
          </motion.p>
        </div>

        {/* Grid: 1x1 on mobile, 2x2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#3a3028]/40 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-brand-gold/10 shadow-xl hover:shadow-brand-gold/5 transition-all duration-500 flex flex-col group h-full"
            >
              {/* Icon */}
              <div className="mb-8 relative w-fit">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full scale-150 blur-md group-hover:bg-brand-gold/20 transition-colors" />
                <div className="relative w-14 h-14 rounded-full bg-[#2c241d] flex items-center justify-center text-brand-gold border border-brand-gold/20 shadow-inner">
                  <card.icon size={28} strokeWidth={1.2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-cream mb-8 leading-tight tracking-wide border-b border-brand-gold/10 pb-4">
                {card.title}
              </h3>

              {/* Content in Bullet Format */}
              <div className="space-y-6 flex-grow">
                {card.items.map((item, iOffset) => (
                  <div key={iOffset} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0 opacity-60" />
                    <div className="space-y-1.5">
                      {item.isSpecial ? (
                        <div className="inline-flex items-center gap-2 bg-[#1a1410] px-5 py-2 rounded-full border border-brand-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:border-brand-gold transition-colors">
                          <span className="text-brand-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                            {item.name}
                          </span>
                          <div className="w-1 h-1 bg-brand-gold rounded-full animate-pulse" />
                        </div>
                      ) : (
                        <h4 className="font-bold text-brand-cream text-base md:text-lg leading-tight group-hover:text-brand-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                      )}
                      {item.role && (
                        <p className="text-xs md:text-sm text-brand-sand opacity-70 leading-relaxed font-medium">
                          {item.role}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Associated With Strip - Clean White Background Separation */}
      <div className="bg-white mt-24 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase font-bold tracking-[0.4em] text-brand-dark/80">
              Associated With
            </span>
          </div>

          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-10 md:gap-20 opacity-90 transition-all duration-700 overflow-x-auto pb-4 no-scrollbar">
            {['Kaya', 'Artemis', 'Allergan', 'IADVL'].map((logo, i) => (
              <div key={i} className="text-2xl md:text-3xl font-serif font-bold text-brand-dark tracking-tighter shrink-0 hover:text-brand-gold cursor-default transition-all duration-300 transform hover:scale-110">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
