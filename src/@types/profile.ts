import { UserProfile } from "../models";

export interface ProfileModalProps {
  profile: UserProfile;
  profileImage?: string;
  username: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  callback?: () => void;
}
