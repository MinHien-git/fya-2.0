import {
  Checkbox,
  Label,
  TextInput,
  CustomFlowbiteTheme,
} from "flowbite-react";
import { useEffect, useState } from "react";
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
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IStep } from "../../components/PostProjectPopup/PostProjectPopup";

export default function CreatePage() {
  const [tab, setTab] = useState(0);
  const handleChange = (index: number) => {
    setTab(index);
    console.log(index);
  };

  const data = [
    {
      label: "Select your company",
      value: 0,
      desc: <SelectCompany moveNext={() => handleChange(1)} />,
    },
    {
      label: "Add information",
      value: 1,
      desc: "testing",
    },
    {
      label: "Create an admin account",
      value: 2,
      desc: "testing",
    },
  ];

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] py-8 border-primary bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto flex flex-col md:gap-2 md:px-0  min-h-[50vh] lg:min-h-[80vh] h-[100%] items-center">
        <div className="w-[100%] md:w-[80%] my-10 ">
          <Tabs
            value={tab}
            className="w-[100%] my-6 "
            onChange={(index) => handleChange(index)}
          >
            <TabsHeader
              indicatorProps={{ id: "tabs-header-indicator" }}
              placeholder={undefined}
              className="overflow-x-auto md:overflow-x-hidden rounded-[2rem]"
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  placeholder={undefined}
                  className="w-[10rem] md:w-full font-bold [&_#tabs-header-indicator]:rounded-[2rem]"
                >
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
      </section>
      <div>
        {data.map(({ label, value }) => (
          <button key={value} onClick={() => handleChange(value)}>
            Go to {label}
          </button>
        ))}
      </div>
    </main>
  );
}

export function SelectCompany({ moveNext }: IStep) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center mt-10 max-w-xl gap-4">
        <Typography variant="h3" placeholder={undefined}>
          What is the name of your business?
        </Typography>
        <Typography variant="paragraph" placeholder={undefined}>
          Choose from an already-established business or start a new Brand Page.
        </Typography>
        <div className="w-[24rem] flex mx-auto">
          <Input
            label="Enter a company name..."
            placeholder={undefined}
            crossOrigin={undefined}
            size="lg"
          />
        </div>
        <Button
          placeholder={undefined}
          className="flex bg-primary min-w-[8rem] items-center justify-center"
          size="lg"
          onClick={moveNext}
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
