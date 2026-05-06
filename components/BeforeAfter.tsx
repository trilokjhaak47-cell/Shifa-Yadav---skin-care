'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram, ArrowRight } from 'lucide-react';

const results = [
  { 
    title: "Full Face Rejuvenation", 
    desc: "Achieve a lifted, youthful appearance with threads and fillers designed to enhance facial contours naturally.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778088522/Untitled_design_6_vdpf7a.png"
  },
  { 
    title: "Acne Scars", 
    desc: "Comprehensive treatment for acne scarring and skin texture refinement.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072143/5_jp93pc.png"
  },
  { 
    title: "Jawline Definition", 
    desc: "Non-surgical contouring for a sharper, more defined and aesthetic jawline.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072387/IMG_7073_rowhvh.jpg"
  },
  { 
    title: "Hair PRP", 
    desc: "Advanced scalp therapy to promote natural hair growth and density.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778073367/photo_2026-05-06_18-45-52_i8ep27.jpg"
  }
];

const instaPosts = [
  {
    text: "Dramatic results for full face profile enhancement.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778089346/photo_2026-05-06_23-12-06_nzly78.jpg",
    url: "https://www.instagram.com/p/DLwU5BaSHpe/?igsh=a3ZnczF2eXRwa3M2"
  },
  {
    text: "See the magic of fillers, botox, and threads in one.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778074008/photo_2026-05-06_18-56-30_hsi1uk.jpg",
    url: "https://www.instagram.com/p/DNKxyZ4Sm7y/?igsh=MTFycnJubHExdzBwag=="
  },
  {
    text: "Fresh Faced and Flawless",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778074008/photo_2026-05-06_18-56-29_k8gs7k.jpg",
    url: "https://www.instagram.com/p/DMZdH68StgT/?igsh=MTNrZnJyMGFudjkwcA=="
  }
];

const BeforeAfter = () => {
  return (
    <section id="results" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-brand-gold font-bold tracking-[.4em] uppercase text-2xl md:text-5xl lg:text-6xl mb-8">Real Results</p>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-white/70 mb-6 tracking-tight">Patient Transformations</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Witness the science-driven changes our patients experience. Actual results from real patients under the care of Dr. Shifa Yadav.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20 mb-32 max-w-5xl mx-auto">
          {/* Real Transformations */}
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] aspect-[4/5] md:aspect-[3/4] border border-brand-sand/10 shadow-2xl">
                <Image 
                  src={r.image} 
                  alt={r.title} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
                  <div className="bg-brand-brown/80 backdrop-blur-md text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full border border-brand-sand/20">Before</div>
                  <div className="bg-brand-gold text-brand-dark text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full shadow-lg">After</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-sand">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mx-auto italic">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More on Instagram Section */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream">See More Transformations</h3>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="bg-brand-gold/10 p-2 md:p-3 rounded-full border border-brand-gold/20"
                >
                  <Instagram size={28} className="text-brand-gold" />
                </motion.div>
              </div>
              <p className="text-brand-sand/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Explore more real patient results, aesthetic enhancements, and treatment transformations on our Instagram.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {instaPosts.map((p, i) => (
              <motion.a
                key={`insta-${i}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-6 block"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-square border border-brand-sand/10 shadow-2xl transition-all duration-500 group-hover:border-brand-gold/30">
                  <Image 
                    src={p.image} 
                    alt="Transformation post" 
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Instagram className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
                    {p.text}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center">
            <motion.a
              href="https://www.instagram.com/drshifayadav/" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-xl shadow-brand-gold/10 hover:bg-[#c5a33a] transition-all group"
            >
              View Instagram Page
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
