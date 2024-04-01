import { Button } from "@material-tailwind/react";

export default function Targeting() {
  return (
    <>
      <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
        <div className="w-full">
          <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
            <p className="font-title">Project Leads Extension</p>
          </div>
        </div>
        <div className="mt-5 mx-auto overflow-y-auto flex flex-col px-12 gap-2 w-full">
          <section className="max-w-5xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-12">
            <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
              Setup your leads preferences
            </h2>
            <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm text-center">
              Manage your services, skills, prospecting areas, budget, and
              languages of projects that you want to receive from the Extension.
            </p>
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
                    The tagline will be shown on your agency's thumbnail on
                    search results, and on the front page with the Advertising
                    Features
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
          <section className="max-w-5xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-12">
            <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
              Customize your ideal client profiles
            </h2>
            <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm text-center">
              Describe to us the portrait of customers who would be benefited
              the most from the services your agency offers.
            </p>
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
                    The tagline will be shown on your agency's thumbnail on
                    search results, and on the front page with the Advertising
                    Features
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
          <section className="max-w-5xl w-[90%] flex pb-10 gap-4 mt-10 mx-auto justify-end">
            <Button
              size="md"
              className="bg-primary text-white"
              placeholder={undefined}
            >
              Save changes
            </Button>
            <Button
              size="md"
              className="bg-tertiary text-primary"
              placeholder={undefined}
            >
              Cancel
            </Button>
          </section>
        </div>
      </main>
    </>
  );
}
