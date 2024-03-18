import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const FullWithLayout = () => {
  return (
    <div className="bg-[#090940]      ">
      <Outlet />
      <Footer />
    </div>
  );
};
