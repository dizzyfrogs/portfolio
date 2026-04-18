import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#f0ece4",
          dark: "#14120f",
        },
        surface: {
          DEFAULT: "#ffffff",
          secondary: "#f8f5f0",
          dark: "#1e1b17",
          "dark-secondary": "#1a1714",
        },
        border: {
          DEFAULT: "#e4ddd4",
          hover: "#d8d0c6",
          dark: "#2a2520",
          "dark-hover": "#3e3a34",
        },
        text: {
          primary: "#1a1814",
          secondary: "#4a4238",
          muted: "#8a8070",
          hint: "#b0a898",
          "dark-primary": "#ede8e0",
          "dark-secondary": "#c8c2b8",
          "dark-muted": "#8a8278",
          "dark-hint": "#5a5248",
        },
        accent: {
          DEFAULT: "#7c6fff",
          surface: "#ede9ff",
          "dark-surface": "#1a1f3a",
        },
        hero: "#0e0c09",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.05)",
      },
      backdropBlur: {
        nav: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
