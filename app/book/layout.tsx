import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Appointment | Dr. Shifa Yadav Skin & Hair Specialist Gurgaon',
  description: 'Book your consultation online with Dr. Shifa Yadav, MD Gold Medalist dermatologist in Gurugram. Fast, direct clinic appointment scheduling.',
  alternates: {
    canonical: '/book',
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
