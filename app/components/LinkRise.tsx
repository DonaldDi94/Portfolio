import { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'dark' | 'accent';
};

export default function LinkRise({ children, className, variant = 'dark', ...rest }: Props) {
  const cls = ['link-rise', `link-rise--${variant}`, className].filter(Boolean).join(' ');
  return (
    <a {...rest} className={cls}>
      <span className="link-rise__inner">
        <span className="link-rise__row link-rise__row--1">{children}</span>
        <span className="link-rise__row link-rise__row--2" aria-hidden>{children}</span>
      </span>
    </a>
  );
}
