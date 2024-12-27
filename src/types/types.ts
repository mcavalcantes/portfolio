export interface Education {
  name: string;
  startDate: string;
  endDate?: string;
  subtitle: string;
}

export interface Skill {
  name: string;
  skills: Array<string>;
}

export interface Experience {
  name: string;
  startDate: string;
  endDate?: string;
  subtitle: string;
  bullets: Array<string>;
}

export interface Project {
  link: string;
  name: string;
  description: string;
  bullets: Array<string>;
}

export interface Achievement {
  name: string;
  date: string;
  subtitle: string;
  description: string;
}

export interface Social {
  link: string;
  name: string;
  icon: () => React.ReactNode;
}
