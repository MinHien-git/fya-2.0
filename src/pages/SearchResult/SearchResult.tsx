import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";

export default function SearchResult() {
  return (
    <main className="w-full min-h-80 p-2 pt-0">
      <section className="w-full border-2 max-w-7xl mb-5 pb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-light_yellow px-3">
        <div className="grid gap-3 px-2 h-auto py-5">
          <div className="bg-tertiary text-primary font-bold px-16 py-4 text-center">
            Result Filters:
          </div>
          <div className="grid flex-wrap gap-5 md:flex md:justify-start items-start">
            <div className="grid gap-3 w-1/4">
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
            <div className="grid gap-3 w-1/4">
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
    </main>
  );
}
