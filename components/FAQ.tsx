'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: "Is the treatment safe?",
    a: "Absolutely. All our treatments are US-FDA approved and performed or supervised by Dr. Shifa Yadav. We prioritize patient safety and clinical integrity above all else."
  },
  {
    q: "How many sessions are needed?",
    a: "This varies based on the condition and your skin's response. During your initial consultation, we provide a personalized treatment map with an estimated number of sessions needed for optimal results."
  },
  {
    q: "When will I see results?",
    a: "Most patients notice improvements in skin texture and tone within 2-4 weeks. Clinical results for acne or hair growth typically take 3-6 months as they rely on cellular turnover and growth cycles."
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, we offer both in-clinic and online video consultations. Online consultations are ideal for initial assessments and follow-ups."
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your first visit includes a deep skin analysis, a detailed discussion of your clinical history, and the creation of a bespoke skincare and treatment regime tailored specifically for you."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Patient FAQ</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Common Questions</h2>
          <p className="text-brand-text-light text-lg">Everything you need to know about our treatments and consultations.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 ${
                activeIndex === i ? 'bg-brand-cream border-brand-gold/30 shadow-lg shadow-brand-sand/20' : 'bg-white border-brand-sand hover:border-brand-gold/20'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center group focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === i ? 'text-brand-brown' : 'text-brand-brown/80 group-hover:text-brand-brown'}`}>
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-all ${activeIndex === i ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-sand/30 text-brand-gold'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 text-brand-text-light leading-relaxed text-lg border-t border-brand-gold/10 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
