// ImageContext.tsx
import { createContext } from 'react';
import {UserProfile} from "../models";

interface UserProfileContextData {
  userProfile: UserProfile | undefined;
  clearUserProfile: () => void;
  loadingUserProfile: boolean;
}

const UserProfileContext = createContext<UserProfileContextData>({} as UserProfileContextData);

export default UserProfileContext;
