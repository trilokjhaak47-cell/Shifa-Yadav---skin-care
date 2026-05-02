import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import PopularTreatments from '@/components/PopularTreatments';
import TechSection from '@/components/TechSection';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import QueryForm from '@/components/QueryForm';
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
      <PopularTreatments />
      <TechSection />
      <BeforeAfter />
      <Testimonials />
      <SocialProof />
      <FAQ />
      <QueryForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
