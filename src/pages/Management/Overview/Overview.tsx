import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";

export default function Overview() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <FontAwesomeIcon icon={faList} />
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
              with Project Leads Extension, and much more!{" "}
              <span className="text-primary underline font-semibold mr-3">
                Learn more
              </span>
              {"  "}
              <span className="text-primary underline font-semibold">
                Not now
              </span>
            </p>
          </div>
          <div className="aspect-square rounded-full w-8 bg-slate-300"></div>
        </div>
      </section>
      <section className="max-w-7xl w-full mx-auto px-12 flex mt-1 gap-3">
        <div className="w-[50%] grid gap-3">
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-secondary w-10 rounded-lg"></div>
              <div className="font-bold">Advertising</div>
              <Button
                placeholder={undefined}
                className="bg-slate-200  text-primary ml-auto"
              >
                See full data
              </Button>
            </div>
            <ul className="flex h-[6rem] justify-between gap-4 border-b-2 pt-2 pb-4 mt-4">
              <li>
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
              <li>
                <div className="text-xs">Conversions</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">in the last 30 days</div>
              </li>
            </ul>
          </div>
          <div className="w-full pb-10 rounded-xl border-2 mx-auto flex-col px-6 py-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg"></div>
              <div className="font-bold">Project Leads</div>
              <Button
                placeholder={undefined}
                className="bg-slate-200  text-primary ml-auto"
              >
                See full data
              </Button>
            </div>
            <ul className="flex h-[6rem] justify-between gap-4 border-b-2 pt-2 pb-4 mt-4">
              <li>
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
              <li>
                <div className="text-xs">Projects won:</div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-xs">in the last 30 days</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[50%] pb-10 rounded-xl border-2 mx-auto flex-col px-6 shadow-lg">
          <div className="flex items-center gap-2 mt-6">
            <div className="aspect-square w-10 bg-primary rounded-md"></div>{" "}
            <h2>Complete your Agency Page</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
