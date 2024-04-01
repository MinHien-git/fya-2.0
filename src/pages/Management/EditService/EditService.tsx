export interface ITab {
  moveNext: () => void;
  id?: string;
}

export default function EditService({ moveNext }: ITab) {
  return (
    <>
      <section className="max-w-7xl w-[90%] h-[80vh] rounded-xl border-2 mt-10 mx-auto flex-col px-6 pb-10 overflow-y-auto">
        <div className="flex w-full px-10 mt-14 gap-6">
          <ul className="flex w-[50%] gap-3">
            <li
              className="w-8 aspect-square rounded-md bg-slate-300 cursor-pointer"
              onClick={moveNext}
            ></li>
            <li className="bg-slate-300 px-6 rounded-md text-blue-500 py-1 text-sm flex items-center font-bold cursor-pointer">
              Edit
            </li>
          </ul>
          <ul className="flex ml-auto gap-3">
            <li className="min-w-max bg-red-200 text-red-500 px-6 rounded-md py-1 text-sm flex items-center font-bold">
              Delete service
            </li>
            <li className="min-w-max bg-blue-500 text-white px-6 rounded-md py-1 text-sm flex items-center font-bold bg-primary">
              Save changes
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

            <h2 className="font-bold text-2xl font-title mt-4">
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
            </div>

            <h2 className="font-bold text-2xl font-title mt-4">
              Starting price for this service
            </h2>
            <p className="font-bold mb-2 text-xs">
              Set your starting price so that we could match you with clients
              with similar budget
            </p>
            <div className="flex w-full mx-auto flex-nowrap gap-4">
              <div className="flex w-1/6 mx-auto items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  $100
                </label>
              </div>
              <div className="flex w-1/6 mx-auto items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  $1000
                </label>
              </div>
              <div className="flex w-1/6 mx-auto items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  $5000
                </label>
              </div>
              <div className="flex w-1/6 mx-auto items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  $10000
                </label>
              </div>
              <div className="flex w-2/6 mx-auto items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300 w-full"
                >
                  <input
                    type="text"
                    id="default-radio-1"
                    className="border-2 w-full rounded-md"
                  />
                </label>
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
