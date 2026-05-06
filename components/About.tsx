'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

const CountUp = ({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && countRef.current) {
      const controls = animate(0, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom premium easing: easeOutQuart
        onUpdate(value) {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(value).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix, duration]);

  return <span ref={countRef}>0{suffix}</span>;
};

const About = () => {
  const stats = [
    { label: "Happy Patients", value: 3200, suffix: "+" },
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Proven Methods", value: "Clinical", isStatic: true },
    { label: "Skin Guidance", value: "Trusted", isStatic: true }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-cream/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">The Expert Behind Your Glow</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
            About Dr. Shifa Yadav
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-brand-muted mb-8">
            A trusted dermatologist focused on science-backed skin and hair treatments.
          </p>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto mb-8" />
          <p className="text-lg text-brand-text-light leading-relaxed max-w-3xl mx-auto">
            Dr. Shifa Yadav is a qualified dermatologist dedicated to providing safe, effective, and personalized skincare solutions. With a strong focus on science-backed treatments, she helps patients overcome acne, pigmentation, hair fall, and other skin concerns with confidence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-1">
                {typeof stat.value === 'number' && !stat.isStatic ? (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-muted font-bold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
