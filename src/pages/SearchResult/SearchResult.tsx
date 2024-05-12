import { useEffect, useState } from "react";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { GetPages } from "../../api/lib/page";
import LargeAgencyCard from "../../components/LargeAgencyCard/LargeAgencyCard";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Option, Select } from "@material-tailwind/react";
import {
  agencyServices,
  agencySkillTagsRequirements,
  speakingLanguages,
} from "../../components/PostProjectPopup/PostProjectPopup";
import stringSimilarity from "string-similarity-js";
import { setTeamMember } from "../../features/pages/pageSplice";
export default function SearchResult() {
  const { state } = useLocation();
  const { services, location } = state;
  const [pages, setPages] = useState<Array<any>>([]);
  const handleSubmit = async () => {
    let result = await GetPages();
    setPages(result.data?.data ? result.data?.data : []);
    console.log(result.data?.data);
  };
  const [allServices, setAllServices] = useState<Array<string>>(agencyServices);
  const [currentSkills, setCurrentSkill] = useState<Array<string>>([]);
  const [skills, setSkills] = useState<Array<string>>(
    agencySkillTagsRequirements
  );

  const [currentServices, setCurrentServices] = useState<Array<string>>(
    services ? services : []
  );
  const [currentSearch, setCurrentSearch] = useState("");
  const [skillSearch, setSkillSearch] = useState("");

  const [focus, setFocus] = useState(false);
  const [skillFocus, setSkillFocus] = useState(false);
  let inteval: any = null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  const handleLanguageSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };
  const [languages, setLanguage] = useState<Array<string>>(speakingLanguages);
  const [currentLanguage, setCurrentLanguage] = useState<Array<string>>([]);

  const [focusL, setFocusL] = useState(false);
  const [currentLSearch, setCurrentLSearch] = useState("");

  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(0);

  const [agencyLocation, setAgencyLocation] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");

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

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    console.log(currentSearch);
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        setAllServices(
          agencyServices.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              !currentServices.includes(i)
          )
        );
      } else {
        console.log(currentServices);
        setAllServices(
          agencyServices.filter((i) => !currentServices.includes(i))
        );
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch, currentServices]);

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     if (skillSearch) {
  //       setSkills(
  //         agencySkillTagsRequirements.filter(
  //           (i) =>
  //             (stringSimilarity(i, currentSearch) > 0.8 ||
  //               i.toLowerCase().includes(skillSearch.toLowerCase())) &&
  //             !currentSkills.includes(i)
  //         )
  //       );
  //     } else {
  //       setSkills(
  //         agencySkillTagsRequirements.filter((i) => !currentSkills.includes(i))
  //       );
  //     }
  //   }, 200);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [skillSearch, currentSkills]);

  // const handleSkillSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSkillSearch(e.target.value);
  // };
  return (
    <main className="w-full min-h-80 pt-0">
      <section className="w-full border-2 mb-5 pb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-light_yellow px-3">
        <div className="grid gap-3 px-2 h-auto py-5 max-w-7xl mx-auto">
          <div className="bg-tertiary text-primary font-bold px-16 py-4 text-center font-title w-fit mb-4">
            Result Filters:
          </div>
          <div className="grid gap-5 md:flex justify-start items-start">
            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Services
              </label>
              <div className="max-h-[20rem] w-full bg-white z-[10] relative">
                <Input
                  crossOrigin={undefined}
                  size="lg"
                  type="email"
                  placeholder="Select services"
                  className="!border-primary !border-2 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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
                  <ul className="absolute w-full bottom-0 py-3 bg-white shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 ">
                    {allServices.map((i) => (
                      <li
                        className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                        onClick={() => {
                          if (!currentServices.includes(i)) {
                            setCurrentServices([...currentServices, i]);
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
                      transition={{
                        ease: "easeOut",
                        duration: 0.2,
                        delay: 0.2,
                      }}
                      className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                      key={tag}
                      onClick={() => {
                        setCurrentServices(
                          currentServices.filter((i) => i !== tag)
                        );
                      }}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="grid gap-3 w-1/4">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Skills
              </label>
              <div className="max-h-[20rem] w-full bg-white z-[10] relative">
                <Input
                  crossOrigin={undefined}
                  size="lg"
                  type="email"
                  placeholder="Select services"
                  className="!border-primary !border-2 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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
                  <ul className="absolute w-full left-0 py-3 bg-white shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 ">
                    {skills.map((i) => (
                      <li
                        className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                        onClick={() => {
                          if (!currentSkills.includes(i)) {
                            setCurrentSkill([...currentSkills, i]);
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
                  {currentSkills.map((tag) => (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.2,
                        delay: 0.2,
                      }}
                      className="text-text bg-secondary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                      key={tag}
                      onClick={() => {
                        setCurrentSkill(currentSkills.filter((i) => i !== tag));
                      }}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Language(s)
              </label>
              <div className="max-h-[20rem] w-full bg-white z-[10] relative">
                <Input
                  crossOrigin={undefined}
                  size="lg"
                  type="email"
                  placeholder="Select services"
                  className="!border-primary !border-2 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  value={currentLSearch}
                  containerProps={{ className: "min-w-[100px]" }}
                  onFocus={() => {
                    clearTimeout(inteval);
                    setFocusL(true);
                  }}
                  onBlur={() => {
                    inteval = setTimeout(function () {
                      setFocusL(false);
                    }, 300);
                  }}
                  onChange={handleLanguageSearch}
                />
                {focusL ? (
                  <ul className="absolute w-full left-0 py-3 bg-white shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 ">
                    {languages.map((i) => (
                      <li
                        className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                        onClick={() => {
                          if (!currentLanguage.includes(i)) {
                            setCurrentLanguage([...currentLanguage, i]);
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
                  {currentLanguage.map((tag) => (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.2,
                        delay: 0.2,
                      }}
                      className="text-tertiary bg-primary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                      key={tag}
                      onClick={() => {
                        setCurrentLanguage(
                          currentLanguage.filter((i) => i !== tag)
                        );
                      }}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="location"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Estimated budget
              </label>
              <div className="flex">
                <input
                  type="number"
                  min="0"
                  id="location"
                  className="border-primary border-2 p-2 rounded-l-md w-1/2 border-r-[1px]"
                  placeholder="From"
                />
                <input
                  type="number"
                  min="0"
                  id="location"
                  className="border-primary border-2 p-2 rounded-r-md w-1/2 border-l-0"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <div className="grid md:flex gap-5 justify-start">
            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="location"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Type location"
              />
            </div>
            <div className="grid gap-3 w-1/4 ">
              <label
                htmlFor="team-Size"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Team Size
              </label>
              <Select
                placeholder={undefined}
                label="Team Size"
                size="lg"
                id="team-Size"
                className=" !border-primary !border-2 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                onChange={(v) => {
                  setTeamMember(v);
                }}
                value={teamSize}
              >
                <Option value="1 person">1 person</Option>
                <Option value="2-10 people">2-10 people</Option>
                <Option value="11-50 people">11-50 people</Option>
                <Option value="51-100 people">51-100 people</Option>
                <Option value="101-500 people">101-500 people</Option>
                <Option value="101-500 people">501-1000 people</Option>
                <Option value="101-500 people">1001-5000 people</Option>
                <Option value="101-500 people">More than 5000 people</Option>
              </Select>
            </div>
            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Sort by
              </label>
              <Select
                size="lg"
                placeholder={undefined}
                className=" !border-primary !border-2 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                label="Project’s scope"
                labelProps={{
                  className: "hidden",
                }}
                name="project_audience"
                value={"Recommended"}
              >
                <Option value="Recommended">Recommended</Option>
                <Option value="AtoZ">A to Z</Option>
                <Option value="ZtoA">Z to A</Option>
                <Option value="HtoL">High to Low</Option>
                <Option value="LtoH">Low to High</Option>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-0 my-5 mx-auto">
        <div className="py-5 w-full px-4">
          <h2 className="text-base py-2 font-bold text-center font-title bg-secondary rounded-lg w-fit px-6">
            We found {pages.length} agencies match you
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full md:grid md:grid-cols-3 lg:grid-cols-4">
            {pages?.map((page) => (
              <LargeAgencyCard page={page} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
