import { RiAdvertisementFill } from "react-icons/ri";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faArrowsLeftRightToLine,
  faBell,
  faCircleQuestion,
  faList,
  faMessage,
  faQuestion,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function AgencyNavigationBar() {
  return (
    <aside className="bg-dark_blue h-[100vh] max-w-[18rem] min-w-[15rem] rounded-b-xl">
      <div className="flex flex-col justify-center w-full h-[100vh]">
        <header className="flex flex-col gap-3 w-full h-fit">
          <span className="w-full flex flex-col items-center">
            <img
              src="/static/images/Logo2.svg"
              alt="logo"
              className="w-[3.5rem] mt-1"
            />
          </span>
          <hr className="w-full" />
        </header>
        <nav className="h-[90%] grid items-start pt-2">
          <ul className="grid gap-1">
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link to="/management" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faList} />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link
                to="/management/yourpage"
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faUser} />
                <p>Your Page</p>
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link
                to="/management/notification"
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faBell} />
                <p> Notification</p>{" "}
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link to="/management" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faMessage} />
                <p>Inbox</p>
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link
                to="/management/project-leads-extension"
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
                <p> Project Leads Extension</p>
              </Link>
            </li>
            <li className="pl-16 text-white w-full py-4 text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <Link
                to="/management/project-leads-extension/targeting"
                className="flex items-center gap-4"
              >
                <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
                <p>Targeting</p>
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <Link to="/management" className="flex items-center gap-4">
                <RiAdvertisementFill />
                <p> Advertising</p>
              </Link>
            </li>
          </ul>
          <ul className="grid gap-1 mt-auto">
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <Link to="/management" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faArrowUpFromBracket} /> Updates from Fya
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <Link to="/management" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} /> Helps
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-6 mt-auto border-b-2 text-sm font-title">
              <div className="flex gap-2 items-center">
                <div className="bg-white h-8 aspect-square rounded-full"></div>
                <div className="grid">
                  <p className="text-sm">Your Agency</p>{" "}
                  <a className="underline text-sm">See Agency Page</a>
                </div>
              </div>
            </li>
            <li className="pl-8 text-white w-full py-6 mt-auto">
              <div className="flex gap-2 items-center">
                <div className="bg-white h-8 aspect-square rounded-full"></div>
                <div className="grid">
                  <p className="text-sm font-title">Personal Acc...</p>{" "}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
