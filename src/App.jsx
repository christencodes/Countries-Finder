import Navbar from "./Navbar";
import ThemeObserver from "./ThemeProvider";
import MainContainer from "./MainContainer";
import Search from "./Search";
import Filter from "./Filter";

function App() {
  return (
    <div className="h-full">
      <ThemeObserver>
        <Navbar></Navbar>
        <MainContainer>
          <div className="w-full flex flex-col gap-8 ">
            <Search></Search>
            <Filter></Filter>
          </div>
        </MainContainer>
      </ThemeObserver>
    </div>
  );
}

export default App;
