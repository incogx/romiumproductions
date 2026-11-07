/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stage: {
          950: '#030305',
          900: '#07070a',
          850: '#0c0d12',
          800: '#12131a',
          750: '#181922',
          700: '#20222e',
          600: '#2d3040',
        },
        gold: {
          50: '#faf6e9',
          100: '#f3eac8',
          200: '#e8d695',
          300: '#dcbe5f',
          400: '#d0a736',
          500: '#c29221',
          600: '#a67219',
          700: '#845017',
          metallic: '#dfb76c',
          bright: '#f7d77b',
          glow: 'rgba(223, 183, 108, 0.45)',
        },
        silver: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          metallic: '#cfd4dc',
          burnished: '#9aa0a8',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-gold': 'linear-gradient(135deg, #f7d77b 0%, #dfb76c 40%, #b8860b 70%, #f7d77b 100%)',
        'metallic-silver': 'linear-gradient(135deg, #ffffff 0%, #d8dde6 50%, #9aa0a8 100%)',
        'dark-vignette': 'radial-gradient(circle at center, rgba(12,13,18,0) 0%, rgba(3,3,5,0.95) 100%)',
      },
      animation: {
        'beam-sweep': 'beamSweep 8s ease-in-out infinite alternate',
        'spotlight': 'spotlight 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        beamSweep: {
          '0%': { transform: 'rotate(-25deg) scaleY(1)', opacity: '0.3' },
          '50%': { transform: 'rotate(0deg) scaleY(1.15)', opacity: '0.6' },
          '100%': { transform: 'rotate(25deg) scaleY(1)', opacity: '0.3' },
        },
        spotlight: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
