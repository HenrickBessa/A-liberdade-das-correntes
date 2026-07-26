import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ebook } from "@/data/ebook.data";
import { getVerticalContent } from "@/data/verticals.data";
import { paths } from "@/lib/routing/paths";
import { findChapter, findPart } from "@/lib/ebook/navigation";

interface Crumb {
  label: string;
  to?: string;
}

function buildCrumbs(pathname: string): Crumb[] {
  const crumbs: Crumb[] = [{ label: "Início", to: paths.home() }];

  if (pathname.startsWith("/ebook")) {
    crumbs.push({ label: ebook.title, to: paths.ebook.index() });

    const partMatch = pathname.match(/\/ebook\/parte\/([^/]+)/);
    if (partMatch) {
      const part = findPart(partMatch[1]);
      if (part) crumbs.push({ label: `Parte ${part.number}` });
    }

    const chapterMatch = pathname.match(/\/ebook\/capitulo\/([^/]+)/);
    if (chapterMatch) {
      const flat = findChapter(chapterMatch[1]);
      if (flat) {
        crumbs.push({
          label: `Parte ${flat.part.number}`,
          to: paths.ebook.part(flat.part.id),
        });
        crumbs.push({ label: flat.chapter.title });
      }
    }
    return crumbs;
  }

  const verticalMatch = pathname.match(/^\/vertical\/([^/]+)/);
  if (verticalMatch) {
    const vertical = getVerticalContent(verticalMatch[1]);
    if (vertical) {
      crumbs.push({ label: vertical.name, to: paths.vertical.index(vertical.slug) });

      const itemMatch = pathname.match(/^\/vertical\/[^/]+\/([^/]+)/);
      if (itemMatch) {
        const item = vertical.items.find((i) => i.id === itemMatch[1]);
        if (item) crumbs.push({ label: item.title });
      }
    }
  }

  return crumbs;
}

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const crumbs = buildCrumbs(pathname);

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-brand-muted">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {crumb.to && i < crumbs.length - 1 ? (
              <Link to={crumb.to} className="hover:text-brand-accent transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className={i === crumbs.length - 1 ? "text-brand-ink" : undefined}>
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
