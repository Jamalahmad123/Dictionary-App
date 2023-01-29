import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutContainer from "./components/LayoutContainer";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import SearchWord from "./components/SearchWord";

function App() {
  const [data, setData] = useState(null);

  const searchWord = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const [data] = await response.json();
      setData(data);
    } catch (error) {
      toast.error("sorry word not found!");
    }
  };

  return (
    <>
      <LayoutContainer>
        <Nav />
        <SearchWord searchWord={searchWord} />
        {data !== null && <SearchResult data={data} />}
      </LayoutContainer>
      <ToastContainer />
    </>
  );
}

export default App;
