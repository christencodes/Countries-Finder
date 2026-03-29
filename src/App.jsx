import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import ThemeObserver from "./ThemeProvider";
import MainContainer from "./MainContainer";
import Search from "./Search";
import Filter from "./Filter";

import useFetch from "./Fetching";

function App() {
  //query comes from search
  const [query, setQuery] = useState(null);
  const [timedQuery, setTimedQuery] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedQuery();
    }, 500);
  }, [query]);

  function userInput(input) {
    setQuery(input);
  }

  /*
  this will update when query updates
  ? setQuery causes re-render 
  * useFetch template literal updates 
  * isData is updated ---> we need to place isData somewhere

   */
  const { isData } = useFetch(
    ` https://restcountries.com/v3.1/name/${timedQuery}?fullText=true`,
  );

  return (
    <div className="h-full">
      <ThemeObserver>
        <Navbar></Navbar>
        <MainContainer>
          <div className="w-full flex flex-col gap-8 ">
            <Search userInput={userInput}></Search>
            <Filter></Filter>
          </div>
        </MainContainer>
      </ThemeObserver>
    </div>
  );
}

export default App;
