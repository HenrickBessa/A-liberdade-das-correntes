import { Button } from "@/components/ui/Button";
import { ebook } from "@/data/ebook.data";
import { siteConfig } from "@/config/site.config";

export function CTA() {
  return (
    <section id="checkout" className="px-6 py-28 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-brand-ink leading-tight">
          {ebook.cta.headline}
        </h2>
        <p className="mt-4 text-brand-muted">{ebook.cta.supportingText}</p>
        {ebook.cta.priceLabel && (
          <p className="mt-6 font-mono text-2xl text-brand-accent">{ebook.cta.priceLabel}</p>
        )}
        <div className="mt-8">
          <Button href={siteConfig.checkoutUrl}>{ebook.cta.buttonLabel}</Button>
        </div>
      </div>
    </section>
  );
}
