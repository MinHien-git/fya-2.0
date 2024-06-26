import { Button, IconButton, Rating } from "@material-tailwind/react";
import { log } from "console";
import { Link } from "react-router-dom";
import { RatedIcon, UnratedIcon } from "../RatingAndFeedback/RatingAndFeedback";

interface IPageCard {
  page: any;
}

export default function LargeAgencyCard({ page }: IPageCard) {
  const {
    company_name,
    tagline,
    page_id,
    address,
    rating,
    total_rate,
    turnover,
    founded_date,
    logo,
    team_members,
    tags,
    minprice,
    languages,
  } = page;
  console.log(page);
  return (
    <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans w-full">
      <img
        className="w-20 mx-auto rounded-full border-8 border-white mb-2"
        src={logo ? logo : "/static/images/profile.png"}
        alt=""
      />
      <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
        <h5 className="text-center text-md font-medium">{company_name}</h5>
        <ul className="flex gap-1 justify-center">
          <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
            Fya Pro
          </li>
          <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
            Verified
          </li>
        </ul>
        <ul className="flex mt-1 gap-1 items-center justify-center">
          <li>
            <Rating
              placeholder={undefined}
              className="flex gap-1"
              ratedIcon={<RatedIcon />}
              unratedIcon={<UnratedIcon />}
              value={rating}
              readonly
            />
          </li>
          <li className="font-bold text-xs">{rating?.toFixed(1)}/5.0</li>
          <li className="hidden lg:block text-xs">({total_rate} review)</li>
        </ul>
      </div>
      <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6 h-[2.5rem] items-start">
        {tags?.map((tag) => (
          <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
            {tag}
          </li>
        ))}
      </ul>
      <div className="border-2 rounded-md font-normal text-xs w-5/6 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden mt-auto h-[2.5rem]">
        <p>{tagline}</p>
      </div>

      <div className="flex w-5/6 gap-1 ">
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md text-clip	truncate px-2">
          {address}
        </div>
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md text-clip	truncate px-2">
          {languages.join(", ")}
        </div>
      </div>
      <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
        From {minprice ? "$" + minprice : "Negotiate"}/project
      </div>
      <div className="flex w-5/6 gap-1">
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          {new Date(founded_date)?.toJSON()?.split("T")[0]}
        </div>
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          {team_members}
        </div>
      </div>
      <div className="flex w-5/6 gap-1 my-2">
        <Link to={`/agencypage/${page_id}`} className="w-5/6">
          <Button
            size="md"
            className="bg-secondary text-black max-w-[12rem] w-full"
            placeholder={undefined}
          >
            Contact
          </Button>
        </Link>
        <IconButton placeholder={undefined}>
          <i className="fa-regular fa-bookmark"></i>
        </IconButton>
      </div>
    </div>
  );
}
