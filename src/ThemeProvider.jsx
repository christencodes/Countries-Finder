import { createContext, useContext, useState } from "react";

const Theme = createContext();

export default function ThemeProvider({ children }) {
  //true - dark
  //false - light
  const [currentTheme, setTheme] = useState(true);

  function themeSwitch() {
    setTheme(!currentTheme);
  }

  return (
    <Theme.Provider value={{ themeSwitch, currentTheme }}>
      {children}
    </Theme.Provider>
  );
}

export function useTheme() {
  return useContext(Theme);
}
