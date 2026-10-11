import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B171A", jade: "#122B30", teal: "#28636A", ocean: "#8CB8C7",
        ivory: "#F5F3ED", muted: "#A7B8B7", seafoam: "#A8D8CC", mist: "#8CB8C7", edge: "#334B4E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
