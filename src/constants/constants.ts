import {
  Education,
  Skill,
  Experience,
  Project,
  Achievement,
  Social,
} from "../types/types.ts";

import { EmailIcon } from "../icons/iconmonstr/EmailIcon.tsx";
import { LinkedinIcon } from "../icons/iconmonstr/LinkedinIcon.tsx";
import { GithubIcon } from "../icons/iconmonstr/GithubIcon.tsx";
import { SpotifyIcon } from "../icons/iconmonstr/SpotifyIcon.tsx";

export const EDUCATIONS: Array<Education> = [
  {
    name: "UTFPR",
    startDate: "mar. 2023",
    endDate: undefined,
    subtitle: "Bacharelado em Engenharia de Computação",
  },
];

export const SKILLS: Array<Skill> = [
  {
    name: "Linguagens",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Java",
      "C",
    ],
  },
  {
    name: "Tecnologias",
    skills: [
      "React",
      "Tailwind CSS",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      "Visual Studio Code",
      "Git",
      "npm",
      "Obsidian",
      "Figma",
      "Excalidraw",
    ],
  },
  {
    name: "Outros",
    skills: [
      "Inglês",
      "Comunicação",
      "Algoritmos",
      "Estruturas de Dados",
      "Scripting",
      "Automação",
    ],
  },
];

export const EXPERIENCES: Array<Experience> = [
  {
    name: "UTFPR",
    startDate: "set. 2023",
    endDate: "jul. 2024",
    subtitle: "Monitor de Cálculo I",
    bullets: [
      "Atendi de forma presencial e remota os alunos da universidade para resolução de dúvidas na disciplina.",
      "Preparei e corrigi diversos materiais didáticos usados por professores (apostilas, listas, e gabaritos.)",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];

export const PROJECTS: Array<Project> = [
  {
    link: "https://mcavalcante.netlify.app/",
    name: "Portfólio",
    description: "Website pessoal que visa mostrar, de forma completa, minhas habilidades, experiências, projetos, e conquistas.",
    bullets: [
      "Desenvolvi uma interface de usuário totalmente responsiva utilizando React e Tailwind CSS.",
      "Implementei um código modularizado, garantindo rapidez e eficiência em alterações futuras.",
      "Usei Vite como ferramenta de build e Node.js como principal ferramenta de desenvolvimento.",
    ],
  },
  {
    link: "https://mcavalcantes.github.io/derivadash/",
    name: "DerivaDash",
    description: "Aplicação web desenvolvida durante o período em que trabalhei como Monitor de Cálculo I. Serve como uma ferramenta de estudos para estudantes de engenharia, que visa reforçar o aprendizado das regras de derivação vistas em Cálculo em um formato de quiz, constituindo um método rápido e eficiente.",
    bullets: [
      "Desenvolvi o projeto do absoluto zero, utilizando puramente HTML, CSS, e JavaScript.",
      "Implementei toda a lógica do funcionamento da página usando métodos nativos do JavaScript.",
      "Criei mais de 70 questões usando LaTeX para obter uma melhor formatação das imagens.",
    ],
  },
];

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    name: "V Olimpíada Regional de Derivadas",
    date: "set. 2024",
    subtitle: "Semifinalista",
    description: "Olimpíada universitária de Cálculo sediada na Unicamp em 2024, onde participaram 44 alunos das principais universidades do Brasil.",
  },
  {
    name: "Pato'",
    date: "mai. 2024",
    subtitle: "1º lugar",
    description: "Competição universitária de Cálculo sediada anualmente na UTFPR de Pato Branco.",
  },
];

export const SOCIALS: Array<Social> = [
  {
    link: "mailto:mscavalcante.business@outlook.com",
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
