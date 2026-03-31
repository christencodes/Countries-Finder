import { useTheme } from "./ThemeProvider";
import CountryCard from "./CountryCard";
import SearchField from "./Search";
import Filter from "./Filter";

export default function MainContainer({ setInput, defaultCountries }) {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`h-max py-12 px-9  ${currentTheme ? "bg-blue950" : "bg-white"}`}
    >
      <div className=" flex flex-col gap-6 md:flex-row md:justify-between">
        <SearchField setInput={setInput}></SearchField>
        <Filter></Filter>
      </div>
      <div className=" flex flex-col items-center ">
        <div className="card-container flex flex-col py-8 justify-center items-center gap-10 md:grid md:grid-cols-2  md:gap-18 lg:grid-cols-4 ">
          {defaultCountries.map((country) => (
            <CountryCard country={country}></CountryCard>
          ))}
        </div>
      </div>
    </div>
  );
}
