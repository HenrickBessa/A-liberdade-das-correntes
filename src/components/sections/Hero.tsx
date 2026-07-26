import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ebook } from "@/data/ebook.data";
import { siteConfig } from "@/config/site.config";

// A hero é a tese do livro: o prólogo funciona melhor aqui do que
// um headline genérico de venda (ver frontend-design: "hero é a tese").
export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32 md:pt-36 md:pb-40">
      <div className="max-w-content mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent mb-6"
        >
          {ebook.prologueTitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl leading-tight text-brand-ink max-w-3xl mx-auto"
        >
          {ebook.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-brand-muted max-w-xl mx-auto"
        >
          {ebook.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button href={siteConfig.checkoutUrl}>{ebook.cta.buttonLabel}</Button>
        </motion.div>
      </div>

      {/* Elemento de assinatura visual: luz atravessando uma abertura.
          Trocar/mover para outro produto sem afetar o layout. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-accent)" }}
      />
    </section>
  );
}
