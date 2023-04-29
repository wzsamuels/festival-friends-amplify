import {useContext, useEffect, useState} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { UserProfile, Friendship} from '../models';
import UserProfileContext from "../context/UserProfileContext";

function useFriendProfiles() {
  const [friendProfiles, setFriends] = useState<UserProfile[]>([]);
  const [ friendsAreLoading, setIsLoading] = useState(true);
  const { userProfile } = useContext(UserProfileContext)

  useEffect(() => {
    console.log(userProfile)
    if(userProfile) {
      // Query all friends and watch for changes
      const friendsSub = DataStore.observeQuery(Friendship,  (c) => c.and( c => [
        c.isAccepted.eq(true),
        c.or(c => [
          c.friendProfileID.eq(userProfile?.id),
          c.userProfileID.eq(userProfile?.id)])
      ])).subscribe(async({ items }) => {
        setIsLoading(true)
        // Fetch friend profiles
        const friendPromises = items.map(async (item) => item.userProfileID === userProfile.id ? await item.friendProfile : await item.userProfile);
        const friendProfiles = await Promise.all(friendPromises);
        setFriends(friendProfiles);
        setIsLoading(false)
      })
      return () => {
        friendsSub.unsubscribe();
      }
    }
  }, [userProfile]);

  return { friendProfiles, friendsAreLoading };
}

export default useFriendProfiles;