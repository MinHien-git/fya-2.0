import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";

export default function SearchResult() {
  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-2 max-w-7xl mb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-light_yellow">
        <div className="flex gap-3 px-2">
          <div className="bg-tertiary text-primary font-bold px-16 py-4">
            result filter
          </div>
          <div className="flex flex-wrap">
            <div className="grid">
              <label htmlFor="services">Services</label>
              <input type="text" id="services" />
            </div>
            <div className="grid">
              <label htmlFor="experience">Having experience in</label>
              <input type="text" id="experience" />
            </div>

            <div className="grid">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" />
            </div>
            <div className="grid">
              <label htmlFor="budget">Estimated budget </label>
              <MultiRangeSlider />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
