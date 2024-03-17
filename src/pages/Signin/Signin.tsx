import {
  Button,
  Checkbox,
  Label,
  TextInput,
  CustomFlowbiteTheme,
} from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-[1px] border-primary bg-light_gray max-w-7xl py-5 px-8 sm:px-  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between">
        <div className="py-5 md:w-3/5 lg:w-3/5 lg:h-1/2">
          <img
            src={"/static/images/Logo_BG.svg"}
            alt="logo"
            className="w-[4rem] mb-6"
          />
          <h1 className="text-4xl pb-2 font-bold text-primary lg:text-5xl font-header">
            <span className="text-secondary">Signup</span> or{" "}
            <span className="text-secondary">Log in</span> to your account to
            continue!
          </h1>
          <p className="font-semibold pt-2 text-primary opacity-55">
            Manage all your activities on Fya with your account.
          </p>
        </div>
        <form className="flex flex-col gap-4 mb-5">
          <div>
            <TextInput
              id="email1"
              type="email"
              placeholder="email"
              required
              theme={customInputTheme}
              icon={HiMail}
              onChange={changeEmail}
            />
          </div>
          <div>
            <TextInput
              id="password1"
              type="password"
              required
              theme={customInputTheme}
              placeholder="password"
              icon={RiLockPasswordFill}
              onChange={changePassword}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-xs">
                Remember me
              </Label>
            </div>
            <Link
              className="underline text-pink font-bold text-xs"
              to="/signin"
            >
              Forgot password
            </Link>
          </div>
          <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2 md:mt-0">
            Sign in
          </button>
          <p className="text-xs text-center">or login with</p>
          <div className="flex justify-center items-center gap-6">
            <FontAwesomeIcon icon={faFacebook} className="text-[2.5rem]" />
            <FontAwesomeIcon icon={faGoogle} className="text-[2.5rem]" />
          </div>
        </form>
      </section>
    </main>
  );
}
