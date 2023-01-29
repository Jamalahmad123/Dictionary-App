import { useEffect, useState } from "react";
import { logo, moonIcon } from "../assets";
import FontPicker from "./FontPicker";

const Nav = () => {
  const [theme, setTheme] = useState(false);

  // setting theme
  const themeToggle = () => setTheme((prev) => !prev);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="flex items-center gap-8">
      <div className="flex-1">
        <img src={logo} alt="dictionary app logo" />
      </div>
      <div className="flex items-center gap-2">
        <FontPicker />
        <div className="w-[2px] h-8 bg-gray-200"></div>
        <div className="flex items-center justify-center w-full ml-2">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            {/* <!-- toggle --> */}
            <div className="relative">
              {/* <!-- input --> */}
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                checked={theme}
                onChange={themeToggle}
              />
              {/* <!-- line --> */}
              <div className="block bg-gray-600 w-12 h-6 rounded-full bg-toggle"></div>
              {/* <!-- dot --> */}
              <div className="dot absolute left-0 top-0 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            {/* <!-- label --> */}
            <div className="ml-4 text-gray-700 font-medium">
              {/* Toggle Me! */}
              <img src={moonIcon} alt="moon icon" />
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

/*

<button
                className="text-lg flex items-center gap-2 text-darkGray dark:text-white"
                onClick={dropDownToggle}
              >
                <span className="block truncate font-bold">Sans-Serif</span>
                <span className="cursor-pointer">
                  <img
                    src={arrowDownIcon}
                    alt="chevron down icon"
                    className="min-w-[15px]"
                  />
                </span>
              </button>
              {dropdown && (
                <ul className="absolute py-6 px-4 max-w-[270px] bg-white text-darkGray dark:bg-darkGray dark:text-white rounded-lg shadow-lg space-y-2">
                  <li className="block truncate font-bold text-lg hover:text-purple cursor-pointer transition-colors">
                    Sans-Serif
                  </li>
                  <li className="block truncate font-bold text-lg hover:text-purple cursor-pointer transition-colors">
                    Monospace
                  </li>
                  <li className="block truncate font-bold text-lg hover:text-purple cursor-pointer transition-colors">
                    Cursive
                  </li>
                </ul>
              )}
*/
