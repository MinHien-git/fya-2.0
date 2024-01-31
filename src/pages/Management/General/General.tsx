import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function General() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2">
      <SecondaryNavigationBar />
      <section className="max-w-7xl w-[90%] min-h-[70vh] rounded-xl border-2 mt-10 mx-auto flex-col  px-12">
        <div className="flex w-full px-10 mt-14">
          <ul className="flex w-[50%] gap-3">
            <li className="w-8 aspect-square rounded-md bg-slate-300"></li>
            <li className="bg-slate-300 px-6 rounded-md text-blue-500 py-1 text-sm flex items-center font-bold">
              Edit
            </li>
          </ul>
          <ul className="flex ml-auto gap-3">
            <li className="min-w-max bg-red-200 text-red-500 px-6 rounded-md py-1 text-sm flex items-center font-bold">
              Delete service
            </li>
            <li className="min-w-max bg-blue-500 text-white px-6 rounded-md py-1 text-sm flex items-center font-bold">
              Save changes
            </li>
          </ul>
        </div>
        <div className="flex w-full px-10 mt-8">
          <div className="w-1/2">
            <h2 className="font-bold text-2xl">Service</h2>
          </div>
          <div className="w-1/2">
            <h2 className="font-bold text-2xl">Skills Tags</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
