import { ebook } from "@/data/ebook.data";

export function Prologue() {
  return (
    <section className="px-6 py-20 bg-brand-surface">
      <blockquote className="max-w-2xl mx-auto text-center font-display text-2xl md:text-3xl leading-relaxed text-brand-ink">
        “{ebook.prologueExcerpt}”
      </blockquote>
    </section>
  );
}
