import { faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Input,
  Menu,
  MenuHandler,
  Typography,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useState } from "react";
// @ts-ignore
import { useCountries } from "use-react-countries";

export default function EditProfile() {
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);

  const { name, flags, countryCallingCode } = countries[country];
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <FontAwesomeIcon icon={faUser} />
          <p className="font-title">Edit Info</p>
        </div>
      </div>

      <section className="max-w-7xl w-full mx-auto px-12 flex mt-1 gap-3">
        <div className="w-[50%] grid gap-3">
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6 shadow-lg">
            <div className="flex items-center gap-4 justify-center">
              <Typography placeholder={undefined} variant="h6" className="">
                About
              </Typography>
            </div>
            <div className="flex flex-col mt-4 gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your full name" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
            </div>
          </div>
          <div className="w-full pb-10 rounded-xl mx-auto flex gap-4 max-w-7xl">
            <div className="flex flex-col items-center w-1/3 border-2 shadow-lg rounded-xl ">
              <Typography variant="h6" placeholder={undefined} className="mt-6">
                Logo
              </Typography>
              <div className="w-[80%] aspect-square rounded-full mt-4 justify-center items-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center  rounded-full border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="flex flex-col items-center w-2/3 border-2 shadow-lg rounded-xl ">
              <Typography variant="h6" placeholder={undefined} className="mt-6">
                External links
              </Typography>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-4 py-4 w-[80%]">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email2" value="Facebook:" />
                    </div>
                    <TextInput
                      id="email2"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                      shadow
                    />
                  </div>
                  <div className="mb-4">
                    <div className="mb-2 block">
                      <Label htmlFor="email2" value="LinkedIn:" />
                    </div>
                    <TextInput
                      id="email2"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                      shadow
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <Button
              placeholder={undefined}
              className="flex bg-tertiary min-w-[8rem] items-center justify-center text-primary w-1/2"
              size="lg"
            >
              Cancel
            </Button>
            <Button
              placeholder={undefined}
              className="flex bg-primary min-w-[8rem] items-center justify-center w-1/2"
              size="lg"
            >
              Save changes
            </Button>
          </div>
        </div>
        <div className="w-[50%] pb-10 rounded-xl border-2 mx-auto flex-col px-12  shadow-lg">
          <div className="flex items-center gap-2 mt-6 justify-center">
            <Typography placeholder={undefined} variant="h6" className="">
              Contact
            </Typography>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your address" />
                <Typography
                  variant="small"
                  className="text-xs"
                  placeholder={undefined}
                >
                  This address will be used to connect you with nearby relevant
                  providers and give you local online visibility. Edit or Add
                  your addresses here:
                </Typography>
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email address" />
                <Typography
                  variant="small"
                  className="text-xs"
                  placeholder={undefined}
                >
                  Your email address will only be visible to yourself. Fya will
                  use your email to send notifications for projects and other
                  activities on Fya.
                </Typography>
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
              />
            </div>
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your phone number" />
                  <Typography
                    variant="small"
                    className="text-xs"
                    placeholder={undefined}
                  >
                    Your phone number will only be visible to yourself. Fya will
                    only show your phone number to providers after they accept
                    your project brief via Post your Project feature
                  </Typography>
                </div>
              </div>
              <div className="relative flex w-full ">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      placeholder={undefined}
                      ripple={false}
                      variant="text"
                      color="blue-gray"
                      className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 w-[10rem]"
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-4 w-4 rounded-full object-cover"
                      />
                      {countryCallingCode}
                    </Button>
                  </MenuHandler>
                  <MenuList
                    placeholder={undefined}
                    className="max-h-[20rem] max-w-[18rem]"
                  >
                    {countries.map(
                      ({ name, flags, countryCallingCode }, index) => {
                        return (
                          <MenuItem
                            placeholder={undefined}
                            key={name}
                            value={name}
                            className="flex items-center gap-2"
                            onClick={() => setCountry(index)}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {name}{" "}
                            <span className="ml-auto">
                              {countryCallingCode}
                            </span>
                          </MenuItem>
                        );
                      }
                    )}
                  </MenuList>
                </Menu>
                <Input
                  crossOrigin={undefined}
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
