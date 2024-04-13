import { Button, Option, Select } from "@material-tailwind/react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { FileInput, Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDescription,
  setPage as setPageRedux,
  setTagline,
  setTeamMember,
} from "../../../features/pages/pageSplice";
import { GetManagePage, PutAboutPage } from "../../../api/lib/page";
import { useNavigate } from "react-router-dom";
import {
  setCompanyName,
  setTurnover,
  setFoundedDate,
  setLanguages,
} from "../../../features/pages/pageSplice";
import { speakingLanguages } from "../../../components/PostProjectPopup/PostProjectPopup";
import stringSimilarity from "string-similarity-js";

export default function About() {
  const dispatch = useDispatch();
  const pageSelector = useSelector((state: any) => state.page);
  const userSelector = useSelector((state: any) => state.user.value);
  const [languages, setLanguage] = useState<Array<string>>(speakingLanguages);
  const currentLanguage = useSelector((state: any) => state.page.languages);
  const [currentSearch, setCurrentSearch] = useState("");
  let inteval: any = null;
  const [focus, setFocus] = useState(false);

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

  const navigate = useNavigate();

  useEffect(() => {
    async function getPage() {
      if (userSelector) {
        let result = await GetManagePage(userSelector.id);
        dispatch(setPageRedux(result.data.data));
        console.log(result.data.data);
        console.log(pageSelector);
      } else {
        navigate("/");
      }
      //dispatch(setPage(result));
    }
    getPage();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(pageSelector);
    const result = await PutAboutPage(pageSelector.page_id, pageSelector);
    console.log(result);
    dispatch(setPageRedux(result.data.data));
  }

  return (
    <form
      className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto"
      onSubmit={handleSubmit}
    >
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-12">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          General information
        </h2>
        <section className="grid w-full gap-2">
          <div className="block">
            <Label
              htmlFor="agencyName"
              value="Agency name"
              className="font-semibold"
            />
          </div>
          <TextInput
            id="agencyName"
            type="text"
            placeholder="name@flowbite.com"
            value={pageSelector?.company_name}
            onChange={(e) => dispatch(setCompanyName(e.target.value))}
            required
          />
          <div className="flex w-full mx-auto gap-10 items-start">
            <div className="grid w-1/2 mx-auto mt-2 gap-2">
              <div className="grid gap-2">
                <Label
                  htmlFor="agencyName"
                  value="Annual turnover in USD/VND (private)"
                  className="font-semibold"
                />
                <p className="text-gray-300 text-sm">
                  We will not show this info on your page.
                </p>
              </div>
              <TextInput
                id="agencyName"
                type="text"
                placeholder="Annual turnover"
                value={pageSelector.turnover}
                onChange={(e) => dispatch(setTurnover(e.target.value))}
                required
              />
            </div>
            <div className="grid w-1/2 mx-auto mt-2 relative">
              <div className="grid gap-2">
                <Label
                  htmlFor="_Languages"
                  value="Languages"
                  className="font-semibold mb-2"
                />
              </div>
              <TextInput
                id="_Languages"
                type="text"
                placeholder="Languages"
                name="Languages"
                value={currentSearch}
                onFocus={() => {
                  clearTimeout(inteval);
                  setFocus(true);
                }}
                onBlur={() => {
                  inteval = setTimeout(function () {
                    setFocus(false);
                  }, 200);
                }}
                onChange={handleSearch}
              />
              {focus ? (
                <ul className="absolute  py-3 bg-white w-full shadow-lg rounded-b-xl h-auto max-h-[12rem] overflow-y-auto gap-2 z-[10000] -bottom-[9rem]">
                  {languages?.map((i) => (
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
              <ul className="w-full h-max-[5rem] flex items-start flex-wrap gap-2 border-2 border-t-0 border-dashed p-2 rounded-2xl">
                {pageSelector.languages.map((language) => (
                  <li className="bg-primary px-4 py-2 rounded-md text-white text-xs font-semibold">
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex w-full mx-auto gap-10 items-end mt-4">
            <div className="w-1/2 flex gap-5 items-end">
              <div className="grid w-1/3 gap-2">
                <div className="grid gap-2">
                  <Label
                    htmlFor="Establish date"
                    value="Establish date"
                    className="font-semibold"
                  />
                </div>
                <TextInput
                  id="Establish date"
                  type="date"
                  placeholder="Establish date"
                  value={
                    new Date(pageSelector?.founded_date)
                      ?.toJSON()
                      ?.split("T")[0]
                  }
                  onChange={(e) => dispatch(setFoundedDate(e.target.value))}
                  required
                />
              </div>
              <div className="grid w-2/3 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="email2" value="Number of members" />
                </div>
                <Select
                  placeholder={undefined}
                  label="Company Size"
                  value={pageSelector.team_members}
                  defaultValue={pageSelector.team_members}
                  size="lg"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  onChange={(e) => dispatch(setTeamMember(e))}
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
            </div>
            <div className="grid w-1/2 mx-auto">
              <div className="grid gap-2">
                <Label
                  htmlFor="agencyName"
                  value="Agency tagline"
                  className="font-semibold"
                />
                <p className="text-gray-300 text-xs">
                  The tagline will be shown on your agency's thumbnail on search
                  results, and on the front page with the Advertising Features
                </p>
              </div>
              <TextInput
                id="agencyName"
                type="text"
                placeholder="Agency tagline"
                value={pageSelector.tagline}
                onChange={(e) => dispatch(setTagline(e.target.value))}
              />
            </div>
          </div>
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-full mx-auto  mt-2">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Agency description" />
                <p className="text-gray-300 text-sm py-[0.225rem]">
                  Description will be shown on your Agency Page.
                </p>
              </div>
              <Textarea
                id="description"
                className="px-4 pt-2"
                placeholder="Leave a comment..."
                required
                rows={4}
                value={pageSelector.description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
              />
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-7xl w-[90%] rounded-xl mx-auto flex items-end">
        <section className="w-full rounded-xl border-2 mt-10 mx-auto px-12 flex gap-4">
          <div className="py-6 grid gap-2 font-title w-1/3">
            <h3 className="text-3xl font-bold pb-5">Logo</h3>
            <div className="flex w-[9.375rem] items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="w-[9.375rem] aspect-square border-dotted rounded-full flex cursor-pointer flex-col items-center justify-center border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="h-8 w-8 text-gray-500 dark:text-gray-400"
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
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
          </div>
          <div className="py-6 grid gap-2 font-title w-2/3">
            <h3 className="text-3xl font-bold pb-5">Cover</h3>
            <div className="flex w-full items-center justify-center h-[9.375rem]">
              <Label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
          </div>
        </section>
        <section className="w-1/3 rounded-xl mt-10 mx-auto px-6 grid gap-4">
          <Button
            size="lg"
            className="bg-primary text-white w-full"
            placeholder={undefined}
            type="submit"
          >
            Save changes
          </Button>
          <Button
            size="lg"
            className="bg-tertiary text-primary w-full"
            placeholder={undefined}
          >
            Cancel
          </Button>
        </section>
      </section>
    </form>
  );
}
