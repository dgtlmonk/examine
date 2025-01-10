'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onLCP } from 'web-vitals/attribution';

export default function WebVitals() {
  useEffect(() => {
    onCLS(console.log);
    onINP(console.log);
    onLCP(console.log);
  }, []);

  return null;
}
