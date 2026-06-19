import type { Config } from 'tailwindcss';

/* Tokens map to CSS variables in src/index.css so the whole site can be
   re-skinned by editing variables. Extracted 1:1 from modash.io. */
const hsl = (v: string) => `hsl(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: hsl('--background'),
        'background-soft': hsl('--background-soft'),
        'background-warm': hsl('--background-warm'),
        foreground: hsl('--foreground'),

        ink: hsl('--ink'),
        sand: { DEFAULT: hsl('--sand'), dark: hsl('--sand-dark') },

        pink: {
          DEFAULT: hsl('--pink'),
          hover: hsl('--pink-hover'),
          light: hsl('--pink-light'),
          bg: hsl('--pink-bg'),
          dark: hsl('--pink-dark'),
          hot: hsl('--pink-hot'),
        },
        lime: { DEFAULT: hsl('--lime') },
        purple: {
          DEFAULT: hsl('--purple'),
          light: hsl('--purple-light'),
          bg: hsl('--purple-bg'),
          dark: hsl('--purple-dark'),
        },
        violet: {
          DEFAULT: hsl('--violet'),
          light: hsl('--violet-light'),
          bg: hsl('--violet-bg'),
          dark: hsl('--violet-dark'),
        },
        coral: {
          DEFAULT: hsl('--coral'),
          hover: hsl('--coral-hover'),
          light: hsl('--coral-light'),
          bg: hsl('--coral-bg'),
          dark: hsl('--coral-dark'),
        },
        orange: {
          DEFAULT: hsl('--orange'),
          light: hsl('--orange-light'),
          bg: hsl('--orange-bg'),
          dark: hsl('--orange-dark'),
          vivid: hsl('--orange-vivid'),
        },
        blue: {
          DEFAULT: hsl('--blue'),
          dark: hsl('--blue-dark'),
        },
        navy: hsl('--navy'),
        gray: {
          50: hsl('--gray-50'),
          100: hsl('--gray-100'),
          200: hsl('--gray-200'),
          300: hsl('--gray-300'),
          400: hsl('--gray-400'),
          500: hsl('--gray-500'),
          600: hsl('--gray-600'),
          700: hsl('--gray-700'),
          900: hsl('--gray-900'),
        },
        positive: hsl('--positive'),
        negative: hsl('--negative'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Mosans', 'Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // modash type scale (clamped where the site uses fluid sizing)
        eyebrow: ['0.75rem', { lineHeight: '1.2', fontWeight: '600' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        body: ['1rem', { lineHeight: '1.5' }],
        'body-md': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.5rem', { lineHeight: '1.4' }],
        h4: ['2rem', { lineHeight: '1.15' }],
        h3: ['2.5rem', { lineHeight: '1.1' }],
        h2: ['4rem', { lineHeight: '1.05' }],
        h1: ['5.5rem', { lineHeight: '1.0' }],
        display: ['9rem', { lineHeight: '0.95' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      maxWidth: {
        container: 'var(--container)',
      },
      boxShadow: {
        nav: '0 2px 3px #0000000a, 0 0 0 1px #0000001a',
        btn: '0 1px 2px #1018280d',
      },
    },
  },
  plugins: [],
};

export default config;
