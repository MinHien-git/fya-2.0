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
  "Price",
  "Client’s name",
  "Company’s name",
  "Budget",
  "Contacts",
  "Stage",
  "Status",
  "Date",
];

const TABLE_ROWS = [
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "Minh Hien",
    companyName: "ABC Corporation",
    budget: "$100-1000",
    contacts: "abc@abc.com",
    stage: "Proposal accepted",
    status: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "Minh Hien",
    companyName: "ABC Corporation",
    budget: "$100-1000",
    contacts: "abc@abc.com",
    stage: "Proposal accepted",
    status: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    price: "$1000",
    clientName: "Minh Hien",
    companyName: "ABC Corporation",
    budget: "$100-1000",
    contacts: "abc@abc.com",
    stage: "Proposal accepted",
    status: "English",
    date: "2021-01-01",
  },
];

function SentProject() {
  const [toggle, setToggle] = useState(false);

  return (
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
              price,
              clientName,
              companyName,
              budget,
              contacts,
              stage,
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
                <Table.Cell className="text-xs">{stage}</Table.Cell>
                <Table.Cell className="text-xs">{status}</Table.Cell>
                <Table.Cell className="text-xs">{date}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle ? (
        <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative z-[1000] h-[80vh] max-h-[60rem]">
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
              Submit a proposal to this project
            </Typography>
            <div className="flex w-full px-10  mt-6  gap-2 items-start overflow-y-auto">
              <div className="w-1/2 flex flex-col gap-4 ">
                <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Project submission information:
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Submitting a proposal for this project will cost $123
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    After submitting this proposal, your FyaMatch balance will
                    be $123.
                  </Typography>
                </div>
                <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Client’s company detail:
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Name:{" "}
                    <span className="text-text font-normal">
                      {" "}
                      Hidden until Accepted
                    </span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Office address:
                    <span className="text-text font-normal">
                      Hidden until Accepted
                    </span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Team size:
                    <span className="text-text font-normal"> xx-yy people</span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Industry:{" "}
                    <span className="text-text font-normal">
                      {" "}
                      [Industry Name]
                    </span>
                  </Typography>
                </div>
                <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Your Proposal for this Project
                  </Typography>
                  <div className="block">
                    <Label
                      htmlFor="comment"
                      value="Proposal description:"
                      className="font-bold"
                    />
                  </div>
                  <Textarea id="comment" required rows={4} />
                  <div className="block">
                    <Label
                      htmlFor="comment"
                      value="Attachments (optional):"
                      className="font-bold"
                    />
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <Label
                      htmlFor="dropzone-file"
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <FileInput id="dropzone-file" className="hidden" />
                    </Label>
                  </div>
                  <Typography variant="small" placeholder={undefined}>
                    Attach up to 10 files that showcase your agency’s expertise
                    and skills. Max file size: 25MB each.
                  </Typography>
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email3"
                        value="Proposed duration for this project:"
                      />
                    </div>
                    <Select
                      label="Select project duration"
                      placeholder={undefined}
                    >
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="price"
                        value="Proposed price for this project:"
                      />
                    </div>
                    <TextInput placeholder="Type price..." id="price" />
                  </div>
                </div>
                <div className="flex gap-4 mt-4 justify-end mt-auto">
                  <Button
                    placeholder={undefined}
                    className="bg-tertiary text-primary"
                    onClick={() => setToggle(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    placeholder={undefined}
                    className="bg-red-400 text-red-100"
                  >
                    Reject Project
                  </Button>
                  <Button
                    placeholder={undefined}
                    className="bg-primary text-white"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div className="w-1/2">
                <div className="w-fullshadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Project detail:
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
                    <span className="font-bold">Budget range:</span> $xxxx -
                    $xxxx
                  </p>
                  <p>
                    <span className="font-bold">Project duration:</span> x - x
                    months
                  </p>

                  <div className="grid w-full">
                    <Typography variant="h6" placeholder={undefined}>
                      <span className="font-bold">Project brief:</span>
                    </Typography>
                    <Typography
                      variant="paragraph"
                      placeholder={undefined}
                      className="mt-2"
                    >
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
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function RecieveProposal() {
  const [toggle, setToggle] = useState(false);
  const [index, SetIndex] = useState(0);
  useEffect(() => {
    SetIndex(0);
  }, [toggle]);

  return (
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
              price,
              clientName,
              companyName,
              budget,
              contacts,
              stage,
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
                <Table.Cell className="text-xs">{stage}</Table.Cell>
                <Table.Cell className="text-xs">{status}</Table.Cell>
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
                className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 "
                onClick={() => setToggle(false)}
              >
                <IoCloseSharp className="w-6 h-6" />
              </div>
              <Typography
                variant="h2"
                placeholder={undefined}
                className="capitalize"
              >
                Client Name’s project
              </Typography>
              <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto">
                <div className="w-1/2 flex flex-col gap-4 ">
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Client’s detail:
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
                      See Client Name’s Review and Feedback
                    </Link>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Your company detail:
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Company name: <span className="font-normal">[Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Office address:{" "}
                      <span className="font-normal">[Address]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Team size:{" "}
                      <span className="font-normal"> xx-yy people</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Industry:{" "}
                      <span className="font-normal"> [Industry Name]</span>
                    </Typography>
                    <Typography variant="h6" placeholder={undefined}>
                      Your role in the company:{" "}
                      <span className="font-normal"> [Role Name]</span>
                    </Typography>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Your rating and feedback:
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
                    Your proposal for the project:
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
                    <span className="font-bold">Client’s email: </span>{" "}
                    sample@sample.com
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
                Review & Feedback for Client Name’s project
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
                    <ul className="flex flex-wrap gap-2">
                      <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                        Service 1
                      </li>
                      <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                        Service 2
                      </li>
                      <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                        Service 3
                      </li>
                      <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                        Service 3 Service 3
                      </li>
                      <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                        Service 3 Service 3
                      </li>
                    </ul>
                  </div>
                  <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                    <Typography
                      variant="h4"
                      placeholder={undefined}
                      className="capitalize"
                    >
                      Rate your client
                    </Typography>
                    <div>
                      <Typography
                        variant="h6"
                        placeholder={undefined}
                        className="text-primary"
                      >
                        Punctuality:
                      </Typography>
                      <Rating placeholder={undefined} />

                      <Typography
                        variant="h6"
                        placeholder={undefined}
                        className="text-primary"
                      >
                        Work Ethics:
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
                      className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                      size="md"
                      onClick={() => SetIndex(1)}
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
                      Your comment on your collaboration with Client Name:
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
