import { ReactNode } from 'react';

type Props = {
  top: ReactNode;
  bottom: ReactNode;
  className?: string;
  trigger?: 'self' | 'parent';
};

export default function RiseSwap({ top, bottom, className, trigger = 'parent' }: Props) {
  const cls = ['rise-swap', `rise-swap--trigger-${trigger}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls}>
      <span className="rise-swap__inner">
        <span className="rise-swap__row rise-swap__row--top">{top}</span>
        <span className="rise-swap__row rise-swap__row--bottom" aria-hidden>
          {bottom}
        </span>
      </span>
    </span>
  );
}
