import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getVerticalContent } from "@/data/verticals.data";
import { paths } from "@/lib/routing/paths";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Índice de uma vertical — rota `/vertical/:verticalSlug` */
export default function VerticalIndexPage() {
  const { verticalSlug } = useParams<{ verticalSlug: string }>();
  const vertical = verticalSlug ? getVerticalContent(verticalSlug) : undefined;

  if (!vertical) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{vertical.name}</title>
      </Helmet>

      <main className="px-6 pb-24">
        <div className="max-w-content mx-auto">
          <SectionTitle
            eyebrow="Ecossistema"
            title={vertical.name}
            description={vertical.description}
          />

          <ol className="mt-12 space-y-3">
            {vertical.items.map((item, i) => (
              <li key={item.id}>
                <Link
                  to={paths.vertical.item(vertical.slug, item.id)}
                  className="flex items-baseline gap-4 rounded-xl border border-white/10 p-5 hover:border-brand-accent/30 transition-colors group"
                >
                  <span className="font-mono text-xs text-brand-accent shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-brand-ink group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </p>
                    {item.excerpt && (
                      <p className="mt-1 text-sm text-brand-muted">{item.excerpt}</p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          {vertical.items[0] && (
            <div className="mt-10">
              <Link
                to={paths.vertical.item(vertical.slug, vertical.items[0].id)}
                className="font-mono text-sm text-brand-accent hover:underline"
              >
                Começar →
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
