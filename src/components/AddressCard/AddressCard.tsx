import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { IEditCard } from "../AwardCard/AwardCard";
import {
  DeletePageAddress,
  postPageAddress,
  PutPageAddress,
} from "../../api/lib/page";
export interface IAdressCard {
  isEmpty: boolean;
  id?: string;
  award_data?: any;
  page_id?: string;
  ad_description?: string;
  reloadPage: () => void;
}
export default function AddressCard({
  isEmpty,
  id,
  page_id,
  ad_description,
  reloadPage,
}: IAdressCard) {
  const [editMode, setEditMode] = useState(false);
  const [empty, setEmpty] = useState(isEmpty);
  const [description, setDescription] = useState<string>(
    ad_description ? ad_description : ""
  );

  async function handleSubmit() {
    console.log(id);
    if (!id) {
      const result = await postPageAddress(page_id, {
        description: description,
      });
      reloadPage();
      console.log(result);
    } else {
      const result = await PutPageAddress(id, {
        description: description,
      });
      reloadPage();
      console.log(result);
    }
  }

  async function deleteService() {
    if (id) {
      const result = await DeletePageAddress(id);
      console.log(result);
      reloadPage();
    }
  }

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
        <input
          title="address"
          className="flex ml-5 w-1/4 font-bold pr-5 text-nowrap mr-auto disabled:bg-transparent"
          contentEditable={editMode}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          disabled={!editMode}
        />

        <li className="px-8">
          {editMode ? (
            <div className="flex gap-5">
              {id ? (
                <Button
                  placeholder={undefined}
                  onClick={() => {
                    deleteService();
                    setEditMode(!editMode);
                  }}
                  className="bg-red-200 text-red-500"
                >
                  Delete
                </Button>
              ) : (
                <Button
                  placeholder={undefined}
                  onClick={() => setEditMode(!editMode)}
                  className="bg-red-200 text-red-500"
                >
                  Cancel
                </Button>
              )}
              <Button
                placeholder={undefined}
                onClick={() => {
                  handleSubmit();
                  setEditMode(!editMode);
                }}
                className="bg-primary"
              >
                Save
              </Button>
            </div>
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
