import MediumCard from "../../components/MediumCard/MediumCard";
import {
  Carousel,
  IconButton,
  MenuItem,
  MenuList,
  MenuHandler,
  Menu,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
let data = [
  {
    label: "service 1",
  },
  {
    label: "service 2",
  },
  {
    label: "service 3",
  },
];
export default function Home() {
  useDocumentTitle("Home");
  return (
    <main className="w-full min-h-80 p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full shadow-2xl shadow-primary/25 bg-light_gray max-w-7xl py-5 px-8  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between md:min-h-[80vh]">
          <div className="py-5 md:w-3/5 lg:w-1/2 lg:h-1/2">
            <Typography
              placeholder={undefined}
              variant="h1"
              className="text-primary font-header font-bold"
            >
              Find
              <span className="text-secondary"> Your Ideal</span> Agencies
            </Typography>
            <Typography
              variant="h6"
              placeholder={undefined}
              className="font-semibold pt-2 text-primary opacity-55 max-w-[50ch]"
            >
              Through personalized recommendation, made from the description of
              your needs, with the helps from AI
            </Typography>

            <div className="items-center px-0 rounded-lg pt-3 pb-2 lg:flex-nowrap w-full relative flex lg:w-[85%]">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    placeholder={undefined}
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 w-1/2 md:w-2/5"
                  >
                    {/* <img
                      src={flags.svg}
                      alt={name}
                      className="h-4 w-4 rounded-full object-cover"
                    /> */}
                    {"Services"}
                  </Button>
                </MenuHandler>
                <MenuList
                  className="max-h-[20rem] max-w-[18rem]"
                  placeholder={undefined}
                >
                  {data.map(({ label }, index) => {
                    return (
                      <MenuItem
                        placeholder={undefined}
                        key={label}
                        value={label}
                        className="flex items-center gap-2"
                        // onClick={() => setCountry(index)}
                      >
                        {label}{" "}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Input
                crossOrigin={undefined}
                type="text"
                placeholder="Location"
                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
              {/* <button className="ml-4 hidden md:block bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2 md:mt-0 w-full max-w-[10rem]">
                Search Agencies
              </button> */}
              <Button
                size="md"
                className="hidden md:block bg-primary text-white max-w-[30rem] ml-4 w-[20rem] normal-case"
                placeholder={undefined}
              >
                Search Agencies
              </Button>
            </div>

            <Button
              size="md"
              className="bg-primary text-white max-w-[12rem] w-full md:hidden mt-2"
              placeholder={undefined}
            >
              Search Agencies
            </Button>
            <div className="md:flex  lg:mt-5">
              <Typography
                variant="small"
                placeholder={undefined}
                className="mx-2 my-2"
              >
                or
              </Typography>
              <Button
                size="md"
                className="bg-secondary text-white max-w-[12rem] w-full normal-case"
                placeholder={undefined}
              >
                Post your Project
              </Button>
            </div>
          </div>

          <div className="hidden md:inline-block md:w-3/5 lg:w-1/2">
            <div className="flex w-full h-full items-center justify-center ">
              <img
                className=" w-full rounded-lg max-w-[40vw]"
                src="/static/images/LandingPage.svg"
                alt="meeting"
              />
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full shadow-2xl shadow-primary/25 bg-light_gray max-w-7xl py-5 px-8  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between md:min-h-[80vh]">
          <div className="py-5 pb-10 mx-auto">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="text-center font-title pt-4"
            >
              Top <span className="text-secondary">Agencies</span> of the week
            </Typography>
            <div className="flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full max-w-5xl mx-auto">
              <Carousel
                placeholder={undefined}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    placeholder={undefined}
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black rounded-3xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    placeholder={undefined}
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black rounded-3xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute -bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "w-8 bg-primary"
                            : "w-4 bg-primary/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
                className="overflow-y-hidden h-[100%] pb-12"
              >
                <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
                  <MediumCard name="ABC Company" />
                  <MediumCard name="BCD Company" />
                  <MediumCard
                    click={() => {
                      console.log("Hello world");
                    }}
                  />
                </div>
                <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
                  <MediumCard name="ABC Company" />
                  <MediumCard name="BCD Company" />
                  <MediumCard
                    click={() => {
                      console.log("Hello world");
                    }}
                  />
                </div>
                <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
                  <MediumCard name="ABC Company" />
                  <MediumCard name="BCD Company" />
                  <MediumCard
                    click={() => {
                      console.log("Hello world");
                    }}
                  />
                </div>
                <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
                  <MediumCard name="ABC Company" />
                  <MediumCard name="BCD Company" />
                  <MediumCard
                    click={() => {
                      console.log("Hello world");
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto h-60 flex">
          <div className="h-2/4 flex justify-center items-center w-100 border-2 w-4/5 mx-auto my-auto rounded-xl">
            <p className="text-3xl font-bold text-primary">Your ad here</p>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full shadow-2xl shadow-primary/25 bg-light_gray max-w-7xl py-5 px-8  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between md:min-h-[80vh]">
          <div className="py-5 w-10/12 md:w-full pb-10">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="font-bold text-center pt-4 "
            >
              What We can Do For{" "}
              <span className="text-secondary"> You & Your Business</span>
            </Typography>
            <p className="text-text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
              sapien eu ipsum ornare{" "}
            </p>
            <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/telescope.png" alt="telescope" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Find you an Agency that fit.
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>

                <Button
                  size="sm"
                  placeholder={undefined}
                  className="bg-primary flex justify-center px-3 py-2 text-xs font-medium text-white mt-auto capitalize"
                >
                  Search agencies
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-secondary  w-full p-6 bg-secondary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
              >
                <div className="w-12 bg-white aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/goal.png" alt="goal" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Hit the spot with Post Your Project
                  </h5>
                </a>

                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
                <Button
                  size="sm"
                  placeholder={undefined}
                  className="text-primary bg-white  flex justify-center px-3 py-2 text-xs font-medium mt-auto capitalize"
                >
                  Post your Project now!
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/compass.png" alt="compass" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Direct Access to an Agency
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>

                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                      placeholder="Agency name"
                      required
                    />
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto grid">
          <Typography
            variant="h2"
            placeholder={undefined}
            className="pt-4 text-center font-title"
          >
            Let us join your business journey!
          </Typography>
          <div className="flex items-center gap-4 justify-center my-4">
            <Button
              size="md"
              className="bg-primary text-white capitalize"
              placeholder={undefined}
            >
              Search Agencies
            </Button>
            <p>or</p>

            <Button
              size="md"
              className="text-primary bg-tertiary capitalize"
              placeholder={undefined}
            >
              Post your Project now!
            </Button>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full shadow-2xl shadow-primary/25 bg-light_gray max-w-7xl py-5 px-8  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between md:min-h-[80vh]">
          <div className="py-5 w-10/12 md:w-full pb-10">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="pt-4 text-center font-title"
            >
              Join the community of agencies
            </Typography>
            <p className="text-text text-center">
              if you are a small agencies and wanna grow your business larger?
            </p>
            <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
              >
                <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/flash.png" alt="flash" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Reach your potential customer
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
                <Button
                  size="sm"
                  placeholder={undefined}
                  className="bg-primary flex justify-center px-3 py-2 text-xs font-medium text-white mt-auto capitalize"
                >
                  Create your profile
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="flex flex-col h-auto  shadow-3xl shadow-secondary  w-full p-6 bg-secondary rounded-2xl md:w-1/3 aspect-[11/12]"
              >
                <div className="w-12 bg-white aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/bell.png" alt="bell" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Get notification for suitable project
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
                <Button
                  size="sm"
                  placeholder={undefined}
                  className="text-primary bg-white  flex justify-center px-3 py-2 text-xs font-medium mt-auto capitalize"
                >
                  Learn more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
              >
                <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/power.png" alt="power" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Generate quality leads efficiently
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
                <Button
                  size="sm"
                  placeholder={undefined}
                  className="bg-primary flex justify-center px-3 py-2 text-xs font-medium text-white mt-auto capitalize"
                >
                  Join FyaPro today!
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto grid">
          <Typography
            variant="h2"
            placeholder={undefined}
            className="pt-4 text-center font-title"
          >
            Let us grow with your agency business
          </Typography>
          <div className="flex items-center gap-4 justify-center my-4">
            <Button
              size="md"
              className="bg-primary text-white capitalize"
              placeholder={undefined}
            >
              Search Agencies
            </Button>
            <p>or</p>

            <Button
              size="md"
              className="text-primary bg-tertiary capitalize"
              placeholder={undefined}
            >
              Post your Project now!
            </Button>
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="w-full shadow-2xl shadow-primary/25 bg-light_gray max-w-7xl py-5 px-8  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between md:min-h-[80vh]">
          <div className="py-5 w-10/12 md:w-full pb-10">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="pt-4 text-center font-title"
            >
              Join the community of agencies
            </Typography>
            <p className="text-text text-center">
              if you are a small agencies and wanna grow your business larger?
            </p>
            <div className="h-full w-full flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-[80%] max-w-5xl mx-auto">
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/investigator.png" alt="invest" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Reach your potential customer
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
              </motion.div>
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-secondary  w-full p-6 bg-secondary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
              >
                <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img
                    src="/static/images/Search-amico.png"
                    alt="Search-amico"
                  />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Get notification for suitable project
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
              </motion.div>
              <motion.div
                className="flex flex-col h-auto  shadow-3xl shadow-primary/20  w-full p-6 bg-tertiary rounded-2xl md:w-1/3 aspect-[11/12]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                  <img src="/static/images/investigator.png" alt="invest" />
                </div>
                <a href="/#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    Generate quality leads efficiently
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </Typography>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
