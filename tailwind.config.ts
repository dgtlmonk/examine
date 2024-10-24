import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      lora: 'var(--font-lora)',
    },
    extend: {
      colors: {
        primary: '#5e3b76',
        examine: {
          purple: {
            600: 'rgb(86 46 105)',
            500: 'rgb(95 59 118)',
            medium: 'rgb(130 101 149)',
          },
        },
      },
      width: {
        18: '72px',
        25: '100px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
