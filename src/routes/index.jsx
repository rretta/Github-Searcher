// index.jsx

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { FullWithLayout } from "../hocs/layouts/FullWithLayout.jsx";
import { Search } from "../pages/Search.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FullWithLayout />}>
        <Route index element={<Search />} />
        <Route path="/user/:id" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
};
