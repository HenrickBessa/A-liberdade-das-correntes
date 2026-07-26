# A Liberdade das Correntes — Landing Page + Esqueleto do Livro

Template whitelabel (React + Vite + TypeScript + Tailwind + Framer Motion)
para a landing page de "A Liberdade das Correntes", construído para ser
reutilizado em futuros ebooks/produtos digitais.

## Estrutura do repositório

```
├── content/                     Conteúdo editorial (fora do código)
│   ├── ebook-outline.md         Esqueleto de escrita do livro, por capítulo
│   └── marca-briefing.md        Identidade visual e voz da marca
│
├── src/
│   ├── config/
│   │   ├── theme.ts              Cores, fontes, nome — TUDO que muda entre produtos
│   │   └── site.config.ts        SEO, link de checkout, redes sociais
│   ├── data/
│   │   └── ebook.data.ts         Conteúdo real: partes, capítulos, ecossistema, FAQ, CTA
│   ├── types/
│   │   └── ebook.types.ts        Contrato de dados que qualquer ebook deve seguir
│   ├── hooks/
│   │   └── useThemeVars.ts       Aplica theme.ts como CSS variables
│   ├── components/
│   │   ├── layout/                Header, Footer
│   │   ├── sections/               Hero, Journey, Chapters, Ecosystem, CTA, etc.
│   │   ├── ui/                     Button, SectionTitle (átomos reutilizáveis)
│   │   └── Seo.tsx                Meta tags via react-helmet-async
│   └── pages/
│       └── Landing.tsx            Composição da página (ordem das seções)
│
├── tailwind.config.ts            Lê cores/fontes de variáveis CSS (não hardcoded)
└── package.json
```

## Como rodar

```bash
npm install
npm run dev
```

## Como usar este template para um NOVO ebook

Você não precisa tocar em nenhum componente. Basta:

1. Duplicar `src/data/ebook.data.ts` → preencher com o novo conteúdo
   (título, partes/capítulos, ecossistema de produtos, FAQ, CTA).
2. Editar `src/config/theme.ts` → nova paleta de cores e fontes.
3. Editar `src/config/site.config.ts` → SEO e link de checkout.
4. `npm run build` → gera uma landing page nova, mesma base de código.

Isso é o "repositório whitelabel" mencionado no planejamento: uma única
base de componentes serve qualquer ebook, variando apenas configuração e dados.

## Próximos passos sugeridos

- [ ] Preencher `content/ebook-outline.md` capítulo a capítulo
- [ ] Substituir depoimentos/FAQ placeholder em `ebook.data.ts` por conteúdo real
- [ ] Definir link real de checkout em `site.config.ts`
- [ ] Adicionar imagens reais (capa, ícones, textura de correntes/luz) em `/public`
- [ ] Conectar `LeadMagnet.tsx` a um provedor de e-mail real
- [ ] Repetir o processo para o próximo produto da "Série de livros"
