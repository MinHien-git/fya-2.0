import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function ManagePortfolio() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10">
        <div className="flex w-full px-10 mt-14 gap-6">
          <ul className="flex w-[50%] gap-3">
            <li className="w-8 aspect-square rounded-md bg-slate-300"></li>
            <li className="bg-slate-300 px-6 rounded-md text-blue-500 py-1 text-sm flex items-center font-bold">
              Edit
            </li>
          </ul>
        </div>
        <div className="flex w-full px-10 mt-8 gap-6 items-start">
          <div className="w-1/2 grid gap-6">
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-bold text-[1.875rem] font-title w-fit py-[0.225rem] md:py-[0.425rem] rounded-md"
              >
                Project’s Name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Enter project’s name here..."
              />
            </div>
            <div className="grid w-full mx-auto">
              <h3 className="font-bold text-[1.875rem] font-title w-fit rounded-md">
                Project’s Media
              </h3>
              <p className="font-title w-fit rounded-md pb-[0.425rem]">
                Showcase some images or videos of your work.
              </p>
              <div className="w-full aspect-[10/8] border-2 rounded-2xl border-dashed flex items-center justify-center flex-wrap gap-3">
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <div className="bg-slate-300 px-4 py-2 rounded-md text-sm">
                    Upload
                  </div>
                  <div className="bg-slate-300 px-4 py-2 rounded-md text-sm">
                    Add YouTube video
                  </div>
                  <div className="bg-slate-300 px-4 py-2 rounded-md text-sm">
                    Add Google Drive media file
                  </div>
                </div>
              </div>
              <span className="text-gray-300 text-xs mt-2 ">
                Image min res.: 1200x900px Image max. size: 2MB Aspect ratio:
                1.3:1
              </span>
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
              />
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Project’s scope (optional)
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select client’s scope"
              />
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Project’s audience (optional)
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select client’s scope"
              />
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
                disabled
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
        <div className="flex w-full px-10 mt-8 gap-6 items-start">
          <div className="w-1/2 grid">
            <h2 className="font-bold text-2xl font-title">Service</h2>
            <p className="text-sm  mb-2">
              Indicate the services you provided for the client in this project.
            </p>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Agency name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select service"
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-md font-semibold py-2">
                  <div>[Service Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-md font-semibold py-2">
                  <div>[Service Name]</div>
                  <div>X</div>
                </div>
              </div>
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

              <input id="description" className="border-[1px] p-2 rounded-md" />
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
                id="description"
                className="border-[1px] p-2 rounded-md h-[10rem]"
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
                />
              </div>
            </div>
            <div className="flex mt-5 items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Still ongoing
              </label>
            </div>
          </div>
          <div className="w-1/2 grid gap-1">
            <h2 className="font-bold text-2xl font-title mb-2">Skills</h2>
            <p className="text-sm">
              Indicate the skills needed for your team to complete the project
              to the client.
            </p>
            <div className="grid w-full mx-auto mt-2">
              <label
                htmlFor="name"
                className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Agency name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select service"
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Skills Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>{" "}
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Name Skills Name Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>
              </div>
            </div>
            <div className="grid w-full mx-auto mt-5">
              <p className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text">
                Suggested skills tags:
              </p>
              <div className="w-full flex py-2 rounded-b-2xl gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Skills Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>{" "}
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Name Skills Name Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-md font-semibold py-2">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>
              </div>
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Search for specific skills tags:
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Search for skills here..."
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap min-h-[3rem]"></div>
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
              ></input>
            </div>
            <div className="flex mt-10">
              <button
                className="middle none center rounded-md py-2 px-10 font-sans text-xs font-bold text-primary shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 bg-gray-300 disabled:shadow-none lg:inline-block mr-2 text-nowrap"
                data-ripple-light="true"
              >
                Cancel
              </button>
              <button
                className="middle none center rounded-md py-2 px-10 font-sans font-bold  shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  bg-red-200 text-red-500 lg:inline-block mr-2 text-xs text-nowrap"
                data-ripple-light="true"
              >
                Delete project
              </button>
              <button
                className="middle none center rounded-md py-2 px-10 font-sans text-xs font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2 text-nowrap"
                data-ripple-light="true"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
