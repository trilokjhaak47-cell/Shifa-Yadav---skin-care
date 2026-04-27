'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "My acne reduced within weeks of starting the treatment. Dr. Shifa's approach is very scientific and she explains everything clearly. Highly recommended!",
    role: "Patient (Acne Treatment)"
  },
  {
    name: "Rajesh Kumar",
    text: "I was dealing with severe hair thinning. The growth factor sessions were painless and I can see visible results after just 3 months. Best experience ever.",
    role: "Patient (Hair Therapy)"
  },
  {
    name: "Sneha Patel",
    text: "Very knowledgeable and explains everything with logic. She doesn't just prescribe products but educates you on your skin behavior. A rare find!",
    role: "Patient (General Skin Care)"
  },
  {
    name: "Vikram Singh",
    text: "Professional, clean clinic and the results for my pigmentation were amazing. I felt safe throughout the laser procedure thanks to the expert guidance.",
    role: "Patient (Laser Resurfacing)"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 space-y-4 lg:space-y-0">
          <div className="max-w-2xl">
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4 text-center lg:text-left">Kind Words</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark text-center lg:text-left tracking-tight">What Our Patients Say</h2>
          </div>
          <div className="flex items-center space-x-2 text-brand-gold pb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            <span className="font-bold text-brand-brown ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] relative border border-brand-sand hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-sand/50 transition-all shadow-sm group"
            >
              <Quote className="absolute top-10 right-10 text-brand-sand/20 w-12 h-12" />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#D4AF37" className="text-brand-gold" />)}
              </div>
              <p className="text-brand-text-light text-lg italic leading-relaxed mb-8">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-sand/30 flex items-center justify-center font-bold text-brand-brown">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown">{t.name}</h4>
                  <p className="text-brand-gold font-bold text-[10px] uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
