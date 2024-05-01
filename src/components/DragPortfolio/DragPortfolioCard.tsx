import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { IPortfolioTab } from "../PortfolioCard/PortfolioCard";
import { useRaisedShadow } from "../../hooks/useRaisedShadow";
import { useEffect } from "react";

export default function DragPortfolioCard({
  projectName,
  id,
  moveNext,
  service_tags,
  skill_tags,
}: IPortfolioTab) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={id}
      id={id}
      className="font-sans flex border-2 rounded-[10px] w-full h-[6.25rem] items-center shadow-md shadow-primary-500/20 bg-white px-8"
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <li
        className="h-[3.125rem] flex   cursor-grab"
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
      <ul className="flex w-full items-center h-full" onClick={moveNext}>
        <ul
          //   onClick={() => setState(1)}
          className="flex w-[100%] items-center py-6 cursor-pointer "
        >
          <li className="flex px-5 w-1/6 font-bold text-nowrap">
            {projectName}
          </li>

          <li className="w-1/3 px-3 border-2 h-full rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[18rem] ml-auto">
            {service_tags?.map((i) => (
              <div className="flex text-xs justify-between items-center w-auto gap-2 flex-nowrap text-nowrap bg-primary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                <div>{i}</div>
              </div>
            ))}
          </li>
          <li className="w-1/3 px-3 border-2 h-full rounded-lg flex gap-1 py-3 overflow-x-auto no-scrollbar overflow-y-hidden max-w-[18rem] ml-2">
            {service_tags?.map((i) => (
              <div className="flex text-xs justify-between items-center w-auto gap-2 text-nowrap bg-secondary text-white px-1 rounded-md font-semibold py-2 max-h-[2rem]">
                <div>{i}</div>
              </div>
            ))}
          </li>
        </ul>
      </ul>
    </Reorder.Item>
  );
}
