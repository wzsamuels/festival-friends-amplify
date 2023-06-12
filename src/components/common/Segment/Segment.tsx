import React, {Dispatch, ReactNode, SetStateAction} from "react";
import {SegmentItem} from "../ListboxSegmentTypes";

interface SegmentProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  items: SegmentItem[];
  className?: string;
}

const Segment: React.FC<SegmentProps> = ({selected, setSelected, items, className}) => {
  const handleClick = (type: string) => {
    setSelected(type);
  };

  return (
    <div className={`w-full  justify-between h-full relative flex-wrap ${className}`}>
      {items.map((item) => (
        <button
          key={item.type}
          className={`hover:bg-white flex-1 py-2 px-1 sm:px-2 md:px-4 relative text-sm sm:text-base`}
          onClick={() => handleClick(item.type)}
          data-type={item.type}
        >
          {item.label}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brandYellow transition-all duration-300 ${selected === item.type ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
        </button>
      ))}
    </div>
  );
};

export default Segment;
