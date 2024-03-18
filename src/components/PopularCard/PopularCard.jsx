import PropTypes from "prop-types";
import Star from "../../assets/images/Star";
import Fork from "../../assets/images/Fork";
export const PopularCard = ({ popular }) => {
  return (
    <li
      key={popular.id}
      className=" w-full lg:w-full py-4 px-4 rounded-xl glass bg-[#6dbc83] bg-clip-padding bg-opacity-10 mb-4 shadow-sm  hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] "
    >
      <a href={popular.html_url} target="_blank" className=" ">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="flex flex-col py-1 justify-between">
              <h2 className="text-2xl  mb-2 font-bold">
                {popular.name.toUpperCase()}
              </h2>

              <div className="flex flex-row gap-4 ">
                <div className="flex gap-1 flex-row items-center justify-end">
                  <Star />
                  <p>{popular.stargazers_count}</p>
                </div>
                <div className="flex gap-1 flex-row items-center justify-end">
                  <Fork />
                  <p>{popular.forks}</p>
                </div>
                <div className="flex flex-row align-baseline justify-end items-center gap-1">
                  <div
                    className={` w-1 h-1  ${
                      popular.language === "JavaScript"
                        ? "border-[#ffff00] bg-[#e4e447]"
                        : ""
                    }
                  ${
                    popular.language === "TypeScript"
                      ? "border-[#4c9ed5] bg-[#4c9ed5]"
                      : ""
                  }
                   rounded-xl`}
                  ></div>
                  <p>{popular.language}</p>
                </div>
              </div>
            </div>
            {popular.description ? (
              <p className="text-gray-300">{popular.description}</p>
            ) : null}
          </div>
        </div>
      </a>
    </li>
  );
};

PopularCard.propTypes = {
  popular: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    forks: PropTypes.number,
    stargazers_count: PropTypes.number,
  }).isRequired,
};
