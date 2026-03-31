import { useTheme } from "./ThemeProvider";
import useFetch from "./Fetcher";
import { useEffect } from "react";
import { Link } from "react-router-dom";
Link;

export default function CountryCard({ country }) {
  const { currentTheme } = useTheme();

  const { data } = useFetch(
    `https://restcountries.com/v3.1/name/${country}/?fullText=true`,
    1,
  );

  // let img, population, region, capital;

  useEffect(() => {
    if (data != null) {
      console.log(data[0]);
    }
  }, [data]);

  return (
    <div
      className={`country-card max-w-66 w-full rounded-[5px] overflow-hidden flex flex-col max-h-89 h-full ${currentTheme ? " " : "shadow-2xl"} `}
    >
      <Link className="cursor-pointer" to={data != null ? `/${country}` : ""}>
        <img
          className="min-h-40"
          src={data != null ? data[0].flags.png : ""}
          alt=""
        />
      </Link>

      <div
        className={`card-info flex flex-col items-start justify-center gap-4 py-7 px-10  ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950"} h-full `}
      >
        <p className="country-name text-preset-3">
          {data != null ? data[0].name.official : "loading"}
        </p>
        <section className="flex flex-col gap-2  ">
          <p className="text-preset-5r">
            <span className="font-bold">Population : </span>{" "}
            {data != null ? data[0].population : "loading"}
          </p>

          <p className="text-preset-5r">
            <span className="font-bold">Region : </span>{" "}
            {data != null ? data[0].region : "loading"}
          </p>
          <p className="text-preset-5r">
            <span className="font-bold"> Capital :</span>{" "}
            {data != null ? data[0].capital[0] : "loading"}{" "}
          </p>
        </section>
      </div>
    </div>
  );
}
