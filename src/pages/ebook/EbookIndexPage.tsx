import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ebook } from "@/data/ebook.data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { paths } from "@/lib/routing/paths";

/** Sumário completo do ebook — rota `/ebook` */
export default function EbookIndexPage() {
  return (
    <>
      <Helmet>
        <title>{ebook.title} — Leitura</title>
      </Helmet>

      <main className="px-6 pb-24">
        <div className="max-w-content mx-auto">
          <SectionTitle
            eyebrow="Leitura"
            title={ebook.title}
            description={ebook.subtitle}
          />

          <div className="mt-14 grid gap-10">
            {ebook.parts.map((part) => (
              <section key={part.id}>
                <Link
                  to={paths.ebook.part(part.id)}
                  className="group block rounded-2xl border border-white/10 bg-brand-surface p-6 hover:border-brand-accent/30 transition-colors"
                >
                  <span className="font-mono text-xs text-brand-accent">
                    Parte {part.number}
                  </span>
                  <h2 className="mt-2 font-display text-2xl text-brand-ink group-hover:text-brand-accent transition-colors">
                    {part.title}
                  </h2>
                  <p className="mt-2 text-sm text-brand-muted">{part.purpose}</p>
                </Link>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {part.chapters.map((chapter) => (
                    <li key={chapter.id}>
                      <Link
                        to={paths.ebook.chapter(chapter.id)}
                        className="block rounded-lg border border-white/5 px-4 py-3 text-sm text-brand-muted hover:text-brand-ink hover:border-white/15 transition-colors"
                      >
                        {chapter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
