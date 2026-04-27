'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const results = [
  { 
    title: "Acne Clearing", 
    desc: "8 weeks of targeted medical treatment and chemical peels.",
    before: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290496/Acne-B_kt7ock.webp",
    after: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290496/Acne-A_cfhxq7.webp"
  },
  { 
    title: "Pigmentation Reduction", 
    desc: "6 sessions of laser therapy combined with clinical topicals.",
    before: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290496/Pig-A_tfltsk.webp",
    after: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290496/Pig-B_czsjse.webp"
  },
  { 
    title: "Hair Regrowth", 
    desc: "4 months of growth factor therapy and medical regime.",
    before: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290764/Hair-B_meuvsy.jpg",
    after: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777290764/Hair-A_n176f7.jpg"
  }
];

const BeforeAfter = () => {
  return (
    <section id="results" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Real Results</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Patient Transformations</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Witness the science-driven changes our patients experience. Actual results from real patients under the care of Dr. Shifa Yadav.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="relative group cursor-pointer">
                <div className="grid grid-cols-2 gap-2 rounded-3xl overflow-hidden aspect-square border divide-x-2 divide-brand-gold/30 border-brand-sand/20">
                  <div className="relative">
                    <Image 
                      src={r.before} 
                      alt="Before" 
                      fill
                      className="object-cover grayscale opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-brown/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded z-10">Before</div>
                  </div>
                  <div className="relative">
                    <Image 
                      src={r.after} 
                      alt="After" 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded z-10">After</div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 font-serif text-brand-sand">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
