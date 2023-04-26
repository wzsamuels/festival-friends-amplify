// UserProfileProvider.tsx
import React, {useEffect, useState} from 'react';
import {UserProfile} from "../models";
import UserProfileContext from "./UserProfileContext";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "@aws-amplify/datastore";

interface UserProfileProviderProps {
  children: React.ReactNode;
}

const UserProfileProvider = ({ children } : UserProfileProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const { user } = useAuthenticator((context) => [context.user]);
  const [loadingUserProfile, setLoading] = useState(true);

  // Only fetch the signed URL once per image
  useEffect(() => {
    console.log("UserProfileProvider useEffect",  user);
    if(!user) {
      return;
    }
    const profileSub = DataStore.observeQuery(UserProfile, c => c.userID.eq(user.username as string)).subscribe(({items}) => {
      if(items.length > 0) {
        setUserProfile(items[0]);
      }
      setLoading(false);
    });
    return () => {
      profileSub.unsubscribe();
    }
  }, [user])

  const clearUserProfile = () => {
    setUserProfile(undefined);
    setLoading(true)
  }

  return (
    <UserProfileContext.Provider value={{ userProfile, clearUserProfile, loadingUserProfile}}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
