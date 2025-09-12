const MONTHS = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
};

export const ACHIEVEMENTS: {
  date?: Date;
  title: string;
  description: string;
}[] = [
  {
    date: new Date(2025, MONTHS.AUGUST),
    title: "Participante na 6ª Olimpíada Regional de Derivadas",
    description:
      "Sediada na PUCPR em agosto de 2025. Maior pontuação entre 44 estudantes na etapa classificatória.",
  },
  {
    date: new Date(2024, MONTHS.SEPTEMBER),
    title: "Semifinalista na 5ª Olimpíada Regional de Derivadas",
    description: "Sediada na Unicamp em setembro de 2024",
  },
  {
    date: new Date(2024, MONTHS.MAY),
    title: "1º Lugar na Pato' 2024",
    description:
      "Competição universitária de Cálculo sediada anualmente na UTFPR-PB.",
  },
];
