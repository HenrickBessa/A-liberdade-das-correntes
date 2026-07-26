import { Link } from "react-router-dom";
import type { VerticalItem } from "@/types/vertical.types";
import { paths } from "@/lib/routing/paths";

interface VerticalNavProps {
  slug: string;
  prev: VerticalItem | null;
  next: VerticalItem | null;
  index: number;
  total: number;
}

export function VerticalNav({ slug, prev, next, index, total }: VerticalNavProps) {
  return (
    <nav
      aria-label="Navegação"
      className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
    >
      <div className="flex-1">
        {prev ? (
          <Link
            to={paths.vertical.item(slug, prev.id)}
            className="group block rounded-xl border border-white/10 p-4 hover:border-brand-accent/40 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-brand-muted">
              ← Anterior
            </span>
            <p className="mt-1 text-sm text-brand-ink group-hover:text-brand-accent transition-colors">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <p className="font-mono text-xs text-brand-muted text-center shrink-0">
        {index + 1} / {total}
      </p>

      <div className="flex-1">
        {next ? (
          <Link
            to={paths.vertical.item(slug, next.id)}
            className="group block rounded-xl border border-white/10 p-4 hover:border-brand-accent/40 transition-colors text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-brand-muted">
              Próximo →
            </span>
            <p className="mt-1 text-sm text-brand-ink group-hover:text-brand-accent transition-colors">
              {next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
