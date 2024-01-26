import { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import clsx from "clsx";

export default function MultiRangeSlider() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);
  const minValRef: any = useRef(null);
  const maxValRef: any = useRef(null);
  const range: any = useRef(null);

  const getPercent = useCallback(
    (value: any) => Math.round(((value - 0) / (1000 - 0)) * 100),
    [0, 1000]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);
  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="border-primary slider pt-5 pb-2 border-2 flex justify-center rounded-xl px-5 bg-white lg:pt-0 lg:pb-1 h-[3rem] lg:h-[6.5rem]">
      <div className="slider pt-5 pb-8 flex justify-center relative">
        <label htmlFor="left" className="hidden">
          left
        </label>
        <label htmlFor="right" className="hidden">
          right
        </label>
        <input
          type="range"
          min={0}
          max={1000}
          value={minVal}
          ref={minValRef}
          id="left"
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={clsx("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > 1000 - 100,
          })}
        />
        <input
          type="range"
          id="right"
          min={0}
          max={1000}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider__track" />
        <div className="slider__range" ref={range} />
        <ul className="flex w-full absolute justify-between pt-6 md:pt-12">
          <li className="font-bold">$0</li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="w-[2px] h-[8px] bg-gray-400 mt-2"></li>
          <li className="font-bold">$1M</li>
        </ul>
      </div>
    </div>
  );
}
