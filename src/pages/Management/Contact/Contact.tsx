import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Contact() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <h2 className="font-title text-[1.875rem] font-bold pt-5">Contact</h2>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="number"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
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
                />
              </div>
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
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
              />
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <h2 className="font-title text-[1.875rem] font-bold pt-5">Address</h2>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="number"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
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
                />
              </div>
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
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
              />
            </div>
          </div>
        </section>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <h2 className="font-title text-[1.875rem] font-bold pt-5">
          External links
        </h2>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end">
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="number"
                className="font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
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
                />
              </div>
            </div>
            <div className="grid w-1/2 mx-auto">
              <label
                htmlFor="language"
                className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] text-sm rounded-md text-text"
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
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
