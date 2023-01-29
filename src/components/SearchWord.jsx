import { useState } from "react";
import { searchIcon } from "../assets";

const SearchWord = ({ searchWord }) => {
  const [word, setWord] = useState("");

  const onChange = (e) => setWord(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word !== "") {
      searchWord(word);
    }
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex items-center justify-between px-6 gap-4 p-4 rounded-2xl input-container bg-[#f4f4f4] dark:bg-darkGray">
        <input
          type="text"
          className="flex-1 text-lg font-semibold bg-transparent placeholder:text-lg outline-none focus-within:outline-none border-none placeholder:font-semibold text-[#050505] dark:text-white"
          placeholder="Search for any word..."
          name="search-word"
          value={word}
          onChange={onChange}
        />
        <button className="outline-none border-none focus-within:outline-none">
          <img src={searchIcon} alt="search Icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchWord;
