import {Dispatch, ReactNode, SetStateAction} from "react";

export interface SegmentItem {
  id: number;
  label: ReactNode;
  type: string;
}

export interface ListboxSegmentProps {
  items: SegmentItem[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  className?: string;
}