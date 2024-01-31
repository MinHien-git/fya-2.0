import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function About() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
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
                id="services"
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
            <div className="w-[9.375rem] aspect-square border-2 border-dotted rounded-full flex justify-center items-center">
              <button className="bg-gray-300 rounded-md text-xs h-[2.125rem] font-semibold lg:h-[2.5rem] mt-2 px-6">
                Upload
              </button>
            </div>
          </div>
          <div className="py-6 grid gap-2 font-title w-2/3">
            <h3 className="text-3xl font-bold pb-5">Cover</h3>
            <div className="border-2 border-dotted w-full h-[9.375rem] rounded-lg flex justify-center items-center">
              <button className="bg-gray-300 rounded-md text-xs h-[2.125rem] font-semibold lg:h-[2.5rem] mt-2 px-6">
                Upload
              </button>
            </div>
          </div>
        </section>
        <section className="w-1/3 rounded-xl mt-10 mx-auto px-6">
          <button className="bg-primary text-white w-full rounded-md text-xs h-[2.125rem] font-semibold lg:h-[3rem] mt-2">
            Save changes
          </button>
          <button className="bg-tertiary text-primary w-full rounded-md text-xs h-[2.125rem] font-semibold lg:h-[3rem] mt-2">
            Cancel
          </button>
        </section>
      </section>
    </main>
  );
}
