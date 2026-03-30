import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import SearchField from "./Search";
import { useEffect, useState } from "react";
import useFetch from "./Fetcher";
import Filter from "./Filter";
import CountryCard from "./CountryCard";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

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
  }, [data]);

  return (
    <div className="h-full">
      <ThemeProvider>
        <Navbar></Navbar>
        <MainContainer>
          <div className=" flex flex-col gap-6">
            <SearchField setInput={setInput}></SearchField>
            <Filter></Filter>
          </div>
          <CountryCard></CountryCard>
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
