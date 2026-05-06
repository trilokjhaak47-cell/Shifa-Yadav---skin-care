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
      if (
        e.message === 'ResizeObserver loop limit exceeded' ||
        e.message === 'ResizeObserver loop completed with undelivered notifications'
      ) {
        // Stop the error from being shown in the console (or at least prevent it from crashing/triggering overlays)
        const resizeObserverErrGuid = 'failing-resize-observer';
        if (e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        e.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return null;
}
