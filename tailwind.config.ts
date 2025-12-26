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
        ink: {
          900: "#1f2937"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.06)"
      }
    }
  },
  plugins: []
} satisfies Config;
