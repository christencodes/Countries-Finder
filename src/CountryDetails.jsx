import useFetch from "./Fetcher";
import { useTheme } from "./ThemeProvider";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails() {
  const { currentTheme } = useTheme();
  const { countryName } = useParams();
  const { data } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}/?fullText=true`,
  );

  const languages = data != null ? data[0].languages : "";
  console.log(languages[Object.keys(languages)[0]]);
  return (
    <div
      className={`${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950"} h-full w-full`}
    >
      <div className="country-info flex flex-col gap-5  px-7">
        <img
          className="rounded-[5px]"
          src={data != null ? data[0].flags.png : ""}
          alt=""
        />
        <div className="flex flex-col gap-7">
          <p className="text-preset-2">{data?.[0].name.common ?? "..."}</p>
          <section className="flex flex-col gap-2 ">
            <p>
              <span className="font-bold">Native Name: </span>
              {data?.[0].name.common ?? "..."}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {data?.[0].population ?? 1}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {data?.[0].region ?? "..."}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {data?.[0].subregion ?? "..."}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {data?.[0].capital[0] ?? "..."}
            </p>
          </section>
          <section className="flex flex-col gap-2 ">
            <p>
              <span className="font-bold">Top Level Domain: </span>
              {data?.[0].tld[0] ?? "..."}
            </p>
            <p>
              <span className="font-bold">Curencies: </span>
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              {/*! Left here */}
              {/* WE LEFT OFF HERE */}
              {data?.[0].languages[Object.keys(languages)[0]] ?? "..."}
            </p>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
}
