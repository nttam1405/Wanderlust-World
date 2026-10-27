/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a4f8',
          500: '#0e87ea',
          600: '#026bc7',
          700: '#0355a1',
          800: '#083863',
          900: '#0b1e36',
          950: '#06101e',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5efe6',
          200: '#ebdccb',
          300: '#dfc4a9',
          400: '#cca582',
          500: '#b88a62',
          600: '#9f6f4d',
          700: '#7c543c',
          800: '#644433',
          900: '#52382c',
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe8e5',
          200: '#ffd3cb',
          300: '#ffb0a0',
          400: '#ff7e66',
          500: '#ff5a3c',
          600: '#ed3e1e',
          700: '#c72e12',
          800: '#a32813',
          900: '#872717',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 30, 54, 0.12)',
        'glass-card': '0 12px 40px -10px rgba(11, 30, 54, 0.15)',
        'glow': '0 0 25px -5px rgba(255, 90, 60, 0.4)',
        'glow-ocean': '0 0 25px -5px rgba(14, 135, 234, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
