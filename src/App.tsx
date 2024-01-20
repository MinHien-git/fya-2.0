import React from "react";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SaveList from "./pages/SaveList/SaveList";
import Footer from "./components/Footer/Footer";
import BrandPage from "./pages/BrandPage/BrandPage";
import AgencyPage from "./pages/AgencyPage/AgencyPage";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import SearchResult from "./pages/SearchResult/SearchResult";
import AgencyPageIntroduction from "./pages/AgencyPageIntroduction/AgencyPageIntroduction";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencypage" element={<AgencyPage />} />
          <Route path="/brandpage" element={<BrandPage />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/saveList" element={<SaveList />} />
          <Route
            path="/agencyIntroduction"
            element={<AgencyPageIntroduction />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
