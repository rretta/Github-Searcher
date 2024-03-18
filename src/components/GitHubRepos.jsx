import { useState, useEffect } from "react";
import { RepoCard } from "./RepoCard/RepoCard";

import { useParams } from "react-router-dom";
const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRepos, setTotalRepos] = useState(null);
  const { id } = useParams();

  const [totalPages, setTotalPages] = useState(1);
  const TOKEN_GITHUB = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${id}/repos?page=${page}&per_page=10&sort=updated&direction=desc`,
        {
          headers: {
            Authorization: `token ${TOKEN_GITHUB}`,
          },
        }
      );
      const data = await response.json();

      if (data.length > 0) {
        setRepos(data);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      const response = await fetch(`https://api.github.com/users/${id}`, {
        headers: {
          Authorization: `token ${TOKEN_GITHUB}`,
        },
      });
      const data = await response.json();
      setTotalRepos(data.public_repos);
      setTotalPages(Math.ceil(data.public_repos / 10));
    };

    fetchTotalPages();
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="px-4 container mx-auto  w-full   text-white">
      <div className=" flex flex-col lg:flex-row align-middle items-center justify-between ">
        <h2 className="text-xl md:text-3xl  font-bold mb-4 ">
          <span className="text-greenCountry">{totalRepos}</span> REPOSITORIOS
          PÚBLICOS
        </h2>
        <div className="flex justify-end mb-4">
          <div className="space-x-4">
            <button
              onClick={prevPage}
              disabled={page === 1}
              className={`${
                page !== 1 ? "bg-[#0CFDA7]" : "bg-[#585958]"
              } text-[#050216] px-4 py-2 font-bold rounded-md mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            >
              ANTERIOR
            </button>
            <button
              onClick={nextPage}
              disabled={page === totalPages}
              className={`${
                page !== totalPages ? "bg-[#0CFDA7]" : "bg-[#585958]"
              } text-[#050216] px-4 py-2 font-bold rounded-md mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            >
              SIGUIENTE
            </button>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {repos.length === 0 ? (
          <p>DONT HAVE PUBLIC REPOSITORYS</p>
        ) : (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        )}
      </ul>
    </div>
  );
};

export default GitHubRepos;
