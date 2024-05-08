import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Label, RatingAdvanced, Table } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GetUserProjects } from "../../../api/lib/project";
import ProjectBrief from "../../../components/ProjectBrief/ProjectBrief";
import {
  GetProposal,
  GetUserCompletedProposal,
  GetUserOngoingProject,
} from "../../../api/lib/proposal";
import ProgressPopup from "../../../components/ProgressPopup/ProgressPopup";
import RatingAndFeedback from "../../../components/RatingAndFeedback/RatingAndFeedback";
import ReceivePopup from "../../../components/RecievePopup/RecievePopup";
import AgencyProposal from "../../../components/AgencyProposal/AgencyProposal";
const tabsData = ["Sent", "Received", "Ongoing", "Completed"];
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
          <RecieveProposal />
        ) : activeTabIndex === 2 ? (
          <OnGoingProject />
        ) : (
          <CompleteProposal />
        )}
      </div>
    </main>
  );
}

const TABLE_HEAD: string[] = [
  "Project’s name",
  "Description",
  "Duration",
  "Budget",
  "Search in areas of",
  "Language(s)",
  "Date",
];

function SentProject() {
  const [toggle, setToggle] = useState(false);
  const [projects, setProjects] = useState<any>([]);
  const [currentId, setCurrentId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await GetUserProjects();
      if (result.data.data) {
        setProjects(result.data.data);
      }
      console.log(result);
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
        <Table.Body className="divide-y">
          {projects.map(
            ({
              project_id,
              projectTitle,
              projectDescription,
              projectDuration,
              budgetRange,
              companyLocation,
              languages,
              created_date,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => {
                  setToggle(true);
                  setCurrentId(project_id);
                }}
              >
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white text-xs py-8 capitalize font-bold">
                  {projectTitle}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {projectDescription}
                </Table.Cell>
                <Table.Cell className="text-xs">{projectDuration}</Table.Cell>
                <Table.Cell className="text-xs">{budgetRange}</Table.Cell>
                <Table.Cell className="text-xs">{companyLocation}</Table.Cell>
                <Table.Cell className="text-xs">
                  {languages?.join(",")}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {created_date?.split("T")[0]}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle && currentId ? (
        <ProjectBrief handleClose={() => setToggle(false)} id={currentId} />
      ) : null}
    </div>
  );
}

function OnGoingProject() {
  const [toggle, setToggle] = useState(false);
  const [projects, setProjects] = useState<any>([]);
  const [currentId, setCurrentId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await GetUserOngoingProject();
      console.log(result);
      if (result.data.data) {
        setProjects(result.data.data);
      }
      console.log(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);
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
        <Table.Body className="divide-y">
          {projects.map(
            ({
              proposal_id,
              project_id,
              project_title,
              project_description,
              project_duration,
              budgetrange,
              location,
              languages,
              created_date,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => {
                  setToggle(true);
                  setCurrentId(proposal_id);
                }}
              >
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white text-xs py-8 capitalize font-bold">
                  {project_title}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {project_description}
                </Table.Cell>
                <Table.Cell className="text-xs">{project_duration}</Table.Cell>
                <Table.Cell className="text-xs">{budgetrange}</Table.Cell>
                <Table.Cell className="text-xs">{location}</Table.Cell>
                <Table.Cell className="text-xs">
                  {languages?.join(",")}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {created_date?.split("T")[0]}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle && currentId ? (
        <ProgressPopup handleClose={() => setToggle(false)} id={currentId} />
      ) : null}
    </div>
  );
}

const PROPOSAL_HEAD: string[] = [
  "Project name",
  "Agency name",
  "Proposal description",
  "Proposed duration",
  "Proposed price",
  "Agency’s location",
  "Agency’s rating",
  "Date",
];

function RecieveProposal() {
  const [toggle, setToggle] = useState(false);
  const [proposals, setProposals] = useState<Array<any>>([]);
  const [currentId, setCurrentId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await GetProposal();
      console.log(result);
      if (result.data.data) {
        setProposals(result.data.data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          {PROPOSAL_HEAD.map((i) => (
            <Table.HeadCell className="capitalize text-center border-l-2">
              {i}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {proposals.map(
            ({
              proposal_id,
              project_title,
              company_name,
              description,
              duration,
              price,
              address,
              rating,
              proposal_date,
              accepted,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => {
                  setToggle(true);
                  setCurrentId(proposal_id);
                }}
              >
                <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white text-xs py-8 capitalize text-center">
                  {project_title}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 text-center">
                  {company_name}
                </Table.Cell>
                <Table.Cell className="text-xs">{description}</Table.Cell>
                <Table.Cell className="text-xs text-center w-[5%]">
                  {duration}
                </Table.Cell>
                <Table.Cell className="text-xs text-center w-[5%]">
                  {price}
                </Table.Cell>
                <Table.Cell className="text-xs">{address}</Table.Cell>
                <Table.Cell className="text-xs text-center w-[5%]">
                  {rating}
                </Table.Cell>
                <Table.Cell className="text-xs text-center">
                  {proposal_date?.split("T")[0]}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle && currentId ? (
        <AgencyProposal id={currentId} handleClose={() => setToggle(false)} />
      ) : null}
    </div>
  );
}
const COMPLETE_HEAD: string[] = [
  "Project name",
  "Price",
  "Agency’s name",
  "Duration",
  "Budget",
  "Contacts",
  "Status",
  "Date",
];

function CompleteProposal() {
  const [toggle, setToggle] = useState(false);
  const [proposals, setProposals] = useState<Array<any>>([]);
  const [currentId, setCurrentId] = useState<string>("");
  const [projectId, setProjectId] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await GetUserCompletedProposal();
      console.log(result);
      if (result.data.data) {
        setProposals(result.data.data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          {COMPLETE_HEAD.map((i) => (
            <Table.HeadCell className="capitalize text-center border-l-2">
              {i}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {proposals.map(
            ({
              proposal_id,
              project_name,
              price,
              company_name,
              duration,
              budget,
              contact,
              status,
              completed_date,
              project_id,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => {
                  setToggle(true);
                  setCurrentId(proposal_id);
                  setProjectId(project_id);
                }}
              >
                <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white text-xs py-8 ">
                  {project_name}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 ">
                  {price}
                </Table.Cell>
                <Table.Cell className="text-xs">{company_name}</Table.Cell>
                <Table.Cell className="text-xs">{duration}</Table.Cell>
                <Table.Cell className="text-xs">{budget}</Table.Cell>
                <Table.Cell className="text-xs">{contact}</Table.Cell>
                <Table.Cell className="text-xs text-green-500 font-bold">
                  {status === 3
                    ? "Complete"
                    : status === 4
                    ? "Cancel"
                    : "Rated"}
                </Table.Cell>
                <Table.Cell className="text-xs">
                  {completed_date.split("T")[0]}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle && currentId && projectId ? (
        <RatingAndFeedback
          handleClose={() => setToggle(false)}
          id={currentId}
          project_id={projectId}
        />
      ) : null}
    </div>
  );
}
