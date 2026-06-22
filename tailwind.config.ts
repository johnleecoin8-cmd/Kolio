import type { Config } from 'tailwindcss';

/** Clean slate. Design system to be rebuilt from scratch. */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};

export default config;
