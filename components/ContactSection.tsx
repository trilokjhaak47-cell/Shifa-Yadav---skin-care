'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  ExternalLink,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  const contactInfo = [
    { 
      icon: <Phone size={22} />, 
      label: "Phone Number", 
      value: "+91 99101 95029", 
      href: "tel:+919910195029",
      description: "Call us for immediate assistance"
    },
    { 
      icon: <MapPin size={22} />, 
      label: "Clinic Address", 
      value: "H NO. 764, Sector 17-A", 
      subValue: "Gurugram, Haryana, Near HUDA Market",
      href: "https://maps.google.com/?q=H+NO.+764,+Sector+17-A,+Gurugram,+Haryana",
      description: "Conveniently located in Gurugram"
    },
    { 
      icon: <Clock size={22} />, 
      label: "Clinic Timings", 
      value: "Sun: 12 – 4 PM | Mon: 4 – 7 PM", 
      subValue: "Tue, Thu: 4 – 7 PM | Wed, Fri, Sat: Closed",
      description: "Consultations Available by Prior Appointment Only"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-brand-cream/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-brand-sand/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4"
          >
            Location & Contact
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight"
          >
            Visit Our Clinic
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-sand/30 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1.5">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="flex flex-col hover:text-brand-gold transition-colors">
                          <span className="text-xl font-bold text-brand-brown">{item.value}</span>
                          {item.subValue && <span className="text-sm text-brand-text-light font-medium">{item.subValue}</span>}
                        </a>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-xl font-bold text-brand-brown">{item.value}</span>
                          {item.subValue && <span className="text-sm text-brand-text-light font-medium">{item.subValue}</span>}
                        </div>
                      )}
                      <p className="mt-1 text-xs text-brand-text-light/60 font-medium italic">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-brand-sand/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/book" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-brown text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-brown/20 flex items-center justify-center space-x-2 transition-all hover:bg-brand-dark"
                >
                  <span>Book Appointment</span>
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              <a 
                href="https://wa.me/919910195029" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-green-500/20 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} fill="white" />
                  <span>WhatsApp Chat</span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="h-[350px] md:h-[400px] lg:h-[450px] bg-white rounded-[1.5rem] overflow-hidden shadow-2xl shadow-brand-sand/40 border border-brand-sand/30 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.007719251747!2d77.06084117528316!3d28.479314175748716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196376f502f1%3A0xa961d3479a2d03ba!2sDr.%20Shifa%20Yadav%20skin%2C%20hair%2C%20nail%20specialist!5e0!3m2!1sen!2sin!4v1777409903858!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1] brightness-[1.02]"
              ></iframe>
              <div className="absolute top-6 right-6">
                <a 
                  href="https://maps.google.com/?q=Dr.+Shifa+Yadav+skin,+hair,+nail+specialist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-md text-brand-dark px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg flex items-center space-x-2 border border-brand-sand/30 hover:bg-white transition-colors"
                >
                  <ExternalLink size={14} className="text-brand-gold" />
                  <span>Expand Map</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
