import { DataStore } from "aws-amplify";
import { Friendship, Profile } from "../models";
import { Dispatch, SetStateAction } from "react";
import { ToastData } from "../types";

export async function acceptFriendRequest(
  friendProfile: Profile,
  allFriends: Friendship[]
) {
  const friendShip = allFriends.filter(
    (friendship) => friendship.profileID === friendProfile.id
  );
  return await DataStore.save(
    Friendship.copyOf(friendShip[0], (updated) => {
      updated.isAccepted = true;
    })
  );
}

export async function rejectFriendRequest(
  friendProfile: Profile,
  allFriends: Friendship[]
) {
  const friendShip = allFriends.filter(
    (friendship) =>
      friendship.profileID === friendProfile.id ||
      friendship.friendProfileID === friendProfile.id
  );
  return await DataStore.delete(friendShip[0]);
}

export const createFriendRequest = async (
  userProfile: Profile | null,
  friendProfile: Profile,
  setToastData: Dispatch<SetStateAction<ToastData | null>>
) => {
  if (!userProfile) return;

  if (userProfile.id === friendProfile.id) {
    setToastData({
      message: "You cannot send a friend request to yourself!",
      type: "info",
    });
    return;
  }

  const existingFriendships = await DataStore.query(Friendship, (c) =>
    c.or((c) => [
      c.and((c) => [
        c.profileID.eq(userProfile.id),
        c.friendProfileID.eq(friendProfile.id),
      ]),
      c.and((c) => [
        c.profileID.eq(friendProfile.id),
        c.friendProfileID.eq(userProfile.id),
      ]),
    ])
  );

  if (existingFriendships.length > 0) {
    if (existingFriendships[0].isAccepted) {
      setToastData({ message: "You are already friends!", type: "info" });
      return;
    }
    setToastData({ message: "Friend request already sent!", type: "info" });
    return;
  }

  await DataStore.save(
    new Friendship({
      profile: userProfile,
      profileID: userProfile.id,
      friendProfileID: friendProfile.id,
      friendProfile: friendProfile,
    })
  );
  setToastData({ message: "Friend request sent!", type: "success" });
};
