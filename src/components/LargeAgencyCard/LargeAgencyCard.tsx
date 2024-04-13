import { Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface IPageCard {
  page: any;
}

export default function LargeAgencyCard({ page }: IPageCard) {
  const { company_name, tagline, page_id } = page;
  return (
    <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  lg:w-full">
      <img
        className="w-20 mx-auto rounded-full border-8 border-white mb-2"
        src="/static/images/profile.png"
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
          <li className="bg-secondary w-3 aspect-square rounded-md"></li>
          <li className="bg-secondary w-3 aspect-square rounded-md"></li>
          <li className="bg-secondary w-3 aspect-square rounded-md"></li>
          <li className="bg-secondary w-3 aspect-square rounded-md"></li>
          <li className="bg-secondary w-3 aspect-square rounded-md"></li>
          <li className="font-bold">0.0/5.0</li>
          <li className="hidden lg:block">(0 review)</li>
        </ul>
      </div>
      <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
        <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
          Digital Marketing
        </li>
        <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
          Data Analyzing
        </li>
        <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
          Social Media Advertising
        </li>
      </ul>
      <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
        <p>{tagline}</p>
      </div>

      <div className="flex w-5/6 gap-1">
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          ABC City, Vietnam
        </div>
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          SE Asia
        </div>
      </div>
      <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
        From $9999/project
      </div>
      <div className="flex w-5/6 gap-1">
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          ABC City, Vietnam
        </div>
        <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
          SE Asia
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
