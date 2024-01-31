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
import Portfolio from "./pages/Management/Portfolio/Portfolio";
import About from "./pages/Management/About/About";
import AdvertisingFeatures from "./pages/Management/AdvertisingFeatures/AdvertisingFeatures";
import Awards from "./pages/Management/Awards/Awards";
import Company from "./pages/Management/Company/Company";
import General from "./pages/Management/General/General";
import ManagePortfolio from "./pages/Management/ManagePortfolio/ManagePortfolio";
import ReviewInvitaion from "./pages/Management/ReviewInvitation/ReviewInvitation";
import Reviews from "./pages/Management/Reviews/Reviews";
import Services from "./pages/Management/Services/Services";
import ViewReview from "./pages/Management/ViewReview/ViewReview";
import ProjectLeadsExtension from "./pages/Management/ProjectLeadsExtension/ProjectLeadsExtension";
import Contact from "./pages/Management/Contact/Contact";

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
            <Route path="about" element={<About />} />
            <Route
              path="advertising-features"
              element={<AdvertisingFeatures />}
            />
            <Route path="awards" element={<Awards />} />
            <Route path="company" element={<Company />} />
            <Route path="contact" element={<Contact />} />
            <Route path="edit-service" element={<EditService />} />
            <Route path="general" element={<General />} />
            <Route path="manageport-portfolio" element={<ManagePortfolio />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route
              path="project-leads-extension"
              element={<ProjectLeadsExtension />}
            />
            <Route path="review-invitation" element={<ReviewInvitaion />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="services" element={<Services />} />
            <Route path="view-review" element={<ViewReview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
