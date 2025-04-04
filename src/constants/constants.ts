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
      "Typescript",
      "Javascript",
      "Python",
      "Java",
      "SQL",
      "C/C++",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Tecnologias",
    skills: [
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "SQLite",
      "Next.js",
      "Node.js",
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      "Git",
      "vscode",
    ],
  },
  {
    name: "Outros",
    skills: [
      "Inglês",
      "Automação",
      "Algoritmos",
      "Estruturas de dados",
      "Capacidade analítica",
    ],
  },
];

export const EXPERIENCES: Array<Experience> = [
  {
    name: "OCCAM Engenharia",
    startDate: "abr. 2024",
    endDate: "ago. 2024",
    subtitle: "Trainee",
    bullets: [
      "Atuei semanalmente em todos os setores da empresa, realizando atividades pertinentes a cada um deles.",
      "Desenvolvi, juntamente a outros integrantes do meu grupo, um projeto front-end de website empresarial.",
      "Fui responsável por contatar o cliente, coletar e documentar os requisitos, e programar o website.",
    ],
  },
  {
    name: "UTFPR",
    startDate: "set. 2023",
    endDate: "jul. 2024",
    subtitle: "Monitor de Cálculo I",
    bullets: [
      "Atendi de forma presencial e remota os alunos da universidade para resolução de dúvidas na disciplina.",
      "Revisei e corrigi diversos materiais didáticos usados por professores (apostilas, listas, e gabaritos.)",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];

export const PROJECTS: Array<Project> = [
  {
    link: "",
    name: "DerivaQuiz",
    description: "Versão remasterizada do DerivaDash, desenvolvido com React + Tailwind e agora contando com limites e integrais. Tem o propósito de otimizar o aprendizado de estudantes de engenharia na disciplina de cálculo, sendo inicialmente criado para ajudar os alunos que frequentavam minha monitoria.",
    bullets: [
      "Desenvolvi uma interface totalmente responsiva e performática, com arquitetura limpa (reducer e context).",
      "Implementei a API da aplicação com SQLite e Express, integrando-o com o front-end em React e Tailwind.",
      "Inseri mais de 360 questões com LaTeX para serem usadas, com três categorias e quatro níves de dificuldade.",
    ],
  },
  {
    link: "https://blog-mcavalcante.vercel.app/",
    name: "Blog",
    description: "Desenvolvi um blog pessoal como desafio para me aprofundar no framework Next.js e em outras áreas do desenvolvimento web que desconhecia, e também para ter um lugar para escrever minhas ideias e pensamentos.",
    bullets: [
      "Criei o mapeamento objeto-relacional das entidades usando Prisma e usei PostgreSQL como banco de dados para armazenar dados de posts e comentários.",
      "Adicionei suporte ao formato MDX para a escrita e visualização dos posts, permitindo uma apresentação mais organizada e agradável do conteúdo.",
      "Implementei a funcionalidade de postagem de comentários, sem necessidade de autenticação prévia para poder deixar comentários em cada post.",
    ],
  },
  {
    link: "https://mcavalcante.netlify.app/",
    name: "Portfólio",
    description: "Website pessoal que visa mostrar, de forma completa, minhas habilidades, experiências, projetos, e conquistas.",
    bullets: [
      "Desenvolvi uma interface de usuário totalmente responsiva e fluida utilizando React e Tailwind CSS.",
      "Implementei um código modularizado, garantindo rapidez e eficiência em possíveis alterações no futuro.",
      "Apliquei conceitos de design atômico, individualizando processos e promovendo a integridade do código.",
    ],
  },
  {
    link: "https://mcavalcantes.github.io/derivadash/",
    name: "DerivaDash",
    description: "Projeto desenvolvido para otimizar o aprendizado dos alunos que frequentavam minha monitoria. Serve como uma ferramenta que visa reforçar o estudo das regras de derivação vistas em Cálculo, em um formato de quiz.",
    bullets: [
      "Desenvolvi o projeto do absoluto zero, utilizando simplesmente HTML, CSS, e JavaScript puro.",
      "Implementei toda a lógica do funcionamento da página usando métodos nativos do JavaScript.",
      "Criei mais de 70 questões usando LaTeX para serem usadas como exercícios na página.",
    ],
  },
];

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    name: "5ª Olimpíada Regional de Derivadas",
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
    link: "mailto:matheuscavalcantes.mc@gmail.com",
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
