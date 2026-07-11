'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Scale, ExternalLink } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <main id="terms-page-root" className="min-h-screen bg-white selection:bg-brand-cream selection:text-brand-brown">
      <Navbar />

      {/* Hero Section */}
      <header id="terms-hero-section" className="relative pt-44 pb-24 overflow-hidden bg-brand-cream lg:bg-transparent">
        {/* Background soft shapes - matching other subpages */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p id="terms-hero-badge" className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Agreement & Guidelines</p>
            <h1 id="terms-hero-heading" className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p id="terms-hero-subheading" className="text-brand-text-light text-xl leading-relaxed">
              Please read these terms carefully before using our website or booking an appointment.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <section id="terms-content-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-cream/10 p-8 md:p-12 rounded-[2.5rem] border border-brand-sand/40 shadow-sm"
          >
            <div id="terms-meta-header" className="text-xs font-bold text-brand-gold uppercase tracking-[.2em] mb-8 pb-4 border-b border-brand-sand/30 flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Scale size={14} />
                User Agreement
              </span>
              <span>Last Updated: July 2026</span>
            </div>

            <div className="space-y-8 text-brand-text-light">
              <p className="text-lg leading-relaxed text-brand-dark/95">
                Welcome to Dr. Shifa Yadav Dermatology Clinic. By accessing and using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue the use of this website.
              </p>

              <div className="space-y-8">
                {/* 1 */}
                <div id="terms-section-1" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">1.</span> Website Purpose
                  </h3>
                  <p className="leading-relaxed">
                    This website is intended to provide information about Dr. Shifa Yadav, dermatology treatments, clinic services, and appointment booking.
                  </p>
                  <p className="leading-relaxed mt-2 text-sm italic text-brand-muted">
                    The information available on this website is for general informational purposes only and should not be considered medical advice.
                  </p>
                </div>

                {/* 2 */}
                <div id="terms-section-2" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">2.</span> Medical Information Disclaimer
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The content provided on this website is intended to educate and inform visitors about dermatological conditions and available treatments.
                  </p>
                  <p className="leading-relaxed font-semibold text-brand-dark">
                    Every patient&apos;s condition is unique. Diagnosis and treatment recommendations should only be provided after a professional consultation with Dr. Shifa Yadav.
                  </p>
                </div>

                {/* 3 */}
                <div id="terms-section-3" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">3.</span> Appointment Requests
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Submitting an appointment request through this website does not guarantee a confirmed appointment.
                  </p>
                  <ul className="space-y-2 pl-4 list-disc marker:text-brand-gold">
                    <li>Appointments are confirmed only after communication with the clinic.</li>
                    <li>Consultations are available by prior appointment only.</li>
                  </ul>
                </div>

                {/* 4 */}
                <div id="terms-section-4" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">4.</span> Cancellation & Rescheduling
                  </h3>
                  <ul className="space-y-2 pl-4 list-disc marker:text-brand-gold">
                    <li>If you need to cancel or reschedule your appointment, please contact the clinic in advance.</li>
                    <li>Appointment availability may vary depending on the doctor&apos;s schedule.</li>
                  </ul>
                </div>

                {/* 5 */}
                <div id="terms-section-5" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">5.</span> Treatment Results
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Treatment outcomes vary from person to person depending on individual skin type, medical history, lifestyle, and adherence to medical advice.
                  </p>
                  <p className="leading-relaxed text-sm italic text-brand-muted">
                    Before & After photographs displayed on this website represent individual patient results and should not be interpreted as guaranteed outcomes.
                  </p>
                </div>

                {/* 6 */}
                <div id="terms-section-6" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">6.</span> Intellectual Property
                  </h3>
                  <p className="leading-relaxed mb-4">
                    All website content including text, images, graphics, logos, videos, icons, and design elements is the property of Dr. Shifa Yadav Dermatology Clinic unless otherwise stated.
                  </p>
                  <p className="leading-relaxed font-semibold text-brand-dark">
                    Unauthorized copying, reproduction, or distribution is prohibited.
                  </p>
                </div>

                {/* 7 */}
                <div id="terms-section-7" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">7.</span> Third-Party Links
                  </h3>
                  <p className="leading-relaxed mb-4">
                    This website may include links to third-party platforms such as:
                  </p>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm pl-4 list-disc marker:text-brand-gold">
                    <li>Google Maps</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Google Reviews</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We are not responsible for the content or privacy practices of external websites.
                  </p>
                </div>

                {/* 8 */}
                <div id="terms-section-8" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">8.</span> Limitation of Liability
                  </h3>
                  <p className="leading-relaxed mb-4">
                    While we strive to keep the information accurate and updated, Dr. Shifa Yadav Dermatology Clinic makes no warranties regarding the completeness or accuracy of website content.
                  </p>
                  <p className="leading-relaxed font-semibold text-brand-dark">
                    The clinic shall not be liable for any loss or damages arising from the use of this website.
                  </p>
                </div>

                {/* 9 */}
                <div id="terms-section-9" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">9.</span> Changes to These Terms
                  </h3>
                  <p className="leading-relaxed">
                    We reserve the right to update these Terms & Conditions at any time. The latest version will always be available on this page with the updated revision date.
                  </p>
                </div>

                {/* 10 */}
                <div id="terms-section-10" className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">10.</span> Contact Information
                  </h3>
                  <p className="leading-relaxed mb-4">
                    For any questions regarding these Terms & Conditions, please contact:
                  </p>
                  <div id="terms-contact-card" className="p-6 bg-white rounded-2xl border border-brand-sand/30 space-y-2">
                    <p className="font-bold text-brand-dark">Dr. Shifa Yadav Dermatology Clinic</p>
                    <p className="text-sm">Email: <a id="terms-contact-email" href="mailto:shifayadav@gmail.com" className="text-brand-gold hover:underline font-semibold transition-colors">shifayadav@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
