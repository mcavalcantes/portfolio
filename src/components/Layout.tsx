import { useState } from "react";

import { SunIcon } from "../icons/heroicons/SunIcon.tsx";
import { MoonIcon } from "../icons/heroicons/MoonIcon.tsx";
import { DownloadIcon } from "../icons/heroicons/DownloadIcon.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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

  const handleClick = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("userTheme", "light");
      setTheme("light");
    } else if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("userTheme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-8 md:px-32 xl:px-[26rem]">
      <header className="h-20 w-full flex items-center justify-end gap-2">
        <div className="flex items-center gap-2">
          {
            theme === "dark" ?

            <button onClick={handleClick} className="h-8 w-8 flex items-center justify-center rounded border border-[var(--border)] hover:bg-[var(--hover)] transition">
              <SunIcon />
            </button>

            :

            <button onClick={handleClick} className="h-8 w-8 flex items-center justify-center rounded border border-[var(--border)] hover:bg-[var(--hover)] transition">
              <MoonIcon />
            </button>
          }
          <a className="h-8 w-12 flex items-center justify-center rounded border border-[var(--border)] hover:bg-[var(--hover)] transition" href="https://blog-mcavalcante.vercel.app/">
            Blog
          </a>
          <a href="/curriculo.pdf" className="h-8 w-28 flex items-center justify-evenly rounded bg-[var(--foreground)] text-[var(--foreground-text)] hover:bg-[var(--hover-foreground)] transition">
            <DownloadIcon />
            <p>Currículo</p>
          </a>
        </div>
      </header>
      {children}
      <footer className="h-20 w-full text-xs flex items-center justify-center pointer-events-none select-none">
        © {new Date().getFullYear()} · Matheus Cavalcante
      </footer>
    </div>
  );
}
