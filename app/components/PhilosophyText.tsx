'use client';

import { useEffect, useRef, useState } from 'react';

export type Piece = {
  text: string;
  emphasis?: boolean;
};

type Props = { pieces: Piece[] };

export default function PhilosophyText({ pieces }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  type Tok = { token: string; emphasis?: boolean; isSpace?: boolean };
  const flat: Tok[] = [];
  pieces.forEach((p, i) => {
    const parts = p.text.split(/(\s+)/).filter((t) => t !== '');
    parts.forEach((t) => {
      if (/^\s+$/.test(t)) flat.push({ token: ' ', isSpace: true });
      else flat.push({ token: t, emphasis: p.emphasis });
    });
    if (i < pieces.length - 1) flat.push({ token: ' ', isSpace: true });
  });

  let visibleIdx = 0;
  return (
    <h2 className={'philosophy-quote ' + (shown ? 'is-shown' : '')} ref={ref}>
      {flat.map((it, i) => {
        if (it.isSpace) return <span key={i}>{'\u00A0'}</span>;
        const delay = visibleIdx * 60;
        visibleIdx += 1;
        return (
          <span
            key={i}
            className={'philosophy-word ' + (it.emphasis ? 'is-em' : 'is-muted')}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {it.token}
          </span>
        );
      })}
    </h2>
  );
}
