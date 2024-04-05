import {
  Checkbox,
  Label,
  TextInput,
  CustomFlowbiteTheme,
} from "flowbite-react";
import { FormEvent, useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill, RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ISignUpData, Signup } from "../../api/lib/authentication";
import { MdErrorOutline } from "react-icons/md";
import clsx from "clsx";
import { Button } from "@material-tailwind/react";
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
          "border-red-500 bg-red-50 text-red-900 border border-2  placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
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
interface ISignupError {
  email?: string;
  password?: string;
  lname?: string;
  fname?: string;
}
export default function SignupForm() {
  const [user, setUser] = useState<ISignUpData>({
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  const [errors, setErrors] = useState<ISignupError>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
    if (submitting) {
      setErrors(validateValues(user));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateValues(user));
    setSubmitting(true);
    if (Object.keys(errors).length === 0 && submitting) {
      await finishSubmit();
    }
  };

  const finishSubmit = async () => {
    console.log(user);
    let result = await Signup(user);
    console.log(result);
  };

  const validateValues = (inputValues) => {
    let errors: ISignupError = {};
    if (inputValues.email.length < 10) {
      errors.email = "Email is not valid";
    } else {
      delete errors["email"];
    }
    if (inputValues.password.length < 5) {
      errors.password = "Password is too short";
    } else {
      delete errors["password"];
    }
    if (inputValues.fname.length < 2) {
      errors.fname = "First Name is too short";
    } else {
      delete errors["fname"];
    }
    if (inputValues.lname.length < 2) {
      errors.lname = "Last Name is too short";
    } else {
      errors.lname = "";
      delete errors["lname"];
    }

    return errors;
  };
  return (
    <form className="flex flex-col gap-4 mb-5 h-50%" onSubmit={handleSubmit}>
      <div>
        {errors?.fname ? (
          <div className="flex text-red-400 gap-2 mb-2">
            <MdErrorOutline />
            <p className="text-xs">First Name is too short</p>
          </div>
        ) : null}
        <TextInput
          id="fname"
          name="fname"
          type="text"
          placeholder="First Name"
          color={errors?.fname && submitting ? "failure" : "gray"}
          theme={customInputTheme}
          icon={RiProfileFill}
          onChange={handleChange}
        />
      </div>
      <div>
        {errors?.lname ? (
          <div className="flex text-red-400 gap-2 mb-2">
            <MdErrorOutline />
            <p className="text-xs">Last Name is too short</p>
          </div>
        ) : null}
        <TextInput
          id="lname"
          type="text"
          name="lname"
          color={errors?.lname && submitting ? "failure" : "gray"}
          placeholder="Last Name"
          theme={customInputTheme}
          icon={RiProfileFill}
          onChange={handleChange}
        />
      </div>
      <div>
        {errors?.email ? (
          <div className="flex text-red-400 gap-2 mb-2">
            <MdErrorOutline />
            <p className="text-xs">Email is not valid</p>
          </div>
        ) : null}
        <TextInput
          id="email1"
          type="email"
          name="email"
          placeholder="Email"
          theme={customInputTheme}
          color={errors?.email && submitting ? "failure" : "gray"}
          icon={HiMail}
          onChange={handleChange}
        />
      </div>
      <div>
        {errors?.password ? (
          <div className="flex text-red-400 gap-2 mb-2">
            <MdErrorOutline />

            <p className="text-xs">Password is too short</p>
          </div>
        ) : null}
        <TextInput
          id="password"
          type="password"
          name="password"
          theme={customInputTheme}
          placeholder="Password"
          color={errors?.password && submitting ? "failure" : "gray"}
          icon={RiLockPasswordFill}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-xs">
          I accept the Term of Use & Privacy Policy
        </Label>
      </div>
      <Button
        size="lg"
        placeholder={undefined}
        className="bg-primary text-white px-6 py-3 mt-2 capitalize"
        type="submit"
      >
        Sign up
      </Button>
      <p className="text-xs text-center">or signup with</p>
      <div className="flex justify-center items-center gap-6">
        <FontAwesomeIcon icon={faFacebook} className="text-[2.5rem]" />
        <FontAwesomeIcon icon={faGoogle} className="text-[2.5rem]" />
      </div>
    </form>
  );
}
