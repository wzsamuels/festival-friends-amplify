import {Dispatch, ReactNode, SetStateAction} from "react";

export interface ListboxSegmentItem {
  id: number;
  label: string;
  type: string;
}

export interface ListboxSegmentProps {
  items: ListboxSegmentItem[];
  selected: ListboxSegmentItem;
  setSelected: Dispatch<SetStateAction<ListboxSegmentItem>>
}