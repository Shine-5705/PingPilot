/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          25: '#fffaf0',
          50: '#fff4e6',
          100: '#ffe8cc',
          200: '#ffd199',
          300: '#ffba66',
          400: '#ffa333',
          500: '#ff8800',
          600: '#e67a00',
          700: '#cc6600',
          800: '#b35f00',
          900: '#804400',
        },
        mustard: {
          100: '#fff3c1',
          500: '#f9a825',
        },
        'blue-light': {
          100: '#e0f2fe',
          500: '#0ba5ec',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 220ms ease-out',
        fadeInUp: 'fadeInUp 320ms ease-out',
        softPulse: 'softPulse 6s ease-in-out infinite',
        rotateSlow: 'rotateSlow 28s linear infinite',
        'rotate-slow': 'rotateSlow 28s linear infinite',
      },
    },
  },
  plugins: [],
}

