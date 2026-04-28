import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TechSection from '@/components/TechSection';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TopBanner />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechSection />
      <BeforeAfter />
      <Testimonials />
      <SocialProof />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
