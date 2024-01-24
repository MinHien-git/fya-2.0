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
import EditService from "./pages/Management/EditService/EditService";
import GuestLayout from "./layouts/GuestLayout/GuestLayout";
import AgencyManagementLayout from "./layouts/AgencyManagementLayout/AgencyManagementLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/agencypage" element={<AgencyPage />} />
            <Route path="/brandpage" element={<BrandPage />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/saveList" element={<SaveList />} />
            <Route
              path="/agencyIntroduction"
              element={<AgencyPageIntroduction />}
            />
          </Route>
          <Route path="/management/" element={<AgencyManagementLayout />}>
            <Route path="editService" element={<EditService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
