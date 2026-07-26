import { theme } from "@/config/theme";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
        <p>
          © {new Date().getFullYear()} {theme.logoText}. Todos os direitos reservados.
        </p>
        <a href={`mailto:contato@${siteConfig.url.replace(/^https?:\/\//, "")}`} className="hover:text-brand-accent">
          Contato
        </a>
      </div>
    </footer>
  );
}
