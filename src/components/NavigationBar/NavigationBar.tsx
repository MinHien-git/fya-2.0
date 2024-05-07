import { createElement, useEffect, useState } from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import usePostProject from "../../hooks/usePostProjectPopup";
import PostProjectModal from "../PostProjectPopup/PostProjectPopup";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  MenuHandler,
  MenuList,
  Avatar,
  Input,
  MenuItem,
  Menu,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import Cookies from "js-cookie";
import { Signout } from "../../api/lib/authentication";
import { useSelector, useDispatch } from "react-redux";
import { setUser as setReduxUser } from "../../features/users/userSplice";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiSearch } from "react-icons/hi";
import { requestRefreshToken } from "../../api/lib/token";
export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  role: number;
}
const agencyProfileItems = [
  {
    label: "Management",
    url: "/management",
    icon: Cog6ToothIcon,
  },
  {
    label: "Save List",
    url: "/saveList",
    icon: LifebuoyIcon,
  },
  {
    label: "Help",
    url: "/help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    url: "/help",
    icon: PowerIcon,
  },
];

const profileMenuItems = [
  {
    label: "Project Management",
    url: "/client",
    icon: Cog6ToothIcon,
  },
  {
    label: "Save List",
    url: "/saveList",
    icon: LifebuoyIcon,
  },
  {
    label: "Create Page",
    url: "/page-navigation",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    url: "/help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    url: "/help",
    icon: PowerIcon,
  },
];

const notLoginMenuItems = [
  {
    label: "Sign in/Sign up",
    icon: UserCircleIcon,
    url: "/auth",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState<Array<any>>([]);
  const userSelector = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await Signout(Cookies.get("rft"));

    Cookies.set("rft", null);
    dispatch(setReduxUser(null));
    window.location.reload();
  };

  useEffect(() => {
    if (userSelector) {
      if (userSelector.role === 1) {
        setProfile(agencyProfileItems);
      } else {
        setProfile(profileMenuItems);
      }
    }
  }, [userSelector]);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="lg:block hidden">
      <Menu
        allowHover
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-end"
      >
        <MenuHandler placeholder={undefined}>
          <Button
            placeholder={undefined}
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              placeholder={undefined}
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="/static/images/profile.png"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1" placeholder="">
          {userSelector ? (
            <MenuItem
              placeholder={undefined}
              key={"welcome"}
              className={`flex items-center gap-2 rounded justify-start`}
            >
              {createElement(UserCircleIcon, {
                className: `h-4 w-4 `,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-bold"
                placeholder={undefined}
              >
                Welcome, {userSelector.lname}
              </Typography>
            </MenuItem>
          ) : null}
          {userSelector
            ? profile.map(({ label, icon, url }, key) => {
                const isLastItem = key === profile.length - 1;
                return !isLastItem ? (
                  <MenuItem
                    placeholder={undefined}
                    key={label}
                    className={`flex items-center gap-2 rounded justify-start`}
                  >
                    <Link
                      to={url}
                      className={`w-full h-full flex items-center gap-2 rounded justify-start`}
                    >
                      {createElement(icon, {
                        className: `h-4 w-4 ${
                          isLastItem ? "text-red-500" : ""
                        }`,
                        strokeWidth: 2,
                      })}
                      <Typography
                        as="span"
                        variant="small"
                        className="font-bold"
                        color={isLastItem ? "red" : "inherit"}
                        placeholder={undefined}
                      >
                        {label}
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={label}
                    placeholder={undefined}
                    className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
                    onClick={handleSubmit}
                  >
                    {createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-bold"
                      color={isLastItem ? "red" : "inherit"}
                      placeholder={undefined}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })
            : notLoginMenuItems.map(({ label, icon, url }, key) => {
                const isLastItem = key === notLoginMenuItems.length - 1;
                return (
                  <MenuItem
                    placeholder={undefined}
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded justify-start ${
                      isLastItem
                        ? "hover:bg-primary/10 focus:bg-primary/10 active:bg-primary/10"
                        : ""
                    }`}
                  >
                    <Link
                      to={url}
                      className="w-full h-full flex gap-2 justify-start items-center py-2 pl-2 pr-12"
                    >
                      {createElement(icon, {
                        className: `h-4 w-4 ${
                          isLastItem ? "text-primary" : ""
                        }`,
                        strokeWidth: 2,
                      })}
                      <Typography
                        as="span"
                        variant="small"
                        className="font-bold text-primary"
                        placeholder={undefined}
                      >
                        {label}
                      </Typography>
                    </Link>
                  </MenuItem>
                );
              })}
        </MenuList>
      </Menu>
    </div>
  );
}

// nav list menu
const agencyMenuItems = [
  {
    title: "Create your free Brand Page",
    description: "Coming soon!",
  },
];

const customerMenuItems = [
  {
    title: "Create your free Agency Page",
    description:
      "In only three easy steps, launch your professional appearance on Fya and draw in new clients!",
    url: "/create-page",
  },
  {
    title: "Subscription",
    description: "Explore exclusive perks for your business with FyaPro!",
    url: "/subscription",
  },
];

const discoverMenuItems = [
  {
    title: "PR & Event",
    url: "top-agencies",
  },
  {
    title: "Media",
    url: "top-agencies",
  },
  {
    title: "Market Research",
    url: "top-agencies",
  },
];

export default function NavigationBar() {
  const { isOpen, toggle } = usePostProject();

  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userSelector = useSelector((state: any) => state.user.value);
  const [openNav, setOpenNav] = useState(false);
  const toggleOpen = () => setOpenNav((cur) => !cur);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const agencyItems = agencyMenuItems.map(({ title, description }) => (
    <Link to="#" key={title}>
      <MenuItem placeholder={undefined}>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1"
          placeholder={undefined}
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal"
          placeholder={undefined}
        >
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  const discoverItems = discoverMenuItems.map(({ title, url }) => (
    <Link to={url} key={title}>
      <MenuItem placeholder={undefined}>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-1 text-primary text-sm font-semibold"
          placeholder={undefined}
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  const customerItems = customerMenuItems.map(({ title, description, url }) => (
    <Link to={url} key={title}>
      <MenuItem placeholder={undefined}>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1"
          placeholder={undefined}
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal"
          placeholder={undefined}
        >
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Navbar
        className="sticky top-0 z-[100] h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 "
        placeholder={undefined}
      >
        <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto">
          <Link to="">
            <img src="/static/images/logo.svg" alt="logo" className="w-20" />
          </Link>
          <div className="flex items-center gap-4">
            {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
            <Menu
              allowHover
              open={isAgencyOpen}
              handler={setIsAgencyOpen}
              placement="bottom-start"
            >
              <MenuHandler>
                <Typography
                  placeholder={undefined}
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal"
                >
                  <MenuItem
                    className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
                    placeholder={undefined}
                  >
                    <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                    Find Agencies{" "}
                    <ChevronDownIcon
                      strokeWidth={2}
                      className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
              <MenuList
                className="hidden w-[20rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                placeholder={undefined}
              >
                {/* Discover */}
                <Menu
                  allowHover
                  open={isDiscoverOpen}
                  handler={setIsDiscoverOpen}
                  placement="right-start"
                >
                  <MenuHandler>
                    <MenuItem placeholder={undefined} className="col-span-7">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1 "
                        placeholder={undefined}
                      >
                        Discover
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                        placeholder={undefined}
                      >
                        Explore top agencies in various services throughout all
                        of our agency directories.
                      </Typography>
                    </MenuItem>
                  </MenuHandler>
                  <MenuList
                    className="hidden w-[12rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                    placeholder={undefined}
                  >
                    <ul className="col-span-7 flex w-full flex-col gap-1">
                      {discoverItems}
                    </ul>
                  </MenuList>
                </Menu>
                <ul className="col-span-7 flex w-full flex-col gap-1">
                  {agencyItems}
                  <MenuItem placeholder={undefined} onClick={toggle}>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-1"
                      placeholder={undefined}
                    >
                      Post Your Project
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      Get recommendations for agencies that fit your
                      requirements in just 48 hours! Fill out our form in 5
                      minutes, free of charge!
                    </Typography>
                  </MenuItem>
                </ul>
              </MenuList>
            </Menu>

            <Menu
              allowHover
              open={isMenuOpen}
              handler={setIsMenuOpen}
              placement="bottom-start"
            >
              <MenuHandler>
                <Typography
                  placeholder={undefined}
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal"
                >
                  <MenuItem
                    className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
                    placeholder={undefined}
                  >
                    <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                    Get Customers{" "}
                    <ChevronDownIcon
                      strokeWidth={2}
                      className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
              <MenuList
                className="hidden w-[20rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                placeholder={undefined}
              >
                <MenuList
                  className="hidden w-[20rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                  placeholder={undefined}
                >
                  <ul className="col-span-7 flex w-full flex-col gap-1">
                    {customerItems}
                  </ul>
                </MenuList>
              </MenuList>
            </Menu>

            <div className="relative flex w-full gap-2 md:w-max hidden lg:block">
              <Input
                type="search"
                label={"Services (e.g Digital Marketing)"}
                placeholder=""
                crossOrigin={undefined}
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button
                size="sm"
                className="!absolute right-1 top-1 rounded bg-primary text-white normal-case"
                placeholder={undefined}
              >
                Search
              </Button>
            </div>
            <Button
              size="lg"
              className="bg-primary text-white hidden lg:block normal-case"
              placeholder={undefined}
              onClick={toggle}
            >
              Post your Project
            </Button>
            <ProfileMenu />
          </div>
          <IconButton
            onClick={toggleOpen}
            placeholder={undefined}
            className="block lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </IconButton>
        </div>
        <Collapse
          open={openNav}
          className="flex flex-col lg:hidden my-4 rounded-b-lg"
        >
          <Typography
            placeholder={undefined}
            className="text-text font-semibold hover:bg-gray-500/10 px-4 py-4 rounded-md hover:text-primary"
          >
            Discover
          </Typography>
          <div className="ml-4 flex flex-col gap-2 border-l-4">
            <Typography
              placeholder={undefined}
              className="text-text font-semibold hover:bg-gray-500/10 px-8 py-4 rounded-md hover:text-primary"
            >
              <Link to="top-agencies">PR & Event</Link>
            </Typography>
            <Typography
              placeholder={undefined}
              className="text-text font-semibold hover:bg-gray-500/10 px-8 py-4 rounded-md hover:text-primary"
            >
              <Link to="top-agencies">Media</Link>
            </Typography>
            <Typography
              placeholder={undefined}
              className="text-text font-semibold hover:bg-gray-500/10 px-8 py-4 rounded-md hover:text-primary"
            >
              <Link to="top-agencies">Market Research</Link>
            </Typography>
          </div>
          <Typography
            placeholder={undefined}
            className="text-text font-semibold hover:bg-gray-500/10 px-4 py-4 rounded-md hover:text-primary"
          >
            Post your Project
          </Typography>
          <Typography
            placeholder={undefined}
            className="text-text font-semibold hover:bg-gray-500/10 px-4 py-4 rounded-md hover:text-primary"
          >
            Create your free Brand Page
          </Typography>
          <Typography
            placeholder={undefined}
            className="text-text font-semibold hover:bg-gray-500/10 px-4 py-4 rounded-md hover:text-primary"
          >
            Create your free Agency Page
          </Typography>
          <Typography
            placeholder={undefined}
            className="text-text font-semibold hover:bg-gray-500/10 px-4 py-4 rounded-md hover:text-primary"
          >
            Subscription
          </Typography>
          {!userSelector ? (
            <Typography
              placeholder={undefined}
              className="text-primary font-semibold hover:bg-primary/10 px-4 py-4 rounded-md hover:text-primary"
            >
              <Link to="auth">Signin/Signup</Link>
            </Typography>
          ) : (
            <Typography
              placeholder={undefined}
              className="text-red-500 font-semibold hover:bg-red-500/10 px-4 py-4 rounded-md"
            >
              Sign out
            </Typography>
          )}
        </Collapse>
      </Navbar>

      {isOpen && <PostProjectModal isOpen={isOpen} toggle={toggle} />}
    </>
  );
}
