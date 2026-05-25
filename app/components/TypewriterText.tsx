'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  cursorWidth?: number;
  cursorHeight?: number;
  fontSize?: number;
  className?: string;
};

export default function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 140,
  pauseDuration = 1000,
  cursorColor = '#fff',
  cursorWidth = 2,
  cursorHeight = 100,
  fontSize = 14,
  className,
}: Props) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = words.length > 0 ? words[wordIdx % words.length] : '';

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    if (!deleting && charIdx < current.length) {
      timer.current = setTimeout(() => {
        setText(current.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx === current.length) {
      timer.current = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && charIdx > 0) {
      timer.current = setTimeout(() => {
        setText(current.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, deletingSpeed);
    } else if (deleting && charIdx === 0) {
      timer.current = setTimeout(() => {
        setDeleting(false);
        setWordIdx((wordIdx + 1) % words.length);
      }, pauseDuration);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [charIdx, deleting, current, wordIdx, words.length, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={className}
      aria-live="polite"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'pre',
        fontSize,
        lineHeight: 1.2,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        fontFamily: '"Inter", "Inter Placeholder", sans-serif',
        color: '#fff',
        minHeight: `${fontSize * 1.2}px`,
        height: `${fontSize * 1.2}px`,
      }}
    >
      {text}
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          background: cursorColor,
          width: cursorWidth,
          height: (cursorHeight / 100) * fontSize,
          marginLeft: 2,
          marginRight: 2,
          verticalAlign: 'bottom',
          opacity: blink ? 1 : 0,
          transition: 'opacity 0.1s',
          borderRadius: 2,
        }}
      />
    </span>
  );
}
