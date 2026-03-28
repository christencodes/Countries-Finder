import { useTheme } from "./ThemeProvider";
import { SearchIcon } from "lucide-react";

export default function Search() {
  const { theme } = useTheme();
  return (
    <div
      className={`search flex justify-start items-center rounded-[5px] lg:max-w-120  w-full max-w-85.75 mx-auto pl-8 ${theme ? "bg-white text-grey400 shadow-2xl/25 " : "bg-blue900"}`}
    >
      <SearchIcon size={15} color={theme ? "#808080" : "white"}></SearchIcon>
      <input
        className={`w-full h-12 text-left pl-5 focus:outline-0 text-preset-6r ${theme ? " " : " text-white"} `}
        type="search"
        placeholder="Search for a country..."
      />
    </div>
  );
}
