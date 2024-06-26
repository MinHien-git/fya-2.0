import React, { useEffect, useState } from "react";
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
import { Provider } from "react-redux";
import store from "./store/store";
import ClientManagementLayout from "./layouts/ClientLayout/ClientManagementLayout";
import ClientOverview from "./pages/Client/Overview/ClientOverview";
import EditProfile from "./pages/Client/EditProfile/EditProfile";
import ManageProject from "./pages/Client/ManageProjects/ManageProjects";
import AdminManagementLayout from "./layouts/AdminLayout/AdminManagementLayout";
import AdminPage from "./pages/AdminPage/Overview/AdminPage";
import AgencyPageData from "./pages/AdminPage/AgencyData/AgencyPageData";
import BriefingsAccepted from "./pages/AdminPage/BriefingsAccepted/BriefingsAccepted";
import BriefingsSent from "./pages/AdminPage/BriefingsSent/BriefingsSent";
import CompletedProjects from "./pages/AdminPage/CompletedProjects/CompletedProjects";
import ProjectsData from "./pages/AdminPage/ProjectsData/ProjectsData";
import ProposalsAccepted from "./pages/AdminPage/ProposalsAccepted/ProposalsAccepted";
import ProposalSent from "./pages/AdminPage/ProposalsSent/ProposalsSent";
import UserData from "./pages/AdminPage/UserData/UserData";
import YourPage from "./pages/Management/YourPage/YourPage";
import Notifications from "./pages/Management/Notification/Notification";
import ProjectManager from "./pages/Management/ProjectManager/ProjectManager";
import Targeting from "./pages/Management/Targeting/targeting";
import ContructionPage from "./pages/UpcomingPage/UpcomingPage";
import Page404 from "./pages/404Page/Page404";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdvertisingFeature from "./pages/AdvertisingFeature/AdvertisingFeature";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setUser as setReduxUser } from "./features/users/userSplice";
import { requestRefreshToken } from "./api/lib/token";
import { setIp } from "./features/ip/ipSplice";
import { agencyServices } from "./components/PostProjectPopup/PostProjectPopup";
import { ResponseInterceptor } from "./components/ResponseInterceptor/ResponseInterceptor";

function App() {
  const { isOpen, toggle } = usePostProject();
  const userSelector = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const RefreshToken = async () => {
      const rft = Cookies.get("rft");
      if (rft) {
        console.log(rft);
        try {
          let result = await requestRefreshToken({ token: rft });
          console.log(result);

          if (result) {
            let { user, accesstoken } = result.data;
            if (user) {
              dispatch(setReduxUser(user));
            }
            if (accesstoken) {
              Cookies.set("at", accesstoken, { secure: true });
            }
          }
        } catch (error) {
          console.log(error);
          Cookies.set("rft", null);
        }
      }
    };
    RefreshToken();
    console.log(userSelector);
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ResponseInterceptor />
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/agencypage/:pageId" element={<AgencyPage />} />
            <Route path="/brandpage" element={<BrandPage />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/saveList" element={<SaveList />} />
            <Route
              path="/agencyIntroduction"
              element={<AgencyPageIntroduction />}
            />
            <Route path="help" element={<ContructionPage />} />

            <Route path="top-agencies" element={<TopAgencies />} />
            <Route path="auth" element={<AuthenticationPage />} />
            <Route path="subscription" element={<Subscription />} />
            <Route
              path="match-making-introduction"
              element={<MatchMakingIntroduction />}
            />
            <Route
              path="advertising-features"
              element={<AdvertisingFeature />}
            />
            <Route path="page-navigation" element={<PageCreateNavigation />} />
            <Route path="create-page" element={<CreatePage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/management/" element={<AgencyManagementLayout />}>
            <Route path="yourpage" element={<YourPage />} />
            <Route path="notification" element={<Notifications />} />
            <Route
              path="project-leads-extension/"
              element={<ProjectManager />}
            />
            <Route
              path="project-leads-extension/targeting"
              element={<Targeting />}
            />
            <Route path="advertising" element={<ContructionPage />} />
            <Route path="helps" element={<ContructionPage />} />
            <Route path="review-invitation" element={<ReviewInvitaion />} />
            {/* <Route path="yourpage/service" element={<EditService />} /> */}
            <Route path="" element={<Overview />} />
            <Route path="inbox" element={<ContructionPage />} />
            <Route path="workspace" element={<WorkingSpace />} />
            <Route path="target" element={<WorkingSpaceTarget />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/client/" element={<ClientManagementLayout />}>
            <Route path="" element={<ClientOverview />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="manage-project" element={<ManageProject />} />
            <Route path="inbox" element={<ContructionPage />} />
            <Route path="helps" element={<ContructionPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/admin/" element={<AdminManagementLayout />}>
            <Route path="" element={<AdminPage />} />
            <Route path="users-data" element={<UserData />} />
            <Route path="agency-page-data" element={<AgencyPageData />} />
            <Route path="projects-data" element={<ProjectsData />} />
            <Route path="briefings-sent-by-client" element={<BriefingsSent />} />
            <Route path="briefings-accepted-by-agency" element={<BriefingsAccepted />} />
            <Route path="proposals-sent-by-agency-to-clients-briefing" element={<ProposalSent />} />
            <Route path="proposal-accepted-by-client" element={<ProposalsAccepted />} />
            <Route path="completed-projects" element={<CompletedProjects/>} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
