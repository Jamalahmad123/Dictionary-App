import { linkIcon, playIcon } from "../assets";
import { useAudio } from "../Hooks/customHooks";

const SearchResult = ({ data }) => {
  const findPartOfSpeen = (partOfSpeech) => {
    const data = meanings?.find((item) => item.partOfSpeech === partOfSpeech);
    return data;
  };

  const checkPropertyValue = (arr) =>
    arr?.find((item) => item.audio !== "" && item);

  const { meanings, phonetics, sourceUrls, word } = data;

  const nounData = findPartOfSpeen("noun");

  const verbData = findPartOfSpeen("verb");

  const { text, audio } = checkPropertyValue(phonetics);

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between pt-8">
        <header>
          <h1 className="text-darkGray dark:text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            {word}
          </h1>
          {text && (
            <p className="text-purple text-lg mt-2 font-semibold">{text}</p>
          )}
        </header>
        <button
          className="outline-none border-none focus-within:outline-none"
          onClick={() => playAudio(audio)}
        >
          <img src={playIcon} alt="play audio icon" />
        </button>
      </div>
      <div>
        <div className="flex items-center gap-6">
          <p className="text-darkGray dark:text-white text-xl md:text-2xl font-bold">
            {nounData?.partOfSpeech}
          </p>
          <div className="w-full h-[1px] bg-[#e9e9e9] dark:bg-[#3a3a3a]"></div>
        </div>
        <p className="text-lg sm:text-xl text-gray-500 mt-8 mb-12">Meaning</p>
        <ul className="list-outside p-4 list-disc marker:text-purple text-darkGray dark:text-white space-y-3">
          {nounData?.definitions.map(({ definition }) => (
            <li key={definition} className="text-base sm:text-lg">
              {definition}
            </li>
          ))}
        </ul>
        {nounData?.synonyms.length !== 0 && (
          <div className="mt-8 flex items-start gap-6">
            <p className="text-gray-500 text-lg sm:text-xl">Synonyms</p>
            <ul className="flex items-center flex-wrap gap-3">
              {nounData?.synonyms?.map((synonym) => (
                <li key={synonym} className="text-purple text-base sm:text-lg">
                  {synonym}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {verbData && (
        <div>
          <div className="flex items-center gap-6">
            <p className="text-darkGray dark:text-white text-xl md:text-2xl font-bold">
              {verbData?.partOfSpeech}
            </p>
            <div className="w-full h-[1px] bg-[#e9e9e9] dark:bg-[#3a3a3a]"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-500 mt-8 mb-12">Meaning</p>
          <ul className="list-outside p-4 list-disc marker:text-purple text-darkGray dark:text-white space-y-3">
            {verbData?.definitions.map((definition) => (
              <li key={definition.definition} className="text-base sm:text-lg">
                {definition.definition}
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-500 pl-5 mt-4">
            {verbData?.definitions?.[0]?.example}
          </p>
        </div>
      )}
      <div className="border-t-[1.7px] border-[#e9e9e9] dark:border-[#3a3a3a]">
        <p className="pt-6 flex items-start gap-2 flex-wrap">
          <span className="text-gray-500 border-b border-gray-500">Soure</span>
          <a
            href={sourceUrls?.[0]}
            target="_blank"
            rel="noreferrel"
            className="text-gray-500 dark:text-white"
          >
            {sourceUrls?.[0]}
            <img src={linkIcon} alt="icon link" className="inline-block ml-3" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default SearchResult;
