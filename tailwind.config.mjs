/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
          DEFAULT: '#0c4a6e',
          dark: '#082f49',
          light: '#38bdf8',
        },
        background: {
          light: '#f8fafc',
          DEFAULT: '#f1f5f9',
          dark: '#e2e8f0',
        },
        text: {
          DEFAULT: '#1e293b',
          light: '#475569',
          dark: '#0f172a',
        },
        surface: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
