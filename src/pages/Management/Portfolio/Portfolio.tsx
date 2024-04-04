import { useState } from "react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import ManagePortfolio from "../ManagePortfolio/ManagePortfolio";

export default function Portfolio() {
  const [state, setState] = useState(0);

  return (
    <>
      {state === 0 ? (
        <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
          <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
            Portfolio
          </h2>
          <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
            Elevate your agency's professional image with Fya's Portfolio
            feature. Highlight your expertise, services, and skills through a
            collection of past work. As a results, this help you to enhance your
            search ranking and increase your chances of securing high-value
            projects using the
            <span className="text-primary font-bold"> Leads Extension.</span>
          </p>
          <p className="text-gray-400 text-xs mt-4 font-bold">
            The arrangement of your awards will be displayed on your Page.
          </p>
          <section className="grid w-full gap-5 mt-6 overflow-y-auto">
            <div className="font-sans flex border-2 rounded-[10px] w-full py-6 px-8  h-[6.25rem] items-center shadow-md shadow-primary-500/20">
              <ul className="flex w-full items-center h-full">
                <li className="h-[3.125rem] flex">
                  <button
                    className="inline-flex mt-0 pl-0 items-center justify-center p-2 rounded-md text-gray-400 cursor-grab"
                    aria-label="Main menu"
                    aria-expanded="false"
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li className="flex px-5 w-1/6 font-bold text-nowrap">
                  [Project Name]
                </li>

                <li className="w-1/3 px-3 border-2 h-full rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[18rem] ml-auto">
                  <div className="flex text-xs justify-between items-center w-auto gap-2 flex-nowrap text-nowrap bg-primary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Service Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center w-auto gap-2 flex-nowrap text-nowrap bg-primary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Service Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center flex-nowrap w-auto gap-2 text-nowrap bg-primary text-white px-2 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Service Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center w-auto gap-2 flex-nowrap text-nowrap bg-primary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Service Name]</div>
                  </div>
                </li>
                <li className="w-1/3 px-3 border-2 h-full rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[18rem] ml-2">
                  <div className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Skills Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Skills Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-white px-2 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Skills Name]</div>
                  </div>
                  <div className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                    <div>[Skills Name]</div>
                  </div>
                </li>
                <li
                  className="ml-4 px-8 bg-gray-300 text-primary text-sm py-2 rounded-md cursor-pointer"
                  onClick={() => setState(1)}
                >
                  Edit
                </li>
              </ul>
            </div>
            <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 aspect-square"
              >
                <rect width="21" height="21" fill="#F9F9F9" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="10"
                  fill="#D9D9D9"
                  stroke="#9EA0A3"
                />
                <path d="M5 10.5H16" stroke="#9EA0A3" />
                <path d="M10.5 16L10.5 5" stroke="#9EA0A3" />
              </svg>
              <p className="text-text font-semibold">Add another project</p>
            </div>
            <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 aspect-square"
              >
                <rect width="21" height="21" fill="#F9F9F9" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="10"
                  fill="#D9D9D9"
                  stroke="#9EA0A3"
                />
                <path d="M5 10.5H16" stroke="#9EA0A3" />
                <path d="M10.5 16L10.5 5" stroke="#9EA0A3" />
              </svg>
              <p className="text-text font-semibold">Add another project</p>
            </div>
            <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 aspect-square"
              >
                <rect width="21" height="21" fill="#F9F9F9" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="10"
                  fill="#D9D9D9"
                  stroke="#9EA0A3"
                />
                <path d="M5 10.5H16" stroke="#9EA0A3" />
                <path d="M10.5 16L10.5 5" stroke="#9EA0A3" />
              </svg>
              <p className="text-text font-semibold">Add another project</p>
            </div>
            <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 aspect-square"
              >
                <rect width="21" height="21" fill="#F9F9F9" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="10"
                  fill="#D9D9D9"
                  stroke="#9EA0A3"
                />
                <path d="M5 10.5H16" stroke="#9EA0A3" />
                <path d="M10.5 16L10.5 5" stroke="#9EA0A3" />
              </svg>
              <p className="text-text font-semibold">Add another project</p>
            </div>
          </section>
        </section>
      ) : (
        <ManagePortfolio moveNext={() => setState(0)} />
      )}
    </>
  );
}
