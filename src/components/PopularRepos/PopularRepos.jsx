import { useEffect, useState } from "react";
import { fetchPopularRepos } from "../../helpers/fetchPopularRepos";
import { PopularCard } from "../PopularCard/PopularCard";

export const PopularRepos = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPopularRepos();
      setPopulars(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl py-4 text-center lg:text-right md:text-3xl  font-bold pr-2 ">
        POPULARES
      </h2>

      <ul className="flex px-4 lg:px-0 flex-col gap-4">
        {populars.map((popular) => (
          <PopularCard key={popular.id} popular={popular} />
        ))}
      </ul>
    </>
  );
};
