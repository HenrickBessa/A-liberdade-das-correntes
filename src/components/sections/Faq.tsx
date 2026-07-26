import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ebook } from "@/data/ebook.data";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  if (ebook.faq.length === 0) return null;

  return (
    <section id="faq" className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" align="center" />
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {ebook.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-brand-ink">{item.question}</span>
                  <span className="font-mono text-brand-accent">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <p className="pb-5 text-sm text-brand-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
