/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B10',
        surface: {
          DEFAULT: '#0F131C',
          muted: '#141A26',
          card: '#111722',
          border: '#1E2638',
          hover: '#192233',
        },
        luma: {
          blue: '#38BDF8',
          blueDim: '#0284C7',
          violet: '#6366F1',
          accent: '#22D3EE',
        },
        muted: {
          light: '#CBD5E1',
          DEFAULT: '#94A3B8',
          dark: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(56, 189, 248, 0.12)',
        'glow-md': '0 0 30px rgba(56, 189, 248, 0.18)',
        'glow-lg': '0 0 60px rgba(56, 189, 248, 0.22)',
        'glow-violet': '0 0 30px rgba(99, 102, 241, 0.18)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
