import { getCurrentYear } from "../lib/getCurrentYear.ts";

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

          <button onClick={handleClick} className="h-8 w-8 flex items-center justify-center rounded hover:bg-[var(--hover)] border border-[var(--border)] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </button>

          :

          <button onClick={handleClick} className="h-8 w-8 flex items-center justify-center rounded hover:bg-[var(--hover)] border border-[var(--border)] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
        }
        <a href="/curriculo" className="h-8 w-28 flex items-center justify-evenly bg-[var(--text)] text-[var(--background)] rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <p>Currículo</p>
        </a>
      </header>
      {children}
      <footer className="h-20 w-full text-sm flex items-center justify-center pointer-events-none select-none">
        © {getCurrentYear()} · Matheus Cavalcante
      </footer>
    </div>
  );
}
