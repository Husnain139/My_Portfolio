import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--ink)",
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
        muted: {
          DEFAULT: "var(--surface-2)",
          foreground: "var(--ink-muted)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "oklch(0.98 0.000 0)",
        },
        border: "oklch(0.60 0.195 280 / 0.15)",
        input: "var(--surface-2)",
        ring: "var(--primary)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "fade-up": "fade-up 0.6s ease both",
        shimmer: "shimmer 4s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
