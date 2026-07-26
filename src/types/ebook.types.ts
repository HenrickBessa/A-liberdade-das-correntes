// Tipagem central do template.
// Qualquer ebook novo só precisa preencher um objeto deste tipo
// (ver src/data/ebook.data.ts) — os componentes nunca mudam.

export interface Chapter {
  id: string;
  title: string;
  teaser?: string;
  reflectionPrompt?: string; // "Qual corrente esta história despertou em você?"
}

export interface BookPart {
  id: string;
  number: string; // "I", "II"... só usar numeração se a ordem for real (ver frontend-design)
  title: string;
  purpose: string; // objetivo emocional da parte
  chapters: Chapter[];
}

export interface EcosystemItem {
  id: string;
  name: string;
  description: string;
  status: "disponivel" | "em-breve" | "planejado";
  icon?: string; // nome do ícone lucide-react
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EbookProduct {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  prologueTitle: string;
  prologueExcerpt: string;
  epilogueExcerpt: string;
  parts: BookPart[];
  ecosystem: EcosystemItem[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  cta: {
    headline: string;
    supportingText: string;
    buttonLabel: string;
    priceLabel?: string;
  };
  leadMagnet?: {
    headline: string;
    description: string;
    buttonLabel: string;
  };
}
