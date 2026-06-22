import type { Config } from 'tailwindcss';

const hsl = (v: string) => `hsl(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: hsl('--canvas'),
        'canvas-2': hsl('--canvas-2'),
        paper: hsl('--paper'),
        ink: { DEFAULT: hsl('--ink'), soft: hsl('--ink-soft') },
        panel: { DEFAULT: hsl('--panel'), 2: hsl('--panel-2') },
        hairline: { DEFAULT: hsl('--hairline'), dark: hsl('--hairline-dark') },
        'on-dark': hsl('--on-dark'),
        brand: { DEFAULT: hsl('--brand'), 2: hsl('--brand-2'), ink: hsl('--brand-ink') },
        mint: hsl('--mint'),
      },
      fontFamily: {
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
        display: ['"General Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.8125rem', { lineHeight: '1.2' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.55' }],
        h5: ['1.375rem', { lineHeight: '1.25' }],
        h4: ['1.75rem', { lineHeight: '1.2' }],
        h3: ['2.5rem', { lineHeight: '1.08' }],
        h2: ['3.5rem', { lineHeight: '1.02' }],
        h1: ['4.5rem', { lineHeight: '0.98' }],
        display: ['6rem', { lineHeight: '0.95' }],
      },
      borderRadius: {
        sm: 'var(--r-sm)',
        DEFAULT: 'var(--r)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
        '2xl': 'var(--r-2xl)',
        pill: 'var(--r-pill)',
      },
      maxWidth: { container: 'var(--container)' },
    },
  },
  plugins: [],
};

export default config;
