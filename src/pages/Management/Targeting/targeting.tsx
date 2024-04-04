import { Button, Typography } from "@material-tailwind/react";
import { Label, TextInput } from "flowbite-react";

export default function Targeting() {
  return (
    <>
      <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
        <div className="w-full">
          <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="3"
                stroke="#000"
                stroke-width="2"
              />
              <path
                d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
                fill="#000"
              />
            </svg>

            <p className="font-title">Project Leads Extension</p>
            <svg
              width="61"
              height="28"
              viewBox="0 0 61 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.7831 5.04348C55.7831 4.46718 56.2502 4 56.8265 4C57.4028 4 57.87 4.46718 57.87 5.04348V5.65477L59.1961 4.32859C59.6036 3.92108 60.2644 3.92108 60.6718 4.32859C61.0794 4.73609 61.0794 5.39678 60.6718 5.80429L59.3457 7.13043H59.9569C60.5333 7.13043 61.0004 7.59762 61.0004 8.17391C61.0004 8.75021 60.5333 9.21739 59.9569 9.21739H57.2587L49.211 17.2652C48.8035 17.6727 48.1428 17.6727 47.7353 17.2652C47.3278 16.8577 47.3278 16.197 47.7353 15.7895L55.7831 7.74173V5.04348Z"
                fill="#000"
              />
              <path
                d="M54.105 7.9538C54.5658 7.49302 54.4966 6.72424 53.9232 6.41467C52.303 5.53995 50.4486 5.04346 48.4782 5.04346C42.139 5.04346 37 10.1825 37 16.5217C37 22.861 42.139 28 48.4782 28C54.8174 28 59.9564 22.861 59.9564 16.5217C59.9564 14.5552 59.4619 12.7042 58.5903 11.0863C58.2812 10.5122 57.5119 10.4427 57.0508 10.9037L57.0196 10.9349C56.6751 11.2794 56.6206 11.8139 56.8426 12.2476C57.4991 13.5296 57.8694 14.9825 57.8694 16.5217C57.8694 21.7084 53.6649 25.913 48.4782 25.913C43.2915 25.913 39.0869 21.7084 39.0869 16.5217C39.0869 11.335 43.2915 7.13041 48.4782 7.13041C50.0206 7.13041 51.4763 7.50229 52.7603 8.16128C53.1941 8.38393 53.7291 8.32967 54.074 7.98486L54.105 7.9538Z"
                fill="#000"
              />
              <path
                d="M50.9739 11.0868C51.467 10.5937 51.3429 9.76331 50.6778 9.55371C49.9842 9.33515 49.2459 9.21729 48.4801 9.21729C44.446 9.21729 41.1758 12.4876 41.1758 16.5216C41.1758 20.5557 44.446 23.826 48.4801 23.826C52.5141 23.826 55.7844 20.5557 55.7844 16.5216C55.7844 15.7601 55.6678 15.0257 55.4516 14.3354C55.2429 13.6694 54.4118 13.5446 53.9183 14.0381L53.822 14.1344C53.5286 14.4278 53.4465 14.865 53.5458 15.2678C53.6448 15.6694 53.6974 16.0894 53.6974 16.5216C53.6974 19.4031 51.3615 21.739 48.4801 21.739C45.5986 21.739 43.2627 19.4031 43.2627 16.5216C43.2627 13.6402 45.5986 11.3042 48.4801 11.3042C48.9154 11.3042 49.3383 11.3576 49.7427 11.4581C50.146 11.5583 50.5843 11.4764 50.8782 11.1825L50.9739 11.0868Z"
                fill="#000"
              />
              <path
                d="M47.516 13.5491C47.9432 13.4067 48.1581 13.9005 47.8397 14.219L46.9992 15.0596C46.1851 15.8736 46.1851 17.1934 46.9992 18.0074C47.8132 18.8214 49.133 18.8214 49.947 18.0074L50.7769 17.1774C51.096 16.8584 51.5899 17.0748 51.4446 17.5022C51.0252 18.7347 49.8487 19.6521 48.4781 19.6521C46.7491 19.6521 45.3477 18.2506 45.3477 16.5216C45.3477 15.1438 46.2745 13.963 47.516 13.5491Z"
                fill="#000"
              />
              <path
                d="M7.73999 2.00008C7.74 1.72394 7.51615 1.50007 7.24 1.50007C6.96386 1.50006 6.74 1.72391 6.73999 2.00005L7.73999 2.00008ZM7.23955 15.0537L7.73955 15.0537L7.23955 15.0537ZM8.23965 16.0537L8.2397 16.5537L8.23965 16.0537ZM22.3553 16.4058C22.5505 16.2105 22.5505 15.8939 22.3552 15.6987L19.1729 12.5171C18.9776 12.3218 18.661 12.3218 18.4658 12.5171C18.2706 12.7124 18.2706 13.029 18.4659 13.2242L21.2946 16.0524L18.4665 18.8811C18.2712 19.0764 18.2713 19.393 18.4665 19.5882C18.6618 19.7834 18.9784 19.7834 19.1736 19.5881L22.3553 16.4058ZM6.73999 2.00005L6.73955 15.0537L7.73955 15.0537L7.73999 2.00008L6.73999 2.00005ZM8.2397 16.5537L22.0018 16.5523L22.0017 15.5523L8.2396 15.5537L8.2397 16.5537ZM6.73955 15.0537C6.73952 15.8822 7.41119 16.5538 8.2397 16.5537L8.2396 15.5537C7.96343 15.5538 7.73954 15.3299 7.73955 15.0537L6.73955 15.0537Z"
                fill="#000"
              />
            </svg>

            <p className="font-title">Targeting</p>
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
                    <div className="text-sm font-bold w-full px-4 py-8 shadow-lg rounded-lg border-2 flex items-center gap-6 border-dashed">
                      <svg
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 aspect-square"
                      >
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
