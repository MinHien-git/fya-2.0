import {
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
import { ISignInData, Signin } from "../../api/lib/authentication";
import { MdErrorOutline } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser as setReduxUser } from "../../features/users/userSplice";
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
interface ISignInError {
  email?: string;
  password?: string;
}
export default function SigninForm() {
  const [user, setUser] = useState<ISignInData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ISignInError>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateValues = (inputValues) => {
    let errors: ISignInError = {};
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

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (submitting) {
      setErrors(validateValues(user));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateValues(user));
    setSubmitting(true);
    if (Object.keys(errors).length === 0) {
      console.log(user);
      await finishSubmit();
    }
  };

  const finishSubmit = async () => {
    let result = await Signin(user);
    console.log(result);
    if (result.status === 200) {
      if (result.data.data) {
        let { refreshToken, accesstoken, user } = result.data.data;

        dispatch(setReduxUser(user));
        Cookies.set("at", accesstoken, {
          expires: 2,
          secure: true,
        });
        Cookies.set("rft", refreshToken, {
          expires: 7,
          secure: true,
        });

        navigate("/");
      }
    }
  };

  return (
    <form className="flex flex-col gap-4 mb-5" onSubmit={handleSubmit}>
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
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-xs">
            Remember me
          </Label>
        </div>
        <Link className="underline text-pink font-bold text-xs" to="/signin">
          Forgot password
        </Link>
      </div>
      <Button
        placeholder={undefined}
        size="lg"
        className="bg-primary text-white  px-6 py-3 mt-2 capitalize"
        type="submit"
      >
        Sign in
      </Button>
      <p className="text-xs text-center">or login with</p>
      <div className="flex justify-center items-center gap-6">
        <FontAwesomeIcon icon={faFacebook} className="text-[2.5rem]" />
        <FontAwesomeIcon icon={faGoogle} className="text-[2.5rem]" />
      </div>
    </form>
  );
}
