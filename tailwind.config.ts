import type { Config } from "tailwindcss";

/**
 * Minimo brand palette.
 *
 * Sister to Mo (moaihq.com). Same anchors so they read as one family:
 *   bone, navy, sage. Plus a softer cream + blush layer that gives Minimo
 *   the warmth of the front door without breaking the brand.
 *
 * Display: Cormorant Garamond.  Body: Manrope.  Locked April 2026.
 */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Anchors, shared with Mo.
        bone: {
          DEFAULT: "#F5F1EA",
          soft: "#EFE9DE",
          paper: "#FBF8F2",
        },
        navy: {
          DEFAULT: "#1B2A3A",
          soft: "#2A3D52",
          deep: "#0F1A26",
        },
        sage: {
          50: "#F2F4F0",
          100: "#E4E8E1",          // sage-tint
          200: "#C8D0C5",
          300: "#A9B6A6",          // sage-soft
          400: "#8FA08C",          // sage
          500: "#6E7F6B",          // sage-deep, primary brand sage
          600: "#5C6B59",
          700: "#4A5847",
          800: "#3D4A3B",
          900: "#2E3A2D",
        },
        stone: {
          DEFAULT: "#C7BFB1",
          soft: "#DCD5C7",
        },
        // Warm secondary, Minimo's softer voice.
        cream: {
          50: "#FBF8F2",
          100: "#F5EDD9",
          200: "#EFE3C5",
          300: "#E4D2A8",
          400: "#D4BD8A",
        },
        blush: {
          50: "#FAF1EC",
          100: "#F0DDD2",
          200: "#E5C7B8",
        },
        // Back-compat aliases so existing pages keep building during the brand
        // sweep. coral and warm now map onto the warmer sister-tones (blush + cream).
        // To be removed once every page is migrated to bone/navy/sage explicitly.
        coral: {
          50: "#FAF1EC",
          100: "#F5E5DC",
          200: "#EBD2C2",
          300: "#DFB9A4",
          400: "#C99A82",
          500: "#B07A60",
        },
        warm: {
          50: "#FBF8F2",
          100: "#F5EDD9",
          200: "#EFE3C5",
          300: "#E4D2A8",
          600: "#A38A5A",
        },
        ink: {
          400: "#7A7670",          // text-quiet
          500: "#5C5852",
          600: "#4A4744",          // text-soft
          700: "#2F2D2B",
          800: "#1F1D1B",          // text
          900: "#0F0E0D",
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // Back-compat aliases so any existing class references still resolve.
        playfair: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(27, 42, 58, 0.06)",
        softer: "0 8px 30px -4px rgba(27, 42, 58, 0.08)",
        glow: "0 0 40px -10px rgba(110, 127, 107, 0.3)",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'none': 'none',
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
