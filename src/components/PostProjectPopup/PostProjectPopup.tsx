import {
  Button,
  Checkbox,
  Input,
  Radio,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { Label } from "flowbite-react";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface IProjectPopupProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function PostProjectModal({ isOpen }: IProjectPopupProps) {
  const [step, SetStep] = useState(0);

  const handleNext = (): void => {
    SetStep(step + 1);
  };
  const handlePrevious = () => {
    SetStep(step - 1);
  };
  return isOpen
    ? createPortal(
        <>
          <div className="w-[100vw] h-[100vh] fixed bg-gray-500/50 z-1000 top-0 flex justify-center items-center">
            {step === 0 ? (
              <StepOne moveNext={handleNext} />
            ) : step === 1 ? (
              <StepTwo movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 2 ? (
              <StepThree movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 3 ? (
              <StepFour movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 4 ? (
              <StepFive movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 5 ? (
              <StepSix movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 6 ? (
              <StepSeven movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 7 ? (
              <StepEight movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 8 ? (
              <StepNine movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 9 ? (
              <StepTen movePrevious={handlePrevious} moveNext={handleNext} />
            ) : step === 10 ? (
              <StepEleven moveNext={handleNext} movePrevious={handlePrevious} />
            ) : null}
          </div>
        </>,
        document.body
      )
    : null;
}
interface IStep {
  moveNext?: () => void;
  movePrevious?: () => void;
}
function StepOne({ moveNext }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-center pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto min-h-[40%] max-h-[50rem] max-w-[22rem]">
        <img
          src={"/static/images/Logo_BG.svg"}
          alt="logo"
          className="w-[4rem] mb-6"
        />
        <p className="text-center">
          To understand your needs, we will first ask you a few{" "}
          <span className="font-bold">questions </span>
          before <span className="font-bold">matching </span>your company with
          agencies that fit.
        </p>
        <Button
          className="flex bg-primary min-w-[8rem] items-center justify-center mt-auto"
          placeholder={undefined}
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </>
  );
}

function StepTwo({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What <span className="text-secondary font-bold">services </span> and{" "}
          <span className="text-secondary font-bold">skills </span>
          you are looking for:
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Select service"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Select skills"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepThree({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          Which <span className="text-secondary font-bold">areas </span> do you
          want your providers to be active in?
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Find a location (city, region or country)"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            placeholder={undefined}
            crossOrigin={undefined}
          />
          <Label htmlFor="check" className="text-xs">
            My agencies must have at least one office in this location.
          </Label>
        </div>
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
function StepFour({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          In which{" "}
          <span className="text-secondary font-bold">language(s) </span> do you
          want to use with your agencies?
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Select language"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />

        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepFive({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What is the <span className="text-secondary font-bold">name </span>of
          your business?
        </p>
        <p className="text-xs">
          This information will only be shown to agencies once their project
          proposal have been by accepted you via Post Your Project feature.{" "}
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Your company name..."
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />

        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepSix({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What is the <span className="text-secondary font-bold">size </span> of
          your business?
        </p>
        <div className="grid gap-2">
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                1 person
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                2-10 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                11-50 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                51-100 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                101-500 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                501-1000 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                1001-5000 people
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                More than 5000 people
              </Typography>
            }
            className="text-xs"
          />
        </div>
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepSeven({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What is your company’s{" "}
          <span className="text-secondary font-bold">industry? </span>
        </p>

        <Select placeholder={undefined} label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>

        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepEight({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          Where is your company’s{" "}
          <span className="text-secondary font-bold">office? </span>
        </p>
        <p className="text-xs">
          This information will only be shown to agencies once their project
          proposal have been by accepted you via Post Your Project feature.{" "}
        </p>
        <Input
          crossOrigin={undefined}
          type="email"
          placeholder="Select service"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />

        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepNine({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What is your{" "}
          <span className="text-secondary font-bold">position </span> of your{" "}
          <span className="text-secondary font-bold">company?</span>
        </p>
        <div className="grid gap-2">
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                CEO / Business Owner
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                CMO / Marketing Director
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Marketing Manager / Brand Manager
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Consultant
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Procurement Manager / Purchasing Manager
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Marketing Executive / Sales Executive
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Sales Representative / Business Developer
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Typography
                placeholder={undefined}
                color="blue-gray"
                className="font-normal text-blue-gray-400 text-sm"
              >
                Intern
              </Typography>
            }
            className="text-xs"
          />
          <Radio
            crossOrigin={undefined}
            name="type"
            label={
              <Input
                crossOrigin={undefined}
                type="email"
                placeholder="Other"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            }
            className="text-xs"
          />
        </div>
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepTen({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What is your preferred{" "}
          <span className="text-secondary font-bold">budget range</span> and
          <span className="text-secondary font-bold"> project duration?</span>
        </p>
        <p className="text-xs">
          This information will only be used to select agencies that fit for
          you. You are not obligated to follow this budget range and project
          duration.
        </p>
        <Select label="Select budget range" placeholder={undefined}>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Select project duration" placeholder={undefined}>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

function StepEleven({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <div className="bg-white w-[80%] flex flex-col justify-start items-start pt-6 pb-6 px-4 rounded-2xl gap-4 h-auto max-h-[50rem] max-w-[22rem] min-h-[40%]">
        <p className="font-bold">
          What other
          <span className="text-secondary font-bold"> details</span> that you
          want your agency to know?
        </p>
        <div className="w-full">
          <Textarea label="Message" rows={8} />
        </div>
        <div className="flex justify-between w-full mt-auto">
          <Button
            className="flex bg-gray-400 min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={movePrevious}
          >
            <FaArrowLeft /> Previous
          </Button>
          <Button
            className="flex bg-primary min-w-[8rem] items-center justify-center"
            placeholder={undefined}
            onClick={moveNext}
          >
            Next <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
