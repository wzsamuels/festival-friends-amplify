import {Dispatch, SetStateAction} from "react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}