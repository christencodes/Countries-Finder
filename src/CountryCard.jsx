import { useTheme } from "./ThemeProvider";
import useFetch from "./Fetcher";
import { useEffect } from "react";

export default function CountryCard() {
  const { data } = useFetch(
    `https://restcountries.com/v3.1/name/Japan/?fullText=true`,
    1,
  );

  // let img, population, region, capital;

  useEffect(() => {
    if (data != null) {
      console.log(data[0]);
    }
  }, [data]);

  return (
    <div className="country-card max-w-84 w-full bg-white grid grid-rows-[303px_auto] ">
      <img src={data != null ? data[0].flags.png : ""} alt="" />
      <div className="card-info ">
        <p></p>
        <section>
          <p>Population</p>
          <p>Region</p>
          <p>Capital</p>
        </section>
      </div>
    </div>
  );
}
