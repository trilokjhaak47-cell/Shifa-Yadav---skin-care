'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-sand font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-lg">S</div>
              <span className="text-lg font-serif font-bold tracking-tight text-brand-brown leading-none uppercase">DR. SHIFA YADAV</span>
            </Link>
            <p className="text-sm text-brand-text-light leading-relaxed mb-6">
              Expert clinical dermatology and aesthetic care focused on results and safety. Science-backed treatments for your skin and hair.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dermshifayadav/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-brand-sand/20 flex items-center justify-center text-brand-muted hover:bg-brand-gold hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-sand/20 flex items-center justify-center text-brand-muted hover:bg-brand-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-12 lg:contents">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[.2em] text-brand-muted mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium text-brand-brown">
                <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-brand-gold transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
                <li><Link href="/#results" className="hover:text-brand-gold transition-colors">Result</Link></li>
              </ul>
            </div>

            {/* Timings */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[.2em] text-brand-muted mb-6">Clinic Timings</h4>
              <ul className="space-y-3 text-[11px] font-bold text-brand-brown uppercase tracking-wider">
                <li className="flex justify-between border-b border-brand-sand pb-1.5">
                  <span>Sun</span> <span className="text-brand-gold">12 – 4 PM</span>
                </li>
                <li className="flex justify-between border-b border-brand-sand pb-1.5">
                  <span>Mon</span> <span className="text-brand-gold">4 – 7 PM</span>
                </li>
                <li className="flex justify-between border-b border-brand-sand pb-1.5">
                  <span>Tue</span> <span className="text-brand-gold">4 – 7 PM</span>
                </li>
                <li className="flex justify-between border-b border-brand-sand pb-1.5">
                  <span>Thu</span> <span className="text-brand-gold">4 – 7 PM</span>
                </li>
                <li className="flex justify-between opacity-40">
                  <span>Wed, Fri, Sat</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Location Summary */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[.2em] text-brand-muted mb-6">Location</h4>
            <p className="text-sm font-bold text-brand-brown mb-2 uppercase tracking-wide">Gurugram Center</p>
            <p className="text-sm text-brand-text-light mb-4 text-pretty tabular-nums">
              H NO. 764, Sector 17-A, Gurugram,<br/>Haryana, Near HUDA Market
            </p>
            <div className="flex items-center space-x-2 text-[10px] font-bold text-brand-gold uppercase tracking-[.2em]">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
              <span>Clinical Excellence in Dermatology</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="py-8 bg-brand-cream border-t border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-muted/70 uppercase font-bold tracking-[.1em]">
            © 2026 Dr. Shifa Yadav Dermatology Clinic. Clinical Excellence Guaranteed.
          </p>
          <div className="flex space-x-8 text-[10px] text-brand-muted/70 uppercase font-bold tracking-[.1em]">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Care</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Patient Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
