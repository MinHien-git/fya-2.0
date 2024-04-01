import NotificationBar from "../../../components/NotificationBar/NotificationBar";

export default function General() {
  return (
    <>
      <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
        <div className="max-w-5xl w-[90%] flex flex-col gap-2 mx-auto">
          <div className="w-full h-[8rem] border-2 rounded-3xl shadow-md shadow-primary-500/20"></div>
          <div className="w-full h-[8rem] border-2 rounded-3xl shadow-md shadow-primary-500/20"></div>
          <div className="w-full h-[8rem] border-2 rounded-3xl shadow-md shadow-primary-500/20"></div>
        </div>
      </section>
    </>
  );
}
