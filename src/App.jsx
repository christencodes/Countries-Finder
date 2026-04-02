import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import SearchField from "./Search";
import Filter from "./Filter";
import CountryCard from "./CountryCard";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  const defaultCountries = [
    "Germany",
    "United States",
    "Brazil",
    "Iceland",
    "China",
    "Algeria",
    "Albania",
    "Japan",
  ];

  // useEffect(() => {
  //   if (data != null) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <HashRouter>
      <div className="h-full">
        <ThemeProvider>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <MainContainer
                  defaultCountries={defaultCountries}
                ></MainContainer>
              }
            ></Route>

            <Route path="/:countryName" element={<CountryDetails />}></Route>
          </Routes>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
}

export default App;
