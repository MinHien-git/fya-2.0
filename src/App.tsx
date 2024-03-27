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
import Services from "./pages/Management/Services/Services";
import ProjectLeadsExtension from "./pages/Management/ProjectLeadsExtension/ProjectLeadsExtension";
import Contact from "./pages/Management/Contact/Contact";
import Overview from "./pages/Management/Overview/Overview";
import TopAgencies from "./pages/TopAgencies/TopAgencies";
import Subscription from "./pages/Subscription/Subscription";
import WorkingSpace from "./pages/Management/WorkingSpace/WorkingSpace";
import WorkingSpaceTarget from "./pages/Management/WorkingSpaceTarget/WorkingSpaceTarget";
import MatchMakingIntroduction from "./pages/MatchMakingIntroduction/MatchMakingIntroduction";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import PageCreateNavigation from "./pages/PageCreateNavigation/PageCreateNavigation";
import CreatePage from "./pages/CreatePage/CreatePage";
import usePostProject from "./hooks/usePostProjectPopup";
import PostProjectModal from "./components/PostProjectPopup/PostProjectPopup";
import { Provider } from "react-redux";
import store from "./store/store";
import ClientManagementLayout from "./layouts/ClientLayout/AgencyManagementLayout";
import ClientOverview from "./pages/Client/Overview/ClientOverview";
import EditProfile from "./pages/Client/EditProfile/EditProfile";
import ManageProject from "./pages/Client/ManageProjects/ManageProjects";
function App() {
  const { isOpen, toggle } = usePostProject();

  return (
    <>
      <Provider store={store}>
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
              <Route path="top-agencies" element={<TopAgencies />} />
              <Route path="auth" element={<AuthenticationPage />} />
              <Route path="subscription" element={<Subscription />} />
              <Route
                path="match-making-introduction"
                element={<MatchMakingIntroduction />}
              />
              <Route
                path="page-navigation"
                element={<PageCreateNavigation />}
              />
              <Route path="create-page" element={<CreatePage />} />
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
              <Route path="manage-portfolio" element={<ManagePortfolio />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route
                path="project-leads-extension"
                element={<ProjectLeadsExtension />}
              />
              <Route path="review-invitation" element={<ReviewInvitaion />} />
              <Route path="services" element={<Services />} />
              <Route path="" element={<Overview />} />
              <Route path="workspace" element={<WorkingSpace />} />
              <Route path="target" element={<WorkingSpaceTarget />} />
            </Route>
            <Route path="/client/" element={<ClientManagementLayout />}>
              <Route path="" element={<ClientOverview />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="manage-project" element={<ManageProject />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
