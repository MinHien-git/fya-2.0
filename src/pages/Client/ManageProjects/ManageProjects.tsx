import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Label, Table } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GetUserProjects } from "../../../api/lib/project";
import ProjectBrief from "../../../components/ProjectBrief/ProjectBrief";
import { GetProposal, GetUserOngoingProject } from "../../../api/lib/proposal";
import AgencyProposal from "../../../components/AgencyProposal/AgencyProposal";
import ProgressPopup from "../../../components/ProgressPopup/ProgressPopup";
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
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white text-sm py-8 capitalize font-bold">
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
                <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white text-sm py-8 capitalize font-bold">
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
                <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white text-sm py-8 capitalize text-center">
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
        <ProgressPopup id={currentId} handleClose={() => setToggle(false)} />
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

const COMPLETE_ROWS = [
  {
    name: "[Project Name]",
    price: "1000$",
    agency: "[Agency Name]",
    duration: "2021-01-01",
    budget: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    contacts: "1234567890",
    rating: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "1000$",
    agency: "[Agency Name]",
    duration: "2021-01-01",
    budget: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    contacts: "1234567890",
    rating: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "1000$",
    agency: "[Agency Name]",
    duration: "2021-01-01",
    budget: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    contacts: "1234567890",
    rating: "English",
    date: "2021-01-01",
  },
];
function CompleteProposal() {
  const [toggle, setToggle] = useState(false);
  const [index, SetIndex] = useState(0);
  useEffect(() => {
    SetIndex(0);
  }, [toggle]);
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
          {COMPLETE_ROWS.map(
            ({
              name,
              agency,
              budget,
              duration,
              price,
              contacts,
              rating,
              date,
            }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => setToggle(true)}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 ">
                  {name}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs py-8 ">
                  {price}
                </Table.Cell>
                <Table.Cell className="text-xs">{agency}</Table.Cell>
                <Table.Cell className="text-xs">{duration}</Table.Cell>
                <Table.Cell className="text-xs">{budget}</Table.Cell>
                <Table.Cell className="text-xs">{contacts}</Table.Cell>
                <Table.Cell className="text-xs">{rating}</Table.Cell>
                <Table.Cell className="text-xs">{date}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle ? (
        index === 0 ? (
          <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
            <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
              <div
                className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
                onClick={() => setToggle(false)}
              >
                <IoCloseSharp className="w-6 h-6" />
              </div>
              <Typography
                variant="h2"
                placeholder={undefined}
                className="capitalize"
              >
                Completed Agency Name’s project
              </Typography>
              <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto h-fit">
                <div className="w-1/2 flex flex-col gap-4 ">
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Agency detail
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Name: <span className="font-normal">[Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Office address:{" "}
                      <span className="font-normal">[Address]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Rating: <span className="font-normal">0.0/5.0</span>
                    </Typography>

                    <Link to="/" className="text-primary underline font-bold">
                      See Agency Page
                    </Link>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Your company detail:
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Contact person:{" "}
                      <span className="font-normal">[Name]</span>
                    </Typography>
                    <Typography variant="small" placeholder={undefined}>
                      [Name] is your contact person and will get in touch with
                      you shortly.
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Phone number:{" "}
                      <span className="font-normal">+84123456789</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Email address
                      <span className="font-normal">sample@sample.com</span>
                    </Typography>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Your rating and feedback:
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Contact person:{" "}
                      <span className="font-normal">[Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Rating: <span className="font-normal">0.0/5.0</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Feedback:{" "}
                      <span className="font-normal">No feedback yet.</span>
                    </Typography>
                    <Button
                      placeholder={undefined}
                      className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                      size="md"
                      onClick={() => SetIndex(1)}
                    >
                      Send feedback
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Proposal for your project
                  </Typography>
                  <Typography variant="small" placeholder={undefined}>
                    [Lorem ipsum dolor sit amet, consectetur adipiscing elit.]
                  </Typography>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email2"
                        value="Services wanted:"
                        className="font-bold"
                      />
                    </div>
                    <div className="w-full h-[4rem] border rounded-lg"></div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email2"
                        value="Skills required:"
                        className="font-bold"
                      />
                    </div>
                    <div className="w-full h-[4rem] border rounded-lg"></div>
                  </div>
                  <p>
                    <span className="font-bold">Proposed price:</span> $xxxx -
                    $xxxx
                  </p>

                  <p>
                    <span className="font-bold">Proposed duration: </span> x - x
                    months
                  </p>

                  <div className="grid w-full">
                    <p>
                      <span className="font-bold">Proposal:</span>
                    </p>
                    <p>
                      "Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi...
                    </p>
                  </div>
                  <div className="grid w-full">
                    <p>
                      <span className="font-bold">Attachments:</span>
                    </p>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                      <div className="border h-12 rounded-lg"></div>
                      <div className="border h-12 rounded-lg"></div>
                      <div className="border h-12 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
            <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
              <div
                className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
                onClick={() => setToggle(false)}
              >
                <IoCloseSharp className="w-6 h-6" />
              </div>
              <Typography
                variant="h2"
                placeholder={undefined}
                className="capitalize"
              >
                Review & Feedback for Agency Name’s project
              </Typography>
              <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto h-fit">
                <div className="w-1/2 flex flex-col gap-4 ">
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Rating
                    </Typography>
                    <Rating placeholder={undefined} />
                    <Typography variant="h6" placeholder={undefined}>
                      Rated this agency on:
                      <span className="font-normal"> [dd/mm/yyyy]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Duration of the project:{" "}
                      <span className="font-normal"> [mm/yyyy - mm/yyyy]</span>
                    </Typography>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Services provided
                    </Typography>
                    <div>
                      <Typography
                        variant="h6"
                        placeholder={undefined}
                        className="text-primary"
                      >
                        Service Name 1
                      </Typography>
                      <Rating placeholder={undefined} />

                      <Typography
                        variant="h6"
                        placeholder={undefined}
                        className="text-primary"
                      >
                        Service Name 2
                      </Typography>
                      <Rating placeholder={undefined} />

                      <Typography
                        variant="h6"
                        placeholder={undefined}
                        className="text-primary"
                      >
                        Service Name 3
                      </Typography>
                      <Rating placeholder={undefined} />
                    </div>
                  </div>
                  <div className="flex w-full justify-between py-2 gap-4 mt-auto">
                    <Button
                      placeholder={undefined}
                      className="flex bg-red-300 text-red-700 min-w-[8rem] items-center justify-center w-1/2"
                      size="lg"
                      onClick={() => SetIndex(0)}
                    >
                      Cancel
                    </Button>
                    <Button
                      placeholder={undefined}
                      className="flex text-tertiary min-w-[8rem] items-center justify-center bg-secondary w-1/2 text-text"
                      size="lg"
                    >
                      Send feedback
                    </Button>
                  </div>
                </div>
                <div className="gap-2 flex flex-col">
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Contacts & Details (from project info)
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your name: <span className="font-normal">[Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your job title:{" "}
                      <span className="font-normal">[Job Title]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your email address:
                      <span className="font-normal">[sample@sample.com]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your company name:
                      <span className="font-normal">[Company Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your company industry:
                      <span className="font-normal">[Industry Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your company size:
                      <span className="font-normal">[Size]</span>
                    </Typography>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Your comment on Agency Name’s work:
                    </Typography>
                    <Textarea
                      placeholder={undefined}
                      rows={6}
                      label="Feedback"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
