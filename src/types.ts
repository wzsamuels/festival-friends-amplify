import {EventType} from "./models";
import {ReactNode} from "react";

export interface NavItem  {
  content: ReactNode;
  link: string;
}

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
  gender: string;
  hobbies: string;
  birthdate: string;
  socialMedia: SocialMediaInput[];
};

export interface EventInputs {
  name: string;
  genre: string;
  state: string;
  country: string;
  city: string;
  address: string;
  startDate: string;
  endDate: string;
  type: EventType;
  description: string | null;
  url: string | null;
  ticketURL: string | null;
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
