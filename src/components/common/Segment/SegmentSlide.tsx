import React, {ReactNode, useRef, useEffect, Dispatch, SetStateAction} from "react";
import {SegmentItem} from "../ListboxSegmentTypes";
import {v4 as uuidv4} from "uuid";

interface SegmentProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  items: SegmentItem[];
  className?: string;
}

const Segment = ({selected, setSelected, items, className} : SegmentProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const id = useRef<string>(uuidv4());

  const generateClassName = (type: string) =>
    `flex-1 pt-2 pb-3 relative text-sm sm:text-base ${
      selected === type ? "active" : ""
    }`;

  const updateLinePosition = () => {
    const activeButton = document.querySelector<HTMLButtonElement>(
      `.segment-button-${id.current}.active`
    );

    if (lineRef.current && activeButton) {
      lineRef.current.style.left = `${activeButton.offsetLeft}px`;
      lineRef.current.style.width = `${activeButton.offsetWidth}px`;
    }
  };

  useEffect(() => {
    updateLinePosition();
  }, [selected]);

  useEffect(() => {
    const handleResize = () => {
      updateLinePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (type: string) => {
    setSelected(type);
  };

  return (
    <div className={`w-full justify-between h-full relative flex-wrap bg-lightYellow ${className}`}>
      {items.map((item) => (
        <button
          key={item.type}
          className={`segment-button-${id.current} ${generateClassName(item.type)}`}
          onClick={() => handleClick(item.type)}
          data-type={item.type}
        >
          {item.label}
        </button>
      ))}
      <div
        ref={lineRef}
        className="absolute bottom-0 h-0.5 bg-darkGreen transition-all duration-300"
      ></div>
    </div>
  );
};

export default Segment;
