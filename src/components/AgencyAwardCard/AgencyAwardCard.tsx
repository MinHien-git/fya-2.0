import { FaCertificate } from "react-icons/fa6";

interface IAward {
  award_name: string;
  date: string;
  catergory: String;
}

export default function AgencyAwardCard({
  award_name,
  date,
  catergory,
}: IAward) {
  return (
    <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full pt-6 p-4 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3 drop-shadow-md">
      <FaCertificate className="mb-4" />
      <a href="/#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {award_name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-sm text-gray-700/50 dark:text-gray-400">
        {date}
      </p>
      <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 mt-4">
        Catergory: {catergory}
      </p>
    </div>
  );
}
