export type Titulo = {
  id: string;
  titulo: string;
  tipo: "Série" | "Filme" | "Anime" | "Novela";
  nota: number;
  ano: number;
  genero: string;
  sinopse: string;
  cor: string;
};

export const catalogo: Titulo[] = [
  {
    id: "1",
    titulo: "O Mentalista",
    tipo: "Série",
    nota: 8.2,
    ano: 2008,
    genero: "Suspense",
    sinopse:
      "Um consultor com olhar afiado para detalhes ajuda a polícia a resolver crimes usando observação e truques de mentalismo.",
    cor: "#2F6FB5",
  },
  {
    id: "2",
    titulo: "Atraídos pelo Destino",
    tipo: "Filme",
    nota: 8.5,
    ano: 2026,
    genero: "Romance",
    sinopse:
      "Dois desconhecidos se cruzam em Nova York e descobrem que o acaso pode ter planos maiores para os dois.",
    cor: "#5A4A3A",
  },
  {
    id: "3",
    titulo: "O Último Nascer do Sol",
    tipo: "Filme",
    nota: 8.3,
    ano: 2026,
    genero: "Romance",
    sinopse:
      "Um verão à beira-mar reúne um casal que tenta viver intensamente antes de cada um seguir o seu caminho.",
    cor: "#1E88A8",
  },
  {
    id: "4",
    titulo: "Noite Sem Fim",
    tipo: "Série",
    nota: 7.9,
    ano: 2025,
    genero: "Terror",
    sinopse:
      "Em uma cidade onde o sol deixou de aparecer, moradores precisam sobreviver até o amanhecer que ninguém sabe se virá.",
    cor: "#4B1D52",
  },
  {
    id: "5",
    titulo: "Ninja do Vento",
    tipo: "Anime",
    nota: 8.7,
    ano: 2024,
    genero: "Ação",
    sinopse:
      "Um jovem aprendiz de ninja treina para proteger sua vila e descobre um poder escondido no próprio nome.",
    cor: "#D9622B",
  },
  {
    id: "6",
    titulo: "Risadas no Escritório",
    tipo: "Série",
    nota: 7.4,
    ano: 2023,
    genero: "Comédia",
    sinopse:
      "A rotina caótica de uma equipe de escritório rende situações absurdas e amizades inesperadas.",
    cor: "#3E8E5A",
  },
  {
    id: "7",
    titulo: "Estrela Cadente",
    tipo: "Anime",
    nota: 8.1,
    ano: 2025,
    genero: "Ficção",
    sinopse:
      "Uma estudante encontra um fragmento de estrela e passa a viver aventuras entre a Terra e o espaço.",
    cor: "#3B3FA8",
  },
  {
    id: "8",
    titulo: "Terra das Promessas",
    tipo: "Novela",
    nota: 7.6,
    ano: 2024,
    genero: "Drama",
    sinopse:
      "Duas famílias disputam terras no interior enquanto um romance proibido coloca tudo em risco.",
    cor: "#A63D40",
  },
  {
    id: "9",
    titulo: "Código Vermelho",
    tipo: "Filme",
    nota: 7.8,
    ano: 2022,
    genero: "Ação",
    sinopse:
      "Uma agente precisa desarmar uma ameaça global em menos de vinte e quatro horas.",
    cor: "#8C1C1C",
  },
];