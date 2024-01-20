export default function SaveList() {
  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-2 max-w-7xl py-5 px-4 sm:px-16 lg:px-24 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center lg:justify-between">
        <div className="py-5 w-full text-center">
          <h2 className="text-2xl py-2 font-bold text-center md:text-2xl lg:text-5xl">
            My Saved Agencies
          </h2>
          <p>Add up to 5 favorite Agencies and contact them all at once!</p>
          <div className="grid mt-5 gap-3 md:flex-nowrap md:w-full border-2 py-4 px-2 sm:px-4 md:p-8 md:gap-5 rounded-lg justify-normal w-full max-w-[40rem] mx-auto">
            <div className="font-sans flex border-2 rounded-md border-dotted w-full py-5 px-3 border-text">
              <p className="text-text font-semibold">Add an agency</p>
            </div>
            <div className="font-sans flex border-2 rounded-md border-dotted w-full py-5 px-3 border-text">
              <p className="text-text font-semibold">Add an agency</p>
            </div>
            <div className="font-sans flex border-2 rounded-md border-dotted w-full py-5 px-3 border-text">
              <p className="text-text font-semibold">Add an agency</p>
            </div>
            <div className="font-sans flex border-2 rounded-md border-dotted w-full py-5 px-3 border-text">
              <p className="text-text font-semibold">Add an agency</p>
            </div>
            <div className="font-sans flex border-2 rounded-md border-dotted w-full py-5 px-3 border-text">
              <p className="text-text font-semibold">Add an agency</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
