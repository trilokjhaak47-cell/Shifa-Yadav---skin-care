'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const clinicImages = [
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390728/photo_2026-04-28_21-07-04_rosarm.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390731/photo_2026-04-28_21-07-07_uajhro.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390730/photo_2026-04-28_21-07-02_j2vovo.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390727/photo_2026-04-28_21-07-09_cktynw.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778078642/photo_2026-05-06_20-13-09_jabm1y.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778078641/photo_2026-05-06_20-13-28_zp8y34.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1777390723/photo_2026-04-28_21-07-12_xxrozx.jpg",
  "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778078641/photo_2026-05-06_20-13-13_lncmp3.jpg"
];

const ClinicGallery = () => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 2 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const handleManualNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    next();
    timerRef.current = setInterval(next, 3000);
  };

  const handleManualPrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    prev();
    timerRef.current = setInterval(next, 3000);
  };

  // Calculate indices to show (looping)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
        visible.push(clinicImages[(currentIndex + i) % clinicImages.length]);
    }
    return visible;
  };

  return (
    <section id="clinic-gallery" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Our Clinic</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight mb-4">A Glimpse Inside</h2>
            <p className="text-brand-text-light max-w-2xl mx-auto text-lg leading-relaxed">
              Take a glimpse inside our modern dermatology and aesthetic clinic designed for advanced care and patient comfort.
            </p>
          </motion.div>
        </div>

        <div className="relative group">
          <div className="flex gap-4 md:gap-6">
            {!mounted ? (
              <div className="flex gap-4 md:gap-6 w-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-1 aspect-[4/5] rounded-[2rem] bg-brand-sand/10 h-[300px] md:h-[450px]" />
                ))}
              </div>
            ) : (
              <AnimatePresence mode="popLayout" initial={false}>
                {getVisibleImages().map((img, idx) => (
                  <motion.div
                    key={`${img}-${currentIndex}-${idx}`}
                    layout
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-brand-sand/30 border border-white/50 group/img h-[300px] md:h-[450px]"
                  >
                    <Image
                      src={img}
                      alt={`Clinic facility ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handleManualPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-brand-dark shadow-xl transition-all z-10 flex"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleManualNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-brand-dark shadow-xl transition-all z-10 flex"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
