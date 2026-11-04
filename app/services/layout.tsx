import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dermatology Services & Treatments | Dr. Shifa Yadav Gurgaon',
  description: 'Comprehensive dermatology and aesthetic treatments in Gurgaon by Dr. Shifa Yadav: acne scars, melasma, hair fall, chemical peels, and laser therapy.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
