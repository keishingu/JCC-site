import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jcc: {
          ink:    '#0a1628',
          navy:   '#16263f',
          navy2:  '#1d2f4a',
          slate:  '#3d5070',
          steel:  '#6a7d97',
          mist:   '#a6b6c8',
          ice:    '#c9d6e2',
          bone:   '#e9e7e0',
          paper:  '#f3f1ea',
          cream:  '#f7f5ee',
        },
      },
      fontFamily: {
        serif:    ['"Shippori Mincho B1"', '"Noto Serif JP"', '"Cormorant Garamond"', 'serif'],
        en:       ['"Cormorant Garamond"', '"Shippori Mincho B1"', 'serif'],
        sans:     ['"Noto Sans JP"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.22em',
        widest3: '.32em',
      },
    },
  },
  plugins: [],
}

export default config
