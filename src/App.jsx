import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import SearchField from "./Search";
import { useEffect, useState } from "react";
import useFetch from "./Fetcher";
import Filter from "./Filter";
import CountryCard from "./CountryCard";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  const defaultCountries = [
    "Germany",
    "United States",
    "Brazil",
    "Iceland",
    "Afghanistan",
    "Algeria",
    "Albania",
    "Japan",
  ];

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
    if (data != null) {
      console.log(data);
    }
  }, [data]);

  return (
    <BrowserRouter>
      <div className="h-full">
        <ThemeProvider>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <MainContainer
                  setInput={setInput}
                  defaultCountries={defaultCountries}
                ></MainContainer>
              }
            ></Route>
            <Route path="/:countryName" element={<CountryDetails />}></Route>
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
