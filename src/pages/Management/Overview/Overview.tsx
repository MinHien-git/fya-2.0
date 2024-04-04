import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { IoCloseCircle, IoCloseSharp } from "react-icons/io5";

export default function Overview() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.57671 9.72088V16.5859M23.5952 15.4418V7.66136C23.5952 6.37977 23.5952 5.73896 23.3457 5.24946C23.1264 4.81888 22.7763 4.4688 22.3457 4.24942C21.8563 4 21.2154 4 19.9338 4H6.66136C5.37977 4 4.73897 4 4.24946 4.24942C3.81888 4.4688 3.4688 4.81888 3.24942 5.24946C3 5.73896 3 6.37977 3 7.66136V18.6455C3 19.927 3 20.5679 3.24942 21.0574C3.4688 21.4879 3.81888 21.8381 4.24946 22.0574C4.73897 22.3068 5.37977 22.3068 6.66136 22.3068H13.2976M13.2976 14.2976H14.2102C14.7193 14.2976 14.9738 14.2976 15.2158 14.3506C15.4304 14.3976 15.6371 14.4753 15.8297 14.5812C16.0466 14.7007 16.2381 14.8683 16.6213 15.2035L23.4406 21.1704C24.1435 21.7854 24.1795 22.8667 23.5191 23.5271C22.9181 24.1281 21.954 24.1603 21.3143 23.6005L14.5479 17.68C14.0879 17.2774 13.8578 17.0761 13.6926 16.8329C13.5462 16.6172 13.4377 16.3782 13.372 16.1261C13.2976 15.8417 13.2976 15.5359 13.2976 14.9245V14.2976Z"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="font-title">Dashboard</p>
        </div>
      </div>
      <section className="max-w-7xl w-full mx-auto flex-col px-12">
        <h1 className="font-title text-[3.25rem] font-bold pt-5">Overview</h1>
      </section>

      <section className="max-w-7xl w-full mx-auto">
        <div className="border-[1px] border-secondary mx-12 rounded-2xl flex items-center justify-between px-6 py-3 shadow-lg">
          <div className="grid">
            <h5 className="font-title font-bold">
              Unlock <span className="text-secondary">FyaPro</span> for
              Exclusive Business Perks
            </h5>
            <p className="text-sm">
              Expand your reach with Advertising Features, generate business
              with Leads Extension, and much more!{" "}
              <span className="text-primary underline font-semibold mr-3">
                Learn more
              </span>
              {"  "}
              <span className="text-primary underline font-semibold">
                Not now
              </span>
            </p>
          </div>
          <div className="aspect-square rounded-full w-8 bg-slate-300 flex justify-center items-center">
            <IoCloseSharp className="w-6 h-6" />
          </div>
        </div>
      </section>
      <section className="max-w-7xl w-full mx-auto px-12 flex mt-1 gap-3">
        <div className="w-[50%] grid gap-3">
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-secondary w-10 rounded-lg flex justify-center items-center">
                <img src="/static/icons/advertisingIcon.png" alt="advertise" />
              </div>
              <div className="font-bold">Advertising</div>
              <Button
                placeholder={undefined}
                className="bg-slate-200  text-primary ml-auto"
              >
                See full data
              </Button>
            </div>
            <ul className="flex h-[6rem] justify-between gap-4 border-b-2 pt-2 pb-4 mt-4">
              <li className="pl-4">
                <div className="text-xs">Appear in</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">searchs this week</div>
              </li>
              <li className="h-full bg-gray-200 w-[2px]"></li>
              <li>
                <div className="text-xs">Average position</div>
                <div className="text-3xl font-bold">-</div>
              </li>
              <li className="h-full bg-gray-200 w-[2px]"></li>
              <li className="pr-4">
                <div className="text-xs">Conversions</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">in the last 30 days</div>
              </li>
            </ul>
          </div>
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex justify-center items-center">
                <img src="/static/icons/projectLeads.png" alt="projectLeads" />
              </div>
              <div className="font-bold">Leads</div>
              <Button
                placeholder={undefined}
                className="bg-slate-200  text-primary ml-auto"
              >
                See full data
              </Button>
            </div>
            <ul className="flex h-[6rem] justify-between gap-4 border-b-2 pt-2 pb-4 mt-4">
              <li className="pl-4">
                <div className="text-xs invisible">Appear in</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">new lead(s) this week</div>
              </li>
              <li className="h-full bg-gray-200 w-[2px]"></li>
              <li>
                <div className="text-xs">Opened</div>
                <div className="text-3xl font-bold">-</div>
                <div className="text-xs">new project(s) this week</div>
              </li>
              <li className="h-full bg-gray-200 w-[2px]"></li>
              <li className="pr-4">
                <div className="text-xs">Projects won:</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">in the last 30 days</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[50%] pb-10 rounded-xl border-2 mx-auto flex-col px-6 shadow-lg">
          <div className="flex items-center gap-2 mt-6">
            <div className="aspect-square w-10 rounded-md flex items-center justify-center">
              <img src="/static/icons/checkbox.png" alt="checkbox" />
            </div>{" "}
            <h2>Complete your Agency Page</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
