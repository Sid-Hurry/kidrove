/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b82f6',
          teal: '#14b8a6',
          yellow: '#f59e0b',
          orange: '#f97316',
          pink: '#ec4899',
          purple: '#8b5cf6',
          green: '#22c55e',
          bg: '#f0f4f8'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'neumorph-flat': '8px 8px 16px rgba(163, 177, 198, 0.35), -8px -8px 16px rgba(255, 255, 255, 0.85)',
        'neumorph-flat-hover': '12px 12px 20px rgba(163, 177, 198, 0.45), -12px -12px 20px rgba(255, 255, 255, 0.95)',
        'neumorph-pressed': 'inset 4px 4px 8px rgba(163, 177, 198, 0.35), inset -4px -4px 8px rgba(255, 255, 255, 0.85)',
        'neumorph-sm': '4px 4px 8px rgba(163, 177, 198, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.8)',
        'neumorph-sm-hover': '6px 6px 12px rgba(163, 177, 198, 0.35), -6px -6px 12px rgba(255, 255, 255, 0.9)',
        'neumorph-nav': '6px 6px 16px rgba(163, 177, 198, 0.2), -6px -6px 16px rgba(255, 255, 255, 0.8)'
      }
    },
  },
  plugins: [],
}
