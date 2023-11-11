/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: {
      customTheme: {
        'primary': '#fb7185',
        'secondary': '#60a5fa',
        'accent': '#1dcdbc',
        'neutral': '#4b5563',
        'base-100': '#ffffff',     
        'info': '#38bdf8',
        'success': '#86efac',      
        'warning': '#fcd34d',     
        'error': '#fb7185',
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

