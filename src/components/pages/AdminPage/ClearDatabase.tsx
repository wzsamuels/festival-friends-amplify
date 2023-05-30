import React, {useState} from "react";
import {DataStore} from "aws-amplify";
import {
  Conversation,
  EventProfile,
  Friendship,
  Message, Photo,
  PrivacySetting,
  Ride,
  RideUser,
  UserProfile
} from "../../../models";
import Button from "../../common/Button/Button";
import LoadingState from "../../ui/LoadingState";

const ClearDatabase = () => {
  const [clearing, setClearing] = useState(false);
  const clearDatabase = async () => {
    setClearing(true);
    try {
      const userProfiles = await DataStore.query(UserProfile);
      const privacySettings = await DataStore.query(PrivacySetting);
      const conversations = await DataStore.query(Conversation);
      const messages = await DataStore.query(Message);
      const eventProfiles = await DataStore.query(EventProfile);
      const rides = await DataStore.query(Ride);
      const rideUsers = await DataStore.query(RideUser);
      const friendShips = await DataStore.query(Friendship);
      const photos = await DataStore.query(Photo)

      await Promise.all(userProfiles.map(async (profile) => {
        await DataStore.delete(profile);
      }));

      await Promise.all(privacySettings.map(async (privacySetting) => {
        await DataStore.delete(privacySetting);
      }));

      await Promise.all(conversations.map(async (conversation) => {
        await DataStore.delete(conversation);
      }));

      await Promise.all(messages.map(async (message) => {
        await DataStore.delete(message);
      }));

      await Promise.all(eventProfiles.map(async (eventProfile) => {
        await DataStore.delete(eventProfile);
      }));

      await Promise.all(rides.map(async (ride) => {
        await DataStore.delete(ride);
      }));

      await Promise.all(rideUsers.map(async (rideUser) => {
        await DataStore.delete(rideUser);
      }));

      await Promise.all(friendShips.map(async (friendship) => {
        await DataStore.delete(friendship);
      }));

      await Promise.all(photos.map(async (photo) => {
        await DataStore.delete(photo);
      }));

      alert("Database cleared");
    } catch (error) {
      console.log("Error clearing database", error);
    }
  }
  return (
    <div className='flex justify-center my-6'>
      <Button
        onClick={clearDatabase}
        disabled={clearing}
      >
        {
          clearing ? <span>Clearing... <LoadingState/></span> : "Clear Database"
        }
      </Button>
    </div>
  )
}

export default ClearDatabase;