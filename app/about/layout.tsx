import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Shifa Yadav | Best Dermatologist & Skin Specialist in Gurgaon',
  description: 'Learn about Dr. Shifa Yadav, MD Gold Medalist and experienced dermatologist in Gurgaon with 13+ years of clinical and aesthetic dermatology expertise.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
