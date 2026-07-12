import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C10",
        surface: "#12151B",
        "surface-2": "#1A1E26",
        border: "#242933",

        text: "#EDEFF2",
        muted: "#8A93A3",
        faint: "#565F6F",

        purple: "#A855F7",
        "purple-dim": "#4C2172",

        teal: "#46D9C4",
      },

      borderRadius: {
        DEFAULT: "10px",
      },

      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },

      maxWidth: {
        content: "1180px",
      },

      backdropBlur: {
        nav: "14px",
      },

      backgroundImage: {
        "faint-grid":
          "linear-gradient(to right, rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.025) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
