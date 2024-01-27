import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";

export default function SearchResult() {
  return (
    <main className="w-full min-h-80 pt-0">
      <section className="w-full border-2 mb-5 pb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-light_yellow px-3">
        <div className="grid gap-3 px-2 h-auto py-5 max-w-7xl mx-auto">
          <div className="bg-tertiary text-primary font-bold px-16 py-4 text-center font-title w-fit mb-4">
            Result Filters:
          </div>
          <div className="grid flex-wrap gap-5 md:flex md:justify-start items-start">
            <div className="grid gap-3">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Services
              </label>
              <input
                type="text"
                id="services"
                className="border-primary border-2 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="experience"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Having experience in
              </label>
              <input
                type="text"
                id="experience"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Select industries"
              />
            </div>

            <div className="grid gap-3">
              <label
                htmlFor="location"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Type location"
              />
            </div>
            <div className="grid gap-3 md:w-full lg:w-1/3">
              <label
                htmlFor="budget"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md "
              >
                Estimated budget{" "}
              </label>
              <MultiRangeSlider />
            </div>
          </div>
          <div className="grid md:flex flex-wrap gap-5 md:justify-start">
            <div className="grid gap-3">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Skills
              </label>
              <input
                type="text"
                id="services"
                className="border-primary border-2 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Language(s)
              </label>
              <input
                type="text"
                id="services"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Select language(s)"
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Team size
              </label>
              <input
                type="text"
                id="services"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Select a size"
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="services"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Sort by
              </label>
              <input
                type="text"
                id="services"
                className="border-primary border-2 p-2 rounded-md"
                placeholder="Recommended"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-0 my-5 mx-auto">
        <div className="py-5 w-full px-4">
          <h2 className="text-base py-2 font-bold text-center font-title bg-secondary rounded-lg w-fit px-6">
            More than ... agencies found
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full md:grid md:grid-cols-3 lg:grid-cols-4">
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans lg:w-full">
              <img
                className="w-28 mx-auto rounded-full border-8 border-white mb-2"
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
                <button className="bg-secondary w-full font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-[3rem] aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-28 mx-auto rounded-full border-8 border-white mb-2"
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
                <button className="bg-secondary w-full font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-[3rem] aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-28 mx-auto rounded-full border-8 border-white mb-2"
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
                <button className="bg-secondary w-full font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-[3rem] aspect-square rounded-md"></button>
              </div>
            </div>
            <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
              <img
                className="w-28 mx-auto rounded-full border-8 border-white mb-2"
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
                <button className="bg-secondary w-full font-semibold rounded-md text-xs">
                  Contact
                </button>
                <button className="bg-slate-200 w-[3rem] aspect-square rounded-md"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
