import { useState } from "react";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { SearchProvider } from "./hooks/useSearchContext";
import { ModalProvider } from "./context/modal-context";
import CardModal from "./components/CardInfo/CardInfo";


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <SearchProvider>
        <ModalProvider>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} setHeaderHeight={setHeaderHeight} />
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} headerHeight={headerHeight} />
          <CardList />
          <CardModal />
        </ModalProvider>
      </SearchProvider>
    </>
  );
}

export default App;
