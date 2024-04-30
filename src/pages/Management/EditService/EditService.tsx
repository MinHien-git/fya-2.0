import { Button, IconButton, Input, Radio } from "@material-tailwind/react";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Label, Textarea } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import {
  agencyServices,
  agencySkillTagsRequirements,
} from "../../../components/PostProjectPopup/PostProjectPopup";
import stringSimilarity from "string-similarity-js";
import { motion } from "framer-motion";
import {
  DeletePageService,
  postPageService,
  PutPageService,
  GetService,
} from "../../../api/lib/page";
import { useSelector } from "react-redux";

export interface ITab {
  moveNext: () => void;
  addService?: boolean;
  id?: string;
}

export default function EditService({ moveNext, id }: ITab) {
  const priceRef = useRef<any>(null);
  const page_id = useSelector((state: any) => state.page.page_id);
  const [service, setService] = useState<any>({});

  const [services, setServices] = useState<Array<string>>(agencyServices);
  const [skills, setSkills] = useState<Array<string>>(
    agencySkillTagsRequirements
  );

  const [currentServices, setCurrentService] = useState<string>("");
  const [currentSkills, setCurrentSkill] = useState<Array<string>>([]);

  const [focus, setFocus] = useState(false);
  const [skillFocus, setSkillFocus] = useState(false);

  const [currentSearch, setCurrentSearch] = useState("");
  const [skillSearch, setSkillSearch] = useState("");

  let inteval: any = null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  async function handleSubmit() {
    if (!id) {
      console.log(currentServices);

      const result = await postPageService(page_id, {
        ...service,
        skills_tags: currentSkills,
        service_tags: currentServices,
      });
    } else {
      console.log(currentServices);
      const result = await PutPageService(id, {
        ...service,
        skills_tags: currentSkills,
        service_tags: currentServices,
      });
      console.log(result);
    }
    moveNext();
  }

  async function deleteService() {
    if (id) {
      const result = await DeletePageService(id);
      console.log(result);
      moveNext();
    }
  }

  const handleSkillSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillSearch(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        setServices(
          agencyServices.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              currentServices !== i
          )
        );
      } else {
        setServices(agencyServices.filter((i) => currentServices !== i));
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

  useEffect(() => {
    async function fetchService() {
      if (id) {
        let result = await GetService(id);
        if (result.data.data) {
          let {
            service_id,
            price,
            service_description,
            skill_tags,
            service_tags,
          } = result.data.data;
          setService(result.data.data);
          setCurrentService(service_tags);
          setCurrentSkill(skill_tags);
        }
      }
    }
    fetchService();
  }, []);

  return (
    <>
      <section className="max-w-7xl w-[90%] h-[80vh] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10 overflow-y-auto">
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
              {id ? "Edit Service" : "Add Service"}
            </li>
          </ul>
          <ul className="flex ml-auto gap-6">
            <li className="min-w-max rounded-md text-sm flex items-center font-bold">
              {id ? (
                <Button
                  size="lg"
                  className="bg-red-200 text-red-500 capitalize py-5"
                  placeholder={undefined}
                  onClick={deleteService}
                >
                  Delete service
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-red-200 text-red-500 capitalize py-5"
                  placeholder={undefined}
                  onClick={moveNext}
                >
                  Cancel
                </Button>
              )}
            </li>
            <li className="min-w-max bg-blue-500 rounded-md text-sm flex items-center font-bold">
              <Button
                size="lg"
                className="bg-primary text-white capitalize py-5"
                placeholder={undefined}
                onClick={handleSubmit}
              >
                Save changes
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex w-full px-10 mt-8 gap-6 items-start">
          <div className="w-1/2 grid">
            <h2 className="font-bold text-2xl font-title mb-2">Service</h2>
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
                        setCurrentService(i);
                        setCurrentSearch("");
                      }}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                {currentServices && (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                    key={currentServices}
                    onClick={() => {
                      setCurrentService("");
                    }}
                  >
                    {currentServices}
                  </motion.li>
                )}
              </ul>
            </div>

            <div className="font-bold text-2xl font-title mt-4">
              <Label
                htmlFor="comment"
                value="Description for your service"
                className="font-bold text-2xl font-title mt-4"
              />
              <p className="font-bold mb-2 text-xs">(optional)</p>
            </div>
            <Textarea
              id="comment"
              placeholder="Description"
              required
              className="p-3"
              rows={4}
              value={service?.service_description}
              onChange={(e) =>
                setService({ ...service, service_description: e.target.value })
              }
            />
            <h2 className="font-bold text-2xl font-title mt-4">
              Starting price for this service
            </h2>
            <p className="font-bold mb-2 text-xs">
              Set your starting price so that we could match you with clients
              with similar budget
            </p>
            <div className="flex w-full flex-nowrap gap-4">
              <div className="flex gap-2 flex-wrap">
                <Radio
                  name="type"
                  label="$100"
                  value={100}
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                  onChange={(e) =>
                    setService({ ...service, price: e.target.value })
                  }
                  defaultChecked={service.price === 100}
                />
                <Radio
                  name="type"
                  label="$1000"
                  value={1000}
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                  onChange={(e) =>
                    setService({ ...service, price: e.target.value })
                  }
                  defaultChecked={service.price === 1000}
                />
                <Radio
                  name="type"
                  label="$5000"
                  value={5000}
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                  onChange={(e) =>
                    setService({ ...service, price: e.target.value })
                  }
                  defaultChecked={service.price === 5000}
                />
                <Radio
                  name="type"
                  label="$10000"
                  placeholder={undefined}
                  crossOrigin={false}
                  value={10000}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  onChange={(e) =>
                    setService({ ...service, price: e.target.value })
                  }
                  defaultChecked={service.price === 10000}
                />
                <Radio
                  name="type"
                  label={
                    <>
                      $
                      <input
                        className="border-b-2 w-24 h-6 pb-1 font-bold text-sm focus:outline-none"
                        title=" price"
                        type="number"
                        ref={priceRef}
                        onChange={(e) =>
                          setService({ ...service, price: e.target.value })
                        }
                        value={service?.price}
                      />
                    </>
                  }
                  onFocus={() => priceRef?.current?.focus()}
                  labelProps={{
                    className: "text-xs font-bold h-full flex items-center",
                  }}
                  placeholder={undefined}
                  crossOrigin={false}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 grid gap-1">
            <h2 className="font-bold text-2xl font-title mb-2">Skills Tags</h2>
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
                          setCurrentSkill([...currentSkills, i]);
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
                      setCurrentSkill(currentSkills.filter((i) => i !== tag));
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
              <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                {agencySkillTagsRequirements.map((tag) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="bg-secondary text-text w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
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
          </div>
        </div>
      </section>
    </>
  );
}
