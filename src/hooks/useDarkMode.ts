import { createContext } from "react";
import { useContext } from "react";

type DarkModeContextType = {
  darkMode: boolean | null;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("Error: `useDarkMode` must be used within a provider.");
  }

  return context;
}
