import { useEffect, useState } from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import usePostProject from "../../hooks/usePostProjectPopup";
import PostProjectModal from "../PostProjectPopup/PostProjectPopup";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { Signout } from "../../api/lib/authentication";
import { useSelector, useDispatch } from "react-redux";
import { setUser as setReduxUser } from "../../features/users/userSplice";
import { Label, TextInput } from "flowbite-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiSearch } from "react-icons/hi";
interface IUser {
  name?: string;
  email?: string;
  fname?: string;
  lname?: string;
}
export default function NavigationBar() {
  const [isToggle, setIsToggle] = useState(false);
  const { isOpen, toggle } = usePostProject();
  const userSelector = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      var u = JSON.parse(localStorage.getItem("user") || "{}");
      dispatch(setReduxUser(u));
      console.log(userSelector);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result = await Signout(Cookies.get("rft"));

    if (result.status === 204) {
      localStorage.removeItem("user");
      dispatch(setReduxUser(null));
      window.location.reload();
    }
  };

  useEffect(() => {}, []);
  return (
    <header className="font-sans w-full">
      <nav className="z-0 relative">
        <div className="relative z-10 shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-0 lg:px-0">
            <div className="relative flex items-center justify-between h-16 gap-8 md:px-4">
              <div className="flex items-center px-2 lg:px-0">
                <a className="flex-shrink-0 flex " href="/#">
                  <span className="block lg:hidden font-bold text-center">
                    <img
                      src="/static/images/logo.svg"
                      className="w-20"
                      alt="logo"
                    />
                  </span>
                  <span className="hidden lg:block w-auto font-bold text-center">
                    <img
                      src={"/static/images/logo.svg"}
                      className="w-20"
                      alt="logo"
                    />
                  </span>
                </a>
              </div>
              <div className="flex-1 flex justify-center lg:ml-6 lg:w-[10rem]">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <form method="get" action="#" className="relative z-50">
                    <TextInput
                      id="email4"
                      type="email"
                      icon={HiSearch}
                      placeholder="Search services here"
                      required
                    />
                  </form>
                </div>
              </div>
              <div className="hidden lg:block lg:ml-2">
                <div className="flex gap-5">
                  <a
                    href="/#"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 text-gray-800 font-semibold hover:bg-yellow-500  hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    About{" "}
                  </a>
                  <a
                    href="/#"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Find Agencies{" "}
                  </a>
                  <a
                    href="/#"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Get Customers{" "}
                  </a>
                </div>
              </div>
              <Button
                size="md"
                className="bg-primary text-white max-w-[12rem] w-full hidden md:block"
                placeholder={undefined}
                onClick={toggle}
              >
                Post your Project
              </Button>

              <div className="flex lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                  onClick={() => {
                    setIsToggle(!isToggle);
                  }}
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
              </div>
              <Menu
                as="div"
                className="relative text-left hidden lg:inline-block aspect-square w-9"
                style={{ height: "36px" }}
              >
                <Menu.Button className="inline-flex justify-center gap-x-1.5 bg-white aspect-square w-9 text-sm font-semibold text-gray-900 shadow-sm ring-1 rounded-full ring-inset ring-gray-300 hover:bg-gray-50"></Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      {userSelector ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/managepage"
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-4 text-sm"
                                )}
                              >
                                <div className="flex justify-between items-center font-bold">
                                  <p>Welcome, {userSelector?.lname}</p>
                                  <FaArrowRight />
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/managepage"
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-4 text-sm"
                                )}
                              >
                                <div className="flex justify-between items-center font-bold">
                                  <p>Dashboard</p>
                                  <FaArrowRight />
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/page-navigation"
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-4 text-sm"
                                )}
                              >
                                <div className="flex justify-between items-center font-bold">
                                  <p>Create Page</p>
                                  <FaArrowRight />
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <form
                                onSubmit={handleSubmit}
                                className={clsx(
                                  active ? "bg-gray-100 " : "text-gray-700",
                                  "block px-4 py-4 text-sm text-red-500 font-bold"
                                )}
                              >
                                <button className="flex justify-between items-center font-bold w-full">
                                  <p>Log out</p>
                                  <FaArrowRight />
                                </button>
                              </form>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/auth"
                                className={clsx(
                                  active ? "bg-gray-100" : "text-gray-700",
                                  "block px-4 py-4 text-sm"
                                )}
                              >
                                <div className="flex justify-between items-center font-bold text-primary">
                                  <p>Sign in/Sign up</p>
                                  <FaArrowRight />
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className={clsx(isToggle ? "block" : "hidden", "lg:hidden")}>
            <div className="px-2 pt-2 pb-3">
              <Link
                to="/#"
                className="mt-1 block px-3 py-4 rounded-md  font-semibold  hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>About</p>
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                to="/#"
                className="mt-1 block px-3 py-4 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>Find Agencies</p>
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                to="/#"
                className="mt-1 block px-3 py-4 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>Get Customers</p>
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                to="/page-navigation"
                className="mt-1 block px-3 py-4 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>Manage Page</p>
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link
                to="/auth"
                className="mt-1 block px-3 py-4 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>Sign in/Sign up</p>
                  <IoIosArrowForward />
                </div>
              </Link>

              <div className="mt-4 block px-3 rounded-md  font-semibold   focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                <Button
                  size="md"
                  className="bg-primary text-white w-full md:hidden block"
                  placeholder={undefined}
                  onClick={toggle}
                >
                  Post your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <PostProjectModal isOpen={isOpen} toggle={toggle} />}
    </header>
  );
}
