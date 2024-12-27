import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layout } from "./components/Layout.tsx";
import {
  EDUCATIONS,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  ACHIEVEMENTS,
  SOCIALS,
} from "./constants/constants.ts";

import { ExternalIcon } from "./icons/heroicons/ExternalIcon.tsx";

export const App = () => {
  let userTheme = localStorage.getItem("userTheme");

  if (!userTheme) {
    userTheme = "light";
    localStorage.setItem("userTheme", userTheme);
  } else if (userTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [theme, setTheme] = useState(userTheme);

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <main className="w-full flex flex-col gap-4">

        <section className="md:flex-row items-center md:items-start gap-4">
          <img
            src="/profile-picture.jpg"
            alt="Foto de perfil"
            className="h-48 w-48 rounded-full"
          />
          <div className="flex flex-col items-center md:items-start gap-2">
            <h1>Olá, sou o Matheus!</h1>
            <p>
              Estudante de engenharia de computação na UTFPR. Tenho interesse em oportunidades
              que me permitam crescer pessoalmente e profissionalmente na área. Conto com uma
              alta capacidade analítica que, combinada com minha abordagem versátil aos
              problemas, me tornam um profissional extremamente competente.
            </p>
          </div>
        </section>

        <section>
          <h2>Educação</h2>
          <div className="flex flex-col gap-4">
            {EDUCATIONS.map(item => (
              <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-1">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <h3>{item.name}</h3>
                  <p className="text-sm">{`${item.startDate} – ${item.endDate || "o momento"}`}</p>
                </div>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Habilidades</h2>
          <div className="flex flex-col gap-2">
            {SKILLS.map(item => (
              <div key={uuidv4()} className="flex">
                <h3 className="w-32 shrink-0">{item.name}</h3>
                <ul className="py-[0.2rem] flex flex-wrap gap-2 list-none">
                  {item.skills.map(item => (
                    <li key={uuidv4()}>
                      <div className={
                        "cursor-default select-none w-fit h-6 px-2 flex items-center justify-center shrink-0 rounded-xl border " +
                        "border-[var(--border)] hover:bg-[var(--text)] hover:text-[var(--background)] " +
                        "transition ease-out"
                      }>
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Experiência</h2>
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map(item => (
              <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-1">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <h3>{item.name}</h3>
                  <p className="text-sm">{`${item.startDate} – ${item.endDate || "o momento"}`}</p>
                </div>
                <p>{item.subtitle}</p>
                <ul className="pl-[0.8rem] flex flex-col gap-1">
                  {item.bullets.map(item => (
                    <li key={uuidv4()}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Projetos</h2>
          <div className="flex flex-col gap-4">
            {PROJECTS.map(item => (
              <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3>{item.name}</h3>
                  <a href={item.link} target="_blank" className="hover:bg-[var(--hover)] active:bg-[var(--active)] rounded transition">
                    <ExternalIcon />
                  </a>
                </div>
                <p>{item.description}</p>
                <ul className="pl-[0.8rem] flex flex-col gap-1">
                  {item.bullets.map(item => (
                    <li key={uuidv4()}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Conquistas</h2>
          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map(item => (
              <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-1">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <h3>{item.name}</h3>
                  <p className="text-sm">{item.date}</p>
                </div>
                <p>{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Social</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {SOCIALS.map(item => (
              <a
                key={uuidv4()}
                href={item.link}
                target="_blank"
                className="py-2 md:py-12 flex flex-col items-center justify-center p-4 rounded border border-[var(--border)] hover:bg-[var(--hover)] active:bg-[var(--active)] transition"
              >
                {item.icon()}
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}
