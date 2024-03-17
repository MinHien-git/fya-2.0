import { useState } from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function NavigationBar() {
  const [isToggle, setIsToggle] = useState(false);
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
                  <label htmlFor="search" className="sr-only">
                    Search{" "}
                  </label>
                  <form method="get" action="#" className="relative z-50">
                    <button
                      type="submit"
                      id="searchsubmit"
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="s"
                      id="s"
                      className="block w-full pl-10 pr-3 py-2 border rounded-full leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                      placeholder="Services (e.g Digital Marketing)"
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
              <button
                className="middle none center rounded-md py-2 px-10 font-sans text-sm font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2"
                data-ripple-light="true"
              >
                Post your Project
              </button>
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
                  {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="'/#"
                            className={clsx(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sign in
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#"
                            className={clsx(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Sign up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#"
                            className={clsx(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items> */}
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/auth"
                            className={clsx(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-4 text-sm"
                            )}
                          >
                            <div className="flex justify-between items-center">
                              <p>Sign in/Sign up</p>
                              <FaArrowRight />
                            </div>
                          </a>
                        )}
                      </Menu.Item>
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
                to="/auth"
                className="mt-1 block px-3 py-4 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <p>Sign in/Sign up</p>
                  <IoIosArrowForward />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
