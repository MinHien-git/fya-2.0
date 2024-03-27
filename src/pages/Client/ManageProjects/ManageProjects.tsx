import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Table } from "flowbite-react";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
const tabsData = [
  {
    label: "Sent",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Received",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Ongoing",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Completed",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

const TABLE_HEAD: string[] = [
  "Project name",
  "Description",
  "Duration",
  "Budget",
  "Search in areas of",
  "Language(s)",
  "Date",
];

const TABLE_ROWS = [
  {
    name: "[Project Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    budget: "$10000",
    area: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    language: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    budget: "$10000",
    area: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    language: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    budget: "$10000",
    area: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    language: "English",
    date: "2021-01-01",
  },
];

export default function ManageProject() {
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
          <FontAwesomeIcon icon={faArrowsLeftRight} />
          <p className="font-title">Manage your project</p>
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
                    {tab.label}
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
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              {TABLE_HEAD.map((i) => (
                <Table.HeadCell className="capitalize">{i}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y">
              {TABLE_ROWS.map(
                ({
                  name,
                  description,
                  duration,
                  budget,
                  area,
                  language,
                  date,
                }) => (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 ">
                      {name}
                    </Table.Cell>
                    <Table.Cell className="text-xs">{description}</Table.Cell>
                    <Table.Cell className="text-xs">{duration}</Table.Cell>
                    <Table.Cell className="text-xs">{budget}</Table.Cell>
                    <Table.Cell className="text-xs">{area}</Table.Cell>
                    <Table.Cell className="text-xs">{language}</Table.Cell>
                    <Table.Cell className="text-xs">{date}</Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </main>
  );
}
