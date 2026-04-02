import { Search } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import useFetch from "./Fetcher";
import { Link } from "react-router-dom";

export default function SearchField() {
  const { currentTheme } = useTheme();

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const [result, showResult] = useState(null);
  // const [countryResult, setCountryResult] = useState(" ");

  const { data } = useFetch(
    `https://restcountries.com/v3.1/name/${query}/?fullText=true`,
    input,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    console.log(data);
    data != null && data.length > 0 ? showResult(true) : showResult(false);
  }, [data]);

  return (
    <div
      className={`flex items-center w-full h-14 rounded-[5px] px-8 gap-6 md:max-w-120 ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue900 shadow-2xl"} relative`}
    >
      <Search size={17.5}></Search>
      <input
        onChange={(e) => {
          e.target.value == "" ? showResult(false) : null;
          setInput(e.target.value);
        }}
        className={`text-preset-5r ${currentTheme ? "text-white" : "text-blue950"} focus:outline-0`}
        type="search"
        placeholder="Search for a country..."
      />
      {result == true ? (
        <Link
          className={`flex gap-4  justify-center  items-center absolute top-15 left-0  px-10 py-2 w-fit ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950 shadow-2xl"} rounded-[5px]`}
          to={`/${query}`}
        >
          <p>{data != null || data.length > 0 ? data[0].name.common : null}</p>
          <img
            className="w-10"
            src={data != null || data.length > 0 ? data[0].flags.png : null}
            alt=""
          />
        </Link>
      ) : null}
    </div>
  );
}
