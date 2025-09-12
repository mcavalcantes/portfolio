import { useEffect } from "react";
import { useState } from "react";
import { DarkModeContext } from "./hooks/useDarkMode";

import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "./routes/routes";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      if (prev) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", String(false));
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", String(true));
      }

      return !prev;
    });
  };

  useEffect(() => {
    const userHasDarkMode = localStorage.getItem("darkMode");

    if (!userHasDarkMode) {
      localStorage.setItem("darkMode", String(false));
      document.documentElement.classList.remove("dark");
      setDarkMode(false);

      return;
    }

    const darkModeOn = userHasDarkMode === "true";

    if (darkModeOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setDarkMode(darkModeOn);
  }, []);

  return (
    <DarkModeContext value={{ darkMode, toggleDarkMode }}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </DarkModeContext>
  );
}
