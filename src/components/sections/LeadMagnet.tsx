import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ebook } from "@/data/ebook.data";

// Captura de e-mail para o capítulo grátis. onSubmit é isolado para
// ser plugado depois na plataforma real (ex: ESP, CRM, webhook).
export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!ebook.leadMagnet) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: conectar a um provedor de e-mail / endpoint real.
    setSubmitted(true);
  }

  return (
    <section className="px-6 py-24 bg-brand-surface">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl text-brand-ink">
          {ebook.leadMagnet.headline}
        </h2>
        <p className="mt-3 text-brand-muted">{ebook.leadMagnet.description}</p>

        {submitted ? (
          <p className="mt-6 text-brand-accent">Capítulo enviado! Confira seu e-mail.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="rounded-full bg-brand-bg border border-white/10 px-5 py-3 text-sm text-brand-ink placeholder:text-brand-muted focus:outline-none focus:border-brand-accent"
            />
            <Button onClick={() => {}}>{ebook.leadMagnet.buttonLabel}</Button>
          </form>
        )}
      </div>
    </section>
  );
}
