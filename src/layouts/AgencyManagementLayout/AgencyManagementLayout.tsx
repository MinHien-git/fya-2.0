import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AgencyNavigationBar from "../../components/AgencyNavigationBar/AgencyNavigationBar";

export default function AgencyManagementLayout() {
  return (
    <div className="flex">
      <AgencyNavigationBar />
      <Outlet />
    </div>
  );
}
