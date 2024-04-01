import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Awards() {
  return (
    <>
      <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          Awards
        </h2>
        <p className="text-center">
          Showcase to your clients all of your company's achievements and
          certifications. They will be visible on your Agency Page.
        </p>
        <p className="text-gray-400 text-xs mt-4 font-bold">
          The arrangement of your awards will be displayed on your Page.
        </p>
        <section className="grid w-full gap-5 mt-6  overflow-y-auto">
          <div className="font-sans flex border-2 rounded-[10px] w-full py-6 px-8  h-[6.25rem] items-center shadow-md shadow-primary-500/20">
            <ul className="flex w-full items-center justify-between">
              <li className="h-[3.125rem] self-end flex">
                <button
                  className="inline-flex mt-0 pl-0 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
              <li className="w-1/4 px-5">
                <li className="text-xs">Award Name</li>
                <li className="font-bold text-nowrap">[Award Name]</li>
              </li>
              <li className="w-1/4 px-5 border-l-2">
                <ul>
                  <li className="text-xs">Category</li>
                  <li className="font-bold text-nowrap">[Catergory Name]</li>
                </ul>
              </li>
              <li className="w-1/4 px-5 border-l-2">
                <ul>
                  <li className="text-xs">Date</li>
                  <li className="font-bold text-nowrap">[mm/yyyy]</li>
                </ul>
              </li>
              <li className="w-1/4 pl-5 border-l-2">
                <ul>
                  <li className="text-xs text-nowrap">
                    Link to an existing work
                  </li>
                  <li className="font-bold text-nowrap">[sample.com]</li>
                </ul>
              </li>
              <li className="px-8 bg-gray-300 text-primary text-sm py-2 rounded-md">
                Edit
              </li>
            </ul>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another project</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another project</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another project</p>
          </div>
          <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
            <p className="text-text font-semibold">Add another project</p>
          </div>
        </section>
      </section>
    </>
  );
}
