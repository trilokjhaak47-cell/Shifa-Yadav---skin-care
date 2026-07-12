import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://shifayadav.com'),
  alternates: {
    canonical: 'https://shifayadav.com',
  },
  title: 'Dr. Shifa Yadav | Best Dermatologist & Skin Specialist in Gurgaon',
  description: 'Consult Dr. Shifa Yadav, MD Gold Medalist and experienced dermatologist in Gurgaon with 13+ years of expertise in acne treatment, pigmentation, hair fall, laser hair removal, and anti-aging treatments. Book your appointment today.',
  icons: {
    icon: 'https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778442924/Untitled_design_7_zwzer1.png',
  },
  openGraph: {
    title: 'Dr. Shifa Yadav | Best Dermatologist & Skin Specialist in Gurgaon',
    description: 'Consult Dr. Shifa Yadav, MD Gold Medalist and experienced dermatologist in Gurgaon with 13+ years of expertise in acne treatment, pigmentation, hair fall, laser hair removal, and anti-aging treatments. Book your appointment today.',
    images: ['https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778443391/Untitled_design_8_oienft.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Shifa Yadav | Best Dermatologist & Skin Specialist in Gurgaon',
    description: 'Consult Dr. Shifa Yadav, MD Gold Medalist and experienced dermatologist in Gurgaon with 13+ years of expertise in acne treatment, pigmentation, hair fall, laser hair removal, and anti-aging treatments. Book your appointment today.',
    images: ['https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778443391/Untitled_design_8_oienft.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 1. Resolve fetch read-only getter error in sandbox
                try {
                  var originalFetch = window.fetch;
                  var localFetch = originalFetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return localFetch; },
                    set: function(v) { localFetch = v; },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e1) {
                  try {
                    var proto = Object.getPrototypeOf(window);
                    var originalFetchProto = window.fetch;
                    var localFetchProto = originalFetchProto;
                    Object.defineProperty(proto, 'fetch', {
                      get: function() { return localFetchProto; },
                      set: function(v) { localFetchProto = v; },
                      configurable: true,
                      enumerable: true
                    });
                  } catch (e2) {
                    console.warn('Failed to patch fetch:', e2);
                  }
                }

                // 2. Resolve ResizeObserver loop error
                try {
                  if (window.ResizeObserver) {
                    var OriginalResizeObserver = window.ResizeObserver;
                    window.ResizeObserver = function PatchedResizeObserver(callback) {
                      return new OriginalResizeObserver(function(entries, observer) {
                        window.requestAnimationFrame(function() {
                          try {
                            callback(entries, observer);
                          } catch (err) {}
                        });
                      });
                    };
                    window.ResizeObserver.prototype = OriginalResizeObserver.prototype;
                  }
                } catch (e3) {
                  console.warn('Failed to patch ResizeObserver:', e3);
                }

                // 3. Global listener to suppress remaining ResizeObserver events
                try {
                  window.addEventListener('error', function(e) {
                    var msg = e.message || '';
                    if (
                      msg.indexOf('ResizeObserver') > -1 ||
                      msg.indexOf('loop limit exceeded') > -1 ||
                      msg.indexOf('loop completed with undelivered notifications') > -1
                    ) {
                      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                      if (e.stopPropagation) e.stopPropagation();
                      if (e.preventDefault) e.preventDefault();
                    }
                  });
                } catch (e4) {}
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-brand-cream text-brand-text">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1549700693460062&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1549700693460062');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalClinic",
                  "@id": "https://shifayadav.com/#clinic",
                  "name": "Dr. Shifa Yadav Dermatology Clinic",
                  "url": "https://shifayadav.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778438049/IMG_7269_mmhoxq.png"
                  },
                  "image": "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778438049/IMG_7269_mmhoxq.png",
                  "telephone": "+91 9910195029",
                  "email": "drshifayadav@gmail.com",
                  "hasMap": "https://www.google.com/maps/place/Dr.+Shifa+Yadav+skin,+hair,+nail+specialist/@28.4793142,77.0608412,17z/data=!3m1!4b1!4m6!3m5!1s0x390d196376f502f1:0xa961d3479a2d03ba!8m2!3d28.4793142!4d77.0634161!16s%2Fg%2F11z63120hk",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "House No. 764, Sector 17A, Sector 17",
                    "addressLocality": "Gurugram",
                    "addressRegion": "Haryana",
                    "postalCode": "122001",
                    "addressCountry": "IN"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Friday"],
                      "opens": "16:00",
                      "closes": "19:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Sunday"],
                      "opens": "12:00",
                      "closes": "16:00"
                    }
                  ],
                  "medicalSpecialty": "Dermatology",
                  "sameAs": [
                    "https://www.instagram.com/dermshifayadav/"
                  ],
                  "employee": {
                    "@id": "https://shifayadav.com/#physician"
                  }
                },
                {
                  "@type": "Physician",
                  "@id": "https://shifayadav.com/#physician",
                  "name": "Dr. Shifa Yadav",
                  "url": "https://shifayadav.com",
                  "image": "https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778066868/photo_2026-05-06_16-57-32_rogfdm.jpg",
                  "telephone": "+91 9910195029",
                  "email": "drshifayadav@gmail.com",
                  "worksFor": {
                    "@id": "https://shifayadav.com/#clinic"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "House No. 764, Sector 17A, Sector 17",
                    "addressLocality": "Gurugram",
                    "addressRegion": "Haryana",
                    "postalCode": "122001",
                    "addressCountry": "IN"
                  },
                  "medicalSpecialty": [
                    "Dermatology",
                    "Cosmetology"
                  ],
                  "knowsAbout": [
                    "Dermatology",
                    "Cosmetology",
                    "Skin Specialist",
                    "Hair Specialist",
                    "Laser Specialist"
                  ],
                  "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Mahatma Gandhi Medical College, Jaipur"
                  },
                  "qualification": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "degree",
                      "name": "MBBS"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "degree",
                      "name": "MD Dermatology"
                    }
                  ],
                  "memberOf": [
                    {
                      "@type": "Organization",
                      "name": "IADVL"
                    },
                    {
                      "@type": "Organization",
                      "name": "PDS"
                    },
                    {
                      "@type": "Organization",
                      "name": "ACSI"
                    }
                  ],
                  "affiliation": [
                    {
                      "@type": "Organization",
                      "name": "Kaya Clinic"
                    },
                    {
                      "@type": "Organization",
                      "name": "Artemis Hospital"
                    }
                  ],
                  "sameAs": [
                    "https://www.instagram.com/dermshifayadav/"
                  ]
                }
              ]
            })
          }}
        />
        <ResizeObserverFix />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
