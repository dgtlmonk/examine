import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5e3b76',
        examine: {
          purple: {
            600: 'rgb(86 46 105)',
          },
        },
      },
      width: {
        '18': '72px',
      },
    },
  },
  plugins: [],
};
export default config;
