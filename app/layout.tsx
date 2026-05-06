import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import FloatingCTA from '@/components/FloatingCTA';
import ResizeObserverFix from '@/components/ResizeObserverFix';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Dr. Shifa Yadav | Dermatology Clinic',
  description: 'Expert dermatology treatments for acne, pigmentation, hair fall, and more — guided by Dr. Shifa Yadav.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-brand-cream text-brand-text">
        <ResizeObserverFix />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
