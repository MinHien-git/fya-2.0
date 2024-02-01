import NotificationBar from "../../../components/NotificationBar/NotificationBar";

export default function AdvertisingFeatures() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <NotificationBar />
      <section className="max-w-5xl w-[90%] min-h-[70vh] mt-5 mx-auto grid px-12 gap-5">
        <div className="w-full border-2 rounded-xl border-light_yellow_100 h-fit flex items-center gap-5 px-5 py-4 shadow-md shadow-primary-500/20">
          <div className="w-[1.875rem] aspect-square bg-secondary rounded-full"></div>{" "}
          <p className="text-[1.125rem] font-bold">
            You appear in ... search today
          </p>
        </div>
      </section>
    </main>
  );
}
