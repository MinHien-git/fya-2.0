import { Link } from "react-router-dom";
import { useState } from "react";
import EditService from "../EditService/EditService";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../../../hooks/useRaisedShadow";
import DragServiceCard from "../../../components/DragServicesCard/DragServicesCard";
const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
export default function Services() {
  const [state, setState] = useState(0);
  const [items, setItems] = useState(initialItems);

  return (
    <>
      {state == 0 ? (
        <section className=" mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
          <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
            Service & Skills Tags
          </h2>
          <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
            Highlight your abilities to deliver services to potential clients by
            highlighting your areas of expertise and skills related to your
            services. The order in which you arrange your services and skills
            will have an impact on the projects we match you with.
          </p>
          <p className="text-gray-400 text-xs mt-4 font-bold">
            The arrangement of your awards will be displayed on your Page.
          </p>
          <section className="grid w-full gap-5 mt-6 overflow-y-auto">
            <Reorder.Group
              className="w-full grid gap-5"
              axis="y"
              onReorder={setItems}
              values={items}
            >
              {items.map((i) => (
                <DragServiceCard
                  key={i.toString()}
                  moveNext={() => setState(1)}
                  id={i.toString()}
                />
              ))}
            </Reorder.Group>
            <div className="font-sans flex border-2 rounded-[10px] h-[6.25rem] border-dotted w-full py-8 px-8 border-text items-center">
              <p className="text-text font-semibold">Add another service</p>
            </div>
          </section>
        </section>
      ) : (
        <EditService moveNext={() => setState(0)} />
      )}
    </>
  );
}
