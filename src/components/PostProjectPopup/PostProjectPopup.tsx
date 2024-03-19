import { Button, Checkbox, Input } from "@material-tailwind/react";
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

const PopupContext = createContext(null);

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
            <div className="bg-white w-[80%] flex flex-col justify-start items-center pt-12 pb-6 px-4 rounded-2xl gap-4 h-[40%] max-w-[22rem]">
              {step === 0 ? (
                <StepOne moveNext={handleNext} />
              ) : step === 1 ? (
                <StepTwo movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 2 ? (
                <StepThree
                  movePrevious={handlePrevious}
                  moveNext={handleNext}
                />
              ) : step === 3 ? (
                <StepFour movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 4 ? (
                <StepFive movePrevious={handlePrevious} moveNext={handleNext} />
              ) : step === 5 ? (
                <StepSix movePrevious={handlePrevious} moveNext={handleNext} />
              ) : null}
            </div>
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
      <img
        src={"/static/images/Logo_BG.svg"}
        alt="logo"
        className="w-[4rem] md:w-[6rem] mb-6"
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
    </>
  );
}

function StepTwo({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <p className="font-bold">
        What <span className="text-secondary font-bold">services </span>
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
    </>
  );
}

function StepThree({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <p className="font-bold">
        What <span className="text-secondary font-bold">skills </span>
        you are looking for:
      </p>
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
    </>
  );
}
function StepFour({ moveNext, movePrevious }: IStep) {
  return (
    <>
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
    </>
  );
}

function StepFive({ moveNext, movePrevious }: IStep) {
  return (
    <>
      <p className="font-bold">
        In which <span className="text-secondary font-bold">language(s) </span>{" "}
        do you want to use with your agencies?
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
    </>
  );
}

function StepSix({ moveNext, movePrevious }: IStep) {
  return (
    <>
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
    </>
  );
}
export const usePopup = () => useContext(PopupContext);
