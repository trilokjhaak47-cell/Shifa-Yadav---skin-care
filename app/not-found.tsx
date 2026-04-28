import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-cream flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-serif font-bold text-brand-dark/20 mb-4">404</h1>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Page Not Found</h2>
          <p className="text-brand-text-light mb-8">
            The page you are looking for might have been moved, deleted, or never existed in the first place.
          </p>
          <Link href="/">
            <button className="px-8 py-3 bg-brand-gold text-white rounded-full font-bold shadow-xl hover:bg-brand-brown transition-all">
              Redirect to Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
