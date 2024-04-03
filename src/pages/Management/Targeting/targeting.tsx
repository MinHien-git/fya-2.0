import { Button, Typography } from "@material-tailwind/react";
import { Label, TextInput } from "flowbite-react";

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
            <section className="flex w-full gap-5">
              <div className="w-1/2 grid gap-2">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3"
                      value="Service"
                      className="text-xl font-bold"
                    />
                    <Typography variant="small" placeholder={undefined}>
                      Indicate the services your agency would provide in
                      projects you receive.
                    </Typography>
                  </div>
                  <TextInput
                    id="email3"
                    type="email"
                    required
                    placeholder="Select service"
                  />
                  <div className="w-full min-h-[3rem] border-2 border-t-0 border-dashed rounded-b-xl"></div>
                </div>
                <div className="w-full ">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3"
                      value="Minimum budget"
                      className="text-xl font-bold"
                    />
                    <Typography variant="small" placeholder={undefined}>
                      Provide the lowest budget for a project that your agency
                      would take
                    </Typography>
                  </div>
                  <TextInput
                    id="email3"
                    type="email"
                    required
                    placeholder="Select service"
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3"
                      value="Prospecting areas"
                      className="text-xl font-bold"
                    />
                    <Typography variant="small" placeholder={undefined}>
                      Select the geographical areas in which you want to receive
                      leads from.
                    </Typography>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-bold w-full px-4 py-4 shadow-lg rounded-lg border-2 flex items-center gap-4">
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
                      </button>{" "}
                      <p> [Address]</p>
                      <Button
                        placeholder={undefined}
                        className="text-primary bg-tertiary ml-auto"
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="text-sm font-bold w-full px-4 py-4 shadow-lg rounded-lg border-2 flex items-center gap-4 border-dashed">
                      <button className="inline-flex mt-0 pl-0 items-center justify-center p-2 rounded-md text-gray-400 cursor-grab w-6">
                        +
                      </button>
                      <p> Add a new address</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3"
                      value="Skills"
                      className="text-xl font-bold"
                    />
                    <Typography variant="small" placeholder={undefined}>
                      Indicate the skills your agency would provide in projects
                      you receive.
                    </Typography>
                  </div>
                  <TextInput
                    id="email3"
                    type="email"
                    required
                    placeholder="Select skills tags"
                  />
                  <div className="w-full min-h-[3rem] border-2 border-t-0 border-dashed rounded-b-xl"></div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Typography
                    placeholder={undefined}
                    variant="paragraph"
                    className="text-xs font-bold"
                  >
                    Suggested skills tags:
                  </Typography>
                  <ul className="flex flex-wrap gap-2">
                    <li className="text-text bg-secondary px-4 py-2 rounded-md text-xs font-bold">
                      [Skills Name]
                    </li>
                    <li className="text-text bg-secondary px-4 py-2 rounded-md text-xs font-bold">
                      [Skills Name]
                    </li>
                    <li className="text-text bg-secondary px-4 py-2 rounded-md text-xs font-bold">
                      [Long Skills Name]
                    </li>
                    <li className="text-text bg-secondary px-4 py-2 rounded-md text-xs font-bold">
                      [Very long Skills Name]
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email3"
                      value="Language(s) available"
                      className="text-xl font-bold"
                    />
                  </div>
                  <TextInput
                    id="email3"
                    type="email"
                    required
                    placeholder="Select languages"
                  />
                  <div className="w-full min-h-[3rem] border-2 border-t-0 border-dashed rounded-b-xl"></div>
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
