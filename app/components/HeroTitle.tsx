'use client';

import { useEffect, useRef } from 'react';

export default function HeroTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const offset = Math.min(y * 0.18, 60);
        const scale = Math.max(1 - y / 6000, 0.96);
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <h1 className="hero-title" ref={ref}>
      {children}
    </h1>
  );
}
