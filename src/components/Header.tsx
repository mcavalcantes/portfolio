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
          className="cursor-pointer rounded-md border border-(--gray-5) p-1.5 transition hover:bg-(--gray-8) dark:border-(--gray-4) dark:hover:bg-(--gray-2)"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <a
          href="/curriculo.pdf"
          className="flex gap-2 rounded-md bg-(--gray-0) px-2.5 py-1.5 text-(--gray-9) transition hover:bg-(--gray-4) dark:bg-(--gray-9) dark:text-(--gray-0) dark:hover:bg-(--gray-7)"
        >
          <ArrowDownTray />
          <p>Currículo</p>
        </a>
      </div>
    </header>
  );
}
