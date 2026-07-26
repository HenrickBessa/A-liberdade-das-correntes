# Briefing de Marca — A Liberdade das Correntes

## Identidade visual
- Paleta: preto, cinza, dourado (ver `src/config/theme.ts`)
- Símbolo recorrente: correntes se rompendo; luz atravessando uma pequena abertura
- Tipografia: display serifado elegante + corpo de texto limpo
- Espaço em branco generoso — transmitir paz e reflexão, não urgência de venda

## Voz narrativa
- Tom de quem "caminha ao lado" do leitor, não de quem ensina de cima
- Progressão emocional do livro: descobrir → entender → encontrar a chave → permanecer livre
- Evitar linguagem de autoajuda genérica; usar linguagem concreta e sensorial

## Ecossistema da marca (produtos)
1. Livro (produto principal)
2. Workbook com exercícios
3. Diário de Libertação (30 dias)
4. Audiobook
5. Curso em vídeo
6. Comunidade / área de membros
7. Devocionais
8. Série de livros (próximos títulos)

## Template whitelabel
Este projeto (`/src`) é a base reaproveitável para lançar landing pages de
outros ebooks/produtos digitais. Para lançar um novo título:
1. Duplicar `src/data/ebook.data.ts` com o novo conteúdo
2. Ajustar `src/config/theme.ts` (paleta, fontes, nome)
3. Ajustar `src/config/site.config.ts` (SEO, link de checkout)
4. Nenhum componente em `src/components` precisa mudar
