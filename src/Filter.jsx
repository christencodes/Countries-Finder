import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Filter() {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`filter w-fit h-14 flex items-center gap-6 px-6 rounded-[5px] cursor-pointer ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950"} `}
    >
      <p className="text-preset-6r">Filter by Region</p>
      <ChevronDown
        size={16}
        color={currentTheme ? "white" : "#202c36"}
      ></ChevronDown>
    </div>
  );
}
