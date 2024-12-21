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

export const App = () => (
  <Layout>

    <section className="w-full flex flex-col">
    </section>

    <section className="w-full flex flex-col">
      <h2 className="py-2">Educação</h2>
      <div className="debug flex flex-col">
        {EDUCATIONS.map(item => (
          <div key={uuidv4()} className="debug">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <h3>{item.name}</h3>
              <p className="text-sm">{`${item.startDate} – ${item.endDate || "o momento"}`}</p>
            </div>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full flex flex-col">
      <h2 className="py-2">Habilidades</h2>
      <div className="debug flex flex-col">
        {SKILLS.map(item => (
          <div key={uuidv4()} className="debug flex">
            <h3 className="debug w-32 shrink-0">{item.name}</h3>
            <ul className="debug py-[0.2rem] flex flex-wrap gap-2 list-none">
              {item.skills.map(item => (
                <li key={uuidv4()}>
                  <div className={
                    "debug cursor-default select-none w-fit h-6 px-2 flex items-center justify-center shrink-0 rounded-xl border " +
                    "border-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 " +
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

    <section className="w-full flex flex-col">
      <h2 className="py-2">Experiência</h2>
      <div className="debug flex flex-col">
        {EXPERIENCES.map(item => (
          <div key={uuidv4()} className="debug">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <h3>{item.name}</h3>
              <p className="text-sm">{`${item.startDate} – ${item.endDate || "o momento"}`}</p>
            </div>
            <p>{item.subtitle}</p>
            <ul>
              {item.bullets.map(item => (
                <li key={uuidv4()}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full flex flex-col">
      <h2 className="py-2">Projetos</h2>
      <div className="debug flex flex-col">
        {PROJECTS.map(item => (
          <div key={uuidv4()} className="debug">
            <div className="flex items-center justify-between">
              <h3>{item.name}</h3>
              <a href={item.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <p>{item.description}</p>
            <ul>
              {item.bullets.map(item => (
                <li key={uuidv4()}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full flex flex-col">
      <h2 className="py-2">Conquistas</h2>
      <div className="debug flex flex-col">
        {ACHIEVEMENTS.map(item => (
          <div key={uuidv4()} className="debug">
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

    <section className="w-full flex flex-col">
      <h2 className="py-2">Social</h2>
      <div className="debug grid grid-cols-1 md:grid-cols-4 gap-2">
        {SOCIALS.map(item => (
          <a key={uuidv4()} href={item.link} target="_blank" className="debug py-2 md:py-12 flex flex-col items-center justify-center">
            {item.icon()}
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>

  </Layout>
);
