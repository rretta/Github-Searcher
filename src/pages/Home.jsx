import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { fetchUser } from "../helpers/fetchUser";
import GitHubRepos from "../components/GitHubRepos";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUser(id);
      setUser(data);
    };
    fetchData();
  });

  return (
    <div className="    mx-auto py-10  lg:px-10 text-white">
      <Navbar />
      <Header user={user} />

      <div className=" mx-auto">
        <div className="lg:grid lg:grid-cols-7 gap-3">
          <div className="lg:col-span-7">
            <GitHubRepos user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};
