import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ebook } from "@/data/ebook.data";
import { paths } from "@/lib/routing/paths";

const statusLabel: Record<string, string> = {
  disponivel: "Disponível",
  "em-breve": "Em breve",
  planejado: "Planejado",
};

// O livro como primeiro produto de um ecossistema maior
// (workbook, diário, audiobook, curso, comunidade...).
export function Ecosystem() {
  return (
    <section id="ecossistema" className="px-6 py-24">
      <div className="max-w-content mx-auto">
        <SectionTitle
          eyebrow="Além do livro"
          title="Um ecossistema de transformação"
          description="A Liberdade das Correntes é o primeiro passo de uma jornada mais ampla."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ebook.ecosystem.map((item) => {
            const verticalPath =
              item.id === "livro"
                ? paths.ebook.index()
                : paths.vertical.index(item.id);

            return (
            <Link
              key={item.id}
              to={verticalPath}
              className="rounded-xl border border-white/10 p-5 bg-brand-surface hover:border-brand-accent/30 transition-colors group block"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base text-brand-ink group-hover:text-brand-accent transition-colors">{item.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wide text-brand-muted">
                  {statusLabel[item.status]}
                </span>
              </div>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {item.description}
              </p>
            </Link>
          );
          })}
        </div>
      </div>
    </section>
  );
}
