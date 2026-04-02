import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const { currentTheme } = useTheme();
  return (
    <Link
      to="/"
      className={`w-26 py-1.5 flex justify-center gap-2 rounded-xs items-center ${currentTheme ? "bg-blue900 text-white" : "bg-white text shadow-2xl text-blue950"} self-start lg:ml-0 md:ml-32 md:mb-8 ml-7 mb-8`}
    >
      <ArrowLeft
        size={17}
        color={`${currentTheme ? "white" : "#202c36;"}`}
      ></ArrowLeft>
      <p className="text-preset-5li">Back</p>
    </Link>
  );
}
