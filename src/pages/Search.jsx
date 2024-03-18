import { useEffect, useState } from "react";
import { fetchSearch } from "../helpers/fetchSearch";
import GithubSvg from "../assets/images/Github";
import { Link } from "react-router-dom";
import useSearchResultsStore from "../store/useStore";

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
        <header className="flex flex-col lg:flex-row  justify-between gap-4 p-6">
          <div className="flex flex-row gap-4">
            <GithubSvg />
            <h1 className=" text-2xl lg:text-5xl font-bold text-white">
              Github Searcher
            </h1>
          </div>

          <div className="flex flex-row lg:w-5/12  gap-4">
            <input
              type="text"
              className="w-full rounded px-4  text-white"
              placeholder="Buscar por nombre de usuario"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-greenCountry text-bgCountry p-2 rounded-md font-bold"
              onClick={handleSearch}
            >
              BUSCAR
            </button>
          </div>
        </header>
        {isLoading ? <p>Loading...</p> : null}

        <div className="mt-6 w-full justify-center content-center text-center  text-white">
          {searched ? <p>{searchResults.length} resultados</p> : null}
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
