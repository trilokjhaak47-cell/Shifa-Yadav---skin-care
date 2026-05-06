'use client';

import { useEffect } from 'react';

/**
 * Suppresses the "ResizeObserver loop completed with undelivered notifications" error.
 * This error is often benign and caused by third-party widgets (like Elfsight)
 * that trigger re-layouts within a single frame.
 */
export default function ResizeObserverFix() {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      const msg = e.message || '';
      if (
        msg.includes('ResizeObserver loop limit exceeded') ||
        msg.includes('ResizeObserver loop completed with undelivered notifications')
      ) {
        // Stop the error from being shown in the console (or at least prevent it from crashing/triggering overlays)
        e.stopImmediatePropagation?.();
        e.stopPropagation?.();
        e.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
      const msg = e.reason?.message || '';
      if (
        msg.includes('ResizeObserver loop limit exceeded') ||
        msg.includes('ResizeObserver loop completed with undelivered notifications')
      ) {
        e.stopImmediatePropagation?.();
        e.stopPropagation?.();
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return null;
}
