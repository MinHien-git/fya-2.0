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

const tabsData = [
  {
    name: "General",
    icons: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="20"
          width="20"
          height="20"
          rx="3"
          transform="rotate(-90 0 20)"
          fill="#F9FBFF"
        />
        <circle
          cx="5.21841"
          cy="9.99997"
          r="1.30435"
          transform="rotate(-90 5.21841 9.99997)"
          fill="#2F2E41"
        />
        <circle
          cx="9.99966"
          cy="9.99997"
          r="1.30435"
          transform="rotate(-90 9.99966 9.99997)"
          fill="#2F2E41"
        />
        <circle
          cx="14.7809"
          cy="9.99997"
          r="1.30435"
          transform="rotate(-90 14.7809 9.99997)"
          fill="#2F2E41"
        />
      </svg>
    ),
  },
  {
    name: "Project Leads Extension",
    icons: (
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
          stroke="#D9D9D9"
          stroke-width="2"
        />
        <path
          d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
          fill="#D9D9D9"
        />
      </svg>
    ),
  },
  {
    name: "Advertising Features",
    icons: (
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1C0 0.447717 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V15.8046C20 16.3569 19.5523 16.8046 19 16.8046H13.3711C12.9532 16.8046 12.5794 17.0644 12.4338 17.4561L10.9373 21.4799C10.6143 22.3484 9.38575 22.3484 9.06272 21.4799L7.56621 17.4561C7.42056 17.0644 7.04677 16.8046 6.62894 16.8046H1C0.447715 16.8046 0 16.3569 0 15.8046V1Z"
          fill="#2F2E41"
        />
        <path
          d="M9.5 13C9.5 13.2761 9.72386 13.5 10 13.5C10.2761 13.5 10.5 13.2761 10.5 13H9.5ZM10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64645 3.64645L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10 4.70711L12.8284 7.53553C13.0237 7.7308 13.3403 7.7308 13.5355 7.53553C13.7308 7.34027 13.7308 7.02369 13.5355 6.82843L10.3536 3.64645ZM10.5 13L10.5 4H9.5L9.5 13H10.5Z"
          fill="#F9FBFF"
        />
      </svg>
    ),
  },
];

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
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C7.172 0 6.5 0.672 6.5 1.5V2.19531C3.91318 2.86209 2 5.2048 2 8V14L0 16V17H6.26953C6.09344 17.3039 6.00048 17.6488 6 18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18C9.99893 17.6486 9.90529 17.3037 9.72852 17H16V16L14 14V8C14 5.2048 12.0868 2.86209 9.5 2.19531V1.5C9.5 0.672 8.828 0 8 0ZM8 4C10.206 4 12 5.794 12 8V14V14.8281L12.1719 15H3.82812L4 14.8281V14V8C4 5.794 5.794 4 8 4Z"
              fill="#000"
            />
          </svg>

          <p className="font-title">Notification</p>
        </div>
        <div className="bg-blue-gray-50 bg-opacity-60 w-full border-b-2 overflow-hidden">
          <div className="relative">
            <div className="flex space-x-3 w-full">
              {tabsData.map(({ icons, name }, idx) => {
                return (
                  <button
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className={clsx(
                      "py-5  text-sm font-bold text-gray-900 z-[100] w-1/3 flex justify-center gap-2 items-center",
                      activeTabIndex === idx && " text-white"
                    )}
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {icons}
                    {name}
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
