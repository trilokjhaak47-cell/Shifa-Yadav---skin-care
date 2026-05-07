'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const techItems = [
  {
    title: "SupraTITAN",
    subtitle: "Laser Hair Removal",
    description: "Advanced diode laser technology for safe and long-lasting hair reduction with minimal discomfort and faster sessions.",
    benefits: [
      "Long-lasting hair reduction",
      "Suitable for multiple skin types",
      "Faster sessions with larger coverage",
      "Minimal discomfort with cooling technology",
      "Helps reduce ingrown hair and improves skin smoothness"
    ],
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390722/photo_2026-04-28_21-06-58_rkhtjg.jpg",
    bgColor: "bg-brand-cream/20"
  },
  {
    title: "Rapido+",
    subtitle: "Q Switch ND YAG Laser",
    description: "Advanced laser for treating pigmentation, acne marks, and uneven skin tone to improve overall skin clarity.",
    benefits: [
      "Reduces pigmentation, freckles, and dark spots",
      "Improves acne marks and skin clarity",
      "Refines skin texture and minimizes pores",
      "Helps reduce fine lines and uneven tone",
      "Effective solution for tattoo removal"
    ],
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390727/photo_2026-04-28_21-07-00_orbcdp.jpg",
    bgColor: "bg-white"
  },
  {
    title: "UltraLift",
    subtitle: "HIFU Skin Tightening",
    description: "Non-surgical HIFU treatment that lifts, firms, and rejuvenates the skin by boosting natural collagen production.",
    benefits: [
      "Non-surgical face lifting",
      "Stimulates natural collagen production",
      "Improves skin firmness and elasticity",
      "No downtime or recovery needed",
      "Gradual and natural-looking results"
    ],
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390730/photo_2026-04-28_21-07-02_j2vovo.jpg",
    bgColor: "bg-brand-cream/20"
  }
];

const TechSection = () => {
  return (
    <section className="py-24 bg-brand-cream/20 overflow-hidden relative">
      {/* Soft Premium Background Shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-sand/10 rounded-full blur-[120px] -z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4"
          >
            Precision & Innovation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6"
          >
            Advanced Technology We Use <br className="hidden md:block" /> for Better Results
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-gold mx-auto rounded-full"
          />
        </div>

        <div className="space-y-32">
          {techItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className={`absolute -inset-4 ${item.bgColor} rounded-[2.5rem] -z-10 transition-transform group-hover:scale-105 duration-700 shadow-inner`} />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-sand/20 border border-brand-sand/30">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2"
              >
                <div className="inline-block px-4 py-1 bg-brand-cream rounded-full text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-4">
                  {item.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                  {item.title}
                </h3>
                <p className="text-brand-text-light text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-brand-brown font-bold text-sm uppercase tracking-widest mb-4">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 shrink-0">
                          <CheckCircle2 size={18} className="text-brand-gold group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-brand-text-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
