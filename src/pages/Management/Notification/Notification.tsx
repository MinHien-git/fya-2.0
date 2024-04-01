import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Label, Table } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import General from "../General/General";
import ProjectLeadsExtension from "../ProjectLeadsExtension/ProjectLeadsExtension";
import AdvertisingFeatures from "../AdvertisingFeatures/AdvertisingFeatures";

const tabsData = ["General", "Project Leads Extension", "Advertising Features"];

export default function Notifications() {
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
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <FontAwesomeIcon icon={faArrowsLeftRight} />
          <p className="font-title">Notification</p>
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
                "absolute bottom-0 block h-full bg-black transition-all duration-300",
                activeTabIndex === 0 && "bg-black",
                activeTabIndex === 1 && "bg-primary",
                activeTabIndex === 2 && "bg-secondary"
              )}
              style={{
                left: tabUnderlineLeft,
                width: tabUnderlineWidth,
              }}
            />
          </div>
        </div>
        {activeTabIndex === 0 ? (
          <General />
        ) : activeTabIndex === 1 ? (
          <ProjectLeadsExtension />
        ) : activeTabIndex === 2 ? (
          <AdvertisingFeatures />
        ) : null}
      </div>
    </main>
  );
}
