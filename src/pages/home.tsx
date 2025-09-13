import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { SKILLS, EXPERIENCES, ACHIEVEMENTS, SOCIALS } from "../data";
import { formatDateShort } from "../lib/formatDateShort";

import myPhoto from "../assets/images/jpgs/profile-picture.jpg";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 text-zinc-950 dark:bg-stone-900 dark:text-stone-200">
      <Header />
      <div className="flex flex-col gap-8 px-4 md:px-32 xl:px-96">
        <section className="flex flex-col items-center gap-4 xl:flex-row xl:items-start">
          <img
            src={myPhoto}
            className="size-48 shrink-0 rounded-full border border-orange-200 dark:border-stone-500"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-3xl font-semibold xl:text-start">
              Olá, sou o Matheus Cavalcante!
            </h1>
            <p>
              Atualmente, estudante do terceiro ano de Engenharia de Computação
              na UTFPR. Gosto de matemática, física, programação, mercado
              financeiro, e coisas desafiadoras. No tempo livre gosto de ler
              livros, ou ver filmes, séries, e animes. Às vezes, também desenho
              algo e escrevo no meu blog. Lá no final dessa página há
              informações de contato, como meu e-mail e LinkedIn. Por enquanto,
              não sei muito o que colocar aqui...
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="py-4 text-3xl font-semibold">Habilidades</h2>
          <ul className="flex flex-col gap-4">
            {SKILLS.map((skill, index) => (
              <li key={index}>
                <div className="flex">
                  <div className="w-32 shrink-0 md:w-36">
                    <h3 className="text-xl font-semibold">{skill.group}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2.5 select-none">
                    {skill.items.map((item, index) => (
                      <li key={index}>
                        <div className="rounded-full border border-orange-200 px-3 py-1 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-yellow-50 dark:border-stone-500 dark:hover:bg-stone-200 dark:hover:text-stone-900">
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
          <h2 className="py-4 text-3xl font-semibold">Experiência</h2>
          <ul className="flex flex-col gap-4">
            {EXPERIENCES.map((experience, index) => (
              <li key={index}>
                <div className="flex flex-col gap-4 rounded-xl border border-orange-200 p-6 dark:border-stone-500">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <p className="italic">{experience.subtitle}</p>
                  </div>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {experience.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col">
          <h2 className="py-4 text-3xl font-semibold">Conquistas</h2>
          <ul className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <li key={index}>
                <div className="flex flex-col gap-4 rounded-xl border border-orange-200 p-6 dark:border-stone-500">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">
                      {achievement.title}
                    </h3>
                    <div>{formatDateShort(achievement.date)}</div>
                  </div>
                  <p>{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col">
          <h2 className="py-4 text-3xl font-semibold">Social</h2>
          <ul className="flex flex-col gap-2 md:grid md:grid-cols-4">
            {SOCIALS.map((social, index) => (
              <li key={index} className="flex">
                <a
                  href={social.link}
                  className="grid w-full place-items-center gap-2 rounded-xl border border-orange-200 py-4 transition hover:bg-orange-200 md:py-12 dark:border-stone-500 dark:hover:bg-stone-800"
                >
                  <div>{social.icon}</div>
                  <p>{social.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
