import {SocialMedia} from "./models";
import {AsyncCollection} from "@aws-amplify/datastore";

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
