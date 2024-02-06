export default function ProjectLeadsExtensionNavigation() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-[4rem] border-b-2">
        <p className="font-title">Project Leads Extension</p>
      </div>
      <ul className="flex justify-center items-center h-[4rem] border-b-2 w-full">
        <li className="w-[25%] text-center border-r-2 font-semibold">New</li>
        <li className="w-[25%] text-center border-r-2 font-semibold">Open</li>
        <li className="w-[25%] text-center border-r-2 font-semibold">Won</li>
        <li className="w-[25%] text-center border-r-2 font-semibold">
          Archived
        </li>
      </ul>
      <ul className="flex justify-center items-center h-[2.5rem] border-b-2 w-full">
        <li className="w-1/3 text-center border-r-2 font-semibold">Applied</li>
        <li className="w-1/3 text-center border-r-2 font-semibold">
          Introduction sent
        </li>
        <li className="w-1/3 text-center border-r-2 font-semibold">
          Offer sent
        </li>
      </ul>
    </div>
  );
}
