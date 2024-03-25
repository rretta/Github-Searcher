import PropTypes from "prop-types";
import Link from "../../assets/images/Link";
import LocationSvg from "../../assets/images/Location";
export const Header = ({ user }) => {
  return (
    <header className="flex  flex-row   px-4 lg:px-10  items-start my-4 ">
      <div className="flex flex-row gap-4 h-full   w-full ">
        <img
          src={user.avatar_url}
          className="hidden md:inline md:w-52 md:h-52 rounded-xl  "
        />
        <div className="gap-3  flex flex-col">
          <div className="flex flex-row items-baseline gap-2">
            <h2 className="text-3xl md:text-7xl  text-white font-bold  text-center mb-2">
              {user.name}
            </h2>
            <a
              href={user.html_url}
              className="font-bold lg:text-2xl  text-[#1A96F2]"
              target="_blank"
            >
              @{user.login}
            </a>
          </div>
          <p>{user.bio}</p>
          <div className="flex flex-row gap-1">
            <LocationSvg /> <p>{user.location}</p>
          </div>
          <div className="flex flex-row gap-1">
            <a href={`https://${user.blog}`} target="_blank">
              <Link />
            </a>
            <p>{user.blog}</p>
          </div>
        </div>
        <a href={user.html_url} className="mt-2" target="_blank"></a>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="  flex flex-row gap-6">
          <div className="stat p-0 ">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title text-white">Seguidores</div>
            <div className="stat-value text-greenCountry text-right">
              {user.followers}
            </div>
            <div className="stat-desc"></div>
          </div>
        </div>
        <div className=" flex flex-row gap-6">
          <div className="stat p-0 ">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title text-white">Siguiendo</div>
            <div className="stat-value text-greenCountry text-right">
              {user.following}
            </div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
    blog: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};
