import { useEffect, useState } from "react";
import { fetchSearch } from "../helpers/fetchSearch";
import GithubSvg from "../assets/images/Github";
import { Link } from "react-router-dom";
import useSearchResultsStore from "../store/useStore";
import Arrow from "../assets/images/Arrow";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { resultadosBusqueda, searchFromRepo } = useSearchResultsStore(
    (state) => state
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchFromRepo) {
      setSearchResults(resultadosBusqueda);
    }
  });

  const handleSearch = async () => {
    setIsLoading(true);
    setSearched(true);
    try {
      const data = await fetchSearch(searchTerm);

      setSearchResults(data.items || []);
    } catch (error) {
      console.error("Error searching GitHub users:", error);
      setSearchResults([]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className=" min-h-[90vh] ">
        <header className="flex flex-col lg:flex-row  justify-between gap-4   p-6">
          <div className="flex flex-row gap-4">
            <GithubSvg />
            <h1 className=" text-2xl lg:text-5xl font-bold text-white">
              Github Searcher
            </h1>
          </div>

          <div className="flex flex-row justify-around lg:w-5/12    gap-4">
            <input
              type="text"
              className="w-10/12 rounded px-4  text-white"
              placeholder="Buscar por nombre de usuario u organización"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className=" text-bgCountry  rounded-md font-bold"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" />
                <path
                  fill="#0CFDA7"
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7-.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM11.5 7a4.5 4.5 0 1 0 2.396 8.31l1.397 1.397a1 1 0 0 0 1.414-1.414l-1.397-1.397A4.5 4.5 0 0 0 11.5 7Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>
        {isLoading ? <p className="text-2xl text-center">Loading...</p> : null}

        <div className="mt-6 w-full justify-center content-center text-center  text-white">
          {searched ? (
            <p className="text-2xl">{searchResults.length} resultados</p>
          ) : (
            <div className=" flex flex-col content-center  items-center  align-middle justify-center">
              <div className="lg:ml-40 -rotate-45 lg:rotate-0 ">
                <Arrow />
              </div>
              <div className="font-mono text-4xl mt-4 lg:mr-40 ">
                <p>ingresa un nombre vinculado a GitHub para buscar </p>
              </div>
            </div>
          )}
        </div>

        <ul className="flex  flex-wrap justify-center  mt-4">
          {searchResults.map((user) => (
            <li
              key={user.id}
              className="m-4 flex lg:flex-[30%] justify-center   "
            >
              <Link to={`/user/${user.login}`}>
                <div className="flex flex-row items-center min-w-[400px]   gap-4 bg-[#12123f] p-6 rounded-xl">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-28 h-auto"
                  />
                  <p className="text-white text-xl">{user.login}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
