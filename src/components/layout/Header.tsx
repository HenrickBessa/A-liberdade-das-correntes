import { Link } from "react-router-dom";
import { theme } from "@/config/theme";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";
import { paths } from "@/lib/routing/paths";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-brand-bg/80 border-b border-white/5">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <Link to={paths.home()} className="font-display text-lg text-brand-ink hover:text-brand-accent transition-colors">
          {theme.logoText}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-brand-muted">
          <Link to={paths.ebook.index()} className="hover:text-brand-accent transition-colors">
            Leitura
          </Link>
          <a href="/#ecossistema" className="hover:text-brand-accent transition-colors">
            Ecossistema
          </a>
        </nav>

        <Button href={siteConfig.checkoutUrl} variant="ghost">
          Comprar
        </Button>
      </div>
    </header>
  );
}
