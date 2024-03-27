import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Label, Table } from "flowbite-react";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
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
          <SentProject />
        ) : (
          <RecieveProposal />
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
            ({ name, description, duration, budget, area, language, date }) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                onClick={() => setToggle(true)}
              >
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
      {toggle ? (
        <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center">
          <div className="bg-white shadow-lg min-h-[60rem] rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative z-[1000]">
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
              Your project brief
            </Typography>
            <div className="flex w-full px-10  mt-6  gap-2 items-start">
              <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border">
                <Typography
                  variant="h4"
                  placeholder={undefined}
                  className="capitalize"
                >
                  Your company detail
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  Name: <span className="font-normal">[Name]</span>
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  Office address: <span className="font-normal">[Address]</span>
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  Team size: <span className="font-normal">xx-yy people</span>
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  Industry: <span className="font-normal">[Industry Name]</span>
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  Your role in the company:{" "}
                  <span className="font-normal">[Role Name]</span>
                </Typography>
              </div>
              <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border">
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
                <div className="flex justify-between gap-4">
                  <div className="w-1/2 grid gap-4">
                    <p>
                      <span className="font-bold">Budget range:</span> $xxxx -
                      $xxxx
                    </p>
                    <p>
                      <span className="font-bold">Project duration:</span> $xxxx
                      - $xxxx
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p>
                      <span className="font-bold">Language(s):</span>{" "}
                      [Language], [Language]
                    </p>
                  </div>
                </div>
                <p>
                  <span className="font-bold">
                    Searching for agencies in areas of:
                  </span>
                  [Location]
                </p>
                <div className="flex justify-between">
                  <p>
                    <span className="font-bold">Phone:</span> +84123456789
                  </p>
                  <p>
                    <span className="font-bold">Email:</span> sample@sample.com
                  </p>
                </div>
                <div className="grid w-full">
                  <p>
                    <span className="font-bold">Project Detail:</span>
                  </p>
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

const PROPOSAL_ROWS = [
  {
    name: "[Project Name]",
    agency: "[Agency Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    price: "$10000",
    location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    agency: "[Agency Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    price: "$10000",
    location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: "English",
    date: "2021-01-01",
  },
  {
    name: "[Project Name]",
    agency: "[Agency Name]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    duration: "2021-01-01",
    price: "$10000",
    location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: "English",
    date: "2021-01-01",
  },
];
function RecieveProposal() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          {PROPOSAL_HEAD.map((i) => (
            <Table.HeadCell className="capitalize">{i}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {PROPOSAL_ROWS.map(
            ({
              name,
              agency,
              description,
              duration,
              price,
              location,
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
                  {agency}
                </Table.Cell>
                <Table.Cell className="text-xs">{description}</Table.Cell>
                <Table.Cell className="text-xs">{duration}</Table.Cell>
                <Table.Cell className="text-xs">{price}</Table.Cell>
                <Table.Cell className="text-xs">{rating}</Table.Cell>
                <Table.Cell className="text-xs">{location}</Table.Cell>
                <Table.Cell className="text-xs">{date}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
      {toggle ? (
        <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
          <div className="bg-white shadow-lg min-h-[60rem] rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative">
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
              Agency Name’s proposal for your project
            </Typography>
            <div className="flex w-full px-10  mt-6  gap-2">
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
                    Agency contact
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Contact person: <span className="font-normal">[Name]</span>
                  </Typography>
                  <Typography variant="small" placeholder={undefined}>
                    [Name] is your contact person and will get in touch with you
                    shortly.
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
                <div className="flex w-full justify-between py-8 gap-4 mt-auto">
                  <Button
                    placeholder={undefined}
                    className="flex bg-red-300 text-red-700 min-w-[8rem] items-center justify-center w-1/2"
                    size="lg"
                  >
                    Reject proposal
                  </Button>
                  <Button
                    placeholder={undefined}
                    className="flex text-tertiary min-w-[8rem] items-center justify-center bg-primary w-1/2"
                    size="lg"
                  >
                    Accept proposal
                  </Button>
                </div>
              </div>
              <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border">
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
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi...
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
      ) : null}
    </div>
  );
}
