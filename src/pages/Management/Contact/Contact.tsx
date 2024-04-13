import { useSelector } from "react-redux";
import AddressCard from "../../../components/AddressCard/AddressCard";

export default function Contact() {
  const pageSelector = useSelector((state: any) => state.page);
  return (
    <div className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <h2 className="font-title text-[1.875rem] font-bold pt-5">Contact</h2>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="number"
                className="font-semibold w-fit py-[0.125rem] text-2xl rounded-md text-text"
              >
                Agency phone number*
              </label>
              <span className="text-gray-300 text-sm py-[0.225rem]">
                Your phone number will not be displayed on your Page. Fya will
                only show your phone number to clients who are looking for
                agencies like yours.
              </span>
              <div className="flex gap-2">
                <select
                  id="number"
                  name="cars"
                  className="border-[1px] p-2 rounded-md w-1/3 text-sm"
                >
                  <option value="volvo">(+84) Vietnam</option>
                  <option value="saab">(+84) Vietnam</option>
                  <option value="mercedes">(+84) Vietnam</option>
                  <option value="audi">(+84) Vietnam</option>
                </select>
                <input
                  type="text"
                  id="language"
                  className="border-[1px] p-2 rounded-md w-2/3"
                  value={pageSelector?.phone_number}
                />
              </div>
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-2xl rounded-md text-text"
              >
                Agency email address*
              </label>
              <span className="text-gray-300 text-sm py-[0.225rem]">
                Your email address will not be displayed on your Page. Fya will
                use your email to send notifications for projects, leads and
                messages sent to your inbox from your Agency Page visitors.
              </span>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md"
                value={pageSelector?.email_address}
              />
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6 grid gap-5">
        <h2 className="font-title text-[1.875rem] font-bold pt-5 pb-3">
          Address
        </h2>

        <div className="grid gap-3">
          <AddressCard isEmpty={false} />
          <AddressCard isEmpty={true} />
        </div>
        <div className="grid gap-1">
          <h2 className="font-title text-[1.25rem] pt-5">Remote Work option</h2>
          <p>
            Enable this option on your Agency Page know that your agency is able
            to work and communicate remotely with clients
          </p>
        </div>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <h2 className="font-title text-[1.875rem] font-bold pt-5">
          External links
        </h2>
        <section className="grid w-full gap-5">
          <div className="flex items-center bg-light_yellow px-5 py-5 rounded-2xl justify-between gap-5 border-2 mt-8">
            <p className="text-xs">
              Receive a backlink to your website, plus links to your socials and
              showcase them on your Agency Page with{" "}
              <span className="text-secondary">FyaPro</span>{" "}
              <span className="text-primary">Learn more</span>
            </p>
            <button
              className="middle none center rounded-md py-2 px-10 font-sans text-xs font-bold text-text shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-secondary hidden lg:inline-block mr-2 w-[12rem]"
              data-ripple-light="true"
            >
              Activate FyaPro
            </button>
          </div>
          <div className="flex w-full justify-between">
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Your agency website:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Facebook:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                LinkedIn:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Behance:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Pinterest:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                YouTube:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Instagram:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                X (formerly Twitter):
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                TikTok:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
            <div className="grid w-1/6">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
              >
                Others:
              </label>
              <input
                type="text"
                id="language"
                className="border-[1px] p-2 rounded-md w-full"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
