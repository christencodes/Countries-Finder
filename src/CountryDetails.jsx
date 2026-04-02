import useFetch from "./Fetcher";
import { useTheme } from "./ThemeProvider";
import { Link, useParams } from "react-router-dom";
import BackButton from "./BackButton";

export default function CountryDetails() {
  const { currentTheme } = useTheme();
  const { countryName } = useParams();
  const { data } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}/?fullText=true`,
  );

  const languages = data != null ? data[0].languages : "";
  const currencies = data != null ? data[0].currencies : "";

  const borderCountries = data?.[0].borders.slice(0, 3).join(",");

  const { data: borders } = useFetch(
    `https://restcountries.com/v3.1/alpha?codes=${borderCountries}`,
  );

  return (
    <div
      className={`lg:px-15  py-10  ${currentTheme ? "bg-blue950 text-white" : "bg-white text-blue950"} h-full `}
    >
      <BackButton></BackButton>
      <div className="country-info flex flex-col justify-center items-center gap-8  px-7 lg:px-0 md:max-w-142.5 lg:max-w-full lg:flex-row  lg:justify-around lg:gap-30 md:mx-auto ">
        <img
          className="rounded-[5px]  w-full max-w-140 lg:max-w-140 "
          src={data != null ? data[0].flags.png : ""}
          alt=""
        />
        <div className="flex flex-col justify-between w-full gap-8   ">
          <div className="">
            <p className="text-preset-2 md:text-preset-1">
              {data?.[0].name.common ?? "..."}
            </p>
          </div>
          <div className=" flex flex-col gap-8   ">
            <div className="flex flex-col md:flex-row justify-between lg:justify-start lg:gap-40 gap-8">
              <section className="flex flex-col gap-2   ">
                <p>
                  <span className="font-bold">Native Name: </span>
                  {data?.[0].name.nativeName[
                    Object.keys(data[0].name.nativeName)
                  ].common ?? "..."}
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
                <p className="capitalize">
                  <span className="font-bold">Curencies: </span>
                  {data?.[0].currencies[Object.keys(currencies)].name ?? "..."}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>

                  {data?.[0].languages[Object.keys(languages)] ?? "..."}
                </p>
              </section>
            </div>
            <section className="font-bold flex w-fit flex-col gap-4 lg:flex-row lg:gap-6  ">
              <p>Border Countries: </p>
              <div className="flex items-center justify-between gap-2 lg:gap-4">
                {borders != null && borders.length > 0
                  ? borders.map((country, index) => (
                      <Link
                        to={`/${country.name.official.replace(" ", "%20")}`}
                        key={index}
                      >
                        <div
                          className={` ${currentTheme ? "bg-blue900 text-white" : "bg-white text-blue950 shadow-md"} relative flex justify-center items-center text-center py-1.5 `}
                        >
                          <p className="w-24 text-preset-6li ">
                            {country.name.common}
                          </p>
                        </div>
                      </Link>
                    ))
                  : "Loading..."}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
