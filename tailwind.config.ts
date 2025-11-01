import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A7D44',
          dark: '#2d5f35',
          light: '#4a9d56',
        },
        accent: {
          DEFAULT: '#F4A259',
          dark: '#e8913a',
          light: '#f6b882',
        },
        background: {
          DEFAULT: '#FFFEF2',
        },
        highlight: {
          DEFAULT: '#7CB342',
          dark: '#689f38',
          light: '#8bc34a',
        },
        text: {
          DEFAULT: '#5D4E37',
          light: '#7d6b54',
          dark: '#3d3528',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        heading: ['Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1.125rem', { lineHeight: '1.65' }], // 18px body text
        lg: ['1.125rem', { lineHeight: '1.65' }],
        xl: ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }], // H3 mobile
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // H2 mobile
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // H1 mobile
        '5xl': ['2.625rem', { lineHeight: '1.3' }], // H2 desktop
        '6xl': ['3.5rem', { lineHeight: '1.2' }], // H1 desktop
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5D4E37',
            maxWidth: '65ch',
            '--tw-prose-headings': '#3A7D44',
            '--tw-prose-links': '#3A7D44',
            '--tw-prose-bold': '#5D4E37',
            '--tw-prose-code': '#3A7D44',
            '--tw-prose-pre-code': '#FFFEF2',
            '--tw-prose-pre-bg': '#3A7D44',
            '--tw-prose-quotes': '#5D4E37',
            '--tw-prose-quote-borders': '#F4A259',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config

