import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Label, Table } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Services from "../Services/Services";
import Company from "../Company/Company";
import Portfolio from "../Portfolio/Portfolio";
import Awards from "../Awards/Awards";
import ReviewInvitaion from "../ReviewInvitation/ReviewInvitation";
import Contact from "../Contact/Contact";

const tabsData = [
  "About",
  "Services",
  "Company",
  "Portfolio",
  "Awards",
  "Reviews",
  "Contact",
];
export default function YourPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab: any = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);
  
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
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
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.34"
              d="M17.7417 18.38C15.9617 20.01 13.6017 21 11.0017 21C8.4017 21 6.04171 20.01 4.26172 18.38C4.36172 17.44 4.96171 16.52 6.03171 15.8001C8.77169 13.9801 13.2517 13.9801 15.9717 15.8001C17.0417 16.52 17.6417 17.44 17.7417 18.38Z"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 20.9999C16.5227 20.9999 20.9999 16.5227 20.9999 10.9999C20.9999 5.47713 16.5227 1 10.9999 1C5.47713 1 1 5.47713 1 10.9999C1 16.5227 5.47713 20.9999 10.9999 20.9999Z"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="font-title">Your Page</p>
        </div>
        <div className="bg-blue-gray-50 bg-opacity-60 w-full border-b-2 overflow-hidden">
          <div className="relative">
            <div className="flex space-x-3 w-full">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className={clsx(
                      "py-5  text-sm font-bold text-gray-900 z-[100] w-1/3",
                      activeTabIndex === idx && " text-white"
                    )}
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <span
              className={clsx(
                "absolute bottom-0 block h-full bg-black transition-all duration-300"
              )}
              style={{
                left: tabUnderlineLeft,
                width: tabUnderlineWidth,
              }}
            />
          </div>
        </div>
        {activeTabIndex === 0 ? (
          <About />
        ) : activeTabIndex === 1 ? (
          <Services />
        ) : activeTabIndex === 2 ? (
          <Company />
        ) : activeTabIndex === 3 ? (
          <Portfolio />
        ) : activeTabIndex === 4 ? (
          <Awards />
        ) : activeTabIndex === 5 ? (
          <ReviewInvitaion />
        ) : activeTabIndex === 6 ? (
          <Contact />
        ) : null}
      </div>
    </main>
  );
}
