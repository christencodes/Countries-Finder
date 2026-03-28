import { createContext, useContext, useState } from "react";

const ThemeProvider = createContext();

export default function ThemeObserver({ children }) {
  const [theme, setTheme] = useState(false);

  function themeSetter() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider.Provider value={{ themeSetter, theme }}>
      {children}
    </ThemeProvider.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeProvider);
}
