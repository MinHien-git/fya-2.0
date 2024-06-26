import { useState } from "react";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../../hooks/useRaisedShadow";
import { ITab } from "../../pages/Management/EditService/EditService";
import { IServiceTab } from "../ServiceCard/ServiceCard";

export default function DragServiceCard({
  id,
  moveNext,
  skill_tags,
  serviceName,
}: IServiceTab) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={id}
      id={id}
      className="font-sans flex border-2 rounded-[10px] w-full px-8 h-[6.25rem] items-center shadow-md shadow-primary-500/20 bg-white"
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <li
        className="h-[3.125rem] flex"
        onPointerDown={(event) => dragControls.start(event)}
      >
        <button
          className="inline-flex mt-0 pl-0 items-center justify-center p-2 rounded-md text-gray-400 cursor-grab"
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
      <ul
        className="flex w-full items-center h-full cursor-pointer"
        onClick={moveNext}
      >
        <li className="flex w-1/6 font-bold text-nowrap px-5">{serviceName}</li>

        <ul className="w-2/3 px-3 border-2 rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[25rem] ml-auto h-[3.125rem] items-center">
          {skill_tags?.map((i) => (
            <li className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-black px-1 rounded-md py-4 max-h-[2rem] px-4 font-bold">
              <div>{i}</div>
            </li>
          ))}
        </ul>
      </ul>
    </Reorder.Item>
  );
}
