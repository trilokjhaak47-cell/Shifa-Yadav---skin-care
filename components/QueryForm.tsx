'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageCircle, Send, Calendar } from 'lucide-react';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message } = formData;
    
    if (!name || !message) return;

    const professionalMessage = `Hello Dr. Shifa Yadav Clinic,\n\n` +
      `I have a query regarding your treatments/services.\n\n` +
      `Name: ${name}\n\n` +
      `Message:\n${message}`;

    const encodedMessage = encodeURIComponent(professionalMessage);
    const whatsappUrl = `https://wa.me/919910195029?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="consult-section" className="py-24 relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390728/photo_2026-04-28_21-07-04_rosarm.jpg"
          alt="Clinic Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4"
          >
            Have any query?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-sm md:text-base max-w-md mx-auto leading-relaxed"
          >
            Feel free to ask anything about treatments, consultations, or your concerns — we’re here to help.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center space-x-2 text-[10px] font-bold text-brand-gold uppercase tracking-[.2em] mt-4"
          >
            <Calendar size={12} className="text-brand-gold" />
            <span>Consultations Available by Prior Appointment Only</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-12 h-1 bg-brand-gold mx-auto mt-6 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-white/70 ml-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all text-white font-medium placeholder:text-white/30"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-white/70 ml-1">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all text-white font-medium placeholder:text-white/30 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20 hover:bg-green-600 transition-all group"
            >
              <MessageCircle size={22} fill="white" className="group-hover:rotate-12 transition-transform" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QueryForm;
