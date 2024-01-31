import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Company() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <h2 className="font-title text-[1.875rem] font-bold pt-5">
              Team/Company picture
            </h2>
            <p className="text-xs">
              Add a picture of your team/company to your Agency Page.
            </p>
          </div>
          <button
            className="middle none center rounded-md py-2 px-10 font-sans text-sm font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2"
            data-ripple-light="true"
          >
            Save changes
          </button>
        </div>
        <section className="w-full rounded-xl border-2 h-[28rem] mt-4 mx-auto px-12 flex gap-4 border-dotted justify-center items-center">
          <button className="bg-gray-300 rounded-md text-xs h-[2.125rem] font-semibold lg:h-[2.5rem] mt-2 px-6">
            Upload
          </button>
        </section>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <h2 className="font-title text-[1.875rem] font-bold pt-5">Story</h2>
            <p className="text-xs">
              Give visitors to your profile information about the background and
              core values of your agency.
            </p>
          </div>
          <button
            className="middle none center rounded-md py-2 px-10 font-sans text-sm font-bold text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-primary hidden lg:inline-block mr-2"
            data-ripple-light="true"
          >
            Save changes
          </button>
        </div>
        <section className="grid w-full gap-5">
          <div className="flex w-full mx-auto gap-10 items-end mt-5">
            <div className="grid w-full mx-auto">
              <label
                htmlFor="description"
                className="hidden font-semibold w-fit py-[0.125rem] text-sm rounded-md text-text"
              >
                Agency description
              </label>

              <textarea
                id="description"
                className="border-[1px] p-2 rounded-md"
              ></textarea>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
