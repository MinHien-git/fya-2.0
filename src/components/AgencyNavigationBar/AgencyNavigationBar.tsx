export default function AgencyNavigationBar() {
  return (
    <aside className="bg-dark_blue h-[100vh] max-w-[18rem] min-w-[15rem] rounded-b-xl">
      <div className="flex flex-col justify-center w-full h-[100vh]">
        <header className="flex flex-col gap-3 w-full h-fit">
          <span className="w-full flex flex-col items-center">
            <img
              src="/static/images/Logo2.svg"
              alt="logo"
              className="w-[3.5rem] mt-1"
            />
          </span>
          <hr className="w-full" />
        </header>
        <nav className="h-[90%] grid items-start pt-2">
          <ul className="grid gap-1">
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Dashboard
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Your Page
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Notification
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Inbox
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Project Leads Extension
            </li>
            <li className="pl-8 text-white w-full py-4 text-sm font-title">
              Advertising
            </li>
          </ul>
          <ul className="grid gap-1 mt-auto">
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title">
              Updates from Fya
            </li>
            <li className="pl-8 text-white w-full py-4 mt-auto border-b-2 text-sm font-title">
              Helps
            </li>
            <li className="pl-8 text-white w-full py-6 mt-auto border-b-2 text-sm font-title">
              <div className="flex gap-2 items-center">
                <div className="bg-white h-8 aspect-square rounded-full"></div>
                <div className="grid">
                  <p className="text-sm">Your Agency</p>{" "}
                  <a className="underline text-sm">See Agency Page</a>
                </div>
              </div>
            </li>
            <li className="pl-8 text-white w-full py-6 mt-auto">
              <div className="flex gap-2 items-center">
                <div className="bg-white h-8 aspect-square rounded-full"></div>
                <div className="grid">
                  <p className="text-sm font-title">Personal Acc...</p>{" "}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
