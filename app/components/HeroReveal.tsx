'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  fromLeft?: boolean;
};

export default function HeroReveal({
  children,
  delay = 0,
  className = '',
  fromLeft = false,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const transformOrigin = fromLeft ? 'translateX(-100vw)' : 'translateY(20px)';
  
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0, 0)' : transformOrigin,
    transition: mounted
      ? `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
      : 'none',
    willChange: visible ? 'auto' : 'opacity, transform',
  };

  return (
    <span ref={ref as any} className={className} style={style}>
      {children}
    </span>
  );
}
