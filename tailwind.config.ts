import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        accent: { DEFAULT: "#3db86a", hover: "#34a35d", dark: "#217a42" },
        glass: {
          light: "rgba(255,255,255,0.65)",
          "light-strong": "rgba(255,255,255,0.8)",
          dark: "rgba(255,255,255,0.06)",
          "dark-strong": "rgba(255,255,255,0.1)",
        },
      },
      borderRadius: {
        glass: "24px",
        "glass-sm": "16px",
        "glass-lg": "32px",
      },
      backdropBlur: {
        glass: "20px",
        "glass-heavy": "40px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.08)",
        "glass-lg": "0 16px 48px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.1)",
        "glass-dark": "0 8px 32px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.06)",
        "glass-dark-lg": "0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)",
      },
      maxWidth: {
        site: "1200px",
      },
      animation: {
        "mesh-shift": "meshShift 20s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        meshShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
