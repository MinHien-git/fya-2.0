import { Button, IconButton } from "@material-tailwind/react";
import { FiBookmark } from "react-icons/fi";

interface IMediumCard {
  name?: string;
  click?: () => void;
}

export default function MediumCard({ name, click }: IMediumCard) {
  return (
    <div className="font-sans w-10/12 flex border-2 rounded-2xl md:w-1/3 bg-white">
      <div className="card mx-auto flex-col py-4 flex items-center gap-2">
        <img
          className="w-20 mx-auto rounded-full border-8 border-white"
          src="/static/images/profile.png"
          alt=""
        />
        <div className="flex flex-col py-2 border-2 rounded-md w-5/6 justify-center ">
          <h5 className="text-center text-md font-medium">
            {name ? name : "ABC Agency"}
          </h5>
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
            <li className="font-bold text-sm">0.0/5.0</li>
            <li className="hidden lg:block text-xs">(0 review)</li>
          </ul>
        </div>

        <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus
            porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat.
            Morbi ac tincidunt orci.
          </p>
        </div>

        <div className="flex w-5/6 gap-1 my-2">
          <Button
            size="md"
            className="bg-secondary text-black max-w-[12rem] w-full"
            placeholder={undefined}
          >
            Contact
          </Button>
          <IconButton placeholder={undefined}>
            <i className="fa-regular fa-bookmark"></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
