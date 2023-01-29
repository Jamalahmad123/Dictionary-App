import { useState, useEffect } from "react";

const FontPicker = () => {
  const [fontFamily, setFontFamily] = useState("choose-font");

  // changing font family
  const selectFontFamily = (e) => {
    setFontFamily(e.target.value);
  };

  useEffect(() => {
    if (fontFamily !== "choose-font") {
      document.documentElement.style.fontFamily = fontFamily;
    }
  }, [fontFamily]);

  return (
    <select
      id="font-family"
      value={fontFamily}
      onChange={selectFontFamily}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-bold sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[250px] p-2.5 dark:bg-darkGray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="choose-font" className="text-lg font-bold">
        Choose font
      </option>
      <option value="sans-serif" className="text-lg font-semibold">
        Sans-Serif
      </option>
      <option value="monospace" className="text-lg font-semibold">
        MonoSpace
      </option>
      <option value="cursive" className="text-lg font-semibold">
        Cursive
      </option>
    </select>
  );
};

export default FontPicker;
