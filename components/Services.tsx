'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Droplet, 
  UserCircle, 
  History, 
  Scissors, 
  Layers 
} from 'lucide-react';

const services = [
  {
    title: "Acne Treatment",
    desc: "Targeted solutions to clear active acne and prevent future breakouts using clinical-grade therapies.",
    icon: Zap,
    color: "bg-blue-50"
  },
  {
    title: "Pigmentation Treatment",
    desc: "Address dark spots, melasma, and uneven skin tone with precision brightening treatments.",
    icon: Droplet,
    color: "bg-orange-50"
  },
  {
    title: "Hair Fall Treatment",
    desc: "Advanced growth factor therapies and personalized regimes to combat hair loss and thinning.",
    icon: Scissors,
    color: "bg-green-50"
  },
  {
    title: "Anti-Aging Solutions",
    desc: "Modern techniques to restore volume, reduce fine lines, and rejuvenate your skin's elasticity.",
    icon: History,
    color: "bg-purple-50"
  },
  {
    title: "Chemical Peels",
    desc: "Medical-grade exfoliation to resurface skin texture and reveal a fresh, glowing complexion.",
    icon: Layers,
    color: "bg-pink-50"
  },
  {
    title: "Laser Treatments",
    desc: "High-precision laser technology for hair removal, scar reduction, and skin resurfacing.",
    icon: UserCircle,
    color: "bg-teal-50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Treatment Expertise</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Our Dermatology Services</h2>
        <p className="text-brand-text-light max-w-2xl mx-auto text-lg leading-relaxed">
          We combine medical expertise with aesthetic precision to deliver transformative results for your skin and hair concerns.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-brand-sand/30 transition-all border border-brand-sand"
            >
              <div className={`w-16 h-16 rounded-2xl bg-brand-sand/20 flex items-center justify-center text-brand-brown mb-8 group-hover:bg-brand-gold/10 transition-colors`}>
                <s.icon size={30} className="text-brand-gold group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-brand-brown mb-4">{s.title}</h3>
              <p className="text-brand-text-light leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-brand-sand flex items-center text-brand-gold font-bold text-sm">
                <span>Explore Treatment</span>
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
