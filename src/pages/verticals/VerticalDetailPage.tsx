import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getVerticalItem } from "@/data/verticals.data";
import { VerticalNav } from "@/components/navigation/VerticalNav";

/** Página paginada de item de vertical — rota `/vertical/:verticalSlug/:itemId` */
export default function VerticalDetailPage() {
  const { verticalSlug, itemId } = useParams<{
    verticalSlug: string;
    itemId: string;
  }>();

  const result =
    verticalSlug && itemId ? getVerticalItem(verticalSlug, itemId) : undefined;

  if (!result) {
    return <Navigate to={verticalSlug ? `/vertical/${verticalSlug}` : "/"} replace />;
  }

  const { vertical, item, prev, next, index, total } = result;

  return (
    <>
      <Helmet>
        <title>
          {item.title} — {vertical.name}
        </title>
      </Helmet>

      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
            {vertical.name}
          </p>

          <h1 className="mt-4 font-display text-3xl md:text-4xl text-brand-ink leading-tight">
            {item.title}
          </h1>

          {item.excerpt && (
            <p className="mt-4 text-lg text-brand-muted">{item.excerpt}</p>
          )}

          <div className="mt-10 space-y-4 text-brand-muted leading-relaxed">
            <p>[Conteúdo a ser preenchido]</p>
            <p>
              Skeleton da página de conteúdo da vertical. Substituir por mídia,
              exercícios, player de áudio ou vídeo conforme o produto.
            </p>
          </div>

          <VerticalNav
            slug={vertical.slug}
            prev={prev}
            next={next}
            index={index}
            total={total}
          />
        </div>
      </article>
    </>
  );
}
