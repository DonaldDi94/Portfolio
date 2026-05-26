'use client';

import { useEffect, useState } from 'react';

export default function HeroTitle({ children, delay = 1400 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1 
      className="hero-title"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(80px)',
        transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </h1>
  );
}
