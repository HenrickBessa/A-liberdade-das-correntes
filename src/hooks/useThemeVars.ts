import { useEffect } from "react";
import { theme } from "@/config/theme";

// Aplica o ThemeConfig ativo como CSS variables no :root.
// Trocar o produto/tema (src/config/theme.ts) é o suficiente —
// nenhum componente precisa saber que o tema mudou.
export function useThemeVars() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-bg", theme.colors.bg);
    root.style.setProperty("--color-surface", theme.colors.surface);
    root.style.setProperty("--color-ink", theme.colors.ink);
    root.style.setProperty("--color-muted", theme.colors.muted);
    root.style.setProperty("--color-accent", theme.colors.accent);
    root.style.setProperty("--color-accent-2", theme.colors.accent2);
    root.style.setProperty("--font-display", theme.fonts.display);
    root.style.setProperty("--font-body", theme.fonts.body);
    root.style.setProperty("--font-mono", theme.fonts.mono);
  }, []);
}
