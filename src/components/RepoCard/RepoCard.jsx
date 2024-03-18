import PropTypes from "prop-types";
import Star from "../../assets/images/Star";
import Fork from "../../assets/images/Fork";
export const RepoCard = ({ repo }) => {
  function formatLastUpdate(updatedAt) {
    const updatedDate = new Date(updatedAt);
    const currentDate = new Date();
    const timeDifference = currentDate - updatedDate;
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursDifference < 24) {
      return `last update ${hoursDifference} hours ago`;
    } else {
      const daysDifference = Math.floor(hoursDifference / 24);
      return `last update ${daysDifference} days ago`;
    }
  }

  const update = formatLastUpdate(repo.updated_at);

  return (
    <li
      key={repo.id}
      className="  w-full lg:w-full py-4 px-4 rounded-xl  bg-[#12123f]  align-baseline flex flex-col  justify-between  bg-clip-padding bg-opacity-100 mb-4 shadow-sm  hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]"
    >
      <a href={repo.html_url} target="_blank" className=" ">
        <div className=" flex  items-center">
          <div className=" flex-1">
            <div className="flex flex-col overflow-hidden lg:flex-row justify-between">
              <h2 className=" text-l lg:text-2xl mb-2 font-bold truncate ">
                {repo.name.toUpperCase()}
              </h2>
              <div className="flex flex-row gap-4  ">
                <div className="flex flex-row align-baseline justify-end items-center  gap-1">
                  <div
                    className={` w-1 h-1  ${
                      repo.language === "JavaScript"
                        ? "border-[#ffff00] bg-[#e4e447]"
                        : ""
                    }
                  ${
                    repo.language === "TypeScript"
                      ? "border-[#4c9ed5] bg-[#4c9ed5]"
                      : ""
                  }
                   rounded-xl`}
                  ></div>
                  <p>{repo.language}</p>
                </div>
                <div className="flex gap-1 flex-row items-center justify-end">
                  <Star />
                  <p>{repo.stargazers_count}</p>
                </div>
                <div className="flex gap-1 flex-row items-center justify-end">
                  <Fork />
                  <p>{repo.forks}</p>
                </div>
              </div>
            </div>

            {repo.description ? (
              <p className="text-gray-300">{repo.description}</p>
            ) : null}
          </div>
        </div>
      </a>
      <p className="text-right italic  ">{update}</p>
    </li>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    forks: PropTypes.number,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    updated_at: PropTypes.string,
  }).isRequired,
};
