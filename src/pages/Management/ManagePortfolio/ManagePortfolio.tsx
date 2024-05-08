import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { ITab } from "../EditService/EditService";
import { FileInput, Label } from "flowbite-react";
import { ImageReviewer } from "../Company/Company";
import { useEffect, useState } from "react";
import {
  agencyServices,
  agencySkillTagsRequirements,
} from "../../../components/PostProjectPopup/PostProjectPopup";
import stringSimilarity from "string-similarity-js";
import { motion } from "framer-motion";
import {
  DeletePagePortfoilio,
  GetPortfoilio,
  PostPagePortfoilio,
  PostPagePortfoilioImage,
  PutPageAward,
  PutPagePortfoilio,
} from "../../../api/lib/page";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { useSelector } from "react-redux";
import FileBase64 from "react-file-base64";

interface IPortfolio {
  media: string;
  project_name: string;
  client_name: string;
  client_address: string;
  client_sector: string;
  budget: number;
  services: Array<string>;
  skills: Array<string>;
  description: string;
  start_date: string;
  end_date: string;
  is_working: boolean;
  project_scope: string;
  project_audience: string;
  client_email: string;
  project_id: string;
  result_link: string;
}
export interface IPortfolioTab {
  moveNext: () => void;
  addService?: boolean;
  id?: string;
}
export default function ManagePortfolio({
  moveNext,
  addService,
  id,
}: IPortfolioTab) {
  const [portfolio, setPortfolio] = useState<IPortfolio>({
    media: "",
    project_name: "",
    client_name: "",
    client_address: "",
    client_sector: "",
    budget: 0,
    services: [],
    skills: [],
    description: "",
    start_date: "",
    end_date: "",
    is_working: false,
    project_scope: "",
    project_audience: "",
    client_email: "",
    project_id: "",
    result_link: "",
  });

  const [review, setReview] = useState<boolean>();
  const [file, setFile] = useState<any>();
  let inteval: any = null;
  const [services, setServices] = useState<Array<string>>(agencyServices);
  const [skills, setSkills] = useState<Array<string>>(
    agencySkillTagsRequirements
  );
  const page_id = useSelector((state: any) => state.page.page_id);
  const [focus, setFocus] = useState(false);
  const [skillFocus, setSkillFocus] = useState(false);

  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [skillSearch, setSkillSearch] = useState<string>("");

  function handleChange(e) {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    async function getData() {
      if (id) {
        const result = await GetPortfoilio(id);
        setPortfolio(result.data.data);
      }
    }
    getData();
  }, []);
  async function handleSubmit() {
    console.log(portfolio);
    setPortfolio({
      ...portfolio,
    });
    if (!id) {
      const result = await PostPagePortfoilio(page_id, portfolio);
      if (result.data.data) {
        let formData = new FormData();
        formData.append("my_file", file);
        const image = await PostPagePortfoilioImage(
          result.data.data.id,
          formData
        );
        console.log(image);
      }
    } else {
      const result = await PutPagePortfoilio(id, portfolio);
      console.log(result);
    }
    moveNext();
  }
  async function handleDelete() {
    if (id) {
      const result = await DeletePagePortfoilio(id);
      console.log(result);
    }
    moveNext();
  }
  useEffect(() => {
    console.log(currentSearch);
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        setServices(
          agencyServices.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              !portfolio.services.includes(i)
          )
        );
      } else {
        setServices(
          agencyServices.filter((i) => !portfolio.services.includes(i))
        );
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch, portfolio.services]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (skillSearch) {
        setSkills(
          agencySkillTagsRequirements.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(skillSearch.toLowerCase())) &&
              !portfolio.skills.includes(i)
          )
        );
      } else {
        setSkills(
          agencySkillTagsRequirements.filter(
            (i) => !portfolio.skills.includes(i)
          )
        );
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [skillSearch, portfolio.skills]);

  useEffect(() => {
    console.log(portfolio);
  }, [portfolio]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  const handleSkillSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillSearch(e.target.value);
  };

  function handleInputChange(e) {
    const value = e.target.value;
    setPortfolio({
      ...portfolio,
      [e.target.name]: value,
    });
  }
  return (
    <div className="h-[80vh] overflow-y-auto">
      {review &&
        (file ? (
          <ImageReviewer
            image={URL.createObjectURL(file)}
            closeReview={() => setReview(false)}
          />
        ) : (
          <ImageReviewer
            image={portfolio.media}
            closeReview={() => setReview(false)}
          />
        ))}
      <section className="max-w-7xl w-[90%] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10">
        <div className="flex w-full px-10 mt-14 gap-6">
          <ul className="flex w-[50%] gap-3">
            <li
              className="aspect-square rounded-md cursor-pointer"
              onClick={moveNext}
            >
              <IconButton
                placeholder={undefined}
                size="lg"
                className="!w-[60px] h-[60px] !max-w-[60px] !max-h-[60px]"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </IconButton>
            </li>
            <li className="bg-slate-300 px-6 rounded-md text-blue-500 py-1 text-sm flex items-center font-bold cursor-pointer">
              {!addService ? "Edit Portfolio" : "Add Portfolio"}
            </li>
          </ul>
        </div>
        <div className="flex w-full px-10 mt-8 gap-6 items-start">
          <div className="w-1/2 grid gap-1">
            <h2 className="font-bold text-[1.875rem] font-title mb-2">
              Project’s Details
            </h2>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Project’s Name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter project’s name here..."
                name="project_name"
                onChange={handleInputChange}
                value={portfolio.project_name}
              />
            </div>
            <div className="grid w-full mx-auto mt-4">
              <div className="flex justify-between items-center pb-2">
                <h3 className="text-3xl font-bold"> Project’s Media</h3>
                <Button
                  placeholder={undefined}
                  className="bg-transparent capitalize underline text-primary shadow-none"
                  onClick={() => setReview(true)}
                >
                  Review
                </Button>
              </div>
              <p className="font-title w-fit rounded-md pb-[0.425rem]">
                Showcase some images or videos of your work.
              </p>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-[32rem] mt-4 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5 peer">
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </Label>
              </div>
            </div>
          </div>
          <div className="w-1/2 grid gap-1">
            <h2 className="font-bold text-[1.875rem] font-title mb-2">
              Client’s Details
            </h2>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Company name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter company name here..."
                name="client_name"
                onChange={handleInputChange}
                value={portfolio.client_name}
              />
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Company address
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter client’s address here..."
                name="client_address"
                onChange={handleInputChange}
                value={portfolio.client_address}
              />
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Company sector
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter client’s sector here..."
                name="client_sector"
                onChange={handleInputChange}
                value={portfolio.client_sector}
              />
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Project’s scope (optional)
              </label>
              <Select
                size="lg"
                placeholder={undefined}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                label="Project’s scope"
                labelProps={{
                  className: "hidden",
                }}
                name="project_scope"
                onChange={(e: any) =>
                  setPortfolio({ ...portfolio, project_scope: e })
                }
                value={portfolio.project_scope}
              >
                <Option value="Regional">Regional</Option>
                <Option value="National">National</Option>
                <Option value="International">International</Option>
              </Select>
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Project’s audience (optional)
              </label>
              <Select
                size="lg"
                placeholder={undefined}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                label="Project’s scope"
                labelProps={{
                  className: "hidden",
                }}
                name="project_audience"
                onChange={(e: any) =>
                  setPortfolio({ ...portfolio, project_audience: e })
                }
                value={portfolio.project_audience}
              >
                <Option value="B2B">B2B</Option>
                <Option value="B2C">B2C</Option>
                <Option value="C2C">C2C</Option>
                <Option value="B2G">B2G</Option>
              </Select>
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Ask this client for a review for this project (optional)
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter client’s email"
                name="client_email"
                onChange={handleInputChange}
                value={portfolio.client_email}
              />
              <span className="text-gray-300 text-xs mt-2 ">
                Confidential: Your client's email is private and will not be
                saved or shown anywhere.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-[90%] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10">
        <div className="flex w-full px-10 mt-8 gap-6 items-start h-full pb-5">
          <div className="w-1/2 grid h-full">
            <h2 className="font-bold text-2xl font-title">Service</h2>
            <p className="text-sm  mb-2">
              Indicate the services you provided for the client in this project.
            </p>
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
                        if (!portfolio.services.includes(i)) {
                          setPortfolio({
                            ...portfolio,
                            services: [...portfolio.services, i],
                          });
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
                {portfolio.services.map((tag) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                    key={tag}
                    onClick={() => {
                      setPortfolio({
                        ...portfolio,
                        services: portfolio.services.filter((i) => i !== tag),
                      });
                    }}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>

            <h2 className="font-bold text-2xl font-title mt-4">Budget</h2>
            <p className="font-bold mb-2 text-xs">(optional)</p>
            <p className="mb-2 text-xs">
              Let us know how much money was allotted to completing this
              project.
            </p>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <input
                id="description"
                className="border-[1px] p-2 rounded-md"
                name="budget"
                onChange={handleInputChange}
                value={portfolio.budget}
              />
              <p className="mb-2 text-xs mt-2">
                Confidential: This information will not be made public on your
                Agency Page, but it will assist us in sending you more accurate
                and relevant projects offers with similar budget.
              </p>
            </div>

            <h2 className="font-bold text-2xl font-title mt-4">
              Description for the project
            </h2>
            <p className="font-bold mb-2 text-xs">(optional)</p>
            <p className="mb-2 text-xs">
              Let us know how much money was allotted to completing this
              project.
            </p>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <textarea
                name="description"
                onChange={handleInputChange}
                id="description"
                className="border-[1px] p-2 rounded-md h-[10rem]"
                value={portfolio.description}
              ></textarea>
            </div>

            <h2 className="font-bold text-2xl font-title mt-4">
              Duration of the project
            </h2>
            <p className="font-bold mb-2 text-xs">(optional)</p>
            <div className="flex w-full mx-auto gap-6">
              <div className="grid w-1/2">
                <label
                  htmlFor="name"
                  className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
                >
                  From:
                </label>
                <input
                  type="date"
                  id="name"
                  className="border-[1px] p-2 rounded-md w-full"
                  name="start_date"
                  onChange={handleInputChange}
                  value={
                    new Date(portfolio.start_date)?.toJSON()?.split("T")[0]
                  }
                />
              </div>
              <div className="grid w-1/2">
                <label
                  htmlFor="name"
                  className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
                >
                  To:
                </label>
                <input
                  type="date"
                  id="name"
                  className="border-[1px] p-2 rounded-md w-full"
                  name="end_date"
                  onChange={handleInputChange}
                  value={new Date(portfolio.end_date)?.toJSON()?.split("T")[0]}
                />
              </div>
            </div>
            <div className="flex mt-3 items-center">
              <input
                id="default-radio-1"
                type="checkbox"
                checked={portfolio.is_working}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                name="end_date"
                onChange={(e) => {
                  const { checked } = e.target;
                  setPortfolio({ ...portfolio, is_working: checked });
                }}
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Still ongoing
              </label>
            </div>
          </div>
          <div className="w-1/2 grid gap-1 h-full items-start">
            <h2 className="font-bold text-2xl font-title mb-2">Skills</h2>
            <p className="text-sm">
              Indicate the skills needed for your team to complete the project
              to the client.
            </p>

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
                        if (!portfolio.skills.includes(i)) {
                          setPortfolio({
                            ...portfolio,
                            skills: [...portfolio.skills, i],
                          });
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
                {portfolio.skills.map((tag) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="bg-secondary text-text w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                    key={tag}
                    onClick={() => {
                      setPortfolio({
                        ...portfolio,
                        skills: portfolio.skills.filter((i) => i !== tag),
                      });
                    }}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid w-full mx-auto mt-5">
              <p className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text">
                Suggested skills tags:
              </p>
              <ul className="w-full h-[8rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                {agencySkillTagsRequirements.map((tag) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="bg-secondary text-text w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                    key={tag}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>

            <h2 className="font-bold text-2xl font-title mt-4">Results link</h2>
            <p className="font-bold mb-2 text-xs">(optional)</p>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <input
                id="description"
                className="border-[1px] p-2 rounded-md"
                name="result_link"
                onChange={handleInputChange}
                value={portfolio.result_link}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-end w-1/2 ml-auto">
          {!id ? (
            <Button
              placeholder={undefined}
              className="bg-red-200 text-red-500 w-1/3"
              onClick={moveNext}
            >
              Cancel
            </Button>
          ) : (
            <Button
              placeholder={undefined}
              className="bg-red-200 text-red-500 w-1/3"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
          <Button
            placeholder={undefined}
            className="bg-primary w-1/3"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </section>
    </div>
  );
}
