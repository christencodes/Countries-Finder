import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { ChevronDown } from "lucide-react";

export default function Filter() {
  const [dropdown, setDropdown] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      onClick={() => setDropdown(!dropdown)}
      className={`filter relative bg-blue900 rounded-[5px] w-fit px-4 py-4 flex  gap-10 ${theme ? "text-black" : "text-white"} cursor-pointer`}
    >
      <h3 className="text-preset-6r">Filter by Region</h3>
      <ChevronDown size={20} color={theme ? "black" : "white"}></ChevronDown>

      <div
        className={` ${dropdown ? " " : "hidden"} options absolute -bottom-49 left-0  rounded-[5px] w-full `}
      >
        <ul className="flex flex-col gap-2  text-white bg-blue900 text-preset-6r p-4 rounded-[5px]">
          <li className="hover:bg-grey400 py-1 px-1 rounded-[5px]">Africa</li>
          <li className="hover:bg-grey400 py-1 px-1 rounded-[5px]">America</li>
          <li className="hover:bg-grey400 py-1 px-1 rounded-[5px]">Asia</li>
          <li className="hover:bg-grey400 py-1 px-1 rounded-[5px]">Europe</li>
          <li className="hover:bg-grey400 py-1 px-1 rounded-[5px]">Oceania</li>
        </ul>
      </div>
    </div>
  );
}
