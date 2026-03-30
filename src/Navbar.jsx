import { useTheme } from "./ThemeProvider";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function Navbar() {
  const { currentTheme, themeSwitch } = useTheme();
  return (
    <div
      className={` relative navbar w-full flex items-center justify-between px-5 py-6 ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950 shadow-2xl "}`}
    >
      <div className="logo font-display text-[14px] font-extrabold">
        Where in the world?
      </div>
      <button
        onClick={() => themeSwitch()}
        className="flex items-center gap-2 cursor-pointer"
      >
        {currentTheme ? (
          <Sun size={14} color="white"></Sun>
        ) : (
          <Moon size={14} color="#202c36"></Moon>
        )}
        <p className=" text-preset-6sb">
          {currentTheme ? "Light Mode" : "Dark Mode"}
        </p>
      </button>
    </div>
  );
}
