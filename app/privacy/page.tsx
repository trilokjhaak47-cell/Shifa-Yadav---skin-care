'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Mail, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-cream selection:text-brand-brown">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-44 pb-24 overflow-hidden bg-brand-cream lg:bg-transparent">
        {/* Background soft shapes - matching home and services page */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Patient Security & Transparency</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-brand-text-light text-xl leading-relaxed">
              Learn how we collect, use, and protect your information while providing a secure and transparent experience.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-cream/10 p-8 md:p-12 rounded-[2.5rem] border border-brand-sand/40 shadow-sm"
          >
            <div className="text-xs font-bold text-brand-gold uppercase tracking-[.2em] mb-8 pb-4 border-b border-brand-sand/30 flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Shield size={14} />
                Clinic Guidelines
              </span>
              <span>Last Updated: July 2026</span>
            </div>

            <div className="space-y-8 text-brand-text-light">
              <p className="text-lg leading-relaxed text-brand-dark/95">
                At Dr. Shifa Yadav Dermatology Clinic, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect the information you provide while using our website.
              </p>

              <p className="text-base leading-relaxed">
                By accessing or using this website, you agree to the practices described in this Privacy Policy.
              </p>

              <div className="space-y-8">
                {/* 1 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">1.</span> Information We Collect
                  </h3>
                  <p className="leading-relaxed mb-4">
                    When you interact with our website, we may collect the following information:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm pl-4 list-disc marker:text-brand-gold">
                    <li>Full Name</li>
                    <li>Phone Number</li>
                    <li>Appointment Details</li>
                    <li>Treatment Preferences</li>
                    <li>Messages or Queries submitted through our forms</li>
                    <li>Any information you voluntarily provide while contacting us</li>
                  </ul>
                  <p className="leading-relaxed mt-4 text-sm italic text-brand-muted">
                    We do not collect sensitive medical records through this website.
                  </p>
                </div>

                {/* 2 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">2.</span> How We Use Your Information
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The information you provide may be used to:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc marker:text-brand-gold">
                    <li>Schedule and manage appointments</li>
                    <li>Respond to your inquiries</li>
                    <li>Contact you regarding your appointment or treatment</li>
                    <li>Improve our website and patient experience</li>
                    <li>Provide requested healthcare information and support</li>
                  </ul>
                  <p className="leading-relaxed mt-4 text-sm font-semibold text-brand-dark">
                    Your information is never sold or rented to third parties.
                  </p>
                </div>

                {/* 3 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">3.</span> WhatsApp Communication
                  </h3>
                  <p className="leading-relaxed">
                    Our appointment and contact forms may redirect you to WhatsApp to complete your inquiry or appointment request. Any communication through WhatsApp is governed by WhatsApp&apos;s own Privacy Policy in addition to this website&apos;s Privacy Policy.
                  </p>
                </div>

                {/* 4 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">4.</span> Third-Party Services
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Our website may use trusted third-party services including:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc marker:text-brand-gold">
                    <li>Google Maps</li>
                    <li>Google Reviews (Elfsight Widget)</li>
                    <li>WhatsApp</li>
                    <li>Website hosting providers</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    These services may collect limited technical information according to their own privacy policies.
                  </p>
                </div>

                {/* 5 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">5.</span> Cookies
                  </h3>
                  <p className="leading-relaxed">
                    Our website may use essential cookies to improve website functionality and user experience. No personally identifiable information is collected through cookies without your consent.
                  </p>
                </div>

                {/* 6 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">6.</span> Data Security
                  </h3>
                  <p className="leading-relaxed">
                    We take reasonable technical and administrative measures to protect your information against unauthorized access, disclosure, or misuse. However, no online platform can guarantee complete security, and users should understand that internet communications always carry some level of risk.
                  </p>
                </div>

                {/* 7 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">7.</span> External Links
                  </h3>
                  <p className="leading-relaxed">
                    Our website may contain links to external websites or social media platforms. We are not responsible for the privacy practices or content of those third-party websites.
                  </p>
                </div>

                {/* 8 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">8.</span> Your Rights
                  </h3>
                  <p className="leading-relaxed mb-4">
                    You may request to:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc marker:text-brand-gold">
                    <li>Access your personal information</li>
                    <li>Update incorrect information</li>
                    <li>Request deletion of information submitted through this website (where applicable)</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To make such requests, please contact us using the email below.
                  </p>
                </div>

                {/* 9 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">9.</span> Contact Us
                  </h3>
                  <p className="leading-relaxed mb-4">
                    If you have any questions regarding this Privacy Policy, please contact us:
                  </p>
                  <div className="p-6 bg-white rounded-2xl border border-brand-sand/30 space-y-2">
                    <p className="font-bold text-brand-dark">Dr. Shifa Yadav Dermatology Clinic</p>
                    <p className="text-sm">Email: <a href="mailto:shifayadav@gmail.com" className="text-brand-gold hover:underline font-semibold transition-colors">shifayadav@gmail.com</a></p>
                  </div>
                </div>

                {/* 10 */}
                <div className="border-t border-brand-sand/30 pt-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="text-brand-gold font-sans text-sm tracking-wider">10.</span> Updates to this Privacy Policy
                  </h3>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. The updated version will always be published on this page with the latest revision date.
                  </p>
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
