import {DataStore} from "aws-amplify";
import {Friendship} from "../models";

export async function acceptFriendRequest(friendProfileID: string, allFriends: Friendship[]) {
  console.log("Accept friend request", friendProfileID)
  const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendProfileID);
  return await DataStore.save(Friendship.copyOf(friendShip[0], updated => {
    updated.isAccepted = true;
  }))
}

export async function rejectFriendship(friendProfileID: string, allFriends: Friendship[]) {
  console.log("Reject friend request", friendProfileID)
  const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendProfileID || friendship.friendProfileID === friendProfileID);
  return await DataStore.delete(friendShip[0]);
}