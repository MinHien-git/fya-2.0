import {
  Label,
  TextInput,
  CustomFlowbiteTheme,
  Textarea,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill, RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Checkbox,
  Input,
  Button,
} from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IStep } from "../../components/PostProjectPopup/PostProjectPopup";
import clsx from "clsx";
import { motion } from "framer-motion";
// const data = [
//   {
//     label: "Select your company",
//     value: 0,
//     desc: <SelectCompany moveNext={() => handleChange(1)} />,
//   },
//   {
//     label: "Add information",
//     value: 1,
//     desc: "testing",
//   },
//   {
//     label: "Create an admin account",
//     value: 2,
//     desc: "testing",
//   },
// ];
export default function CreatePage() {
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

  const tabsData = [
    {
      label: "Select your company",
      content: <SelectCompany moveNext={() => setActiveTabIndex(1)} />,
    },
    {
      label: "Add information",
      content: <GeneralInformation />,
    },
    {
      label: "Create an admin account",
      content: <ConfirmAdminAccount />,
    },
  ];

  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] py-8 border-primary bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto flex flex-col md:gap-2 md:px-0  min-h-[50vh] lg:min-h-[80vh] h-[100%] items-center">
        <div className="bg-blue-gray-50 bg-opacity-60 rounded-[2rem] w-[70%] max-w-[40rem]">
          <div className="relative">
            <div className="flex space-x-3 w-full">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className="pt-2 pb-3  text-sm font-bold text-gray-900 z-[100] w-1/3"
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <span
              className={clsx(
                "absolute bottom-[10%] block h-[80%] bg-white transition-all duration-300 rounded-[2.2rem]"
              )}
              style={{
                left: tabUnderlineLeft - (activeTabIndex === 0 ? -5 : 5),
                width: tabUnderlineWidth,
              }}
            />
          </div>
        </div>
        <div className="py-4 w-full">{tabsData[activeTabIndex].content}</div>
      </section>
    </main>
  );
}

export function SelectCompany({ moveNext }: IStep) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <div className="flex flex-col items-center mt-10 max-w-xl gap-4">
        <Typography variant="h3" placeholder={undefined}>
          What is the name of your business?
        </Typography>
        <Typography variant="paragraph" placeholder={undefined}>
          Choose from an already-established business or start a new Brand Page.
        </Typography>
        <div className="w-[24rem] flex mx-auto">
          <Input
            label="Enter a company name..."
            placeholder={undefined}
            crossOrigin={undefined}
            size="lg"
          />
        </div>
        <Button
          placeholder={undefined}
          className="flex bg-primary min-w-[8rem] items-center justify-center"
          size="lg"
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

export function GeneralInformation({ moveNext }: IStep) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <div className="flex flex-col items-center mt-10 max-w-4xl gap-4 w-[100%]">
        <Typography variant="h3" placeholder={undefined}>
          General information
        </Typography>
        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <Typography variant="h5" placeholder={undefined}>
              About
            </Typography>
            <div className="flex flex-col mt-4 gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Agency name" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email2" value="Language(s) available" />
                  </div>
                  <TextInput
                    id="email2"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    shadow
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email2" value="Number of members" />
                  </div>
                  <TextInput
                    id="email2"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    shadow
                  />
                </div>
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Agency description" />
                  <Typography
                    variant="small"
                    className="text-xs"
                    placeholder={undefined}
                  >
                    Description will be shown on your Agency Page.
                  </Typography>
                </div>
                <Textarea
                  className="p-2"
                  id="comment"
                  placeholder=""
                  required
                  rows={4}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Has been in business since:" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <Typography variant="h5" placeholder={undefined}>
              Contact
            </Typography>
            <div className="flex flex-col gap-7">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Agency address" />
                  <Typography
                    variant="small"
                    className="text-xs"
                    placeholder={undefined}
                  >
                    This address will be used to connect your company with
                    nearby relevant project leads and give you local online
                    visibility. Later on, you'll be able to add more areas.
                  </Typography>
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Agency email address" />
                  <Typography
                    variant="small"
                    className="text-xs"
                    placeholder={undefined}
                  >
                    Your email address will not be displayed on your Page. Fya
                    will use your email to send notifications for projects,
                    leads and messages sent to your inbox from your Agency Page
                    visitors.
                  </Typography>
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Agency phone number" />
                  <Typography
                    variant="small"
                    className="text-xs"
                    placeholder={undefined}
                  >
                    Your phone number will not be displayed on your Page. Fya
                    will only show your phone number to clients who are looking
                    for agencies like yours.
                  </Typography>
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          placeholder={undefined}
          className="flex bg-primary min-w-[8rem] items-center justify-center"
          size="lg"
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

export function ConfirmAdminAccount({ moveNext }: IStep) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <div className="flex flex-col items-center mt-10 max-w-xl gap-4">
        <Typography
          variant="h3"
          className="text-center"
          placeholder={undefined}
        >
          Confirm your Admin role for this Agency Page
        </Typography>
        <div className="bg-white shadow-lg flex flex-col items-center py-4 rounded-2xl w-56 gap-4">
          <div className="aspect-square bg-primary w-[6rem] rounded-full shadow-lg"></div>
          <Typography variant="h5" placeholder={undefined}>
            Agency Name
          </Typography>
          <Typography variant="paragraph" placeholder={undefined}>
            https://sample.com
          </Typography>
        </div>
        <div className="flex">
          <Checkbox
            crossOrigin={undefined}
            placeholder={undefined}
            className="text-xs"
          />
          <p>
            I confirm that I am the manager of the Agency Page under this name
            and I have the authority to claim this provider profile.
          </p>
        </div>

        <Button
          placeholder={undefined}
          className="flex bg-primary min-w-[8rem] items-center justify-center"
          size="lg"
          onClick={moveNext}
        >
          Confirm and Create <FaArrowRight />
        </Button>
        <div />
      </div>
    </motion.div>
  );
}
