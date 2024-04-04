import { Button } from "@material-tailwind/react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { FileInput, Label } from "flowbite-react";

export default function About() {
  return (
    <div className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-12">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          General information
        </h2>
        <section className="grid w-full gap-5">
          <div className="grid w-full mx-auto">
            <label
              htmlFor="name"
              className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
            >
              Agency name
            </label>
            <input
              type="text"
              id="name"
              className="border-[1px] p-2 rounded-md"
            />
          </div>
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="services"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Annual turnover in USD/VND (private)
              </label>
              <span className="text-gray-300 text-sm py-[0.225rem]">
                We will not show this info on your page.
              </span>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md"
              />
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Language(s) available
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="w-1/2 flex gap-5 items-end">
              <div className="grid w-1/3">
                <label
                  htmlFor="services"
                  className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
                >
                  Established in
                </label>

                <input
                  type="text"
                  id="services"
                  className="border-[1px] p-2 rounded-md w-full"
                />
              </div>
              <div className="grid w-2/3 ">
                <label
                  htmlFor="services"
                  className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
                >
                  Number of team/company members
                </label>

                <input
                  type="text"
                  id="services"
                  className="border-[1px] p-2 rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="services"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency tagline
              </label>
              <span className="text-gray-300 text-[10px] py-[0.225rem]">
                The tagline will be shown on your agency's thumbnail on search
                results, and on the front page with the Advertising Features
              </span>
              <input
                type="text"
                id="services"
                className="border-[1px] p-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>
              <span className="text-gray-300 text-sm py-[0.225rem]">
                Description will be shown on your Agency Page.
              </span>
              <textarea
                id="description"
                className="border-[1px] p-2 rounded-md"
              ></textarea>
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
    </div>
  );
}
