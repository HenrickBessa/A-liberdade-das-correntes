import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { findPart } from "@/lib/ebook/navigation";
import { paths } from "@/lib/routing/paths";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Visão de uma parte — rota `/ebook/parte/:partId` */
export default function PartPage() {
  const { partId } = useParams<{ partId: string }>();
  const part = partId ? findPart(partId) : undefined;

  if (!part) return <Navigate to="/ebook" replace />;

  return (
    <>
      <Helmet>
        <title>
          Parte {part.number} — {part.title}
        </title>
      </Helmet>

      <main className="px-6 pb-24">
        <div className="max-w-content mx-auto">
          <SectionTitle
            eyebrow={`Parte ${part.number}`}
            title={part.title}
            description={part.purpose}
          />

          <ol className="mt-12 space-y-3">
            {part.chapters.map((chapter, i) => (
              <li key={chapter.id}>
                <Link
                  to={paths.ebook.chapter(chapter.id)}
                  className="flex items-baseline gap-4 rounded-xl border border-white/10 p-5 hover:border-brand-accent/30 transition-colors group"
                >
                  <span className="font-mono text-xs text-brand-accent shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-brand-ink group-hover:text-brand-accent transition-colors">
                      {chapter.title}
                    </p>
                    {chapter.teaser && (
                      <p className="mt-1 text-sm text-brand-muted">{chapter.teaser}</p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          {part.chapters[0] && (
            <div className="mt-10">
              <Link
                to={paths.ebook.chapter(part.chapters[0].id)}
                className="font-mono text-sm text-brand-accent hover:underline"
              >
                Começar pela Parte {part.number} →
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
