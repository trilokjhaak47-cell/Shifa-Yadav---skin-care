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
  title: 'Dr. Shifa Yadav | Dermatology Clinic',
  description: 'Expert dermatology treatments for acne, pigmentation, hair fall, and more — guided by Dr. Shifa Yadav.',
  icons: {
    icon: 'https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778442924/Untitled_design_7_zwzer1.png',
  },
  openGraph: {
    title: 'Dr. Shifa Yadav | Dermatology Clinic',
    description: 'Expert dermatology treatments for acne, pigmentation, hair fall, and more — guided by Dr. Shifa Yadav.',
    images: ['https://res.cloudinary.com/dvfhhtrlw/image/upload/v1778443391/Untitled_design_8_oienft.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Shifa Yadav | Dermatology Clinic',
    description: 'Expert dermatology treatments for acne, pigmentation, hair fall, and more — guided by Dr. Shifa Yadav.',
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
        <ResizeObserverFix />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
