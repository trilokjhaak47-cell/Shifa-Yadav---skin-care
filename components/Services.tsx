'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    title: "Skin Treatments",
    description: "Advanced solutions for acne, pigmentation, and various skin concerns to achieve clear and healthy skin.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777737793/Skintreatment_vqpibw.jpg",
    highlights: ["Acne & Acne scars", "Pigmentation", "Melasma", "Skin brightening"],
    href: "/services#skin-treatments"
  },
  {
    title: "Hair Treatments",
    description: "Effective treatments designed to control hair fall, improve scalp health, and promote natural hair growth.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777737793/Hairtreatment_if7qul.jpg",
    highlights: ["Hair PRP", "Mesotherapy", "Hair fall treatment", "Scalp care"],
    href: "/services#hair-treatments"
  },
  {
    title: "Laser & Removal",
    description: "Safe and advanced laser treatments for hair removal and skin procedures with long-lasting results.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777737793/Hairremovaltreatment_1_fwfdvc.jpg",
    highlights: ["Laser hair removal", "Tattoo removal", "Mole removal", "Skin tags removal"],
    href: "/services#laser-removal"
  },
  {
    title: "Aesthetic & Anti-Aging",
    description: "Non-surgical treatments to enhance skin appearance, reduce aging signs, and improve skin firmness.",
    image: "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777737793/Antiagingtreatment_o0u9it.jpg",
    highlights: ["Botox & Fillers", "Thread lift", "Skin tightening", "Skin boosters"],
    href: "/services#aesthetic"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight"
        >
          Treatment Categories
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Explore our wide range of expert dermatology and aesthetic treatments designed for healthy, glowing skin.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl border border-brand-sand/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full w-full md:w-[80%] mx-auto"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image 
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Content Box */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{cat.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {cat.highlights.map((item, si) => (
                    <li key={si} className="flex items-center gap-3 text-brand-dark font-medium text-xs">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                        <Check size={12} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={cat.href} 
                  className="inline-flex items-center text-brand-brown font-bold text-sm group-hover:text-brand-gold transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
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
