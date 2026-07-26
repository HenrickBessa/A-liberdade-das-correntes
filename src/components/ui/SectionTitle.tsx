interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-brand-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-brand-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
