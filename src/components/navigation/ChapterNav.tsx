import { Link } from "react-router-dom";
import { paths } from "@/lib/routing/paths";
import type { FlatChapter } from "@/lib/ebook/navigation";

interface ChapterNavProps {
  prev: FlatChapter | null;
  next: FlatChapter | null;
  current: FlatChapter;
}

export function ChapterNav({ prev, next, current }: ChapterNavProps) {
  return (
    <nav
      aria-label="Navegação entre capítulos"
      className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
    >
      <div className="flex-1">
        {prev ? (
          <Link
            to={paths.ebook.chapter(prev.chapter.id)}
            className="group block rounded-xl border border-white/10 p-4 hover:border-brand-accent/40 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-brand-muted">
              ← Capítulo anterior
            </span>
            <p className="mt-1 text-sm text-brand-ink group-hover:text-brand-accent transition-colors">
              {prev.chapter.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <p className="font-mono text-xs text-brand-muted text-center shrink-0">
        {current.index + 1} / {current.total}
      </p>

      <div className="flex-1">
        {next ? (
          <Link
            to={paths.ebook.chapter(next.chapter.id)}
            className="group block rounded-xl border border-white/10 p-4 hover:border-brand-accent/40 transition-colors text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-brand-muted">
              Próximo capítulo →
            </span>
            <p className="mt-1 text-sm text-brand-ink group-hover:text-brand-accent transition-colors">
              {next.chapter.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
