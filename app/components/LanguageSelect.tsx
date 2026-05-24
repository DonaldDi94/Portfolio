'use client';

import { useState } from 'react';

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<'RU' | 'EN'>('RU');

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        className="lang-select"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg className="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
        <span>{value}</span>
        <span className="caret" />
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(100% + 8px)',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,.12)',
            padding: 6,
            minWidth: 90,
            zIndex: 10,
          }}
        >
          {(['RU', 'EN'] as const).map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={value === lang}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: 8,
                  background: value === lang ? '#f1f1f0' : 'transparent',
                  fontSize: 14,
                  fontWeight: 500,
                }}
                onClick={() => {
                  setValue(lang);
                  setOpen(false);
                }}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
