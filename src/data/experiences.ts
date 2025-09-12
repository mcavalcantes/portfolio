import { MONTHS } from "../lib/months";

export const EXPERIENCES: {
  startDate: Date;
  endDate: Date;
  title: string;
  subtitle: string;
  bullets: string[];
}[] = [
  {
    startDate: new Date(2024, MONTHS.MAY),
    endDate: new Date(2025, MONTHS.APRIL),
    title: "OCCAM Engenharia",
    subtitle: "Assessor de Marketing",
    bullets: [
      "Administrei e gerenciei as contas de redes sociais da OCCAM Engenharia no Instagram e LinkedIn.",
      "Designei e criei publicações, reels e stories para redes sociais sobre nossa área de atuação e o que fazíamos.",
      "Como trainee, liderei um time de seis em um projeto front-end de website empresarial, durante 6 meses.",
    ],
  },
  {
    startDate: new Date(2023, MONTHS.SEPTEMBER),
    endDate: new Date(2024, MONTHS.JULY),
    title: "UTFPR",
    subtitle: "Monitor de Cálculo I",
    bullets: [
      "Atendi de forma presencial e remota os alunos da universidade para resolução de dúvidas na disciplina.",
      "Revisei e corrigi diversos materiais didáticos usados por professores (apostilas, listas e gabaritos).",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];
