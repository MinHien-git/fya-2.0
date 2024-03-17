export default function WorkingSpaceTarget() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <p className="font-title">Project Leads Extension</p>
          <p className="font-title">Targeting</p>
        </div>
      </div>
      <section className="w-full">
        <section className="max-w-7xl w-[90%] min-h-[70vh] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10">
          <div className="flex w-full px-10 flex-col">
            <h2 className="font-title text-[1.875rem] text-center font-bold pt-8">
              Setup your leads preferences
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm text-center">
              Manage your services, skills, prospecting areas, budget, and
              languages of projects that you want to receive from the Extension.
            </p>
          </div>
          <div className="flex w-full px-10 mt-8 gap-6 items-start">
            <div className="w-1/2 grid">
              <h2 className="font-bold text-2xl font-title">Service</h2>
              <div className="grid w-full mx-auto">
                <label
                  htmlFor="name"
                  className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
                >
                  Agency name
                </label>
                <p className="text-text text-xs  mb-2">
                  Indicate the services your agency would provide in projects
                  you receive.
                </p>
                <input
                  type="text"
                  id="name"
                  className="border-[1px] p-2 rounded-md"
                  placeholder="Select service"
                />
                <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                  <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-[10px] py-2 font-title font-semibold">
                    <div>[Service Name]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Service Name]</div>
                    <div>X</div>
                  </div>
                </div>
              </div>

              <h2 className="font-bold text-2xl font-title mt-4">
                Minimum budget
              </h2>
              <p className="mb-2 text-xs">
                Provide the lowest budget for a project that your agency would
                take
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
                  placeholder="$"
                />
              </div>

              <h2 className="font-bold text-2xl font-title mt-4">
                Prospecting areas
              </h2>
              <p className="mb-2 text-xs">
                Select the geographical areas in which you want to receive leads
                from.
              </p>
              <div className="grid w-full mx-auto gap-2">
                <ul className="flex px-4 gap-4 border-[1px] border-primary py-4 rounded-xl">
                  <li className="w-6 aspect-square bg-slate-200"></li>
                  <li>[Address]</li>
                  <li className="w-6 aspect-square bg-slate-200 ml-auto"></li>
                </ul>
                <ul className="flex px-4 gap-4 border-[1px] border-text py-4 rounded-xl border-dotted">
                  <li className="w-6 aspect-square bg-slate-200"></li>
                  <li>Add a new address</li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 grid gap-1">
              <h2 className="font-bold text-2xl font-title">Skills Tags</h2>
              <div className="grid w-full mx-auto">
                <label
                  htmlFor="name"
                  className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
                >
                  Agency name
                </label>{" "}
                <p className="text-text text-xs  mb-2">
                  Indicate the services your agency would provide in projects
                  you receive.
                </p>
                <input
                  type="text"
                  id="name"
                  className="border-[1px] p-2 rounded-md"
                  placeholder="Select service"
                />
                <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Skills Name]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Name]</div>
                    <div>X</div>
                  </div>{" "}
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Name Skills]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Name Skills]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Name Skills Name Name]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
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
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Skills Name]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Name]</div>
                    <div>X</div>
                  </div>{" "}
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Name Skills]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Name Skills]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Name Skills Name Name]</div>
                    <div>X</div>
                  </div>
                  <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                    <div>[Skills Name]</div>
                    <div>X</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full mx-auto">
                <h2 className="font-bold text-2xl font-title">
                  Language(s) available
                </h2>
                <div className="grid w-full mx-auto">
                  <label
                    htmlFor="name"
                    className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
                  >
                    Language available
                  </label>

                  <input
                    type="text"
                    id="name"
                    className="border-[1px] p-2 rounded-md"
                    placeholder="Select service"
                  />
                  <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                    <div className="flex text-xs justify-between w-fit gap-8 text-primary bg-slate-200 px-4 rounded-[10px] py-2 font-title font-semibold">
                      <div>Language</div>
                      <div>X</div>
                    </div>
                    <div className="flex text-xs justify-between w-fit gap-8 text-primary bg-slate-200 px-4 rounded-[10px] font-semibold py-2 font-title">
                      <div>Language</div>
                      <div>X</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full">
        <section className="max-w-7xl w-[90%] flex rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10 gap-4">
          <div className="flex w-full px-10 flex-col">
            <h2 className="font-title text-[1.875rem] text-center font-bold pt-8">
              Customize your ideal client profiles
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm text-center">
              Describe to us the portrait of customers who would be benefited
              the most from the services your agency offers.
            </p>
          </div>
          <div className="grid w-[90%] mx-auto gap-2">
            <ul className="flex border-2 rounded-xl px-6 py-4 w-full">
              <li className="text-lg font-semibold font-title">
                Client’s industries
              </li>
              <li className="flex gap-2 ml-auto">
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <button className="px-7 h-full bg-slate-200 flex justify-center items-center text-xs text-primary">
                  Edit
                </button>
              </li>
            </ul>
            <ul className="flex border-2 rounded-xl px-6 py-4 w-full">
              <li className="text-lg font-semibold font-title ">
                Preferrable project scopes
              </li>
              <li className="flex gap-2 ml-auto">
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <button className="px-7 h-full bg-slate-200 flex justify-center items-center text-xs text-primary">
                  Edit
                </button>
              </li>
            </ul>
            <ul className="flex border-2 rounded-xl px-6 py-4 w-full">
              <li className="text-lg font-semibold font-title">
                Client’s audiences
              </li>
              <li className="flex gap-2 ml-auto">
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <button className="px-7 h-full bg-slate-200 flex justify-center items-center text-xs text-primary">
                  Edit
                </button>
              </li>
            </ul>
            <ul className="flex border-2 rounded-xl px-6 py-4 w-full">
              <li className="text-lg font-semibold font-title">
                Client’s business type{" "}
              </li>
              <li className="flex gap-2 ml-auto">
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <div className="w-16 h-full bg-slate-200 border-[1px] rounded-2xl border-text"></div>
                <button className="px-7 h-full bg-slate-200 flex justify-center items-center text-xs text-primary">
                  Edit
                </button>
              </li>
            </ul>
            <ul className="flex w-full gap-2">
              <li className="grid gap-3 w-1/2 border-2 px-5 pt-4 pb-6 rounded-xl">
                <label
                  htmlFor="location"
                  className="font-semibold w-fit px-1 py-[0.225rem] md:py-[0.425rem] text-lg rounded-md font-title"
                >
                  Client’s company revenue
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="location"
                    className="border-primary border-2 p-2 rounded-l-md w-1/2 border-r-[1px]"
                    placeholder="From"
                  />
                  <input
                    type="text"
                    id="location"
                    className="border-primary border-2 p-2 rounded-r-md w-1/2 border-l-0"
                    placeholder="To"
                  />
                </div>
              </li>

              <li className="grid gap-3 w-1/2 border-2 px-5 pt-4 pb-6 rounded-xl">
                <label
                  htmlFor="location"
                  className="font-semibold w-fit px-1 py-[0.225rem] md:py-[0.425rem] text-lg rounded-md font-title"
                >
                  Client’s company size
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="location"
                    className="border-primary border-2 p-2 rounded-l-md w-1/2 border-r-[1px]"
                    placeholder="From"
                  />
                  <input
                    type="text"
                    id="location"
                    className="border-primary border-2 p-2 rounded-r-md w-1/2 border-l-0"
                    placeholder="To"
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-7xl w-[90%] flex mb-10 mt-4 mx-auto gap-2 justify-end">
          <button className="bg-tertiary text-primary rounded-md  py-2 font-semibold mt-2 text-xs px-6">
            Cancel
          </button>{" "}
          <button className="bg-primary text-white rounded-md py-2 font-semibold mt-2 font-title text-xs px-6">
            Save changes
          </button>
        </section>
      </section>
    </main>
  );
}
