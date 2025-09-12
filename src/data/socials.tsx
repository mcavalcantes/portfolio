import {
  Mail,
  Instagram,
  LinkedIn,
  GitHub,
} from "../components/svgs/iconmonstr";

export const SOCIALS: {
  icon: React.JSX.Element;
  title: string;
  link: string;
}[] = [
  {
    icon: <Mail className="size-8" />,
    title: "E-mail",
    link: "mailto:matheuscavalcantes.mc@gmail.com",
  },
  {
    icon: <Instagram className="size-8" />,
    title: "Instagram",
    link: "https://www.instagram.com/mcavalcante.s/",
  },
  {
    icon: <LinkedIn className="size-8" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ms-cavalcante/",
  },
  {
    icon: <GitHub className="size-8" />,
    title: "GitHub",
    link: "https://github.com/mcavalcantes",
  },
];
