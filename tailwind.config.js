/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the WACWAU logo artwork
        pink: {
          50: '#FDF3F8', 100: '#FBE5F0', 200: '#F7C8DF', 300: '#EF9FC6',
          400: '#E066A4', 500: '#C62F7C', 600: '#AC2168', 700: '#8B1852',
          800: '#6B1240', 900: '#490C2B',
        },
        sky: {
          50: '#EFFAFE', 100: '#D6F2FC', 200: '#A9E5F8', 300: '#6FD3F2',
          400: '#29BAE8', 500: '#00A0D5', 600: '#0083B0', 700: '#0A6A8D',
          800: '#0F5472', 900: '#123F56',
        },
        ink: '#16110F',
        coal: '#231B18',
        paper: '#FCF8F5',
        sand: '#F3EBE4',
        clay: '#6E605A',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        quote: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        lift: '0 24px 60px -28px rgba(22, 17, 15, 0.35)',
        card: '0 2px 0 0 rgba(22,17,15,0.06), 0 18px 40px -30px rgba(22,17,15,0.45)',
        pinkGlow: '0 20px 50px -20px rgba(198, 47, 124, 0.55)',
        skyGlow: '0 20px 50px -20px rgba(0, 160, 213, 0.5)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeBack: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.04)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        sunspin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        marqueeSlow: 'marquee 70s linear infinite',
        marqueeBack: 'marqueeBack 52s linear infinite',
        drift: 'drift 9s ease-in-out infinite',
        breathe: 'breathe 7s ease-in-out infinite',
        sunspin: 'sunspin 46s linear infinite',
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
