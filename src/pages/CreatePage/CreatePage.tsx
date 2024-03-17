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

export default function CreatePage() {
  const data = [
    {
      label: "Company",
      value: 0,
      desc: "this is a ",
    },
    {
      label: "Information",
      value: 1,
      desc: "testing",
    },
    {
      label: "Service",
      value: 2,
      desc: "testing",
    },
    {
      label: "Confirm",
      value: 3,
      desc: "testing",
    },
  ];

  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] py-8 border-primary bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto flex flex-col md:gap-2 md:px-0  min-h-[50vh] lg:min-h-[80vh] h-[100%] items-center">
        <div className="w-[100%] md:w-[80%] my-10 ">
          <Tabs value={0} className="w-[100%] my-6 ">
            <TabsHeader
              indicatorProps={{ id: "tabs-header-indicator" }}
              placeholder={undefined}
              className="overflow-x-auto md:overflow-x-hidden"
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  placeholder={undefined}
                  className="w-[10rem] md:w-full"
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
    </main>
  );
}
