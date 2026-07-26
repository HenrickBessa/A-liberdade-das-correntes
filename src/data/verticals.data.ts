import { ebook } from "@/data/ebook.data";
import type { VerticalItem, VerticalContent } from "@/types/vertical.types";

function placeholderItems(prefix: string, count: number, labelFn: (n: number) => string): VerticalItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: labelFn(i + 1),
    excerpt: "[Conteúdo a ser preenchido]",
    order: i + 1,
  }));
}

/** Conteúdo skeleton das verticais além do ebook principal. */
export const verticalsContent: Record<string, VerticalContent> = {
  workbook: {
    slug: "workbook",
    name: "Workbook",
    description: "Exercícios práticos para aplicar cada capítulo do livro.",
    items: ebook.parts.flatMap((part) =>
      part.chapters.map((ch, i) => ({
        id: `wb-${ch.id}`,
        title: `Exercício: ${ch.title}`,
        excerpt: `Atividades práticas da Parte ${part.number}, capítulo ${i + 1}.`,
        order: 0,
      })),
    ),
  },
  diario: {
    slug: "diario",
    name: "Diário de Libertação (30 dias)",
    description: "Plano de leitura e escrita diária para sustentar a transformação.",
    items: placeholderItems("dia", 30, (n) => `Dia ${n}`),
  },
  audiobook: {
    slug: "audiobook",
    name: "Audiobook",
    description: "O livro narrado, capítulo a capítulo.",
    items: getAllChapterItems(),
  },
  curso: {
    slug: "curso",
    name: "Curso em vídeo",
    description: "Aprofundamento em vídeo-aulas por parte do livro.",
    items: ebook.parts.map((part) => ({
      id: `aula-${part.id}`,
      title: `Módulo ${part.number}: ${part.title}`,
      excerpt: part.purpose,
      order: parseInt(part.number.replace(/\D/g, ""), 10) || 0,
    })),
  },
  comunidade: {
    slug: "comunidade",
    name: "Comunidade",
    description: "Espaço para compartilhar progresso com outras pessoas.",
    items: placeholderItems("topico", 5, (n) => `Tópico da semana ${n}`),
  },
  devocionais: {
    slug: "devocionais",
    name: "Devocionais",
    description: "Conteúdo espiritual complementar de apoio diário.",
    items: placeholderItems("devocional", 7, (n) => `Devocional ${n}`),
  },
  serie: {
    slug: "serie",
    name: "Série de livros",
    description: "Próximos títulos na mesma jornada editorial.",
    items: [
      { id: "livro-1", title: "A Liberdade das Correntes", excerpt: "Livro principal — disponível.", order: 1 },
      { id: "livro-2", title: "[Próximo título]", excerpt: "Em planejamento.", order: 2 },
    ],
  },
};

function getAllChapterItems(): VerticalItem[] {
  let order = 0;
  return ebook.parts.flatMap((part) =>
    part.chapters.map((ch) => ({
      id: `audio-${ch.id}`,
      title: ch.title,
      excerpt: `Parte ${part.number} — ${part.title}`,
      order: ++order,
    })),
  );
}

export function getVerticalContent(slug: string): VerticalContent | undefined {
  return verticalsContent[slug];
}

export function getVerticalItem(slug: string, itemId: string) {
  const vertical = getVerticalContent(slug);
  if (!vertical) return undefined;
  const items = vertical.items;
  const index = items.findIndex((i) => i.id === itemId);
  if (index === -1) return undefined;
  return {
    vertical,
    item: items[index],
    prev: items[index - 1] ?? null,
    next: items[index + 1] ?? null,
    index,
    total: items.length,
  };
}
