import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00E5FF',
          sky: '#38BDF8',
          blue: '#0284C7',
          sapphire: '#1D4ED8',
          midnight: '#0B192C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
