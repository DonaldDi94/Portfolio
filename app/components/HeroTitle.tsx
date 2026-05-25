'use client';

export default function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="hero-title">
      {children}
    </h1>
  );
}
