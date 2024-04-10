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
import { useSelector } from "react-redux";
export default function ClientNavigationBar() {
  const userSelector = useSelector((state: any) => state.user.value);

  return (
    <aside className="bg-dark_blue h-[100vh] max-w-[18rem] min-w-[15rem] rounded-b-xl">
      <div className="flex flex-col justify-center w-full h-[100vh]">
        <header className="flex flex-col gap-3 w-full h-fit">
          <Link to="/" className="w-full flex flex-col items-center">
            <img
              src="/static/images/Logo2.svg"
              alt="logo"
              className="w-[3.5rem] mt-1"
            />
          </Link>
          <hr className="w-full" />
        </header>
        <nav className="h-[90%] grid items-start pt-2">
          <ul className="grid gap-1">
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text group">
              <NavLink
                to="/client/"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? ""
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.57671 9.72088V16.5859M23.5952 15.4418V7.66136C23.5952 6.37977 23.5952 5.73896 23.3457 5.24946C23.1264 4.81888 22.7763 4.4688 22.3457 4.24942C21.8563 4 21.2154 4 19.9338 4H6.66136C5.37977 4 4.73897 4 4.24946 4.24942C3.81888 4.4688 3.4688 4.81888 3.24942 5.24946C3 5.73896 3 6.37977 3 7.66136V18.6455C3 19.927 3 20.5679 3.24942 21.0574C3.4688 21.4879 3.81888 21.8381 4.24946 22.0574C4.73897 22.3068 5.37977 22.3068 6.66136 22.3068H13.2976M13.2976 14.2976H14.2102C14.7193 14.2976 14.9738 14.2976 15.2158 14.3506C15.4304 14.3976 15.6371 14.4753 15.8297 14.5812C16.0466 14.7007 16.2381 14.8683 16.6213 15.2035L23.4406 21.1704C24.1435 21.7854 24.1795 22.8667 23.5191 23.5271C22.9181 24.1281 21.954 24.1603 21.3143 23.6005L14.5479 17.68C14.0879 17.2774 13.8578 17.0761 13.6926 16.8329C13.5462 16.6172 13.4377 16.3782 13.372 16.1261C13.2976 15.8417 13.2976 15.5359 13.2976 14.9245V14.2976Z"
                    className="group-hover:stroke-black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/client/edit-profile"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M11.1226 11.78C11.0526 11.77 10.9626 11.77 10.8826 11.78C9.12265 11.72 7.72266 10.28 7.72266 8.50996C7.72266 6.69997 9.18265 5.22998 11.0026 5.22998C12.8126 5.22998 14.2826 6.69997 14.2826 8.50996C14.2726 10.28 12.8826 11.72 11.1226 11.78Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="group-hover:stroke-black"
                  />
                  <path
                    opacity="0.34"
                    d="M17.7417 18.38C15.9617 20.01 13.6017 21 11.0017 21C8.4017 21 6.04171 20.01 4.26172 18.38C4.36172 17.44 4.96171 16.52 6.03171 15.8001C8.77169 13.9801 13.2517 13.9801 15.9717 15.8001C17.0417 16.52 17.6417 17.44 17.7417 18.38Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="group-hover:stroke-black"
                  />
                  <path
                    d="M10.9999 20.9999C16.5227 20.9999 20.9999 16.5227 20.9999 10.9999C20.9999 5.47713 16.5227 1 10.9999 1C5.47713 1 1 5.47713 1 10.9999C1 16.5227 5.47713 20.9999 10.9999 20.9999Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="group-hover:stroke-black"
                  />
                </svg>
                <p>Edit Info</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/client/notification"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:fill-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:fill-black"
                      : "[&_path]:fill-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C7.172 0 6.5 0.672 6.5 1.5V2.19531C3.91318 2.86209 2 5.2048 2 8V14L0 16V17H6.26953C6.09344 17.3039 6.00048 17.6488 6 18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18C9.99893 17.6486 9.90529 17.3037 9.72852 17H16V16L14 14V8C14 5.2048 12.0868 2.86209 9.5 2.19531V1.5C9.5 0.672 8.828 0 8 0ZM8 4C10.206 4 12 5.794 12 8V14V14.8281L12.1719 15H3.82812L4 14.8281V14V8C4 5.794 5.794 4 8 4Z"
                    className="group-hover:fill-black"
                  />
                </svg>
                <p> Notification</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/client/inbox"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5556 7.25H5.44444M16.5556 12.25H11M0.999999 21L4.69367 18.9222C4.97367 18.7647 5.11367 18.686 5.26044 18.6305C5.39067 18.5813 5.52478 18.5456 5.66089 18.5241C5.81422 18.5 5.97078 18.5 6.28378 18.5H17.4444C18.689 18.5 19.3113 18.5 19.7866 18.2275C20.2048 17.9879 20.5447 17.6054 20.7578 17.135C21 16.6003 21 15.9001 21 14.5V5C21 3.59986 21 2.8998 20.7578 2.36503C20.5447 1.89461 20.2048 1.51216 19.7866 1.27249C19.3113 1 18.689 1 17.4444 1H4.55556C3.311 1 2.68866 1 2.21333 1.27249C1.79522 1.51216 1.45522 1.89461 1.24222 2.36503C1 2.8998 0.999999 3.59987 0.999999 5V21Z"
                    className="group-hover:stroke-black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Inbox</p>
              </NavLink>
            </li>
            <li className="text-white   w-full  text-sm font-title font-bold hover:bg-yellow-50 hover:text-text">
              <NavLink
                to="/client/manage-project"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:fill-black [&_rect]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:fill-black [&_rect]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9] [&_rect]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="3"
                    stroke-width="2"
                    className="group-hover:stroke-black"
                  />
                  <path
                    d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
                    className="group-hover:fill-black group-hover:stroke-black"
                  />
                </svg>
                <p>Manage your Projects</p>
              </NavLink>
            </li>
          </ul>
          <ul className="grid gap-1 mt-auto">
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <Link to="/subscription" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faArrowUpFromBracket} /> Updates from Fya
              </Link>
            </li>
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title font-bold flex items-center gap-4 hover:bg-yellow-50 hover:text-text">
              <Link to="/client/helps" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} /> Helps
              </Link>
            </li>

            <li className="pl-8 text-white w-full py-6 mt-auto hover:bg-yellow-50 group">
              <Link to="/client">
                <div className="flex gap-2 items-center ">
                  <div className="bg-white h-8 aspect-square rounded-full group-hover:border-2 border-text"></div>
                  <div className="grid">
                    <p className="text-sm font-title group-hover:text-text font-bold">
                      {userSelector?.fname} {userSelector?.lname}{" "}
                    </p>{" "}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
