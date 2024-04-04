import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography } from "@material-tailwind/react";
import {
  IoCloseCircle,
  IoCloseCircleSharp,
  IoCloseSharp,
} from "react-icons/io5";

export default function ClientOverview() {
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
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex flex-col justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="3"
                    stroke="#fff"
                    stroke-width="2"
                  />
                  <path
                    d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                Projects
              </Typography>
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
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex justify-center items-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5556 7.25H5.44444M16.5556 12.25H11M0.999999 21L4.69367 18.9222C4.97367 18.7647 5.11367 18.686 5.26044 18.6305C5.39067 18.5813 5.52478 18.5456 5.66089 18.5241C5.81422 18.5 5.97078 18.5 6.28378 18.5H17.4444C18.689 18.5 19.3113 18.5 19.7866 18.2275C20.2048 17.9879 20.5447 17.6054 20.7578 17.135C21 16.6003 21 15.9001 21 14.5V5C21 3.59986 21 2.8998 20.7578 2.36503C20.5447 1.89461 20.2048 1.51216 19.7866 1.27249C19.3113 1 18.689 1 17.4444 1H4.55556C3.311 1 2.68866 1 2.21333 1.27249C1.79522 1.51216 1.45522 1.89461 1.24222 2.36503C1 2.8998 0.999999 3.59987 0.999999 5V21Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                Inbox
              </Typography>
            </div>
            <ul className="flex flex-col mt-4 gap-2">
              <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
                <span className="w-3 aspect-square bg-green-600 rounded-full mr-4"></span>
                <p>+4 unread message from [Sender Name]</p>
              </li>
              <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
                <span className="w-3 aspect-square bg-green-600 rounded-full mr-4"></span>
                <p>+4 unread message from [Sender Name]</p>
              </li>
              <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
                <span className="w-3 aspect-square bg-green-600 rounded-full mr-4"></span>
                <p>+4 unread message from [Sender Name]</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[50%] pb-10 rounded-xl border-2 mx-auto flex-col px-12">
          <div className="flex items-center gap-2 mt-6">
            <div className="aspect-square bg-primary w-10 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C7.172 0 6.5 0.672 6.5 1.5V2.19531C3.91318 2.86209 2 5.2048 2 8V14L0 16V17H6.26953C6.09344 17.3039 6.00048 17.6488 6 18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18C9.99893 17.6486 9.90529 17.3037 9.72852 17H16V16L14 14V8C14 5.2048 12.0868 2.86209 9.5 2.19531V1.5C9.5 0.672 8.828 0 8 0ZM8 4C10.206 4 12 5.794 12 8V14V14.8281L12.1719 15H3.82812L4 14.8281V14V8C4 5.794 5.794 4 8 4Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <Typography placeholder={undefined} variant="h6" className="">
              Notifications
            </Typography>

            <Button
              placeholder={undefined}
              className="bg-slate-200  text-primary ml-auto"
            >
              See all notifications
            </Button>
          </div>
          <ul className="flex flex-col mt-4 gap-2">
            <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
              <span className="w-3 aspect-square bg-green-600 rounded-full h-12 mr-4"></span>
              <p>+4 unread message from [Sender Name]</p>
            </li>
            <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
              <span className="w-3 aspect-square bg-green-600 rounded-full h-12 mr-4"></span>
              <p>+4 unread message from [Sender Name]</p>
            </li>
            <li className="flex items-center py-4 shadow-md px-4 rounded-lg border-2">
              <span className="w-3 aspect-square bg-green-600 rounded-full h-12 mr-4"></span>
              <p>+4 unread message from [Sender Name]</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
