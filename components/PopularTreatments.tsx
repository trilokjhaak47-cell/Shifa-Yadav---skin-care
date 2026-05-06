'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const treatments = [
  {
    title: "Acne & Acne Scar Treatment",
    description: "Get clear, healthy skin with advanced treatments designed to reduce active acne and visibly improve acne scars. Personalized solutions ensure long-lasting results and smoother skin texture.",
    images: [
      "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072185/1_xjgqtm.png",
      "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072219/4_ul1kgc.png"
    ],
    highlights: ["Reduces acne and scars effectively", "Improves skin texture and clarity", "Safe, dermatologist-guided treatment"],
    cta: "Book Consultation"
  },
  {
    title: "Pigmentation Treatment",
    description: "Target dark spots, melasma, and uneven skin tone with clinically proven treatments that restore natural skin brightness and even complexion over time.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072190/3_ynhjtk.png",
    highlights: ["Reduces dark spots and pigmentation", "Evens out skin tone", "Long-term skin improvement"],
    cta: "Book Consultation"
  },
  {
    title: "Laser Hair Removal",
    description: "Achieve smooth, hair-free skin with advanced laser technology that offers long-lasting hair reduction with minimal discomfort and faster sessions.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777735107/HairremovalTreatment_cooprp.jpg",
    highlights: ["Long-lasting hair reduction", "Suitable for all skin types", "Quick and comfortable sessions"],
    cta: "Book Consultation"
  },
  {
    title: "Lip Fillers",
    description: "Enhance lip shape, volume, and definition with safe, non-surgical filler treatments designed for a natural and balanced look.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778072403/IMG_7072_jqkqj2.jpg",
    highlights: ["Naturally enhanced lip volume", "Improved shape and definition", "Safe, dermatologist-performed procedure"],
    cta: "Book Consultation"
  }
];

const PopularTreatments = () => {
  return (
    <section className="py-24 bg-brand-cream/30 overflow-hidden" id="popular-treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6"
          >
            Popular Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted max-w-2xl mx-auto text-lg"
          >
            Discover the most requested treatments designed to deliver visible and long-lasting results.
          </motion.p>
        </div>

        {/* Treatments Grid */}
        <div className="space-y-24 md:space-y-32">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                {treatment.images ? (
                  <div className="grid grid-cols-2 gap-4">
                    {treatment.images.map((img, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl group ${i === 1 ? 'mt-8 md:mt-12' : 'mb-8 md:mb-12'}`}
                      >
                        <Image
                          src={img}
                          alt={`${treatment.title} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] shadow-2xl group"
                  >
                    <Image
                      src={treatment.image!}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
                  </motion.div>
                )}
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block text-brand-gold text-xs uppercase font-bold tracking-[0.3em]">
                    Feature {index + 1}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark leading-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-brand-muted text-lg leading-relaxed max-w-md">
                    {treatment.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {treatment.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-3 text-brand-dark font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                        <Check size={14} />
                      </div>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="pt-4"
                >
                  <Link 
                    href="/book"
                    className="inline-flex items-center gap-3 bg-brand-brown text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-brand-brown/20 hover:bg-brand-dark transition-all"
                  >
                    <span>{treatment.cta}</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTreatments;
