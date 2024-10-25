import { Inter, Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-lora',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export { inter, lora };
