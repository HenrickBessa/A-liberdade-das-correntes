import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ebook } from "@/data/ebook.data";
import { paths } from "@/lib/routing/paths";

// Lista completa de capítulos, agrupada por parte, com acordeão simples.
// Reaproveitável para qualquer sumário de livro só trocando ebook.data.ts.
export function Chapters() {
  const [openPart, setOpenPart] = useState<string | null>(ebook.parts[0]?.id ?? null);

  return (
    <section id="capitulos" className="px-6 py-24 bg-brand-surface">
      <div className="max-w-content mx-auto">
        <SectionTitle eyebrow="Sumário" title="O que você vai encontrar no livro" />

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {ebook.parts.map((part) => {
            const isOpen = openPart === part.id;
            return (
              <div key={part.id}>
                <button
                  onClick={() => setOpenPart(isOpen ? null : part.id)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <Link
                    to={paths.ebook.part(part.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="font-display text-lg text-brand-ink group-hover:text-brand-accent transition-colors"
                  >
                    Parte {part.number} — {part.title}
                  </Link>
                  <span className="font-mono text-brand-accent">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <ul className="pb-6 grid gap-2 text-brand-muted text-sm">
                    {part.chapters.map((chapter) => (
                      <li key={chapter.id} className="pl-4 border-l border-white/10">
                        <Link
                          to={paths.ebook.chapter(chapter.id)}
                          className="hover:text-brand-accent transition-colors"
                        >
                          {chapter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
