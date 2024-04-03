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
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
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
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/"
                className={({ isActive, isPending }) =>
                  [
                    isPending ? "" : isActive ? "text-text bg-yellow-50" : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
                end
              >
                <FontAwesomeIcon icon={faList} />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/yourpage"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
              >
                <FontAwesomeIcon icon={faUser} />
                <p>Your Page</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/notification"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
              >
                <FontAwesomeIcon icon={faBell} />
                <p>Notification</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/inbox"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
              >
                <FontAwesomeIcon icon={faMessage} />
                <p>Inbox</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/project-leads-extension"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
                end
              >
                <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
                <p> Project Leads Extension</p>
              </NavLink>
            </li>
            <li className="text-white  w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/project-leads-extension/targeting"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-14",
                  ].join(" ")
                }
                end
              >
                <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
                <p>Targeting</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/management/advertising"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50"
                      : isActive
                      ? "text-text bg-yellow-50"
                      : "",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
              >
                <RiAdvertisementFill />
                <p> Advertising</p>
              </NavLink>
            </li>
          </ul>
          <ul className="grid gap-1 mt-auto">
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <NavLink to="/subscription" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faArrowUpFromBracket} /> Updates from Fya
              </NavLink>
            </li>
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <NavLink to="/management" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} /> Helps
              </NavLink>
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
