import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-marcellus)', 'serif'],
        marcellus: ['var(--font-marcellus)', 'serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      // Decorative loops run as CSS (compositor) instead of JS every frame
      keyframes: {
        "float-up": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        "float-down": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(14px)" } },
        "dot-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "ring-pulse": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.3)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.96)" },
        },
      },
      animation: {
        "float-up": "float-up 4s ease-in-out infinite",
        "float-down": "float-down 5s ease-in-out infinite",
        "dot-pulse": "dot-pulse 2s ease-in-out infinite",
        "ring-pulse": "ring-pulse 1.5s ease-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "slide-in-right": "slideInRight 0.8s ease-out 200ms both",
      },
      colors: {
        brand: {
          navy: '#0F172A',
          orange: '#E88720',
          'orange-dark': '#d17619',
        },
        orange: {
          50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
          400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
          800: '#9a3412', 900: '#7c2d12',
        },
      },
    },
  },
  plugins: [typography],
};

export default config;