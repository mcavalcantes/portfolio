import { useState } from "react";

import { Link } from "react-router";

import { LogoBlack } from "../components/svgs/LogoBlack";

import { Sun } from "../components/svgs/heroicons/Sun";
import { Moon } from "../components/svgs/heroicons/Moon";

import { ArrowDownTray } from "../components/svgs/heroicons/ArrowDownTray";

import { SKILLS, EXPERIENCES, ACHIEVEMENTS, SOCIALS } from "../data";

import { formatDate } from "../lib/formatDate";

export function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-24 items-center justify-between px-4 md:px-32 xl:px-96">
        <div className="flex items-center gap-4">
          <Link to="/">
            <LogoBlack className="size-12" />
          </Link>
          <Link to="/blog" className="text-xl font-semibold underline">
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleClick}
            className="cursor-pointer rounded-md border border-black p-1.5"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <a
            href="/curriculo.pdf"
            className="flex gap-2 rounded-md bg-black px-2.5 py-1.5 text-white"
          >
            <ArrowDownTray />
            <p>Currículo</p>
          </a>
        </div>
      </header>
      <div className="flex flex-col px-4 md:px-32 xl:px-96">
        <section className="flex flex-col">
          <p>Estudante do terceiro ano de Engenharia de Computação na UTFPR.</p>
        </section>
        <section className="flex flex-col">
          <h2 className="py-4 text-2xl font-semibold">Habilidades</h2>
          <ul className="flex flex-col">
            {SKILLS.map((skill, index) => (
              <li key={index}>
                <div className="debug">
                  <h3 className="font-semibold">{skill.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item, index) => (
                      <li key={index}>
                        <div className="rounded-full border-black px-2 py-0.5 hover:bg-black hover:text-white">
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col">
          <h2 className="py-4 text-2xl font-semibold">Experiência</h2>
          <ul className="flex flex-col gap-2">
            {EXPERIENCES.map((experience, index) => (
              <li key={index}>
                <div className="flex flex-col gap-2 border border-black p-4"></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col">
          <h2 className="py-4 text-2xl font-semibold">Conquistas</h2>
          <ul className="flex flex-col gap-2">
            {ACHIEVEMENTS.map((achievement, index) => (
              <li key={index}>
                <div className="flex flex-col gap-2 border border-black p-4">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">
                      {achievement.title}
                    </h3>
                    <div className="text-sm">
                      {formatDate(achievement.date)}
                    </div>
                  </div>
                  <p>{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col">
          <h2 className="py-4 text-2xl font-semibold">Social</h2>
          <ul className="flex flex-col gap-2 md:grid md:grid-cols-4">
            {SOCIALS.map((social, index) => (
              <li key={index} className="flex">
                <a
                  href={social.link}
                  className="grid w-full place-items-center border border-black py-2.5 md:py-8"
                >
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="mt-auto grid h-32 place-items-center">
        <p className="text-xs">© {year} · Matheus Cavalcante</p>
      </footer>
    </div>
  );
}
