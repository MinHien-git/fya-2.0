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
interface IUser {
  name?: string;
  email?: string;
  fname?: string;
  lname?: string;
}
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
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
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              placeholder={undefined}
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
                placeholder={undefined}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const customerMenuItems = [
  {
    title: "Post your Project",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Create your free Brand Page",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const agencyMenuItems = [
  {
    title: "Create your free Agency Page",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "Subscription",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
];

const discoverMenuItems = [
  {
    title: "PR & Event",
  },
  {
    title: "Media",
  },
  {
    title: "Market Research",
  },
];

export default function NavigationBar() {
  const [isToggle, setIsToggle] = useState(false);
  const { isOpen, toggle } = usePostProject();
  const userSelector = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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

  const discoverItems = discoverMenuItems.map(({ title }) => (
    <Link to="#" key={title}>
      <MenuItem placeholder={undefined}>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-1 text-primary font-medium text-sm"
          placeholder={undefined}
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  const customerItems = customerMenuItems.map(({ title, description }) => (
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

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
        placeholder={undefined}
      >
        <Link
          to="#"
          className="flex font-medium items-center px-4 text-blue-gray-900"
        >
          About
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 "
        placeholder={undefined}
      >
        <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto">
          <img src="/static/images/logo.svg" alt="logo" className="w-20" />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
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
                <ul className="col-span-7 flex w-full flex-col gap-1">
                  {agencyItems}
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
                className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                placeholder={undefined}
              >
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
                          Learn how to use @material-tailwind/html, packed with
                          rich components and widgets.
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
                    {customerItems}
                  </ul>
                </MenuList>
              </MenuList>
            </Menu>

            <div className="relative flex w-full gap-2 md:w-max">
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
                className="!absolute right-1 top-1 rounded bg-primary text-white"
                placeholder={undefined}
              >
                Search
              </Button>
            </div>
            <Button
              size="md"
              className="bg-primary text-white block"
              placeholder={undefined}
              onClick={toggle}
            >
              Post your Project
            </Button>
            <ProfileMenu />
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              placeholder={undefined}
            >
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              placeholder={undefined}
            >
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      {isOpen && <PostProjectModal isOpen={isOpen} toggle={toggle} />}
    </>
  );
}
