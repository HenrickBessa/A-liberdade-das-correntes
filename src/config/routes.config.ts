// Mapa de verticais → subdomínios → paths.
// Um único build serve todos os subdomínios; o hostname define a vertical padrão.

export type VerticalId =
  | "landing"
  | "ebook"
  | "workbook"
  | "diario"
  | "audiobook"
  | "curso"
  | "comunidade"
  | "devocionais"
  | "serie";

export interface VerticalConfig {
  id: VerticalId;
  label: string;
  /** Prefixos de subdomínio (ex: "leitura" → leitura.aliberdadedascorrentes.com.br) */
  subdomains: string[];
  /** Rota canônica no domínio principal */
  basePath: string;
  /** ID correspondente em ebook.ecosystem */
  ecosystemId?: string;
}

export const apexDomain = "aliberdadedascorrentes.com.br";

export const verticals: Record<VerticalId, VerticalConfig> = {
  landing: {
    id: "landing",
    label: "Site principal",
    subdomains: ["www", ""],
    basePath: "/",
  },
  ebook: {
    id: "ebook",
    label: "Leitura",
    subdomains: ["leitura", "ebook"],
    basePath: "/ebook",
    ecosystemId: "livro",
  },
  workbook: {
    id: "workbook",
    label: "Workbook",
    subdomains: ["workbook"],
    basePath: "/vertical/workbook",
    ecosystemId: "workbook",
  },
  diario: {
    id: "diario",
    label: "Diário de Libertação",
    subdomains: ["diario"],
    basePath: "/vertical/diario",
    ecosystemId: "diario",
  },
  audiobook: {
    id: "audiobook",
    label: "Audiobook",
    subdomains: ["audio", "audiobook"],
    basePath: "/vertical/audiobook",
    ecosystemId: "audiobook",
  },
  curso: {
    id: "curso",
    label: "Curso",
    subdomains: ["curso"],
    basePath: "/vertical/curso",
    ecosystemId: "curso",
  },
  comunidade: {
    id: "comunidade",
    label: "Comunidade",
    subdomains: ["comunidade"],
    basePath: "/vertical/comunidade",
    ecosystemId: "comunidade",
  },
  devocionais: {
    id: "devocionais",
    label: "Devocionais",
    subdomains: ["devocionais"],
    basePath: "/vertical/devocionais",
    ecosystemId: "devocionais",
  },
  serie: {
    id: "serie",
    label: "Série de livros",
    subdomains: ["serie"],
    basePath: "/vertical/serie",
    ecosystemId: "serie",
  },
};

/** Lista plana para lookup por subdomínio */
export const verticalList = Object.values(verticals);

export function getVerticalBySubdomain(subdomain: string): VerticalConfig {
  return (
    verticalList.find((v) => v.subdomains.includes(subdomain)) ?? verticals.landing
  );
}

export function getVerticalBySlug(slug: string): VerticalConfig | undefined {
  return verticalList.find((v) => v.id === slug || v.ecosystemId === slug);
}
