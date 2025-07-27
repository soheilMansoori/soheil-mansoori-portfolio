import type { Config } from 'tailwindcss';

export default {
 content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   fontFamily: {
    vazir: ['Vazirmatn', 'sans-serif'],
   },
   colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    whiteBg: '#e8e8e8',
    blackBg: '#08080f',
    purpl: 'rgb(103 61 181)',
   },
  },
 },
 plugins: [],
} satisfies Config;
