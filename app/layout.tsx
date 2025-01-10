import { inter, lora } from '@/theme/default/fonts';
import '@/theme/default/globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Examine',
  description:
    'Generated by create next appExamine simplifies nutrition and supplementation — through meticulous analysis of the latest scientific research — to help answer your questions on how to be healthier.',
};

export const viewport: Viewport = {
  userScalable: true,
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="/inp.js" strategy="afterInteractive" />
      <body className={`${lora.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
