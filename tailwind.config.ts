import type { Config } from "tailwindcss";

// As cores/fontes reais vêm de variáveis CSS (ver src/config/theme.ts +
// src/styles/theme.css), assim o mesmo build serve qualquer produto —
// só trocando as variáveis, sem rebuild do Tailwind config.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          ink: "var(--color-ink)",
          muted: "var(--color-muted)",
          accent: "var(--color-accent)",
          "accent-2": "var(--color-accent-2)",
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
