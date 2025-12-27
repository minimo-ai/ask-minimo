import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#fff7f5",
          100: "#fdecea",
          200: "#f8d6d2",
          300: "#f2beb8",
          600: "#c26a62"
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7d0c7",
          300: "#a3b2a3",
          400: "#7d917d",
          500: "#627562",
          600: "#4d5d4d",
          700: "#404c40",
          800: "#363f36",
          900: "#2f352f",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf3e8",
          300: "#f5e9d5",
          400: "#eddcbe",
          500: "#e4cda5",
        },
        coral: {
          50: "#fef5f3",
          100: "#fee8e4",
          200: "#fdd5cd",
          300: "#fbb8aa",
          400: "#f79078",
          500: "#ed6b4e",
        },
        blush: {
          50: "#fdf7f7",
          100: "#fcefef",
          200: "#f9e0e0",
        },
        ink: {
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#1f2937"
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.06)",
        softer: "0 8px 30px -4px rgba(0, 0, 0, 0.08)",
        glow: "0 0 40px -10px rgba(98, 117, 98, 0.3)",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: []
} satisfies Config;
