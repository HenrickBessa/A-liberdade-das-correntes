import type { EbookProduct } from "@/types/ebook.types";


export const ebook: EbookProduct = {
  slug: "a-liberdade-das-correntes",
  title: "A Liberdade das Correntes",
  subtitle:
    "Uma jornada emocional através do medo, da culpa, da ansiedade e dos vícios — até a liberdade.",
  author: "[Nome do autor]",
  prologueTitle: "Quando as correntes não fazem barulho",
  prologueExcerpt:
    "Nem todas as prisões possuem muros. Algumas são construídas por lembranças. Outras por palavras. Algumas por pessoas. E as mais perigosas são aquelas que aprendemos a chamar de 'normal'.",
  epilogueExcerpt:
    "Se você chegou até aqui, talvez as correntes ainda não tenham desaparecido completamente. Mas agora você sabe onde elas estão. Você conhece a chave. E nunca mais poderá dizer que nasceu para viver preso.",

  parts: [
    {
      id: "parte-1",
      number: "I",
      title: "As Correntes Invisíveis",
      purpose: "O leitor perceber que possui correntes que nem sabia existir.",
      chapters: [
        { id: "cap-1", title: "O peso que ninguém vê" },
        { id: "cap-2", title: "A prisão chamada normalidade" },
        { id: "cap-3", title: "Como aprendemos a viver acorrentados" },
      ],
    },
    {
      id: "parte-2",
      number: "II",
      title: "Como as Correntes São Forjadas",
      purpose: "Aprofundar a origem emocional de cada corrente.",
      chapters: [
        { id: "cap-4", title: "Feridas da infância", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-5", title: "O poder das palavras", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-6", title: "Rejeição", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-7", title: "Vergonha", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-8", title: "Culpa", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-9", title: "Traumas", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-10", title: "Pecado", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-11", title: "Orgulho", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-12", title: "Dependência emocional", reflectionPrompt: "Qual corrente esta história despertou em você?" },
        { id: "cap-13", title: "Ansiedade", reflectionPrompt: "Qual corrente esta história despertou em você?" },
      ],
    },
    {
      id: "parte-3",
      number: "III",
      title: "A Chave da Liberdade",
      purpose: "Introduzir esperança e exercícios práticos de transformação.",
      chapters: [
        { id: "cap-14", title: "Perdão" },
        { id: "cap-15", title: "Arrependimento" },
        { id: "cap-16", title: "Graça" },
        { id: "cap-17", title: "Renovação da mente" },
        { id: "cap-18", title: "Identidade" },
        { id: "cap-19", title: "Fé" },
        { id: "cap-20", title: "Espírito Santo" },
        { id: "cap-21", title: "Novos hábitos" },
      ],
    },
    {
      id: "parte-4",
      number: "IV",
      title: "Vivendo Livre",
      purpose: "Sustentar a liberdade e evitar novas correntes.",
      chapters: [
        { id: "cap-22", title: "Como lidar com recaídas" },
        { id: "cap-23", title: "Como vencer a culpa" },
        { id: "cap-24", title: "Como vencer a ansiedade diariamente" },
        { id: "cap-25", title: "Pessoas que fortalecem ou enfraquecem sua liberdade" },
        { id: "cap-26", title: "Construindo propósito" },
        { id: "cap-27", title: "A liberdade é uma decisão diária" },
      ],
    },
  ],

  ecosystem: [
    { id: "livro", name: "Livro principal", description: "O produto central: a jornada completa em 4 partes.", status: "disponivel", icon: "book-open" },
    { id: "workbook", name: "Workbook", description: "Exercícios práticos para aplicar cada capítulo.", status: "planejado", icon: "notebook-pen" },
    { id: "diario", name: "Diário de Libertação (30 dias)", description: "Plano de leitura e escrita diária.", status: "planejado", icon: "calendar-check" },
    { id: "audiobook", name: "Audiobook", description: "O livro narrado, para ouvir na rotina.", status: "planejado", icon: "headphones" },
    { id: "curso", name: "Curso em vídeo", description: "Aprofundamento em vídeo-aulas por parte do livro.", status: "planejado", icon: "play-circle" },
    { id: "comunidade", name: "Comunidade", description: "Espaço para compartilhar progresso com outras pessoas.", status: "planejado", icon: "users" },
    { id: "devocionais", name: "Devocionais", description: "Conteúdo espiritual complementar de apoio diário.", status: "planejado", icon: "sparkles" },
    { id: "serie", name: "Série de livros", description: "Próximos títulos na mesma jornada editorial.", status: "planejado", icon: "library" },
  ],

  testimonials: [
    // Preencher com depoimentos reais antes do lançamento.
    { id: "t1", name: "[Nome]", quote: "[Depoimento de um leitor beta sobre a transformação vivida com o livro]" },
  ],

  faq: [
    { id: "f1", question: "Para quem é este livro?", answer: "Para quem sente que carrega pesos como medo, culpa, ansiedade ou algum vício, e quer entender a origem disso e um caminho prático para a liberdade." },
    { id: "f2", question: "Em que formato recebo o livro?", answer: "[Descrever formatos disponíveis: PDF, ePub, impresso, etc.]" },
    { id: "f3", question: "Preciso ter alguma crença religiosa específica para ler?", answer: "[Definir posicionamento — o livro usa referências bíblicas com cuidado teológico.]" },
  ],

  cta: {
    headline: "Você já sabe onde estão suas correntes. Agora aprenda a viver livre.",
    supportingText: "Comece a jornada hoje.",
    buttonLabel: "Quero começar minha jornada",
    priceLabel: "R$ 29,90 (ou 3x de R$ 9,90)",
  },

  leadMagnet: {
    headline: "Receba o primeiro capítulo gratuitamente",
    description: "Descubra a primeira corrente invisível que talvez você nem saiba que carrega.",
    buttonLabel: "Quero o capítulo grátis",
  },
};
