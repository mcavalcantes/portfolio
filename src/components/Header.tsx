import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router";

import { Logo } from "./svgs";
import { ArrowDownTray, Sun, Moon } from "../components/svgs/heroicons";

export function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex h-24 items-center justify-between px-4 md:px-32 xl:px-96">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Logo className="size-12" />
        </Link>
        <Link to="/blog" className="text-xl font-semibold underline">
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="cursor-pointer rounded-md border border-orange-200 p-1.5 transition hover:bg-orange-200 dark:border-stone-500 dark:hover:bg-stone-800"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <a
          href="/curriculo.pdf"
          className="flex gap-2 rounded-md bg-zinc-950 px-2.5 py-1.5 text-yellow-50 transition hover:bg-zinc-900 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100"
        >
          <ArrowDownTray />
          <p>Currículo</p>
        </a>
      </div>
    </header>
  );
}
