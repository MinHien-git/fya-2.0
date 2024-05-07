import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AgencyNavigationBar from "../../components/AgencyNavigationBar/AgencyNavigationBar";
import {
  setDescription,
  setPage as setPageRedux,
  setTagline,
  setTeamMember,
} from "../../features/pages/pageSplice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetManagePage } from "../../api/lib/page";

export default function AgencyManagementLayout() {
  const userSelector = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPage() {
      if (userSelector) {
        let result = await GetManagePage(userSelector.id);
        console.log(result);
        dispatch(setPageRedux(result?.data?.data));
      } else {
        navigate("/");
      }
      //dispatch(setPage(result));
    }
    getPage();
  }, []);
  return (
    <div className="flex overflow-hidden h-[100vh]">
      <AgencyNavigationBar />
      <Outlet />
    </div>
  );
}
