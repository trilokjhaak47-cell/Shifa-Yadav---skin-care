import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. Shifa Yadav Dermatology Clinic',
  description: 'Privacy Policy and patient data protection practices at Dr. Shifa Yadav clinic.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
