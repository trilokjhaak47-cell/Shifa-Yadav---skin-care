'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Microscope, 
  Users, 
  Award, 
  MapPin, 
  ChevronRight, 
  Calendar, 
  Phone,
  Sparkles,
  Heart,
  Eye,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: "Happy Patients", value: "1000+", icon: Users },
    { label: "Advanced Methods", value: "50+", icon: Microscope },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Personalized Care", value: "100%", icon: Heart },
  ];

  const approach = [
    {
      title: "Personalized Treatment Plans",
      desc: "Every skin is unique. We create custom protocols tailored to your biology and lifestyle.",
      icon: Sparkles
    },
    {
      title: "Science-Backed & Safe",
      desc: "We only use clinically proven treatments and US-FDA approved technologies.",
      icon: ShieldCheck
    },
    {
      title: "Long-term Skin Health",
      desc: "Our goal is not just a quick fix, but a foundation for lasting dermatological health.",
      icon: Eye
    },
    {
      title: "Transparency & Education",
      desc: "We believe in empowering patients with knowledge about their skin conditions.",
      icon: GraduationCap
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-44 pb-24 overflow-hidden bg-brand-cream lg:bg-transparent text-center">
        {/* Background soft shapes - matching home and services page */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Board Certified Dermatologist</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              About Dr. Shifa Yadav
            </h1>
            <p className="text-brand-text-light text-xl leading-relaxed mb-8">
              Trusted dermatologist focused on safe, science-backed skin and hair treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-brand-brown transition-all">
                  Book Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Meet Your Dermatologist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-[3rem] shadow-2xl shadow-brand-sand/50 border-[12px] border-white">
                <Image 
                  src="https://picsum.photos/seed/dr-shifa-portrait/800/1000"
                  alt="Dr. Shifa Yadav"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Image Badge Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-brand-sand/30 flex items-center gap-2 z-10 scale-90 md:scale-100 origin-bottom-right">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest whitespace-nowrap">Certified Dermatologist</span>
                </div>
              </div>
              {/* Floating element or shadow decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-cream rounded-full -z-10 blur-2xl opacity-50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Dedicated to Excellence</p>
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8">Meet Your Dermatologist</h2>
              <div className="space-y-6 text-brand-text-light text-lg leading-relaxed">
                <p>
                  Dr. Shifa Yadav is a qualified dermatologist dedicated to providing safe, effective, and personalized skincare solutions. With a strong focus on science-backed treatments, she helps patients manage acne, pigmentation, hair concerns, and other skin conditions with confidence.
                </p>
                <p>
                  Her approach combines medical expertise with modern technology to deliver visible and long-lasting results. She believes that beautiful skin starts with health, and every treatment plan is an investment in your future self.
                </p>
              </div>
              <ul className="mt-10 space-y-4">
                {['Fellowship in Aesthetic Medicine', 'MBBS, MD - Dermatology', 'Expert in Clinical Cosmetology'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-dark font-bold">
                    <div className="p-1 bg-brand-cream rounded-full text-brand-gold">
                      <ChevronRight size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">Our Approach to Skin Care</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-sand shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
                <p className="text-brand-text-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Our Clinic</h2>
            <p className="text-brand-gold font-bold uppercase tracking-[.2em] text-xs mb-6">Located in Gurugram Sector 17</p>
            <p className="text-brand-text-light text-lg leading-relaxed max-w-3xl mx-auto">
              A clean, modern, and well-equipped clinic environment designed to ensure comfort, safety, and effective treatments for every patient.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group"
              >
                <Image 
                  src={`https://picsum.photos/seed/clinic-gallery-${idx}/600/600`} 
                  alt={`Clinic Gallery ${idx}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Brief */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-8 text-white">Advanced Technology We Use</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                World-class clinical expertise meets modern technology. We invest in high-end medical systems to ensure safety and superior results.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced and modern equipment",
                  "Safe and clinically proven treatments",
                  "Better and more effective results"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                    <div className="p-1 bg-brand-gold rounded-full text-white">
                      <ShieldCheck size={16} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                <Image 
                  src="https://picsum.photos/seed/laser-tech/800/600" 
                  alt="Advanced Laser Technology" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliations & Recognition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Affiliations & Recognition</h2>
            <p className="text-brand-text-light">Professional memberships and certifications of Dr. Shifa Yadav.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Professional Associations", 
                items: ["Member of Indian Association of Dermatologists", "Member of Cosmetic Dermatology Society of India"] 
              },
              { 
                title: "Certifications", 
                items: ["Certified in Advanced Aesthetic Procedures", "Fellowship in Laser & Cosmetology"] 
              },
              { 
                title: "Achievements", 
                items: ["Clinical Excellence Award 2023", "Pioneer in Advanced Hair Restoration"] 
              }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl border border-brand-sand bg-brand-cream/10">
                <h3 className="text-lg font-bold text-brand-dark mb-6 border-b border-brand-sand pb-4">{box.title}</h3>
                <ul className="space-y-4">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-text-light">
                      <div className="mt-1 shrink-0">
                        <Award size={16} className="text-brand-gold" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-gold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-brand-gold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-cream/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-8 leading-tight"
          >
            Start Your Skin <br /> Transformation Today
          </motion.h2>
          <p className="text-brand-text-light text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to look and feel your best? Join over a thousand patients who have trusted Dr. Shifa Yadav with their skin and hair journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 bg-brand-gold text-white rounded-full font-bold shadow-2xl shadow-brand-gold/20 hover:bg-brand-brown transition-all"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </motion.button>
            </Link>
            
            <a href="tel:+919876543210">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 border-2 border-brand-brown text-brand-brown rounded-full font-bold hover:bg-brand-brown hover:text-white transition-all group"
              >
                <Phone size={20} />
                <span>Free Consultation</span>
                <ChevronRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
