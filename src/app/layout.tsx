import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components';
import styles from '@/CustomStyles';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Decentralized Web',
  description: 'A decentralized web application (Assessment)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-primary', inter.className)}>
        <Providers>
          <main>
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
