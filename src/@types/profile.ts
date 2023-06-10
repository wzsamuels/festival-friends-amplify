import { Profile } from "../models";

export interface ProfileModalProps {
  profile: Profile;
  profileImage?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  callback?: () => void;
}
