import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#151f26",
        accent: "#2563eb",
        "accent-dark": "#1d4ed8",
        muted: "#64748b",
        surface: "#f8fafc",
      },
      fontFamily: {
        sans: ["NB International Pro", "system-ui", "sans-serif"],
        mono: ["NB International Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
