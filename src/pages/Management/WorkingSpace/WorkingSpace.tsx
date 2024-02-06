import ProjectLeadsExtensionNavigation from "../../../components/ProjectLeadsExtensionNavigation/ProjectLeadsExtensionNavigation";

export default function WorkingSpace() {
  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col overflow-y-auto h-full mx-auto">
      <ProjectLeadsExtensionNavigation />
      <div className="w-full">
        <ul className="flex h-[3rem] border-b-2 w-full justify-between items-center">
          <li className="text-center pl-8 font-semibold">Project’s name</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>
          <li className="text-center font-semibold">Price</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>
          <li className="text-center font-semibold">Client’s name</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>
          <li className="text-center font-semibold">Company’s name</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>

          <li className="text-center font-semibold">Budget</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>

          <li className="text-center font-semibold">Contacts</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>

          <li className="text-center font-semibold">Stage</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>

          <li className="text-center font-semibold">Status</li>
          <li className="w-[1px] h-2/3 bg-gray-200"></li>

          <li className="text-center pr-8 font-semibold">Date</li>
        </ul>
      </div>
    </main>
  );
}
