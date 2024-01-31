import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function ReviewInvitaion() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto grid px-12 gap-4">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          Reviews
        </h2>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-md text-center">
          Boost credibility with feedback and reviews from your past clients.
        </p>
        <section className="flex w-full gap-5 border-2 px-6 py-4 rounded-2xl">
          <ul className="w-full flex justify-between">
            <li className="pr-4 border-r-2">
              <ul>
                <li className="text-text text-md">Rating</li>
                <li>
                  <ul className="flex gap-3 items-center">
                    <li className="w-4 aspect-square bg-secondary rounded-full"></li>
                    <li className="w-4 aspect-square bg-secondary rounded-full"></li>
                    <li className="w-4 aspect-square bg-secondary rounded-full"></li>
                    <li className="w-4 aspect-square bg-secondary rounded-full"></li>
                    <li className="w-4 aspect-square bg-secondary rounded-full"></li>
                    <li>5.0/5.0</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="pr-4 border-r-2">
              <ul>
                <li className="text-text text-md">Client’s name</li>
                <li className="font-bold">[Client’s Name]</li>
              </ul>
            </li>
            <li className="pr-4 border-r-2">
              <ul>
                <li className="text-text text-md">Company name</li>
                <li className="font-bold">[Company Name]</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="text-text text-md">Service provided</li>
                <li className="font-bold">[Service Name]</li>
              </ul>
            </li>
            <li className="flex items-center">
              <button className="w-8 aspect-square bg-slate-300 rounded-lg"></button>
            </li>
          </ul>
        </section>
        <section className="grid w-full gap-5">
          <section className="grid w-full gap-5 border-2 px-6 py-4 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="w-20 mr-7 aspect-square bg-gray-200 rounded-2xl"></div>
              <p>
                <span className="font-bold">
                  Invite client to review your work:
                </span>{" "}
                Elevate your agency's credibility by inviting clients to share
                their experiences on Fya. Customer reviews are invaluable for
                building trust and attracting potential clients. Utilize this
                feature to enhance your agency's reputation and win more
                business.
              </p>
            </div>
            <div className="flex w-full mx-auto gap-10 items-start">
              <div className="grid w-1/2 mx-auto h-full">
                <label
                  htmlFor="number"
                  className="font-semibold w-fit py-[0.125rem] rounded-md text-text text-2xl"
                >
                  Invite by link
                </label>
                <span className="text-gray-300 text-sm py-[0.225rem]">
                  Share your agency's dedicated review link across various
                  platforms. Whether it's on your website, in your email
                  signature, or on social media, make it easy for clients to
                  leave reviews and build your agency's reputation.
                </span>
                <div className="flex self-end gap-2">
                  <input
                    type="text"
                    id="language"
                    className="border-[1px] p-2 rounded-md w-2/3
                  "
                    placeholder="https://sample.com"
                  />
                  <button className="bg-primary text-white w-1/3 rounded-md text-xs font-semibold h-[2.625rem]">
                    Copy link
                  </button>
                </div>
              </div>
              <div className="grid w-1/2 mx-auto">
                <label
                  htmlFor="language"
                  className="font-semibold w-fit py-[0.225rem] md:py-[0.425rem] rounded-md text-text text-2xl"
                >
                  Invite by email
                </label>
                <span className="text-gray-300 text-sm py-[0.225rem]">
                  Your email address will not be displayed on your Page. Fya
                  will use your email to send notifications for projects, leads
                  and messages sent to your inbox from your Agency Page
                  visitors.
                </span>
                <p>
                  Fya prepares the email for you.{" "}
                  <span
                    className="
                  text-blue"
                  >
                    Send me the preview email.
                  </span>
                </p>
                <div className="flex self-end gap-2">
                  <input
                    type="text"
                    id="language"
                    className="border-[1px] p-2 rounded-md w-2/3
                  "
                    placeholder="Enter email here. Hit ‘return’ to seperate each email."
                  />
                  <button className="bg-primary text-white w-1/3 rounded-md text-xs font-semibold h-[2.625rem]">
                    Send email(s)
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
