import { useState } from "react";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { SearchProvider } from "./hooks/useSearchContext";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <SearchProvider>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <CardList />
      </SearchProvider>
    </>
  );
}

export default App;
