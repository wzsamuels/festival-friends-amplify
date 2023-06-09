import {EventType} from "./models";

export type ProfileInputs = {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  school: string;
  city: string;
  state: string;
  zipcode: string;
  address: string;
  address2: string;
  socialMedia: SocialMediaInput[];
};

export interface EventInputs {
  name: string;
  genre: string;
  state: string;
  city: string;
  address: string;
  startDate: string;
  endDate: string;
  type: EventType;
  description: string | null;
  url: string | null;
  selectedFile: File | null;
}

type SocialMediaInput = {
  id: string;
  type: string;
  url: string;
  saved: boolean;
}

export interface ToastData {
  message: string;
  type: "success" | "error" | "info" | "warning";
}
