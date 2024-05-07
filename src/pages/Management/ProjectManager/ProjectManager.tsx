import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, FileInput, Label, Table, TextInput } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Option,
  Rating,
  Textarea,
  Typography,
  Select,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GetNewProject } from "../../../api/lib/admin";
import RatingProposal from "../../../components/RatingProposal/RatingProposal";
import SubmitProposal from "../../../components/SubmitProposal/SubmitProposal";
const tabsData = ["New", "Open", "Won", "Archived"];
export default function ProjectManager() {
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
              stroke="#000"
              stroke-width="2"
            />
            <path
              d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
              fill="#000"
            />
          </svg>

          <p className="font-title">Project Leads Extension</p>
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
          <SentProject />
        ) : activeTabIndex === 1 ? (
          <SentProject />
        ) : activeTabIndex === 2 ? (
          <RecieveProposal />
        ) : (
          <RecieveProposal />
        )}
      </div>
    </main>
  );
}

const TABLE_HEAD: string[] = [
  "Project’s name",
  "Client’s name",
  "Company’s name",
  "Budget",
  "Contacts",
  "Status",
  "Date",
];

const TABLE_ROWS = [
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "(Hidden until Accepted)",
    companyName: "(Hidden until Accepted)",
    budget: "$100-1000",
    contacts: "(Hidden until Accepted)",
    status: "New",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "(Hidden until Accepted)",
    companyName: "(Hidden until Accepted)",
    budget: "$100-1000",
    contacts: "(Hidden until Accepted)",
    status: "New",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "(Hidden until Accepted)",
    companyName: "(Hidden until Accepted)",
    budget: "$100-1000",
    contacts: "(Hidden until Accepted)",
    status: "New",
    date: "2021-01-01",
  },
];

function SentProject() {
  const [toggle, setToggle] = useState(false);
  const [projects, setProjects] = useState<any>([]);
  const [currentId, setCurrentId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      let result = await GetNewProject();
      console.log(result);
      setProjects(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          {TABLE_HEAD.map((i) => (
            <Table.HeadCell className="capitalize text-center border-l-2">
              {i}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y [&>*]:text-center">
          {projects.map(
            ({
              project_id,
              project_title,
              budget_range,
              lname,
              fname,
              languages,
              project_status,
              contact_email,
              create_date,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => {
                  setToggle(true);
                  setCurrentId(project_id);
                }}
              >
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white text-sm capitalize py-8 font-bold">
                  {project_title}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  (Hidden until Accepted)
                </Table.Cell>
                <Table.Cell className="text-xs">
                  (Hidden until Accepted)
                </Table.Cell>
                <Table.Cell className="text-xs">{budget_range}</Table.Cell>
                <Table.Cell className="text-xs">
                  (Hidden until Accepted)
                </Table.Cell>
                <Table.Cell className="text-sm font-bold text-green-500">
                  {project_status === 0 ? "New" : "Open"}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {new Date(create_date)?.toJSON()?.split("T")[0]}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle && currentId ? (
        <SubmitProposal
          handleClose={() => {
            setToggle(false);
            setCurrentId("");
          }}
          id={currentId}
        />
      ) : null}
    </div>
  );
}

function RecieveProposal() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          {TABLE_HEAD.map((i) => (
            <Table.HeadCell className="capitalize text-center border-l-2">
              {i}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y [&>*]:text-center">
          {TABLE_ROWS.map(
            ({
              name,
              price,
              clientName,
              companyName,
              budget,
              contacts,
              status,
              date,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => setToggle(true)}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 ">
                  {name}
                </Table.Cell>
                <Table.Cell className="text-xs">{price}</Table.Cell>
                <Table.Cell className="text-xs">{clientName}</Table.Cell>
                <Table.Cell className="text-xs">{companyName}</Table.Cell>
                <Table.Cell className="text-xs">{budget}</Table.Cell>
                <Table.Cell className="text-xs">{contacts}</Table.Cell>
                <Table.Cell className="text-xs">{status}</Table.Cell>
                <Table.Cell className="text-xs">{date}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle ? (
        <RatingProposal id="" handleClose={() => setToggle(false)} />
      ) : null}
    </div>
  );
}
