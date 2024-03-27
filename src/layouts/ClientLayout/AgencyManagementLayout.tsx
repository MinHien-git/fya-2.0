import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AgencyNavigationBar from "../../components/AgencyNavigationBar/AgencyNavigationBar";
import ClientNavigationBar from "../../components/ClientNavigationBar/ClientNavigationBar";

export default function ClientManagementLayout() {
  return (
    <div className="flex overflow-hidden h-[100vh]">
      <ClientNavigationBar />
      <Outlet />
    </div>
  );
}
