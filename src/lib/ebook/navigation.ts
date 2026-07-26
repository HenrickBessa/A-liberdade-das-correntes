import { ebook } from "@/data/ebook.data";
import type { BookPart, Chapter } from "@/types/ebook.types";

export interface FlatChapter {
  chapter: Chapter;
  part: BookPart;
  index: number; // 0-based global
  total: number;
}

/** Lista linear de todos os capítulos na ordem do livro. */
export function getAllChapters(): FlatChapter[] {
  const flat: FlatChapter[] = [];
  let index = 0;

  for (const part of ebook.parts) {
    for (const chapter of part.chapters) {
      flat.push({ chapter, part, index, total: 0 });
      index++;
    }
  }

  return flat.map((item) => ({ ...item, total: flat.length }));
}

export function findChapter(chapterId: string): FlatChapter | undefined {
  return getAllChapters().find((c) => c.chapter.id === chapterId);
}

export function findPart(partId: string): BookPart | undefined {
  return ebook.parts.find((p) => p.id === partId);
}

export function getAdjacentChapters(chapterId: string): {
  prev: FlatChapter | null;
  current: FlatChapter;
  next: FlatChapter | null;
} | null {
  const all = getAllChapters();
  const idx = all.findIndex((c) => c.chapter.id === chapterId);
  if (idx === -1) return null;

  return {
    prev: all[idx - 1] ?? null,
    current: all[idx],
    next: all[idx + 1] ?? null,
  };
}
