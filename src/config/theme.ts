// Tema visual — a única coisa que muda entre produtos além de ebook.data.ts.
// Troque aqui para "lançar" a landing page de um novo ebook.

export interface ThemeConfig {
  colors: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
  };
  fonts: {
    display: string; // título / headlines
    body: string; // texto corrido
    mono: string; // eyebrows, labels, dados
  };
  logoText: string;
  motionIntensity: "quiet" | "standard" | "expressive";
}

// Tema padrão: "A Liberdade das Correntes"
// preto/cinza/dourado, correntes se rompendo, luz atravessando uma abertura.
export const theme: ThemeConfig = {
  colors: {
    bg: "#0E0D0C",
    surface: "#171513",
    ink: "#F3EFE6",
    muted: "#9A9388",
    accent: "#C9A227", // dourado
    accent2: "#5C6660", // cinza esverdeado, para contraste sóbrio
  },
  fonts: {
    display: "'Fraunces', 'Georgia', serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  logoText: "A Liberdade das Correntes",
  motionIntensity: "standard",
};
