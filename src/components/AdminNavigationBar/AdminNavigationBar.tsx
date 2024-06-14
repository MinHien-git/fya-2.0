import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AdminNavigationBar({ isOpen }) {
  const userSelector = useSelector((state: any) => state.user.value);

  return (
    <aside className={`bg-border h-screen rounded-br-xl ${!isOpen && 'hidden'}`}>
      <div className="flex flex-col justify-center w-full h-screen">
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
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12 group">
              <NavLink
                to="/admin"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 text-xs",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
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
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/users-data"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
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
                <p>User's Data</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/agency-page-data"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Agency Page Data</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/projects-data"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:fill-black [&_rect]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:fill-black [&_rect]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9] [&_rect]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 pl-8 group text-xs",
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
                  className="flex-shrink-0"
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
                <p>Projects Data</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/briefings-sent-by-client"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 px-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Briefings sent by client</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/briefings-accepted-by-agency"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 px-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Briefings accepted by agency</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/proposals-sent-by-agency-to-clients-briefing"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 px-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Proposals sent by agency to client's briefing</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/proposal-accepted-by-client"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 px-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Proposal accepted by client</p>
              </NavLink>
            </li>
            <li className="text-white w-full text-sm font-title font-bold hover:bg-yellow-50 hover:text-text h-12">
              <NavLink
                to="/admin/completed-projects"
                className={({ isActive, isPending }) =>
                  [
                    isPending
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : isActive
                      ? "text-text bg-yellow-50 [&_path]:stroke-black"
                      : "[&_path]:stroke-[#D9D9D9]",
                    "flex items-center gap-4 h-full w-full py-4 px-8 group text-xs",
                  ].join(" ")
                }
                end
              >
                <svg 
                  width="24" 
                  height="19" 
                  viewBox="0 0 17 19" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path 
                  d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
                  className="group-hover:stroke-black"
                  />
                </svg>
                <p>Completed projects</p>
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
              <Link to="/admin/helps" className="flex items-center gap-4">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} /> Helps
              </Link>
            </li>

            <li className="pl-8 text-white w-full py-6 mt-auto hover:bg-yellow-50 group">
              <Link to="/admin">
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
