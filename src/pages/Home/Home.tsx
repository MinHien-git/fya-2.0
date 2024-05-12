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
import PostProjectModal, {
  agencyServices,
} from "../../components/PostProjectPopup/PostProjectPopup";
import usePostProject from "../../hooks/usePostProjectPopup";
import { useEffect, useState } from "react";
import stringSimilarity from "string-similarity-js";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
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
  const { isOpen, toggle } = usePostProject();
  const [services, setServices] = useState<Array<string>>(agencyServices);
  const [openMenu, setOpenMenu] = useState(false);
  const [location, setLocation] = useState<string>("");
  const navigate = useNavigate();

  const [currentServices, setCurrentServices] = useState<Array<string>>([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [focus, setFocus] = useState(false);
  let inteval: any = null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };

  useEffect(() => {
    console.log(currentSearch);
    const delayDebounceFn = setTimeout(() => {
      if (currentSearch) {
        setServices(
          agencyServices.filter(
            (i) =>
              (stringSimilarity(i, currentSearch) > 0.8 ||
                i.toLowerCase().includes(currentSearch.toLowerCase())) &&
              !currentServices.includes(i)
          )
        );
      } else {
        console.log(currentServices);
        setServices(agencyServices.filter((i) => !currentServices.includes(i)));
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch, currentServices]);

  useDocumentTitle("Home");

  return (
    <main className="w-full min-h-80 p-2">
      {isOpen && <PostProjectModal isOpen={isOpen} toggle={toggle} />}
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
              <div>
                <div className="w-full relative">
                  <Button
                    placeholder={undefined}
                    className="w-full flex h-10 items-center gap-2 rounded-r-none border border-r-0 text-black border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    Services{" "}
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {openMenu && (
                    <div className="max-h-[20rem] min-w-[20rem] max-w-[36rem] absolute bg-white top-[3rem] z-[1000]">
                      <div className="w-full h-[9rem] relative">
                        <Input
                          crossOrigin={undefined}
                          size="lg"
                          type="email"
                          placeholder="Select services"
                          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          value={currentSearch}
                          containerProps={{ className: "min-w-[100px]" }}
                          onFocus={() => {
                            clearTimeout(inteval);
                            setFocus(true);
                          }}
                          onBlur={() => {
                            inteval = setTimeout(function () {
                              setFocus(false);
                            }, 300);
                          }}
                          onChange={handleSearch}
                        />
                        {focus ? (
                          <ul className="absolute  py-3 bg-white w-full shadow-lg rounded-b-xl h-auto max-h-[7rem] overflow-y-auto gap-2 ">
                            {services.map((i) => (
                              <li
                                className="px-3 w-full py-4 font-semibold text-xs cursor-pointer text-text hover:bg-gray-100 shadow-sm"
                                onClick={() => {
                                  if (!currentServices.includes(i)) {
                                    setCurrentServices([...currentServices, i]);
                                    console.log(i);
                                    setCurrentSearch("");
                                  }
                                }}
                              >
                                {i}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <ul className="w-full h-[6rem] border-dashed border-2 border-t-0 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                          {currentServices.map((tag) => (
                            <motion.li
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{
                                ease: "easeOut",
                                duration: 0.2,
                                delay: 0.2,
                              }}
                              className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold"
                              key={tag}
                              onClick={() => {
                                setCurrentServices(
                                  currentServices.filter((i) => i !== tag)
                                );
                              }}
                            >
                              {tag}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              {/* <button className="ml-4 hidden md:block bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2 md:mt-0 w-full max-w-[10rem]">
                Search Agencies
              </button> */}
              <Button
                size="md"
                className="hidden md:block bg-primary text-white max-w-[30rem] ml-4 w-[20rem] normal-case"
                placeholder={undefined}
                onClick={() =>
                  navigate("/searchResult", {
                    state: { services: currentServices, location: location },
                  })
                }
              >
                Search Agencies
              </Button>
            </div>

            <Button
              size="md"
              className="bg-primary text-white max-w-[12rem] w-full md:hidden mt-2"
              placeholder={undefined}
              onClick={() =>
                navigate("/searchResult", {
                  state: { services: currentServices, location: location },
                })
              }
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
                onClick={toggle}
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
            <div className="flex justify-center md:justify-start mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full max-w-5xl mx-auto slider-container">
              <Slider
                {...settings}
                className="w-full h-fit [&>.slick-list]:py-4"
              >
                <MediumCard name="ABC Company" />
                <MediumCard name="EDF Company" />
                <MediumCard name="AFC Company" />
                <MediumCard name="CCF Company" />
                <MediumCard name="AED Company" />
              </Slider>
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
          <div className="py-5 md:w-full pb-10 mx-auto">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="font-bold text-center pt-4 "
            >
              What We can Do For{" "}
              <span className="text-secondary"> You & Your Business</span>
            </Typography>
            <p className="text-text text-center font-semibold mb-4">
              Bring you top-list Agencies FREE of charge
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
                    Find you an Agency that fit
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Simplify your search. Among Fya’s network of 600+ verified
                  local Agencies, we pair you with the best one that matches
                  your needs.
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
                  Outline your project requirements with Fya. We provide you
                  with list of proposals that are precisely prepared to meet
                  your criteria.
                </Typography>
                <Button
                  size="sm"
                  placeholder={undefined}
                  onClick={toggle}
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
                  Cut out unnecessary delays. Fya connects you directly with
                  top-tier agencies within 24-48 hours. No intermediaries, just
                  efficient results.
                </Typography>

                <form className="flex items-center mt-auto">
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
              onClick={toggle}
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
          <div className="py-5 md:w-full pb-10">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="pt-4 text-center font-title"
            >
              Join the community of Agencies
            </Typography>
            <p className="text-text text-center font-semibold mb-4">
              Eager to Scale Up your business?
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
                    Reach your potential customers
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Grow your client base effortlessly with Fya. Connect with
                  potential customers and expand your business reach.
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
                    Get alerted for suitable project
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Stay informed. Receive instant notifications for projects that
                  match your skills, ensuring you never miss out on
                  opportunities.
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
                    Stay updated with the Industry
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Get the latest industry news and insights from top agencies,
                  helping you stay ahead in the market.
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
              onClick={toggle}
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
          <div className="py-5 md:w-full pb-10">
            <Typography
              variant="h2"
              placeholder={undefined}
              className="pt-4 text-center font-title"
            >
              Our Resources
            </Typography>
            <p className="text-text text-center">
              Discover advice and answers from Expert and Fya
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
                    Marketing Insights
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Let our industry experts help you make the most informed
                  decision through comprehensive reports and guides.
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
                    Daily Blog
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  Look into our daily blog posts full of valuable tips, stories
                  and inspirations to fuel your business
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
                    Help & Support
                  </h5>
                </a>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  If you need our support, Fya is here to help and answer any
                  questions you might have.
                </Typography>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
