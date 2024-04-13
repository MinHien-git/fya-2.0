import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { IEditCard } from "../AwardCard/AwardCard";

export default function AddressCard({ isEmpty }: IEditCard) {
  const [editMode, setEditMode] = useState(false);
  const [empty, setEmpty] = useState(isEmpty);

  return !empty ? (
    <div className="font-sans flex border-2 rounded-[10px] w-full py-6 px-8 items-center shadow-md shadow-primary-500/20">
      <ul className="flex w-full items-center justify-between">
        <li className="flex">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out mt-auto"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </li>
        <li
          className="flex pl-5 w-1/4 font-bold pr-5 text-nowrap mr-auto"
          contentEditable={editMode}
        >
          [Address]
        </li>
        <li className="px-8">
          {editMode ? (
            <Button
              placeholder={undefined}
              onClick={() => setEditMode(!editMode)}
              className="bg-primary"
            >
              Save
            </Button>
          ) : (
            <Button
              placeholder={undefined}
              onClick={() => setEditMode(!editMode)}
            >
              Edit
            </Button>
          )}
        </li>
      </ul>
    </div>
  ) : (
    <div
      className="font-sans flex border-2 rounded-[10px] h-[6.25rem] gap-8 border-dotted w-full py-8 px-8 border-text items-center cursor-pointer"
      onClick={() => {
        setEmpty(!empty);
        setEditMode(true);
      }}
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
      <p className="text-text font-semibold">Add a new address</p>
    </div>
  );
}
