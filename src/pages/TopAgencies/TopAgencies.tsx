import { Button } from "@material-tailwind/react";

export default function TopAgencies() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto px-2 sm:px-4 lg:px-0">
      <section className="w-full max-w-7xl border-2 pb-5 rounded-3xl mt-8 md:mx-auto min-h-[50vh] bg-dark_blue px-3 flex items-center">
        <div className="grid gap-3 px-2 py-5 h-full mx-auto">
          <h1 className="text-2xl lg:text-[2.5rem] sm:text-4xl font-bold text-white text-center lg:w-[32rem] font-header">
            Top <span className="text-secondary"> [Service]</span> Agencies in{" "}
            <span className="text-secondary">[Country]</span>
          </h1>
          <p className="text-white/70 text-center mt-4">
            Don't know where to start?
          </p>
          <Button
            className="bg-secondary text-text w-fit mx-auto normal-case"
            placeholder={undefined}
          >
            Find me an agency that fit
          </Button>
          <p className="text-white/70 text-center">
            Take <span className="text-secondary font-semibold">5 minutes</span>
            , <span className="text-secondary font-semibold">free</span> of{" "}
            <span className="text-secondary font-semibold">charge!</span>
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mb-5 pb-5 rounded-3xl md:mx-auto bg-light_yellow px-2 sm:px-4 lg:px-0">
        <div className="grid gap-3 px-2 h-auto py-5 max-w-7xl mx-auto">
          <div className="grid gap-5 md:flex justify-start items-start flex-wrap lg:gap-1 lg:flex-nowrap">
            <div className="grid gap-3 md:w-1/3 lg:w-1/5">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Services
              </label>
              <input
                type="text"
                id="services"
                className="border-text border-2 p-2 rounded-md w-full"
              />
            </div>
            <div className="grid gap-3 md:w-1/3 lg:w-1/5">
              <label
                htmlFor="experience"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Having experience in
              </label>
              <input
                type="text"
                id="experience"
                className="border-text border-2 p-2 rounded-md w-full"
                placeholder="Select industries"
              />
            </div>
            <div className="grid gap-3 md:w-1/3 lg:w-1/5">
              <label
                htmlFor="location"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border-text border-2 p-2 rounded-md w-full"
                placeholder="Type location"
              />
            </div>
            <div className="grid gap-3 md:w-1/3 lg:w-1/5">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Skills
              </label>
              <input
                type="text"
                id="services"
                className="border-text border-2 p-2 rounded-md w-full"
              />
            </div>
            <div className="grid gap-3 md:w-1/3 lg:w-1/5">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Sort by
              </label>
              <input
                type="text"
                id="services"
                className="border-text border-2 p-2 rounded-md w-full"
                placeholder="Recommended"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-0 mx-auto">
        <div className="w-full px-4">
          <h2 className="text-base py-2 font-bold text-center font-title bg-secondary rounded-lg w-fit px-6">
            More than ... agencies found
          </h2>{" "}
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full md:grid md:grid-cols-3 lg:grid-cols-4">
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans lg:w-full">
              <img
                className="w-20 mx-auto rounded-full border-8 border-white mb-2"
                src="/static/images/profile.png"
                alt=""
              />
              <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                <h5 className="text-center text-md font-medium">Agency Name</h5>
                <ul className="flex gap-1 justify-center">
                  <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
                    Fya Pro
                  </li>
                  <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                    Verified
                  </li>
                </ul>
                <ul className="flex mt-1 gap-1 items-center justify-center">
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="font-bold">0.0/5.0</li>
                  <li className="hidden lg:block">(0 review)</li>
                </ul>
              </div>
              <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Digital Marketing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Data Analyzing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Social Media Advertising
                </li>
              </ul>
              <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </p>
              </div>

              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
                From $9999/project
              </div>
              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="flex w-5/6 gap-1 my-2">
                <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-20 mx-auto rounded-full border-8 border-white mb-2"
                src="/static/images/profile.png"
                alt=""
              />
              <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                <h5 className="text-center text-md font-medium">Agency Name</h5>
                <ul className="flex gap-1 justify-center">
                  <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
                    Fya Pro
                  </li>
                  <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                    Verified
                  </li>
                </ul>
                <ul className="flex mt-1 gap-1 items-center justify-center">
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="font-bold">0.0/5.0</li>
                  <li className="hidden lg:block">(0 review)</li>
                </ul>
              </div>
              <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Digital Marketing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Data Analyzing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Social Media Advertising
                </li>
              </ul>
              <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </p>
              </div>

              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
                From $9999/project
              </div>
              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="flex w-5/6 gap-1 my-2">
                <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-20 mx-auto rounded-full border-8 border-white mb-2"
                src="/static/images/profile.png"
                alt=""
              />
              <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                <h5 className="text-center text-md font-medium">Agency Name</h5>
                <ul className="flex gap-1 justify-center">
                  <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
                    Fya Pro
                  </li>
                  <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                    Verified
                  </li>
                </ul>
                <ul className="flex mt-1 gap-1 items-center justify-center">
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="font-bold">0.0/5.0</li>
                  <li className="hidden lg:block">(0 review)</li>
                </ul>
              </div>
              <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Digital Marketing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Data Analyzing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Social Media Advertising
                </li>
              </ul>
              <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </p>
              </div>

              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
                From $9999/project
              </div>
              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="flex w-5/6 gap-1 my-2">
                <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-20 mx-auto rounded-full border-8 border-white mb-2"
                src="/static/images/profile.png"
                alt=""
              />
              <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                <h5 className="text-center text-md font-medium">Agency Name</h5>
                <ul className="flex gap-1 justify-center">
                  <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
                    Fya Pro
                  </li>
                  <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                    Verified
                  </li>
                </ul>
                <ul className="flex mt-1 gap-1 items-center justify-center">
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                  <li className="font-bold">0.0/5.0</li>
                  <li className="hidden lg:block">(0 review)</li>
                </ul>
              </div>
              <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Digital Marketing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Data Analyzing
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Social Media Advertising
                </li>
              </ul>
              <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                  lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam
                  erat volutpat. Morbi ac tincidunt orci.
                </p>
              </div>

              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
                From $9999/project
              </div>
              <div className="flex w-5/6 gap-1">
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  ABC City, Vietnam
                </div>
                <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                  SE Asia
                </div>
              </div>
              <div className="flex w-5/6 gap-1 my-2">
                <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl px-2 sm:px-4 lg:px-12 md:mx-auto flex flex-col justify-center items-center relative border-2 border-secondary rounded-3xl mt-4">
        <div className="py-8 w-full my-10 grid gap-3 pb-10">
          <h5 className="text-center md:text-xl lg:text-[2rem] font-title text-black font-bold text-3xl">
            Can’t decide?
          </h5>
          <p className="text-secondary text-sx text-center w-80 mx-auto mt-2">
            We have got you covered
          </p>

          <button className="bg-secondary text-text font-bold text-base rounded-lg px-10 py-3 mx-auto md:w-fit md:mx-auto">
            Post your Project
          </button>
          <p className="text-text text-center mt-2">
            & directly connect to agencies that fit your budget, scope and
            expectation, in 24 hours!
          </p>
        </div>
      </section>
    </main>
  );
}
