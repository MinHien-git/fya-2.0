import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Services() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-12">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          Service & Skills Tags
        </h2>
        <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
          Highlight your abilities to deliver services to potential clients by
          highlighting your areas of expertise and skills related to your
          services. The order in which you arrange your services and skills will
          have an impact on the projects we match you with.
        </p>
        <section className="grid w-full gap-5 mt-6">
          <p> The arrangement of your works will be displayed on your Page.</p>
          <div className="font-sans flex border-2 rounded-[10px] w-full py-6 px-8 border-text h-[6.25rem] items-center">
            <ul className="flex w-full items-center h-full">
              <li className="h-[3.125rem] flex">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
              <li className="flex w-1/6 font-bold text-nowrap">
                [Service Name]
              </li>

              <li className="w-2/3 px-3 border-2 h-full rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[25rem] ml-auto">
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
            </ul>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another service</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another service</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another service</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another service</p>
          </div>
        </section>
      </section>
    </main>
  );
}
