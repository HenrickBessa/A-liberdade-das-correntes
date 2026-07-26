import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ebook } from "@/data/ebook.data";
import { paths } from "@/lib/routing/paths";

// Mostra as 4 partes do livro como uma progressão emocional real
// (descobrir → entender → encontrar a chave → permanecer livre) —
// aqui a numeração I/II/III/IV é legítima porque é uma sequência de verdade.
export function Journey() {
  return (
    <section id="jornada" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <SectionTitle
          eyebrow="A jornada"
          title="Quatro etapas, uma libertação"
          description="Cada parte do livro corresponde a um estágio real da transformação."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {ebook.parts.map((part) => (
            <Link
              key={part.id}
              to={paths.ebook.part(part.id)}
              className="rounded-2xl border border-white/10 bg-brand-surface p-6 flex flex-col hover:border-brand-accent/30 transition-colors group"
            >
              <span className="font-mono text-xs text-brand-accent">{part.number}</span>
              <h3 className="mt-3 font-display text-xl text-brand-ink group-hover:text-brand-accent transition-colors">{part.title}</h3>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">{part.purpose}</p>
              <p className="mt-4 text-xs text-brand-muted">
                {part.chapters.length} capítulos
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
