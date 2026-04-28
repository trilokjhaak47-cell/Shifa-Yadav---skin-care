'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Scissors, 
  Zap, 
  FlaskConical, 
  Layers, 
  Microscope,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Skin Treatments",
    icon: Sparkles,
    services: ["Acne scar reduction", "Melasma treatment", "Eczema & Psoriasis", "Allergy & Urticaria"],
    color: "bg-pink-50/50"
  },
  {
    title: "Hair Treatments",
    icon: Scissors,
    services: ["Hair PRP", "Hair Mesotherapy", "Hair fall consultation"],
    color: "bg-emerald-50/50"
  },
  {
    title: "Laser & Removal",
    icon: Zap,
    services: ["Laser hair removal", "Tattoo removal", "Mole & skin tag removal"],
    color: "bg-blue-50/50"
  },
  {
    title: "Aesthetic & Anti-Aging",
    icon: FlaskConical,
    services: ["Botox & Fillers", "Thread lift", "Skin boosters (PDRN, Exosomes)"],
    color: "bg-purple-50/50"
  },
  {
    title: "Advanced Procedures",
    icon: Layers,
    services: ["Chemical peeling", "HIFU (skin tightening)", "Radio frequency tightening", "Body & face tightening"],
    color: "bg-orange-50/50"
  },
  {
    title: "Specialized Treatments",
    icon: Microscope,
    services: ["Nail surgery", "Electrosurgery", "NB-UVB therapy", "Vitiligo treatment"],
    color: "bg-slate-50/50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Treatment Expertise</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Treatment Categories</h2>
        <p className="text-brand-text-light max-w-2xl mx-auto text-lg leading-relaxed">
          Explore our range of comprehensive medical and aesthetic solutions designed for your skin and hair health.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group bg-brand-cream/10 p-8 rounded-2xl border border-brand-sand/50 shadow-sm hover:shadow-xl hover:shadow-brand-sand/20 transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-brand-brown mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <cat.icon size={26} className="text-brand-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-4">{cat.title}</h3>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {cat.services.map((service, si) => (
                  <li key={si} className="flex items-start gap-2 text-brand-text-light text-sm">
                    <div className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-brand-brown font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                <span>Learn More</span>
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-brand-dark text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-brand-brown transition-all"
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
