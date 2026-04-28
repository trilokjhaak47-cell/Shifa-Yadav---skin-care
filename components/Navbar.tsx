'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/#results' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-brand-sand' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-lg">S</div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-brand-brown leading-none">
                DR. SHIFA YADAV
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                Dermatology Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-brand-brown text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-brown/20"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:+919999999999" className="p-2 text-brand-brown">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-brown focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-brand-dark hover:bg-brand-beige rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-dark text-white py-4 rounded-xl font-bold shadow-xl shadow-brand-dark/10 active:scale-95 transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
