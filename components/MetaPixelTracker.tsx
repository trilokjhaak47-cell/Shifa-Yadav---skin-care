'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

function MetaPixelTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString();
    const currentUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Prevent duplicate PageView events on the same URL
    if (lastTrackedUrl.current === currentUrl) {
      return;
    }
    lastTrackedUrl.current = currentUrl;

    const trackPageView = () => {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }
    };

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      trackPageView();
    } else if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        if (typeof window.fbq === 'function') {
          clearInterval(interval);
          trackPageView();
        }
      }, 50);
      const timeout = setTimeout(() => clearInterval(interval), 3000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixelTracker() {
  return (
    <Suspense fallback={null}>
      <MetaPixelTrackerInner />
    </Suspense>
  );
}
