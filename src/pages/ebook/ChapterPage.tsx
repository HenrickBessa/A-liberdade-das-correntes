import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAdjacentChapters } from "@/lib/ebook/navigation";
import { ChapterNav } from "@/components/navigation/ChapterNav";

/** Página de capítulo com paginação — rota `/ebook/capitulo/:chapterId` */
export default function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const nav = chapterId ? getAdjacentChapters(chapterId) : null;

  if (!nav) return <Navigate to="/ebook" replace />;

  const { current, prev, next } = nav;
  const { chapter, part } = current;

  return (
    <>
      <Helmet>
        <title>
          {chapter.title} — Parte {part.number}
        </title>
      </Helmet>

      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
            Parte {part.number} — {part.title}
          </p>

          <h1 className="mt-4 font-display text-3xl md:text-4xl text-brand-ink leading-tight">
            {chapter.title}
          </h1>

          {chapter.teaser && (
            <p className="mt-4 text-lg text-brand-muted italic">{chapter.teaser}</p>
          )}

          {/* Skeleton de conteúdo — substituir por MDX ou CMS depois */}
          <div className="mt-10 prose prose-invert max-w-none space-y-4 text-brand-muted leading-relaxed">
            <p>[Conteúdo do capítulo a ser preenchido]</p>
            <p>
              Este é um placeholder. O texto completo do capítulo será carregado aqui
              (MDX, CMS ou arquivo estático).
            </p>
          </div>

          {chapter.reflectionPrompt && (
            <aside className="mt-10 rounded-xl border border-brand-accent/20 bg-brand-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-brand-accent mb-2">
                Reflexão
              </p>
              <p className="text-brand-ink italic">{chapter.reflectionPrompt}</p>
            </aside>
          )}

          <ChapterNav prev={prev} next={next} current={current} />
        </div>
      </article>
    </>
  );
}
