import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { SegmentItem } from "../ListboxSegmentTypes";
import { v4 as uuidv4 } from "uuid";

interface SegmentProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  items: SegmentItem[];
  className?: string;
}

const Segment = ({ selected, setSelected, items, className }: SegmentProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Create a ref for the container div
  const [size, setSize] = useState({ width: 0, height: 0 });
  const id = useRef<string>(uuidv4());

  const buttonRefs = useRef<{ [type: string]: React.RefObject<HTMLButtonElement> }>({});

  items.forEach((item) => {
    if (!buttonRefs.current[item.type]) {
      buttonRefs.current[item.type] = React.createRef();
    }
  });

  const updateLinePosition = () => {
    const activeButton = buttonRefs.current[selected]?.current;

    if (lineRef.current && activeButton) {
      lineRef.current.style.left = `${activeButton.offsetLeft}px`;
      lineRef.current.style.width = `${activeButton.offsetWidth}px`;
    }
  };

  const generateClassName = (type: string) =>
    `flex-1 pt-2 pb-3 px-1 relative text-sm sm:text-base  ${
      selected === type ? "active" : ""
    }`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize ResizeObserver
    let resizeObserver = new ResizeObserver((entries) => {
      for(let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    }
  }, []);

  useEffect(() => {
    updateLinePosition();
  }, [selected, size]); // add size to dependency array

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
    <div ref={containerRef} className={`w-full justify-between relative flex-wrap bg-lightYellow ${className}`}>
      {items.map((item) => (
        <button
          key={item.type}
          ref={buttonRefs.current[item.type]}
          className={`segment-button ${generateClassName(item.type)}`}
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
