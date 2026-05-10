'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Results', href: '/#results' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-brand-sand' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-48 md:h-12 md:w-56 transition-all duration-300">
              <Image 
                src="https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778438049/IMG_7269_mmhoxq.png"
                alt="Dr. Shifa Yadav Clinic"
                fill
                className="object-contain object-left"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 relative py-2 ${
                    active ? 'text-brand-dark' : 'text-brand-muted hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/book"
              className="bg-brand-brown text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-brown/20"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:+919910195029" className="p-2 text-brand-brown">
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
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-bold rounded-lg transition-all ${
                      active 
                        ? 'text-brand-gold bg-brand-cream/50' 
                        : 'text-brand-dark hover:bg-brand-cream'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                      {active && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-4 px-3">
                <Link
                  href="/book"
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
