import NotificationBar from "../../../components/NotificationBar/NotificationBar";

export default function AdvertisingFeatures() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <NotificationBar />
      <section className="max-w-5xl w-[90%] min-h-[70vh] mt-10 mx-auto grid px-12 gap-5">
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
        <div className="w-full h-[8rem] border-2 rounded-3xl border-secondary"></div>
      </section>
    </main>
  );
}
