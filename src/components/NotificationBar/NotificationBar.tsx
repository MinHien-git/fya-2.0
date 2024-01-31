export default function NotificationBar() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-[4rem] border-b-2">
        <p className="font-title">Notifications</p>
      </div>
      <ul className="flex justify-center items-center h-[4rem] border-b-2 w-full">
        <li className="w-1/3 text-center border-r-2 py-4">General</li>
        <li className="w-1/3 text-center border-r-2 py-4">
          Project Leads Extension
        </li>
        <li className="w-1/3 text-center border-r-2 py-4">
          Advertising Features
        </li>
      </ul>
    </div>
  );
}
