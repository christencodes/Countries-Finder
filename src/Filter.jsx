import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function Filter() {
  const { currentTheme } = useTheme();
  const [dropDown, showDropDown] = useState(false);

  return (
    <div
      onClick={() => showDropDown(!dropDown)}
      className={`filter relative w-fit h-14 flex items-center justify-center gap-6 px-6 md:w-50 md:basis-auto rounded-[5px] cursor-pointer ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950 shadow-2xl"} `}
    >
      <p className="text-preset-6r">Filter by Region</p>
      <ChevronDown
        size={16}
        color={currentTheme ? "white" : "#202c36"}
      ></ChevronDown>
      <div
        className={` ${dropDown ? "block" : "hidden"} flex flex-col items-start justify-center gap-2 w-full absolute top-15 left-0 bg-blue900 rounded-[5px] px-6 py-3`}
      >
        <p className="hover:bg-blue950 w-full py-1.5 px-1.5 rounded-[5px]">
          Africa
        </p>
        <p className="hover:bg-blue950 w-full py-1.5 px-1.5 rounded-[5px]">
          America
        </p>
        <p className="hover:bg-blue950 w-full py-1.5 px-1.5 rounded-[5px]">
          Asia
        </p>
        <p className="hover:bg-blue950 w-full py-1.5 px-1.5 rounded-[5px]">
          Europe
        </p>
        <p className="hover:bg-blue950 w-full py-1.5 px-1.5 rounded-[5px]">
          Oceania
        </p>
      </div>
    </div>
  );
}
