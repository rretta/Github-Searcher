import { useState } from "react";
import GithubSvg from "../../assets/images/Github";
import { fetchSearch } from "../../helpers/fetchSearch";
import { Link, useNavigate } from "react-router-dom";
import useSearchResultsStore from "../../store/useStore";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const setResultadosBusqueda = useSearchResultsStore(
    (state) => state.setResultadosBusqueda
  );
  const cambiarSearchFromRepo = useSearchResultsStore(
    (state) => state.cambiarSearchFromRepo
  );
  const setComeFromSearch = useSearchResultsStore(
    (state) => state.setComeFromSearch
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const data = await fetchSearch(searchTerm);

      setResultadosBusqueda(data.items);
      cambiarSearchFromRepo();
      navigate("/");
    } catch (error) {
      console.error("Error searching GitHub users:", error);
    }
  };

  const handleLogoClick = () => {
    setComeFromSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="flex flex-col lg:flex-row justify-between gap-4 mb-14  ">
      <div className="flex flex-row gap-4">
        <Link to="/" onClick={handleLogoClick}>
          <GithubSvg />
        </Link>

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
  );
};
