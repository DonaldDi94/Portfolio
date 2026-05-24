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
  title: 'GrossCV',
  description: 'Anatolii Bolshanin — Product Designer portfolio',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'GrossCV',
    description: 'Anatolii Bolshanin — Product Designer portfolio',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
