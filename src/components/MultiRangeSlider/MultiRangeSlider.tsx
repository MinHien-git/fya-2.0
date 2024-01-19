import { useState, useRef } from "react";
import "./index.css";
import clsx from "clsx";

export default function MultiRangeSlider() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);

  return (
    <>
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
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </>
  );
}
