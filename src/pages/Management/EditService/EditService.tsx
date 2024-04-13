import { Button, IconButton, Input, Radio } from "@material-tailwind/react";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Label, Textarea } from "flowbite-react";
import { useRef, useState } from "react";
import { speakingLanguages } from "../../../components/PostProjectPopup/PostProjectPopup";

export interface ITab {
  moveNext: () => void;
  addService?: boolean;
  id?: string;
}

export default function EditService({ moveNext, addService }: ITab) {
  const priceRef = useRef<any>(null);
  const [languages, setLanguage] = useState<Array<string>>(speakingLanguages);
  const [currentLanguage, setCurrentLanguage] = useState<Array<string>>([]);

  const [focus, setFocus] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value);
  };
  return (
    <>
      <section className="max-w-7xl w-[90%] h-[80vh] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10 overflow-y-auto">
        <div className="flex w-full px-10 mt-14 gap-6">
          <ul className="flex w-[50%] gap-3">
            <li
              className="aspect-square rounded-md cursor-pointer"
              onClick={moveNext}
            >
              <IconButton
                placeholder={undefined}
                size="lg"
                className="!w-[60px] h-[60px] !max-w-[60px] !max-h-[60px]"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </IconButton>
            </li>
            <li className="bg-slate-300 px-6 rounded-md text-blue-500 py-1 text-sm flex items-center font-bold cursor-pointer">
              {!addService ? "Edit Service" : "Add Service"}
            </li>
          </ul>
          <ul className="flex ml-auto gap-6">
            <li className="min-w-max rounded-md text-sm flex items-center font-bold">
              <Button
                size="lg"
                className="bg-red-200 text-red-500 capitalize py-5"
                placeholder={undefined}
              >
                {!addService ? "Delete service" : "Cancel"}
              </Button>
            </li>
            <li className="min-w-max bg-blue-500 rounded-md text-sm flex items-center font-bold">
              <Button
                size="lg"
                className="bg-primary text-white capitalize py-5"
                placeholder={undefined}
              >
                Save changes
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex w-full px-10 mt-8 gap-6 items-start">
          <div className="w-1/2 grid">
            <h2 className="font-bold text-2xl font-title mb-2">Service</h2>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Agency name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select service"
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-[10px] py-2 font-title font-semibold">
                  <div>[Service Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-primary text-white px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Service Name]</div>
                  <div>X</div>
                </div>
              </div>
            </div>
            {/* 
            <h2 className="">
              Description for your service
            </h2>
            <p className="font-bold mb-2 text-xs">(optional)</p>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <textarea
                id="description"
                className="border-[1px] p-2 rounded-md h-[6.25rem]"
              ></textarea>
            </div> */}
            <div className="font-bold text-2xl font-title mt-4">
              <Label
                htmlFor="comment"
                value="Description for your service"
                className="font-bold text-2xl font-title mt-4"
              />
              <p className="font-bold mb-2 text-xs">(optional)</p>
            </div>
            <Textarea
              id="comment"
              placeholder="Description"
              required
              className="p-3"
              rows={4}
            />
            <h2 className="font-bold text-2xl font-title mt-4">
              Starting price for this service
            </h2>
            <p className="font-bold mb-2 text-xs">
              Set your starting price so that we could match you with clients
              with similar budget
            </p>
            <div className="flex w-full flex-nowrap gap-4">
              <div className="flex gap-2">
                <Radio
                  name="type"
                  label="$100"
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                />
                <Radio
                  name="type"
                  label="$1000"
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                />
                <Radio
                  name="type"
                  label="$5000"
                  placeholder={undefined}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                  crossOrigin={false}
                />
                <Radio
                  name="type"
                  label="$10000"
                  placeholder={undefined}
                  crossOrigin={false}
                  labelProps={{
                    className: "text-xs font-bold",
                  }}
                />
                <Radio
                  name="type"
                  label={
                    <div
                      className="border-b-2 w-16 h-5 pb-2 font-bold text-xs"
                      contentEditable={true}
                      ref={priceRef}
                    >
                      123
                    </div>
                  }
                  onFocus={() => priceRef?.current?.focus()}
                  labelProps={{
                    className: "text-xs font-bold h-full flex items-center",
                  }}
                  placeholder={undefined}
                  crossOrigin={false}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 grid gap-1">
            <h2 className="font-bold text-2xl font-title mb-2">Skills Tags</h2>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="hidden font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Agency name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Select service"
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Skills Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>{" "}
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Name Skills Name Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>
              </div>
            </div>
            <div className="grid w-full mx-auto mt-5">
              <p className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text">
                Suggested skills tags:
              </p>
              <div className="w-full flex py-2 rounded-b-2xl gap-2 flex-wrap">
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Skills Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>{" "}
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name Skills]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Name Skills Name Name]</div>
                  <div>X</div>
                </div>
                <div className="flex text-xs justify-between w-fit gap-8 bg-secondary text-text px-4 rounded-[10px] font-semibold py-2 font-title">
                  <div>[Skills Name]</div>
                  <div>X</div>
                </div>
              </div>
            </div>
            <div className="grid w-full mx-auto">
              <label
                htmlFor="name"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Search for specific skills tags:
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] p-2 rounded-md"
                placeholder="Search for skills here..."
              />
              <div className="w-full border-2 border-t-0 border-dashed flex py-4 rounded-b-2xl px-4 gap-2 flex-wrap min-h-[3rem]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
