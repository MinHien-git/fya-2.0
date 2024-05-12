import { Rating } from "@material-tailwind/react";
import {
  IPerformance,
  RatedIcon,
  UnratedIcon,
} from "../RatingAndFeedback/RatingAndFeedback";
import { FaQuoteLeft } from "react-icons/fa6";
import { RiChatQuoteLine } from "react-icons/ri";

interface IFeedbackCard {
  rating: number;
  description: string;
  performance: Array<IPerformance>;
}

export default function FeedbackCard({
  rating,
  description,
  performance,
}: IFeedbackCard) {
  return (
    <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3 drop-shadow-md gap-6">
      <RiChatQuoteLine />
      <p className="text-sm text-gray-700 dark:text-gray-400 font-bold">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2 items-center">
        <li>
          <Rating
            placeholder={undefined}
            value={rating}
            ratedIcon={<RatedIcon />}
            unratedIcon={<UnratedIcon />}
            className="gap-2"
          />
        </li>
        <li className="ml-auto font-bold text-xs">{rating.toFixed(1)}/5.0</li>
      </ul>
      {performance?.length > 0 ? (
        <ul className="flex flex-wrap gap-1">
          {performance.map((i) => (
            <li className="text-white bg-primary px-4 py-2 text-xs font-bold rounded-md">
              {i.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
