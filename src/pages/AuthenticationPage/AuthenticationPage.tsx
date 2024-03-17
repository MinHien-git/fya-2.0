import {
  Button,
  Checkbox,
  Label,
  TextInput,
  CustomFlowbiteTheme,
} from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill, RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SignupForm from "../../components/SignupForm/SignupForm";
import SigninForm from "../../components/SigninForm/SigninForm";

const customInputTheme: CustomFlowbiteTheme["textInput"] = {
  base: "flex",
  addon:
    "inline-flex items-center border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    input: {
      base: "block w-full disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4",
      },
      colors: {
        gray: "bg-gray-50 border-primary border-2 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
      },
      withRightIcon: {
        on: "pr-10",
        off: "",
      },
      withIcon: {
        on: "pl-10",
        off: "",
      },
      withAddon: {},
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: "",
      },
    },
  },
};

export default function AuthenticationPage() {
  const data = [
    {
      label: "Sign in",
      value: "Signin",
      desc: <SigninForm />,
    },
    {
      label: "Sign up",
      value: "Signup",
      desc: <SignupForm />,
    },
  ];

  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] border-primary bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto md:flex md:gap-2 md:px-0  md:justify-between min-h-[80vh] h-[100%]">
        <div className="md:w-[50%] mt-12 md:mt-0 flex flex-col md:bg-yellow-100 rounded-[3rem] md:border-2 md:border-secondary md:items-center md:pt-12">
          <img
            src={"/static/images/Logo_BG.svg"}
            alt="logo"
            className="w-[4rem] mb-6"
          />
          <h1 className="text-4xl pb-2 font-bold text-primary lg:text-5xl font-header md:w-[80%]">
            <span className="text-secondary">Signup</span> or{" "}
            <span className="text-secondary">Log in</span> to your account to
            continue!
          </h1>
          <p className="font-semibold pt-2 text-primary opacity-55 md:w-[80%]">
            Manage all your activities on Fya with your account.
          </p>
        </div>
        <div className="md:w-[50%] mt-12 md:mt-0 flex flex-col">
          <div className="w-[100%]  lg:px-12 flex h-[100%]  items-center justify-center">
            <div className="w-[100%] lg:my-8 py-8 md:bg-white md:px-8 lg:px-12 flex flex-col rounded-[2rem] mx-auto max-w-[24rem] h-auto">
              <Tabs value="Signin" className="w-[100%] my-6">
                <TabsHeader
                  indicatorProps={{ id: "tabs-header-indicator" }}
                  placeholder={undefined}
                >
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value} placeholder={undefined}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  placeholder={undefined}
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
