import { SectionTitle } from "@/components/ui/SectionTitle";
import { ebook } from "@/data/ebook.data";

export function Testimonials() {
  if (ebook.testimonials.length === 0) return null;

  return (
    <section className="px-6 py-24 bg-brand-surface">
      <div className="max-w-content mx-auto">
        <SectionTitle eyebrow="Quem já leu" title="Histórias de leitores" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ebook.testimonials.map((t) => (
            <blockquote key={t.id} className="rounded-xl border border-white/10 p-6">
              <p className="text-brand-ink leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-brand-muted">
                {t.name}
                {t.role ? `, ${t.role}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
