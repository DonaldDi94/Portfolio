import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-onest',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ivan Link Portfolio',
  description: 'Ivan Link — Product Designer portfolio',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Ivan Link Portfolio',
    description: 'Ivan Link — Product Designer portfolio',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={onest.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
