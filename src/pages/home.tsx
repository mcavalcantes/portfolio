import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { SKILLS, EXPERIENCES, ACHIEVEMENTS, SOCIALS } from "../data";
import { formatDateShort } from "../lib/formatDateShort";

import SplitText from "../components/SplitText";
import myPhoto from "../assets/images/jpgs/profile-picture.jpg";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-(--gray-9) text-(--gray-0) dark:bg-(--gray-0) dark:text-(--gray-9)">
      <Header />
      <div className="flex flex-col gap-8 px-4 md:px-32 xl:px-96">
        <section className="flex flex-col items-center gap-4 xl:flex-row xl:items-start">
          <img
            src={myPhoto}
            className="size-48 shrink-0 rounded-full border border-(--gray-5) dark:border-(--gray-4)"
          />
          <div className="flex flex-col gap-2">
            <div className="self-center xl:self-start">
              <SplitText
                text="Olá, sou o Matheus Cavalcante!"
                className="text-center text-3xl font-semibold xl:text-start"
              />
            </div>
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
                        <div className="rounded-full border border-(--gray-5) px-3 py-1 transition hover:border-(--gray-0) hover:bg-(--gray-0) hover:text-(--gray-9) dark:border-(--gray-4) dark:hover:border-(--gray-9) dark:hover:bg-(--gray-9) dark:hover:text-(--gray-0)">
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
                <div className="flex flex-col gap-4 rounded-xl border border-(--gray-5) p-6 dark:border-(--gray-4)">
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
                <div className="flex flex-col gap-4 rounded-xl border border-(--gray-5) p-6 dark:border-(--gray-4)">
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
                  className="grid w-full place-items-center gap-2 rounded-xl border border-(--gray-5) py-4 transition hover:bg-(--gray-6) md:py-12 dark:border-(--gray-4) dark:hover:bg-(--gray-1)"
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
