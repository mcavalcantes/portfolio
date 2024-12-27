import { SunIcon } from "../icons/heroicons/SunIcon.tsx";
import { MoonIcon } from "../icons/heroicons/MoonIcon.tsx";
import { DownloadIcon } from "../icons/heroicons/DownloadIcon.tsx";

interface LayoutProps {
  theme: string;
  setTheme: (theme: string) => void;
  children: React.ReactNode;
}

export const Layout = ({ theme, setTheme, children }: LayoutProps) => {
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
    <div className="min-h-screen flex flex-col items-center px-8 md:px-32 xl:px-96">
      <header className="h-20 w-full flex items-center justify-end gap-2">
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
        <a href="/curriculo" className="h-8 w-28 flex items-center justify-evenly rounded bg-[var(--foreground)] text-[var(--foreground-text)] hover:bg-[var(--hover-foreground)] transition">
          <DownloadIcon />
          <p>Currículo</p>
        </a>
      </header>
      {children}
      <footer className="h-20 w-full text-sm flex items-center justify-center pointer-events-none select-none">
        © {new Date().getFullYear()} · Matheus Cavalcante
      </footer>
    </div>
  );
}
