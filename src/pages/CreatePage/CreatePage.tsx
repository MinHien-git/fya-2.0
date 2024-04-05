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
  Select,
  Option,
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
import { useDispatch, useSelector } from "react-redux";
import stringSimilarity from "string-similarity-js";
import {
  setLanguages,
  setCompanyName,
  setDescription,
  setAddress,
  setFoundedDate,
  setWebsite,
  setEmailAddress,
  setPhoneNumer,
  setTeamMember,
} from "../../features/pages/pageSplice";
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
      content: <GeneralInformation moveNext={() => setActiveTabIndex(2)} />,
    },
    {
      label: "Create an admin account",
      content: <ConfirmAdminAccount />,
    },
  ];

  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] py-8 border-primary bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto flex flex-col md:gap-2 md:px-0  min-h-[50vh] lg:min-h-[80vh] h-[100%] items-center">
        <div className="bg-blue-gray-50 bg-opacity-60 rounded-[2rem] w-[70%] max-w-[40rem] mt-8">
          <div className="relative">
            <div className="flex space-x-3 w-full">
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className="pt-2 pb-3  text-sm font-bold text-gray-900 z-[10] w-1/3"
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
  const company_name = useSelector((state: any) => state.page.company_name);

  const dispatch = useDispatch();

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
            value={company_name}
            onChange={(e) => dispatch(setCompanyName(e.target.value))}
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
const speakingLanguages = [
  "English",
  "Spanish",
  "Mandarin Chinese",
  "Hindi",
  "French",
  "Standard Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Indonesian",
  "Urdu",
  "German",
  "Japanese",
  "Swahili",
  "Telugu",
  "Marathi",
  "Turkish",
  "Tamil",
  "Vietnamese",
  "Korean",
  "Italian",
  "Yoruba",
  "Thai",
  "Gujarati",
  "Javanese",
  "Filipino (Tagalog)",
  "Persian (Farsi)",
  "Punjabi",
  "Wu Chinese",
  "Bhojpuri",
  "Hausa",
  "Arabic (Egyptian)",
  "Dutch",
  "Burmese",
  "Polish",
  "Ukrainian",
  "Pashto",
  "Swedish",
  "Sindhi",
  "Sariki",
  "Romanian",
  "Dholuo",
  "Amharic",
  "Oromo",
  "Igbo",
  "Azerbaijani",
  "Greek",
  "Czech",
  "Quechua",
  "Kinyarwanda",
];
export function GeneralInformation({ moveNext }: IStep) {
  const [languages, setLanguage] = useState<Array<string>>(speakingLanguages);
  const [currentSearch, setCurrentSearch] = useState("");
  const currentLanguage = useSelector((state: any) => state.page.languages);
  const description = useSelector((state: any) => state.page.description);
  const team_members = useSelector((state: any) => state.page.team_members);
  const address = useSelector((state: any) => state.page.address);
  const founded_date = useSelector((state: any) => state.page.founded_date);
  const website = useSelector((state: any) => state.page.website);
  const email_address = useSelector((state: any) => state.page.email_address);
  const phone_number = useSelector((state: any) => state.page.phone_number);

  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);

  let inteval: any = null;

  useEffect(() => {
    console.log(currentSearch);
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        console.log(currentLanguage);
        setLanguage(
          speakingLanguages.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              !currentLanguage.includes(i)
          )
        );
      } else {
        console.log(currentLanguage);
        setLanguage(
          speakingLanguages.filter((i) => !currentLanguage.includes(i))
        );
      }
    }, 200);
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

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
                  <Label htmlFor="website" value="Agency website" />
                </div>
                <TextInput
                  id="website"
                  type="text"
                  placeholder="www.example.com"
                  required
                  shadow
                  value={website}
                  onChange={(e) => dispatch(setWebsite(e.target.value))}
                />
              </div>
              <div className="flex gap-4 h-[10rem] ">
                <div className="h-[10rem] w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="website" value="Languages" />
                  </div>
                  <div className="w-full h-[2rem] relative">
                    <Input
                      crossOrigin={undefined}
                      type="email"
                      placeholder="Select Languages"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      value={currentSearch}
                      containerProps={{ className: "min-w-[100px]" }}
                      onFocus={() => {
                        clearTimeout(inteval);
                        setFocus(true);
                      }}
                      onBlur={() => {
                        inteval = setTimeout(function () {
                          setFocus(false);
                        }, 300);
                      }}
                      onChange={handleSearch}
                    />
                    {focus ? (
                      <ul className="absolute  py-3 bg-white w-full shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 z-10000">
                        {languages.map((i) => (
                          <li
                            className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                            onClick={() => {
                              if (!currentLanguage.includes(i)) {
                                dispatch(setLanguages([...currentLanguage, i]));
                                console.log(i);
                                setCurrentSearch("");
                              }
                            }}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                      {currentLanguage.map((language) => (
                        <motion.li
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.2,
                            delay: 0.2,
                          }}
                          className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                          key={language}
                          onClick={() => {
                            dispatch(
                              setLanguages(
                                currentLanguage.filter((i) => i !== language)
                              )
                            );
                          }}
                        >
                          {language}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="email2" value="Number of members" />
                  </div>
                  <Select
                    placeholder={undefined}
                    label="Company Size"
                    onChange={(v) => {
                      dispatch(setTeamMember(v));
                    }}
                    value={team_members}
                    defaultValue={team_members}
                  >
                    <Option value="1 person">1 person</Option>
                    <Option value="2-10 people">2-10 people</Option>
                    <Option value="11-50 people">11-50 people</Option>
                    <Option value="51-100 people">51-100 people</Option>
                    <Option value="101-500 people">101-500 people</Option>
                    <Option value="101-500 people">501-1000 people</Option>
                    <Option value="101-500 people">1001-5000 people</Option>
                    <Option value="101-500 people">
                      More than 5000 people
                    </Option>
                  </Select>
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
                  value={description}
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="founded"
                    value="Has been in business since:"
                  />
                </div>
                <TextInput
                  id="founded"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  required
                  shadow
                  value={founded_date}
                  onChange={(e) => dispatch(setFoundedDate(e.target.value))}
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
                  <Label htmlFor="address" value="Agency address" />
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
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                  placeholder="street, city"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Agency email address" />
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
                  id="email"
                  type="email"
                  value={email_address}
                  onChange={(e) => dispatch(setEmailAddress(e.target.value))}
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phoneNumber" value="Agency phone number" />
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
                  id="phoneNumber"
                  type="phone"
                  placeholder="123 346 7890"
                  value={phone_number}
                  onChange={(e) => dispatch(setPhoneNumer(e.target.value))}
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
  const company_name = useSelector((state: any) => state.page.company_name);
  const website = useSelector((state: any) => state.page.website);

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
            {company_name}
          </Typography>
          <Typography variant="paragraph" placeholder={undefined}>
            {website}
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
