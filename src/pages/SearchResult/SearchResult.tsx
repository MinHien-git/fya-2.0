import { useEffect, useState } from "react";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { GetPages } from "../../api/lib/page";
import LargeAgencyCard from "../../components/LargeAgencyCard/LargeAgencyCard";

export default function SearchResult() {
  const [pages, setPages] = useState<Array<any>>([]);
  const handleSubmit = async () => {
    let result = await GetPages();
    setPages(result.data?.data ? result.data?.data : []);
    console.log(result.data?.data);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <main className="w-full min-h-80 pt-0">
      <section className="w-full border-2 mb-5 pb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-light_yellow px-3">
        <div className="grid gap-3 px-2 h-auto py-5 max-w-7xl mx-auto">
          <div className="bg-tertiary text-primary font-bold px-16 py-4 text-center font-title w-fit mb-4">
            Result Filters:
          </div>
          <div className="grid gap-5 md:flex justify-between items-start">
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
            <div className="grid gap-3 w-1/4">
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

            <div className="grid gap-3 w-1/4">
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
            <div className="grid gap-3 w-1/4">
              <label
                htmlFor="location"
                className="bg-secondary font-semibold w-fit px-6 py-[0.225rem] md:py-[0.425rem] text-sm rounded-md"
              >
                Estimated budget
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="location"
                  className="border-primary border-2 p-2 rounded-l-md w-1/2 border-r-[1px]"
                  placeholder="From"
                />
                <input
                  type="text"
                  id="location"
                  className="border-primary border-2 p-2 rounded-r-md w-1/2 border-l-0"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <div className="grid md:flex gap-5 justify-between">
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
            <div className="grid gap-3 w-1/4">
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
            <div className="grid gap-3 w-1/4">
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
            <div className="grid gap-3 w-1/4">
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
            {pages?.map((page) => (
              <LargeAgencyCard page={page} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
