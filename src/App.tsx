import React from "react";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SaveList from "./pages/SaveList/SaveList";
import Footer from "./components/Footer/Footer";
import BrandPage from "./pages/BrandPage/BrandPage";
import AgencyPage from "./pages/AgencyPage/AgencyPage";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencypage" element={<AgencyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
