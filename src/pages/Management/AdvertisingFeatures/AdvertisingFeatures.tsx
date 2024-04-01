export default function AdvertisingFeatures() {
  return (
    <>
      <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
        <div className="max-w-5xl w-[90%] flex flex-col gap-2 mx-auto">
          <div className="w-full border-2 rounded-xl border-light_yellow_100 h-fit flex items-center gap-5 px-5 py-4 shadow-md shadow-primary-500/20">
            <div className="w-[1.875rem] aspect-square bg-secondary rounded-full"></div>{" "}
            <p className="text-[1.125rem] font-bold">
              You appear in ... search today
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
