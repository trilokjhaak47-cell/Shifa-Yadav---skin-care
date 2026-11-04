import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Shifa Yadav | Dermatology Clinic in Sector 17A Gurgaon',
  description: 'Contact Dr. Shifa Yadav dermatology clinic in Sector 17A, Gurugram. Call +91 9910195029 or visit for consultation.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
