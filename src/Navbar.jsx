import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, themeSetter } = useTheme();

  return (
    <div
      className={`relative  w-full px-10 h-20  flex justify-between items-center shadow-md ${theme ? "" : "bg-blue900 text-white "} `}
    >
      <div className="question">
        <h1 className="font-display font-extrabold text-[16px]">
          Where in the world?{" "}
        </h1>
      </div>
      <div
        onClick={() => themeSetter()}
        className="theme-switcher flex items-center gap-2"
      >
        {theme ? <Moon color="black"></Moon> : <Sun></Sun>}
        <p className="text-preset-6sb">Light Mode</p>
      </div>
    </div>
  );
}
