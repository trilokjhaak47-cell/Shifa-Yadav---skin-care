import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Dr. Shifa Yadav Dermatology Clinic',
  description: 'Terms and conditions for consulting and appointment bookings with Dr. Shifa Yadav clinic.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
