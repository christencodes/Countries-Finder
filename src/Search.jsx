import { Search } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function SearchField({ setInput }) {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`flex items-center w-full h-14 rounded-[5px] px-8 gap-6 ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue900 shadow-2xl"}`}
    >
      <Search size={17.5}></Search>
      <input
        onChange={(e) => setInput(e.target.value)}
        className={`text-preset-5r ${currentTheme ? "text-white" : "text-blue950"} focus:outline-0`}
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}
