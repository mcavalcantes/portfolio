import {
  Education,
  Experience,
  Project,
  Achievement,
  Social,
} from "../types/types.ts";

import { EmailIcon } from "../components/EmailIcon.tsx";
import { LinkedinIcon } from "../components/LinkedinIcon.tsx";
import { GithubIcon } from "../components/GithubIcon.tsx";
import { SpotifyIcon } from "../components/SpotifyIcon.tsx";

export const EDUCATIONS: Array<Education> = [
  {
    name: "UTFPR",
    startDate: "mar. 2023",
    endDate: undefined,
    subtitle: "Bacharelado em Engenharia de Computação",
  },
];

export const EXPERIENCES: Array<Experience> = [
  {
    name: "UTFPR",
    startDate: "out. 2024",
    endDate: undefined,
    subtitle: "Desenvolvedor Web",
    bullets: [
      "",
      "",
      "",
    ],
  },
  {
    name: "OCCAM Engenharia",
    startDate: "ago. 2024",
    endDate: undefined,
    subtitle: "Assessor de Marketing",
    bullets: [
      "Sou responsável por administrar as contas de redes sociais da OCCAM.",
      "Elaboro publicações pertinentes à nossa área de atuação e ao que fazemos.",
      "Procuro por eventos e oportunidades relevantes para divulgar entre os membros.",
    ],
  },
  {
    name: "OCCAM Engenharia",
    startDate: "mai. 2024",
    endDate: "ago. 2024",
    subtitle: "Trainee",
    bullets: [
      "Atuei semanalmente em cada um dos setores da empresa, cumprindo atividades pertinentes.",
      "Desenvolvi, juntamente a outros trainees, um projeto front-end de website empresarial.",
      "Contatei o cliente, coletei e documentei os requisitos, e programei o website.",
    ],
  },
  {
    name: "UTFPR",
    startDate: "set. 2023",
    endDate: "jul. 2024",
    subtitle: "Monitor de Cálculo I",
    bullets: [
      "Atendi de forma presencial e remota os alunos da universidade para resolução de dúvidas.",
      "Preparei e corrigi materiais didáticos usados por professores: apostilas, listas, e gabaritos.",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];

export const PROJECTS: Array<Project> = [
  {
    link: "https://mcavalcantes.github.io/derivadash/",
    name: "DerivaDash",
    description: "Aplicação web desenvolvida durante o período em que trabalhei como monitor de cálculo I. Serve como uma ferramenta de estudos voltada para estudantes de engenharia, visando reforçar o aprendizado das regras de derivação vistas em cálculo em um formato de quiz, constituindo um método rápido e eficiente.",
    bullets: [
      "Desenvolvi o projeto do absoluto zero, utilizando simplesmente HTML, CSS, e JavaScript.",
      "Implementei toda a lógica do funcionamento da página usando métodos nativos do JavaScript.",
      "Criei o banco de questões usando LaTeX para obter uma melhor formatação das imagens.",
    ],
  },
];

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    name: "5ª Olimpíada Regional de Derivadas",
    date: "set. 2024",
    subtitle: "Semifinalista",
    description: "Olimpíada universitária de cálculo (derivadas) sediada na Unicamp, onde participaram 44 alunos das principais universidades do Brasil.",
  },
  {
    name: "Pato'",
    date: "mai. 2024",
    subtitle: "1º lugar",
    description: "Competição universitária de cálculo (derivadas) sediada anualmente na UTFPR de Pato Branco.",
  },
];

export const SOCIALS: Array<Social> = [
  {
    link: "mailto:mcavalcante.business@outlook.com",
    name: "E-mail",
    icon: EmailIcon,
  },
  {
    link: "https://www.linkedin.com/in/ms-cavalcante/",
    name: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    link: "https://github.com/mcavalcantes",
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    link: "https://open.spotify.com/user/rbon5uxdcd2qfk7oc26ezujmm",
    name: "Spotify",
    icon: SpotifyIcon,
  },
];
