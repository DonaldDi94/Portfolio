'use client';

import { useEffect, useRef, useState } from 'react';
import type { Testimonial } from '../data';

type Props = { items: Testimonial[] };

export default function TestimonialsCarousel({ items }: Props) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 960 ? 1 : 2);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(page, totalPages - 1);

  const goTo = (i: number) => setPage(Math.max(0, Math.min(totalPages - 1, i)));

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let startX = 0;
    let active = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      startX = e.clientX;
      active = true;
    };
    const onUp = (e: PointerEvent) => {
      if (!active) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 60) goTo(safePage + (dx < 0 ? 1 : -1));
      active = false;
    };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', () => (active = false));
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
    };
  }, [safePage, totalPages]);

  return (
    <div className="testi-viewport" ref={viewportRef}>
      <div
        className="testi-track"
        style={{
          transform: `translate3d(-${safePage * 100}%, 0, 0)`,
        }}
      >
        {Array.from({ length: totalPages }).map((_, pageIdx) => {
          const start = pageIdx * perPage;
          const slice = items.slice(start, start + perPage);
          return (
            <div
              className="testi-page"
              key={pageIdx}
              style={{ gridTemplateColumns: `repeat(${perPage}, 1fr)` }}
            >
              {slice.map((t, i) => (
                <article
                  className="testi-card"
                  key={`${pageIdx}-${i}`}
                  data-color={(pageIdx * perPage + i) % 2}
                >
                  <div className="testi-quote-mark">«</div>
                  <p className="testi-text">{t.quote}</p>
                  <div className="testi-author">
                    <div className="testi-author-info">
                      <div className="testi-avatar">
                        <img src={t.avatar} alt={t.name} draggable={false} />
                      </div>
                      <div>
                        <div className="testi-name">{t.name}</div>
                        <div className="testi-role">{t.role}</div>
                      </div>
                    </div>
                    {t.companyLogo && (
                      <div className="testi-company-logo">
                        <img src={t.companyLogo} alt="" draggable={false} />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          );
        })}
      </div>

      <div className="testi-dots" role="tablist" aria-label="Testimonials">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`testi-dot ${i === safePage ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Scroll to page ${i + 1}`}
            aria-selected={i === safePage}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
