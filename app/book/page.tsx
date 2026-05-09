'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BookAppointmentPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });

  const treatmentCategories = {
    "Skin Treatments": [
      "Acne scar reduction",
      "Melasma treatment",
      "Eczema treatment",
      "Psoriasis treatment",
      "Urticaria & allergy treatment",
      "Vitiligo treatment"
    ],
    "Hair Treatments": [
      "Hair PRP",
      "Hair mesotherapy",
      "Hair fall consultation & dermatoscopy"
    ],
    "Laser & Removal": [
      "Laser hair removal",
      "Tattoo removal",
      "Birthmark removal",
      "Mole removal",
      "Skin tags & warts removal"
    ],
    "Aesthetic & Anti-Aging": [
      "Fillers & Botox",
      "Thread lift",
      "Skin boosters (PDRN, Exosomes)"
    ],
    "Advanced Procedures": [
      "Chemical peeling",
      "Pigmentation reduction laser",
      "HIFU (skin tightening)",
      "Radio frequency tightening",
      "Body skin tightening",
      "Double chin reduction"
    ],
    "Specialized Treatments": [
      "Nail surgery",
      "Electrosurgery",
      "NB-UVB therapy"
    ],
    "Consultation": [
      "Detailed skin & hair consultation",
      "Online consultation"
    ]
  };

  type TreatmentCategory = keyof typeof treatmentCategories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, category, treatment, date, time, message } = formData;
    
    if (!name || !phone || !treatment || !date || !time) return;

    const professionalMessage = `New Appointment Request\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Category: ${category}\n` +
      `Treatment: ${treatment}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n` +
      `Message: ${message}`;

    const encodedMessage = encodeURIComponent(professionalMessage);
    const whatsappUrl = `https://wa.me/919910195029?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'category') {
      setFormData({
        ...formData,
        category: value,
        treatment: '' // Reset treatment when category changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const faqs = [
    {
      question: "How soon will I get a response?",
      answer: "We typically respond to appointment requests within 10-30 minutes during our working hours via WhatsApp or call."
    },
    {
      question: "Is consultation available online?",
      answer: "Yes, we offer video consultations for patients who cannot visit the clinic in person. Please specify this in the message section."
    },
    {
      question: "What should I bring for consultation?",
      answer: "Please bring any previous prescriptions, current skincare products you are using, and a valid ID proof."
    }
  ];

  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-gold/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">Reservation</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              Book Your Appointment
            </h1>
            <p className="text-brand-text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get expert consultation for your skin and hair concerns. Your journey to healthy, glowing skin starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-[3rem] shadow-2xl shadow-brand-sand/40 border border-brand-sand/30 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          placeholder="Your Name"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required 
                          placeholder="+91 00000 00000"
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Select Category *</label>
                        <div className="relative">
                          <select 
                            name="category" 
                            required 
                            onChange={handleChange}
                            value={formData.category}
                            className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown appearance-none cursor-pointer"
                          >
                            <option value="">Choose a category</option>
                            {Object.keys(treatmentCategories).map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                          <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Select Treatment *</label>
                        <div className="relative">
                          <select 
                            name="treatment" 
                            required 
                            onChange={handleChange}
                            value={formData.treatment}
                            disabled={!formData.category}
                            className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-brown appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">{formData.category ? "Choose a treatment" : "Select category first"}</option>
                            {formData.category && (treatmentCategories[formData.category as TreatmentCategory] as string[]).map((treatment: string) => (
                              <option key={treatment} value={treatment}>{treatment}</option>
                            ))}
                          </select>
                          <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Preferred Date *</label>
                        <div className="relative">
                          <input 
                            type="date" 
                            name="date"
                            required 
                            onChange={handleChange}
                            className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Preferred Time *</label>
                        <input 
                          type="time" 
                          name="time"
                          required 
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-brand-muted ml-1">Message (Optional)</label>
                      <textarea 
                        name="message"
                        placeholder="Tell us more about your concern..."
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-brand-cream/30 border border-brand-sand/50 rounded-2xl p-4 focus:outline-none focus:border-brand-gold transition-colors font-medium resize-none"
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-brand-gold text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-gold/20 flex items-center justify-center space-x-3 group transition-all hover:bg-brand-brown"
                    >
                      <span>Book Appointment Now</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>

                  {/* Trust Elements */}
                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-brand-sand/30">
                    {[
                      { icon: <ShieldCheck size={18} />, text: "Consultation by certified dermatologist" },
                      { icon: <Sparkles size={18} />, text: "Safe & advanced treatments" },
                      { icon: <CheckCircle2 size={18} />, text: "Personalized care for every patient" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                        <div className="text-brand-gold shrink-0">{item.icon}</div>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] shadow-2xl shadow-brand-sand/40 border border-brand-sand/30 overflow-hidden text-center p-12 md:p-20"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Request Submitted!</h2>
                <p className="text-brand-text-light text-lg mb-10 max-w-md mx-auto">
                  Your appointment request has been submitted. We will contact you shortly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-white rounded-full font-bold shadow-lg hover:bg-brand-gold/90 transition-all">
                      Go to Homepage
                    </button>
                  </Link>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-cream text-brand-brown rounded-full font-bold shadow-sm hover:bg-brand-sand transition-all border border-brand-sand/50"
                  >
                    Edit Form
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Quick Contact & Info Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Clinic Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Clinic Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cream/50 flex items-center justify-center text-brand-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-brand-muted mb-1">Clinic Address</h4>
                      <p className="text-lg font-bold text-brand-brown">
                        H NO. 764, Sector 17-A, Gurugram,<br/>Haryana, Near HUDA Market
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cream/50 flex items-center justify-center text-brand-gold shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-brand-muted mb-1">Clinic Timings</h4>
                      <p className="text-lg font-bold text-brand-brown">Sun: 12 – 4 PM</p>
                      <p className="text-lg font-bold text-brand-brown">Mon, Tue, Thu: 4 – 7 PM</p>
                      <p className="text-sm text-brand-text-light italic">Wed, Fri, Sat: Clinic Closed</p>
                      <div className="mt-4 flex items-center space-x-2 text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                        <Calendar size={12} strokeWidth={2.5} />
                        <span>Consultations Available by Prior Appointment Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="pt-8 border-t border-brand-sand/30">
                <h3 className="text-sm uppercase font-bold tracking-widest text-brand-muted mb-6">Need Immediate Help?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919910195029" className="flex-1">
                    <motion.button 
                      whileHover={{ y: -2 }}
                      className="w-full flex items-center justify-center space-x-3 bg-brand-brown text-white py-4 rounded-2xl font-bold shadow-lg"
                    >
                      <Phone size={20} />
                      <span>Call Now</span>
                    </motion.button>
                  </a>
                  <a href="https://wa.me/919910195029" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button 
                      whileHover={{ y: -2 }}
                      className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp Chat</span>
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>

            {/* Mini FAQ */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-brand-sand/50 rounded-2xl overflow-hidden bg-white"
                  >
                    <button 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-cream/20 transition-colors"
                    >
                      <span className="font-bold text-brand-dark pr-8">{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className={`text-brand-gold transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-brand-text-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookAppointmentPage;
