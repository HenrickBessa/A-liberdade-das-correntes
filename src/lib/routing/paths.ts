// Builders de URL — única fonte de verdade para links internos.

export const paths = {
  home: () => "/",

  ebook: {
    index: () => "/ebook",
    part: (partId: string) => `/ebook/parte/${partId}`,
    chapter: (chapterId: string) => `/ebook/capitulo/${chapterId}`,
  },

  vertical: {
    index: (slug: string) => `/vertical/${slug}`,
    item: (slug: string, itemId: string) => `/vertical/${slug}/${itemId}`,
  },
} as const;
