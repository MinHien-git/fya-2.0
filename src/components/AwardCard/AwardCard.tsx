import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { postPageAward, PutPageAward } from "../../api/lib/page";
import { useSelector } from "react-redux";
export interface IEditCard {
  isEmpty: boolean;
  id?: string;
}
export default function AwardCard({ isEmpty }: IEditCard) {
  const [editMode, setEditMode] = useState(false);
  const [empty, setEmpty] = useState(isEmpty);
  const [award, setAward] = useState<any>({});
  const page_id = useSelector((state: any) => state.page.page_id);

  async function handleSubmit() {
    if (!award.award_id) {
      const result = await postPageAward(page_id, award);
      setAward({ ...award, award_id: result });
    } else {
      const result = await PutPageAward(award.award_id, award);
    }
  }

  return empty ? (
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
      <p className="text-text font-semibold">Add another Awards</p>
    </div>
  ) : (
    <div className="font-sans flex border-2 rounded-[10px] w-full py-6 px-8  h-[6.25rem] items-center shadow-md shadow-primary-500/20">
      <ul className="flex w-full items-center justify-between">
        <li className="h-[3.125rem] self-end flex">
          <button
            className="inline-flex mt-0 pl-0 items-center justify-center p-2 rounded-md text-gray-400 "
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
        <li className="w-1/4 px-5">
          <li className="text-xs">Award Name</li>
          <li
            className="font-bold text-nowrap"
            contentEditable={editMode}
            onInput={(e) => {
              setAward({ ...award, name: e.currentTarget.textContent });
            }}
          >
            [Award Name]
          </li>
        </li>
        <li className="w-1/4 px-5 border-l-2">
          <ul>
            <li className="text-xs">Category</li>
            <li
              className="font-bold text-nowrap"
              contentEditable={editMode}
              onInput={(e) => {
                setAward({ ...award, catergory: e.currentTarget.textContent });
              }}
            >
              [Catergory Name]
            </li>
          </ul>
        </li>
        <li className="w-1/4 px-5 border-l-2">
          <ul>
            <li className="text-xs">Date</li>
            <li
              className="font-bold text-nowrap"
              contentEditable={editMode}
              onInput={(e) => {
                setAward({ ...award, date: e.currentTarget.textContent });
              }}
            >
              [mm/yyyy]
            </li>
          </ul>
        </li>
        <li className="w-1/4 pl-5 border-l-2">
          <ul>
            <li className="text-xs text-nowrap">Link to an existing work</li>
            <li
              className="font-bold text-nowrap"
              contentEditable={editMode}
              onInput={(e) => {
                console.log(award);
                setAward({ ...award, url: e.currentTarget.textContent });
              }}
            >
              [sample.com]
            </li>
          </ul>
        </li>
        <li className="px-8">
          {editMode ? (
            <div className="flex gap-4">
              {award.award_id ? (
                <Button
                  placeholder={undefined}
                  onClick={() => {
                    setEditMode(!editMode);
                    handleSubmit();
                  }}
                  className="bg-red-200 text-red-400"
                >
                  Delete
                </Button>
              ) : (
                <Button
                  placeholder={undefined}
                  onClick={() => {
                    setEditMode(!editMode);
                    handleSubmit();
                  }}
                  className="bg-red-200 text-red-400"
                >
                  Cancel
                </Button>
              )}
              <Button
                placeholder={undefined}
                onClick={() => {
                  setEditMode(!editMode);
                  handleSubmit();
                }}
                className="bg-primary"
              >
                Save
              </Button>
            </div>
          ) : (
            <Button
              placeholder={undefined}
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              Edit
            </Button>
          )}
        </li>
      </ul>
    </div>
  );
}
