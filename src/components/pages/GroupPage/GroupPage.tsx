import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  CollegeGroup,
  Festival,
  UserProfile,
} from "../../../models";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Button from "../../common/Button/Button";
import EventCard from "../../ui/EventCard";
import { DataStore } from "aws-amplify";
import {
  fetchEventAttendees,
  getAttendingFriends,
} from "../../../lib/eventHelpers";
import CreateEventModal from "./Modals/CreateEventModal";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
import useFriendStore from "../../../stores/friendProfileStore";

const GroupsPage = () => {
  const [collegeGroup, setCollegeGroup] = useState<CollegeGroup>();
  const [events, setGroupEvents] = useState<Festival[]>([]);
  const [eventAttendees, setEventAttendees] = useState<
    Map<string, UserProfile[]>
  >(new Map());
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const friendProfiles = useFriendStore((state) => state.acceptedFriendProfiles);

  useEffect(() => {
    const fetchCollegeGroup = async () => {
      const group = await userProfile?.collegeGroup;
      console.log(group);
      setCollegeGroup(group);

      const events = await group?.events.toArray();
      if (events) {
        setGroupEvents(events);
      }
    };

    if (
      authStatus === "authenticated" &&
      userProfile?.collegeGroup !== undefined &&
      dataCleared
    ) {
      fetchCollegeGroup();
    }
  }, [userProfile]);

  useEffect(() => {
    if(!collegeGroup || !dataCleared) return
      const collegeGroupSub = DataStore.observeQuery(Festival, (festival) =>
        festival.groupID.eq(collegeGroup.id)
      ).subscribe(({ items }) => {
        setGroupEvents(items);
      });
      return () => collegeGroupSub.unsubscribe();
  }, [collegeGroup, dataCleared]);

  useEffect(() => {
    fetchEventAttendees(events).then(setEventAttendees);
  }, [events]);

  if (
    authStatus !== "authenticated" ||
    (!collegeGroup && authStatus === "authenticated")
  ) {
    return (
      <>
        <Header />
        <div className='bg-[url("/src/images/group.png")] w-full bg-cover flex flex-col items-center justify-center h-full min-h-screen p-2'>
          <div className="text-green-950 font-bold flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-2xl ">
            <div className="p-4 m-4  text-center">
              {authStatus !== "authenticated" ? (
                <div>
                  <div className="mb-6 text-xl md:text-2xl lg:text-3xl">
                    Connect with your community
                  </div>
                  <Link to="/account">
                    <Button>Sign In</Button>
                  </Link>
                </div>
              ) : (
                <span className="text-xl md:text-2xl lg:text-3xl">
                  Our community features is restricted to college students only.
                  If you&apos;re a college student and believe you should be
                  able to access this feature, please contact us.
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4 mt-4">
        <span className="text-xl md:text-2xl lg:text-3xl">
          Welcome to the {collegeGroup?.name} community page!
        </span>
        <div className="grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-4">
          {events?.map((event) => (
            <EventCard
              event={event}
              key={event.id}
              attendingFriends={getAttendingFriends({
                eventAttendees: eventAttendees,
                friendProfiles: friendProfiles,
                eventId: event.id,
              })}
            />
          ))}
        </div>
        <Button onClick={() => setIsCreateEventModalOpen(true)}>
          Create Event
        </Button>
      </div>
      {collegeGroup && (
        <CreateEventModal
          group={collegeGroup}
          isOpen={isCreateEventModalOpen}
          setIsOpen={setIsCreateEventModalOpen}
        />
      )}
    </>
  );
};

export default GroupsPage;
