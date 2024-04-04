import { FileInput, Label } from "flowbite-react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Company() {
  return (
    <div className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <h2 className="font-title text-[1.875rem] font-bold pt-5">
              Team/Company picture
            </h2>
            <p className="text-xs">
              Add a picture of your team/company to your Agency Page.
            </p>
          </div>
          <button
            className="middle none center rounded-md py-2 px-10 font-sans text-sm font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2"
            data-ripple-light="true"
          >
            Save changes
          </button>
        </div>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-[32rem] mt-4 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <h2 className="font-title text-[1.875rem] font-bold pt-5">Story</h2>
            <p className="text-xs">
              Give visitors to your profile information about the background and
              core values of your agency.
            </p>
          </div>
          <button
            className="middle none center rounded-md py-2 px-10 font-sans text-sm font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2"
            data-ripple-light="true"
          >
            Save changes
          </button>
        </div>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end mt-5">
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <textarea
                id="description"
                className="border-[1px] p-2 rounded-md"
              ></textarea>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
