import { IEditCard } from "../AwardCard/AwardCard";
export interface IPortfolioTab {
  moveNext?: () => void;
  movePrev?: () => void;
  skill_tags?: Array<string>;
  service_tags?: Array<string>;
  id?: string;
  projectName?: string;
}
export default function PortfolioCard({
  projectName,
  id,
  moveNext,
  movePrev,
}: IPortfolioTab) {
  return (
    <div
      className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center cursor-pointer"
      onClick={moveNext}
    >
      <svg
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 aspect-square"
      >
        <rect width="21" height="21" fill="#F9F9F9" />
        <circle cx="10.5" cy="10.5" r="10" fill="#D9D9D9" stroke="#9EA0A3" />
        <path d="M5 10.5H16" stroke="#9EA0A3" />
        <path d="M10.5 16L10.5 5" stroke="#9EA0A3" />
      </svg>
      <p className="text-text font-semibold">Add another project</p>
    </div>
  );
}
