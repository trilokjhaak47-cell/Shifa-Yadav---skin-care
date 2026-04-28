'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Scissors, 
  Zap, 
  FlaskConical, 
  Layers, 
  Microscope, 
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    icon: Sparkles,
    services: [
      { 
        title: "Acne Scar Reduction", 
        desc: "Smooth your skin texture with advanced clinical treatments.",
        tags: ["✔ Clinical", "✔ Safe", "✔ Effective"],
        details: {
          overview: "Combination of subcision, chemical peels, and micro-needling to break down fibrous scar tissue.",
          results: "Significant reduction in scar depth and improved skin texture.",
          duration: "4-6 sessions recommended, 30 mins each."
        }
      },
      { 
        title: "Melasma Treatment", 
        desc: "Target deep pigmentation for an even skin tone.",
        tags: ["✔ Targeted", "✔ Real Results"],
        details: {
          overview: "Advanced topical formulations combined with gentle clinical procedures to suppress melanin production.",
          results: "Visible lightening of dark patches and overall radiance.",
          duration: "Maintenance sessions may be needed every 3-4 months."
        }
      },
      { 
        title: "Eczema Treatment", 
        desc: "Soothing medical care for chronic inflammatory skin conditions.",
        tags: ["✔ Medical Grade", "✔ Soothing"],
        details: {
          overview: "Personalized management involving topical steroids, barrier repair creams, and lifestyle counseling.",
          results: "Reduced inflammation, itchiness, and flare-up frequency.",
          duration: "Ongoing management based on condition severity."
        }
      },
      { 
        title: "Psoriasis Treatment", 
        desc: "Evidence-based management for clearer, healthier skin.",
        tags: ["✔ Advanced Care", "✔ Long-term"],
        details: {
          overview: "Treatment plans including biologics, phototherapy, and specialized topicals tailored to your skin.",
          results: "Cleared plaques and significantly improved quality of life.",
          duration: "Periodic monitoring required for optimal results."
        }
      },
      { 
        title: "Urticaria & Allergy", 
        desc: "Identify and treat the root cause of skin allergies.",
        tags: ["✔ Diagnostic", "✔ Quick Relief"],
        details: {
          overview: "Patch testing and blood work to identify triggers combined with antihistamine therapy.",
          results: "Relief from chronic itching and hives.",
          duration: "Initial assessment plus follows-ups as needed."
        }
      },
    ]
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    icon: Scissors,
    services: [
      { 
        title: "Hair PRP", 
        desc: "Harness your body's growth factors for hair regeneration.",
        tags: ["✔ Non-Surgical", "✔ Natural"],
        details: {
          overview: "Platelet-Rich Plasma therapy using your own blood to stimulate dormant hair follicles.",
          results: "Increased hair density and thickness within 3-4 months.",
          duration: "45 mins per session."
        }
      },
      { 
        title: "Hair Mesotherapy", 
        desc: "Nutrient-rich injections to strengthen hair follicles.",
        tags: ["✔ Nutrient Rich", "✔ Vitality"],
        details: {
          overview: "Micro-injections of vitamins, minerals, and growth factors directly into the scalp.",
          results: "Reduced hair fall and improved hair shine and strength.",
          duration: "30 mins per session."
        }
      },
      { 
        title: "Hair Fall Consultation", 
        desc: "In-depth dermatoscopy for precise hair loss diagnosis.",
        tags: ["✔ Diagnostic", "✔ Expert Analysis"],
        details: {
          overview: "Video dermatoscopy to examine scalp health and follicle miniaturization.",
          results: "Clear understanding of hair loss cause and a personalized plan.",
          duration: "20-30 mins consultation."
        }
      }
    ]
  },
  {
    id: "laser-removal",
    name: "Laser & Removal",
    icon: Zap,
    services: [
      { 
        title: "Laser Hair Removal", 
        desc: "Painless, permanent hair reduction using world-class lasers.",
        tags: ["✔ Painless", "✔ Permanent"],
        details: {
          overview: "Triple-wavelength laser technology targeting hair at every growth stage.",
          results: "Up to 90% reduction in hair growth after a full cycle.",
          duration: "6-8 sessions recommended."
        }
      },
      { 
        title: "Tattoo Removal", 
        desc: "Safe pigment shattering for effective ink removal.",
        tags: ["✔ Q-Switch", "✔ Minimal Scarring"],
        details: {
          overview: "Light energy breaks down ink particles which are then naturally eliminated by the body.",
          results: "Progressive fading of multi-colored tattoos.",
          duration: "Varies based on size and ink depth."
        }
      },
      { 
        title: "Mole Removal", 
        desc: "Painless removal of moles with minimal to no scarring.",
        tags: ["✔ Aesthetic", "✔ Quick"],
        details: {
          overview: "Radio-frequency or laser ablation under local anesthesia for comfort.",
          results: "Clear skin with healthy healing and minimal marking.",
          duration: "15-20 mins procedure."
        }
      },
    ]
  },
  {
    id: "aesthetic",
    name: "Aesthetic & Anti-Aging",
    icon: FlaskConical,
    services: [
      { 
        title: "Botox & Fillers", 
        desc: "Reduce fine lines and restore facial volume naturally.",
        tags: ["✔ Instantly Visible", "✔ Premium"],
        details: {
          overview: "US-FDA approved products to relax wrinkle-causing muscles or fill deep lines.",
          results: "Youthful, rested appearance with natural movement.",
          duration: "30-45 mins procedure."
        }
      },
      { 
        title: "Thread Lift", 
        desc: "Non-surgical face lift for immediate skin tightening.",
        tags: ["✔ Lifted", "✔ No Downtime"],
        details: {
          overview: "Dissolvable PDO threads inserted under the skin to lift and stimulate collagen.",
          results: "Immediate V-shape contour and firming.",
          duration: "60 mins procedure."
        }
      },
      { 
        title: "Skin Boosters", 
        desc: "Deep hydration with PDRN and Exosome technology.",
        tags: ["✔ Deep Hydration", "✔ Glowing"],
        details: {
          overview: "Injectable moisturizers that work at a cellular level to repair and hydrate.",
          results: "Dewy, luminous skin with reduced pore size.",
          duration: "3-session protocol recommended."
        }
      },
    ]
  },
  {
    id: "advanced-procedures",
    name: "Advanced Procedures",
    icon: Layers,
    services: [
      { 
        title: "Chemical Peeling", 
        desc: "Medical-grade exfoliation for radiant, new skin.",
        tags: ["✔ Professional", "✔ Glow"],
        details: {
          overview: "Application of acidic solutions to remove dead skin cells and reveal fresh layers.",
          results: "Brighter complexion and smoother texture.",
          duration: "20 mins per peel."
        }
      },
      { 
        title: "HIFU Tightening", 
        desc: "High-intensity ultrasound for non-surgical face lifting.",
        tags: ["✔ Deep Action", "✔ Firming"],
        details: {
          overview: "Targeted ultrasound energy stimulates deep structural layers of skin.",
          results: "Tighter jawline and lifted eyebrows over 3 months.",
          duration: "Single session is often enough for a year."
        }
      },
      { 
        title: "RF Skin Tightening", 
        desc: "Radio frequency energy to boost collagen and firm skin.",
        tags: ["✔ Warming", "✔ Refreshing"],
        details: {
          overview: "Controlled heating of dermis to contract existing collagen and make new ones.",
          results: "Plumper skin and reduced fine lines.",
          duration: "Weekly sessions for best results."
        }
      },
    ]
  },
  {
    id: "specialized",
    name: "Specialized Treatments",
    icon: Microscope,
    services: [
      { 
        title: "Nail Surgery", 
        desc: "Corrective procedures for ingrown nails and nail diseases.",
        tags: ["✔ Clinical", "✔ Relief"],
        details: {
          overview: "Minor surgical intervention to permanently correct painful nail conditions.",
          results: "Freedom from recurrent nail pain and infections.",
          duration: "45 mins procedure."
        }
      },
      { 
        title: "NB-UVB Therapy", 
        desc: "Narrow-band light therapy for psoriasis and vitiligo.",
        tags: ["✔ Safe", "✔ Efficient"],
        details: {
          overview: "Controlled exposure to specific UVB wavelengths to treat widespread skin issues.",
          results: "Even skin tone and controlled inflammatory plaques.",
          duration: "Short exposures twice a week."
        }
      }
    ]
  },
  {
    id: "consultation",
    name: "Consultation",
    icon: Stethoscope,
    services: [
      { 
        title: "Medical Consultation", 
        desc: "Detailed skin & hair evaluation with dermatoscopy.",
        tags: ["✔ Thorough", "✔ Personal"],
        details: {
          overview: "One-on-one session with Dr. Shifa to discuss your medical history and goals.",
          results: "Detailed diagnosis and a 3-6 month treatment roadmap.",
          duration: "20-30 mins."
        }
      },
      { 
        title: "Online Consultation", 
        desc: "Access Dr. Shifa's expertise from the comfort of your home.",
        tags: ["✔ Convenient", "✔ Digital"],
        details: {
          overview: "High-definition video call for diagnosis and digital prescription.",
          results: "Immediate care and treatment planning from anywhere.",
          duration: "15-20 mins."
        }
      },
    ]
  }
];

const ServiceCard = ({ title, desc, tags, details }: { title: string, desc: string, tags?: string[], details?: any }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <motion.div 
      layout
      whileHover={!isDetailsOpen ? { y: -5 } : {}}
      className={`bg-white p-6 rounded-2xl border transition-all duration-300 flex flex-col h-full ${isDetailsOpen ? 'border-brand-gold shadow-xl' : 'border-brand-sand/50 shadow-sm hover:shadow-xl hover:shadow-brand-sand/30'}`}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-cream/50 flex items-center justify-center text-brand-gold">
          <Sparkles size={16} />
        </div>
        {tags && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar ml-4">
            {tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-bold text-brand-brown/70 bg-brand-cream px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <h4 className="text-brand-dark font-bold text-lg">{title}</h4>
        <p className="text-brand-text-light text-sm leading-relaxed mb-4">{desc}</p>
      </div>
      
      <AnimatePresence>
        {isDetailsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden w-full"
          >
            <div className="pt-4 border-t border-brand-sand/50 mt-4 space-y-4">
              <div>
                <dt className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Procedure Overview</dt>
                <dd className="text-sm text-brand-text-light">{details.overview}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Results</dt>
                  <dd className="text-xs text-brand-text-light">{details.results}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Duration</dt>
                  <dd className="text-xs text-brand-text-light">{details.duration}</dd>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsDetailsOpen(!isDetailsOpen)}
        className="mt-4 text-[10px] font-bold text-brand-brown uppercase tracking-widest flex items-center gap-1 group hover:text-brand-gold transition-colors"
      >
        {isDetailsOpen ? (
          <>Show Less <ChevronUp size={14} /></>
        ) : (
          <>Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>
    </motion.div>
  );
};

const CategorySection = ({ category }: { category: typeof categories[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shownServices = isExpanded ? category.services : category.services.slice(0, 3);
  const hasMore = category.services.length > 3;

  return (
    <div id={category.id} className="scroll-mt-32 mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-brand-cream rounded-2xl text-brand-gold">
          <category.icon size={28} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-brand-dark">{category.name}</h2>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {shownServices.map((service, idx) => (
            <motion.div
              layout
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div className="mt-10 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-brand-cream text-brand-brown font-bold text-sm uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all"
          >
            {isExpanded ? (
              <>Show Less Services <ChevronUp size={16} /></>
            ) : (
              <><span className="text-brand-gold">+</span> View More Services <ChevronDown size={16} /></>
            )}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-brand-cream selection:text-brand-brown">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-44 pb-24 overflow-hidden bg-brand-cream lg:bg-transparent">
        {/* Background soft shapes - matching home page */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-sand/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-brand-gold font-bold tracking-[.3em] uppercase text-[10px] mb-4">World-Class Dermatology</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
              Our Treatments <br className="hidden md:block" /> & Services
            </h1>
            <p className="text-brand-text-light text-xl max-w-2xl mx-auto leading-relaxed">
              Advanced skin, hair, and aesthetic treatments tailored precisely for your biology and aesthetic goals.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Quick Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-brand-sand shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4 whitespace-nowrap min-w-max">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest border-r border-brand-sand pr-8">Jump To</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="text-sm font-bold text-brand-text-light hover:text-brand-gold transition-colors"
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-brand-text-light text-lg mb-12 leading-relaxed">
            Every skin is unique. Schedule a detailed consultation with Dr. Shifa Yadav to receive a customized treatment plan designed specifically for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 bg-brand-gold text-white rounded-full font-bold shadow-2xl shadow-brand-gold/20 hover:bg-brand-brown transition-all"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </motion.button>
            </Link>
            
            <a href="tel:+919910195029">
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
