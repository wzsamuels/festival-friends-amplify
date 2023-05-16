import {DataStore} from "aws-amplify";
import {Friendship, UserProfile} from "../models";
import {Dispatch, SetStateAction} from "react";
import {ToastData} from "../types";

export async function acceptFriendRequest(friendProfile: UserProfile, allFriends: Friendship[]) {
  const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendProfile.id);
  return await DataStore.save(Friendship.copyOf(friendShip[0], updated => {
    updated.isAccepted = true;
  }))
}

export async function rejectFriendRequest(friendProfile: UserProfile, allFriends: Friendship[]) {
  const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendProfile.id || friendship.friendProfileID === friendProfile.id);
  return await DataStore.delete(friendShip[0]);
}

export const createFriendRequest = async (userProfile: UserProfile | null, friendProfile: UserProfile, setToastData: Dispatch<SetStateAction<ToastData | null>>) => {
  if(!userProfile) return;

  if(userProfile.id === friendProfile.id) {
    setToastData({message: 'You cannot send a friend request to yourself!', type: 'info'})
    return;
  }

  const existingFriendships = await DataStore.query(Friendship, c => c.or( c => [
    c.and( c => [c.userProfile.id.eq(userProfile.id), c.friendProfileID.eq(friendProfile.id)]),
    c.and( c => [c.userProfile.id.eq(friendProfile.id), c.friendProfileID.eq(userProfile.id)])
  ]));

  if(existingFriendships.length > 0) {
    if(existingFriendships[0].isAccepted) {
      setToastData({message: 'You are already friends!', type: 'info'})
      return;
    }
    setToastData({message: 'Friend request already sent!', type: 'info'})
    return;
  }

  await DataStore.save(new Friendship({userProfileID: userProfile.id, friendProfileID: friendProfile.id, isAccepted: false, friendProfile: friendProfile, userProfile:  userProfile}) )
  setToastData({message: 'Friend request sent!', type: 'success'})
}