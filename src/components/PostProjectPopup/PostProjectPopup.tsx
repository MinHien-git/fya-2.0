import {
  Button,
  Checkbox,
  Input,
  Radio,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { Label } from "flowbite-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { stringSimilarity } from "string-similarity-js";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useSelector, useDispatch } from "react-redux";
import {
  setServices as setReduxServices,
  setSkills as setReduxSkills,
  setLocation,
  setLocalization,
  setCompanyName,
  setCompanySize,
  setIndustry,
  setPosition,
  setBugetRange,
  setProjectDuration,
  setProjectTitle,
  setProjectDescription,
  setCompanyLocation,
  setLanguages,
} from "../../features/projects/projectSplice";
import { PostProject } from "../../api/lib/project";
interface IProjectPopupProps {
  isOpen: boolean;
  toggle: () => void;
}

export const speakingLanguages = [
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
const agencySkillTagsRequirements = [
  "Adobe Creative Suite",
  "UI/UX Design",
  "Responsive Web Design",
  "Sketch",
  "Figma",
  "Typography",
  "Brand Identity",
  "Motion Graphics",
  "Video Editing",
  "Photography",
  "Copywriting",
  "SEO",
  "SEM",
  "PPC",
  "Social Media Management",
  "Content Strategy",
  "Analytics",
  "Market Research",
  "Strategic Thinking",
  "Marketing Strategy",
  "Event Planning",
  "Public Relations",
  "Client Servicing",
  "Project Management",
  "Agile",
  "Scrum",
  "Product Management",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Front-end Development",
  "Back-end Development",
  "Full-stack Development",
  "Mobile App Development",
  "Augmented Reality",
  "Virtual Reality",
  "Game Development",
  "Database Management",
  "Data Analysis",
  "Data Visualization",
  "Problem-solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Creativity",
  "Multitasking",
  "Organizational Skills",
  "Time Management",
  "Attention to Detail",
];

const agencyServices = [
  "Advertising",
  "Public Relations",
  "Marketing",
  "Digital Marketing",
  "Social Media Management",
  "Content Marketing",
  "SEO (Search Engine Optimization)",
  "SEM (Search Engine Marketing)",
  "PPC (Pay-Per-Click) Management",
  "Email Marketing",
  "Influencer Marketing",
  "Brand Strategy",
  "Creative Design",
  "Branding",
  "Market Research",
  "Media Buying",
  "Event Management",
  "Experiential Marketing",
  "Video Production",
  "Photography",
  "Copywriting",
  "Web Design",
  "Web Development",
  "E-commerce Development",
  "Mobile App Development",
  "AR (Augmented Reality) Development",
  "VR (Virtual Reality) Development",
  "UI/UX Design",
  "Software Development",
  "Game Development",
  "CRM (Customer Relationship Management)",
  "ERP (Enterprise Resource Planning)",
  "Consulting",
  "Management Consulting",
  "Financial Consulting",
  "HR (Human Resources) Consulting",
  "IT Consulting",
  "Legal Consulting",
  "Supply Chain Consulting",
  "Training & Development",
  "Executive Coaching",
  "Leadership Development",
  "Sales Training",
  "Customer Service Training",
  "Technical Training",
  "Cybersecurity Consulting",
  "Cloud Computing Services",
  "Data Analytics",
  "Market Entry Services",
  "International Expansion Consulting",
  "Trade Show Management",
  "Localization Services",
  "Translation Services",
];

export interface IProject {
  services?: string[];
  skills?: string[];
  location?: string;
  languages?: string[];
  localization?: boolean;
  companyName?: string;
  companySize?: string;
  industry?: string;
  position?: string;
  bugetRange?: string;
  projectDuration?: string;
  projectTitle?: string;
  projectDescription?: string;
}
export default function PostProjectModal({
  isOpen,
  toggle,
}: IProjectPopupProps) {
  const [step, SetStep] = useState(0);
  const project = useSelector((state: any) => state.project);
  useLockBodyScroll();

  const handleNext = (): void => {
    SetStep(step + 1);
  };
  const handlePrevious = () => {
    SetStep(step - 1);
  };

  const handleSubmit = async () => {
    let result = await PostProject(project);
    console.log(result);
  };
  return isOpen
    ? createPortal(
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-[100vw] h-[100vh] fixed bg-gray-500/50 z-[10000] top-0 flex justify-center items-center"
          >
            <motion.div
              className="relative bg-white shadow-3xl shadow-primary/50 w-[80%] flex flex-col justify-start items-center pt-14 pb-6 px-4 rounded-2xl gap-4 h-fit max-w-[30rem] md:px-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <div
                className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
                onClick={toggle}
              >
                <IoCloseSharp className="w-6 h-6" />
              </div>
              {step === 0 ? (
                <StepOne moveNext={handleNext} />
              ) : step === 1 ? (
                <StepTwo movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 2 ? (
                <StepThree
                  movePrevious={handlePrevious}
                  moveNext={handleNext}
                />
              ) : step === 3 ? (
                <StepFour movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 4 ? (
                <StepFive movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 5 ? (
                <StepSix movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 6 ? (
                <StepSeven
                  movePrevious={handlePrevious}
                  moveNext={handleNext}
                />
              ) : step === 7 ? (
                <StepEight
                  movePrevious={handlePrevious}
                  moveNext={handleNext}
                />
              ) : step === 8 ? (
                <StepNine movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 9 ? (
                <StepTen movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 10 ? (
                <StepEleven
                  moveNext={handleSubmit}
                  movePrevious={handlePrevious}
                />
              ) : null}
            </motion.div>
          </motion.div>
        </>,
        document.body
      )
    : null;
}
export interface IStep {
  moveNext?: () => void;
  movePrevious?: () => void;
}
function StepOne({ moveNext }: IStep) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full h-full flex flex-col items-center gap-4 "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-12 ">
        <img
          src={"/static/images/Logo_BG.svg"}
          alt="logo"
          className="w-[6rem]"
        />
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-center mb-6 max-w-[21ch]"
        >
          To understand your needs, we will first ask you a few{" "}
          <span className="font-bold text-primary">questions </span>
          before <span className="font-bold text-primary">matching </span>your
          company with agencies that fit.
        </Typography>
      </div>
      <Button
        className="flex bg-primary w-[10rem] items-center justify-center mt-auto"
        size="lg"
        placeholder={undefined}
        onClick={moveNext}
      >
        Next <FaArrowRight />
      </Button>
    </motion.div>
  );
}

function StepTwo({ moveNext, movePrevious }: IStep) {
  const [services, setServices] = useState<Array<string>>(agencyServices);
  const [skills, setSkills] = useState<Array<string>>(
    agencySkillTagsRequirements
  );

  const currentServices = useSelector((state: any) => state.project.services);
  const currentSkills = useSelector((state: any) => state.project.skills);

  const dispatch = useDispatch();

  const [focus, setFocus] = useState(false);
  const [skillFocus, setSkillFocus] = useState(false);

  const [currentSearch, setCurrentSearch] = useState("");
  const [skillSearch, setSkillSearch] = useState("");

  let inteval: any = null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  const handleSkillSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillSearch(e.target.value);
  };

  useEffect(() => {
    console.log(currentSearch);
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        setServices(
          agencyServices.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              !currentServices.includes(i)
          )
        );
      } else {
        console.log(currentServices);
        setServices(agencyServices.filter((i) => !currentServices.includes(i)));
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch, currentServices]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (skillSearch) {
        setSkills(
          agencySkillTagsRequirements.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(skillSearch.toLowerCase())) &&
              !currentSkills.includes(i)
          )
        );
      } else {
        setSkills(
          agencySkillTagsRequirements.filter((i) => !currentSkills.includes(i))
        );
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [skillSearch, currentSkills]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          Tell us what{" "}
          <span className="text-secondary font-bold">services </span> and{" "}
          <span className="text-secondary font-bold">skills </span>
          you are looking for:
        </Typography>
        <div className="w-full h-[9rem] relative">
          <Input
            crossOrigin={undefined}
            size="lg"
            type="email"
            placeholder="Select services"
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
              {services.map((i) => (
                <li
                  className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                  onClick={() => {
                    if (!currentServices.includes(i)) {
                      dispatch(setReduxServices([...currentServices, i]));
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
            {currentServices.map((tag) => (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                key={tag}
                onClick={() => {
                  dispatch(
                    setReduxServices(currentServices.filter((i) => i !== tag))
                  );
                }}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[9rem] relative">
          <Input
            crossOrigin={undefined}
            type="email"
            size="lg"
            placeholder="Select services"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            value={skillSearch}
            containerProps={{ className: "min-w-[100px]" }}
            onFocus={() => {
              clearTimeout(inteval);
              setSkillFocus(true);
            }}
            onBlur={() => {
              inteval = setTimeout(function () {
                setSkillFocus(false);
              }, 300);
            }}
            onChange={handleSkillSearch}
          />
          {skillFocus ? (
            <ul className="absolute  py-3 bg-white w-full shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 z-10000">
              {skills.map((i) => (
                <li
                  className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                  onClick={() => {
                    if (!currentServices.includes(i)) {
                      dispatch(setReduxSkills([...currentSkills, i]));
                      console.log(i);
                      setSkillSearch("");
                    }
                  }}
                >
                  {i}
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
            {currentSkills.map((tag) => (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                className="bg-secondary text-text w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                key={tag}
                onClick={() => {
                  dispatch(
                    setReduxSkills(currentSkills.filter((i) => i !== tag))
                  );
                }}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepThree({ moveNext, movePrevious }: IStep) {
  const location = useSelector((state: any) => state.project.location);
  const localization = useSelector((state: any) => state.project.localization);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(localization);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          Which <span className="text-secondary font-bold">areas </span> do you
          want your providers to be active in?
        </Typography>
        <Input
          crossOrigin={undefined}
          type="email"
          size="lg"
          placeholder="Find a location (city, region or country)"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          value={location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex items-center self-start">
          <Checkbox
            defaultChecked
            placeholder={undefined}
            crossOrigin={undefined}
            checked={checked}
            onChange={(e) => {
              dispatch(setLocalization(!e.target.checked));
              setChecked(e.target.checked);
            }}
          />
          <Label htmlFor="check" className="text-xs">
            My agencies must have at least one office in this location.
          </Label>
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}
function StepFour({ moveNext, movePrevious }: IStep) {
  const [languages, setLanguage] = useState<Array<string>>(speakingLanguages);

  const currentLanguage = useSelector((state: any) => state.project.languages);

  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  let inteval: any = null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

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

    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch, currentLanguage]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          In which{" "}
          <span className="text-secondary font-bold">language(s) </span> do you
          want to use with your agencies?
        </Typography>
        <div className="w-full grid">
          <div className="w-full h-[2rem] relative">
            <Input
              crossOrigin={undefined}
              type="email"
              size="lg"
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
              <ul className="absolute  py-3 bg-white w-full shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 z-10000 ">
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
          </div>
          <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
            {currentLanguage.map((language) => (
              <motion.li
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                key={language}
                onClick={() => {
                  dispatch(
                    setLanguages(currentLanguage.filter((i) => i !== language))
                  );
                }}
              >
                {language}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepFive({ moveNext, movePrevious }: IStep) {
  const companyName = useSelector((state: any) => state.project.companyName);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          What is the <span className="text-secondary font-bold">name </span>of
          your business?
        </Typography>
        <p className="text-xs">
          This information will only be shown to agencies once their project
          proposal have been by accepted you via Post Your Project feature.{" "}
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          size="lg"
          placeholder="Your company name..."
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          value={companyName}
          onChange={(e) => dispatch(setCompanyName(e.target.value))}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center  mt-auto"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepSix({ moveNext, movePrevious }: IStep) {
  const companySize = useSelector((state: any) => state.project.companySize);

  const dispatch = useDispatch();
  const onChangeCompanySize = (e) => {
    dispatch(setCompanySize(e.target.value));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          What is the <span className="text-secondary font-bold">size </span> of
          your business?
        </Typography>
        <div className="grid gap-2 w-full">
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                1 person
              </Typography>
            }
            onChange={onChangeCompanySize}
            className="text-xs"
            value="1 person"
            checked={companySize === "1 person"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                2-10 people
              </Typography>
            }
            className="text-xs"
            value="2-10 people"
            onChange={onChangeCompanySize}
            checked={companySize === "2-10 people"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                11-50 people
              </Typography>
            }
            value="11-50 people"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={companySize === "11-50 people"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                51-100 people
              </Typography>
            }
            value="51-100 people"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={companySize === "51-100 people"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                101-500 people
              </Typography>
            }
            value="101-500 people"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={companySize === "101-500 people"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                501-1000 people
              </Typography>
            }
            checked={companySize === "501-1000 people"}
            value="501-1000 people"
            className="text-xs"
            onChange={onChangeCompanySize}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                1001-5000 people
              </Typography>
            }
            value="1001-5000 people"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={companySize === "1001-5000 people"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                More than 5000 people
              </Typography>
            }
            value="More than 5000 people"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={companySize === "More than 5000 people"}
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepSeven({ moveNext, movePrevious }: IStep) {
  const industry = useSelector((state: any) => state.project.industry);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(industry);
  }, [industry]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full "
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          What is your company’s{" "}
          <span className="text-secondary font-bold">industry? </span>
        </Typography>

        <Select
          size="lg"
          placeholder={undefined}
          label="Select Industry"
          onChange={(v) => {
            dispatch(setIndustry(v));
          }}
          value={industry}
          defaultValue={industry}
        >
          <Option value="Marketing">Marketing</Option>
          <Option value="Information Technology">Information Technology</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Graphic design">Graphic design</Option>
          <Option value="Manufacture">Manufacture</Option>
        </Select>
      </div>
      <div className="flex justify-between w-full pt-4 mt-auto">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepEight({ moveNext, movePrevious }: IStep) {
  const companyLocation = useSelector(
    (state: any) => state.project.companylocation
  );
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4  h-full"
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          Where is your company’s{" "}
          <span className="text-secondary font-bold">office? </span>
        </Typography>
        <p className="text-xs">
          This information will only be shown to agencies once their project
          proposal have been by accepted you via Post Your Project feature.{" "}
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          size="lg"
          placeholder="Company location"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          value={companyLocation}
          onChange={(e) => dispatch(setCompanyLocation(e.target.value))}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </div>
      <div className="flex justify-between w-full pt-4 mt-auto">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepNine({ moveNext, movePrevious }: IStep) {
  const position = useSelector((state: any) => state.project.position);

  const dispatch = useDispatch();
  const onChangeCompanySize = (e) => {
    dispatch(setPosition(e.target.value));
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full"
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          What is your{" "}
          <span className="text-secondary font-bold">position </span> of your{" "}
          <span className="text-secondary font-bold">company?</span>
        </Typography>
        <div className="grid gap-2 w-full">
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                CEO / Business Owner
              </Typography>
            }
            className="text-xs"
            onChange={onChangeCompanySize}
            value="CEO / Business Owner"
            checked={position === "CEO / Business Owner"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                CMO / Marketing Director
              </Typography>
            }
            value="CMO / Marketing Director"
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={position === "CMO / Marketing Director"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Marketing Manager / Brand Manager
              </Typography>
            }
            onChange={onChangeCompanySize}
            checked={position === "Marketing Manager / Brand Manager"}
            className="text-xs"
            value="Marketing Manager / Brand Manager"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Consultant
              </Typography>
            }
            onChange={onChangeCompanySize}
            checked={position === "Consultant"}
            className="text-xs"
            value="Consultant"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Procurement Manager / Purchasing Manager
              </Typography>
            }
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={position === "Procurement Manager / Purchasing Manager"}
            value="Procurement Manager / Purchasing Manager"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Marketing Executive / Sales Executive
              </Typography>
            }
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={position === "Marketing Executive / Sales Executive"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Sales Representative / Business Developer
              </Typography>
            }
            className="text-xs"
            onChange={onChangeCompanySize}
            value="Sales Representative / Business Developer"
            checked={position === "Sales Representative / Business Developer"}
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography placeholder={undefined} color="blue-gray">
                Intern
              </Typography>
            }
            className="text-xs"
            onChange={onChangeCompanySize}
            checked={position === "Intern"}
            value="Intern"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Input
                crossOrigin={undefined}
                type="email"
                size="lg"
                placeholder="Other"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            }
            className="text-xs"
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepTen({ moveNext, movePrevious }: IStep) {
  const budget = useSelector((state: any) => state.project.bugetRange);
  const duration = useSelector((state: any) => state.project.projectDuration);

  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full"
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          What is your preferred{" "}
          <span className="text-secondary font-bold">budget range</span> and
          <span className="text-secondary font-bold"> project duration?</span>
        </Typography>
        <p className="text-xs">
          This information will only be used to select agencies that fit for
          you. You are not obligated to follow this budget range and project
          duration.
        </p>
        <Select
          label="Select budget range"
          placeholder={undefined}
          size="lg"
          onChange={(v) => {
            dispatch(setBugetRange(v));
          }}
          value={budget}
          defaultValue={budget}
        >
          <Option value="1.000.000-5.000.000 VNĐ">
            1.000.000-5.000.000 VNĐ
          </Option>
          <Option value="6.000.000-10.000.000 VNĐ">
            6.000.000-10.000.000 VNĐ
          </Option>
          <Option value="10.000.000-15.000.000 VNĐ">
            10.000.000-15.000.000 VNĐ
          </Option>
          <Option value="11.000.000-25.000.000 VNĐ">
            11.000.000-25.000.000 VNĐ
          </Option>
          <Option value="25.000.000++">25.000.000++</Option>
        </Select>
        <Select
          size="lg"
          label="Select project duration"
          placeholder={undefined}
          onChange={(v) => {
            dispatch(setProjectDuration(v));
          }}
          value={duration}
          defaultValue={duration}
        >
          <Option value="1-3 Days">1-3 Days</Option>
          <Option value="1 Weeks">1 Weeks</Option>
          <Option value="2-3 Weeks">2-3 Weeks</Option>
          <Option value="1 Month">1 Month</Option>
          <Option value="2-3 Month">2-3 Month</Option>
        </Select>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          size="lg"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}

function StepEleven({ moveNext, movePrevious }: IStep) {
  const title = useSelector((state: any) => state.project.projectTitle);
  const description = useSelector(
    (state: any) => state.project.projectDescription
  );

  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-full flex flex-col items-center gap-4 h-full"
    >
      <div className="w-full min-h-[40vh] flex flex-col items-center gap-4 ">
        <Typography
          variant="h4"
          placeholder={undefined}
          className="text-left self-start"
        >
          How would you
          <span className="text-secondary font-bold"> describe</span> your
          project to your agency?
        </Typography>
        <Input
          crossOrigin={undefined}
          type="email"
          size="lg"
          placeholder="Project title"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          value={title}
          onChange={(e) => {
            dispatch(setProjectTitle(e.target.value));
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="w-full mt-2">
          <Textarea
            value={description}
            label="Description"
            rows={8}
            onChange={(e) => {
              dispatch(setProjectDescription(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto pt-4">
        <Button
          className="flex bg-gray-400 w-[10rem] items-center justify-center"
          placeholder={undefined}
          onClick={movePrevious}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          className="flex bg-primary w-[10rem] items-center justify-center"
          placeholder={undefined}
          onClick={moveNext}
        >
          Submit <FaArrowRight />
        </Button>
      </div>
    </motion.div>
  );
}
