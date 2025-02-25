import { v4 as uuidv4 } from "uuid";
import { Layout } from "./components/Layout.tsx";
import { ExternalIcon } from "./icons/heroicons/ExternalIcon.tsx";
import {
  EDUCATIONS,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  ACHIEVEMENTS,
  SOCIALS,
} from "./constants/constants.ts";

export const App = () => (
  <Layout>
    <main className="w-full flex flex-col gap-8">

      <section className="md:flex-row items-center md:items-start gap-4">
        <img
          src="/profile-picture.jpg"
          alt="Foto de perfil"
          className="h-44 w-44 rounded-full"
        />
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-3xl text-center">Olá, sou o Matheus!</h1>
          <p className="leading-[1.6rem]">
            Estudante do 4º período de Engenharia de Computação na UTFPR munido de uma alta capacidade analítica
            e extrema versatilidade para resolver problemas complexos. Além disso, tenho um gosto especial para
            ensinar e ajudar quem conheço, fruto do período em que participei ativamente de comunidades de estudo e
            de quando atuei como Monitor de Cálculo na universidade. Como hobbies, gosto de ler bons livros e fazer
            atividade física.
          </p>
        </div>
      </section>

      <section>
        <h2>Educação</h2>
        <div className="flex flex-col gap-4">
          {EDUCATIONS.map(item => (
            <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-2">
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
        <div className="flex flex-col gap-4">
          {SKILLS.map(item => (
            <div key={uuidv4()} className="flex">
              <h3 className="w-36 shrink-0">{item.name}</h3>
              <ul className="flex flex-wrap gap-2 list-none">
                {item.skills.map(item => (
                  <li className="flex items-center" key={uuidv4()}>
                    <div className={
                      "cursor-default select-none px-2 flex items-center justify-center shrink-0 rounded-xl border " +
                      "border-[var(--border)] hover:bg-[var(--border)] transition ease-out"
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
            <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-2">
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <h3>{item.name}</h3>
                <p className="text-sm">{`${item.startDate} – ${item.endDate || "o momento"}`}</p>
              </div>
              <p className="italic">{item.subtitle}</p>
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
            <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3>{item.name}</h3>
                <a href={item.link} target="_blank" className="hover:bg-[var(--hover)] rounded transition">
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
            <div key={uuidv4()} className="p-4 rounded border border-[var(--border)] flex flex-col gap-2">
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <h3>{item.name}</h3>
                <p className="text-sm">{item.date}</p>
              </div>
              <p className="italic">{item.subtitle}</p>
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
              className="p-4 md:py-12 flex flex-col items-center justify-center rounded border border-[var(--border)] hover:bg-[var(--hover)] transition"
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
