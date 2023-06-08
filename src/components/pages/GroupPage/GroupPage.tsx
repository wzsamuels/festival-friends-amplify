import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Group,
  Event,
  Profile,
} from "../../../models";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Button from "../../common/Button/Button";
import EventCard from "../../ui/EventCard";
import { DataStore } from "aws-amplify";
import CreateEventModal from "./Modals/CreateEventModal";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
import useFriendStore from "../../../stores/friendProfileStore";

const GroupsPage = () => {
  const [collegeGroup, setGroup] = useState<Group>();
  const [events, setGroupEvents] = useState<Event[]>([]);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);

  useEffect(() => {
    const fetchGroup = async () => {
      const group = await userProfile?.group;
      console.log(group);
      setGroup(group);

      const events = await group?.events.toArray();
      if (events) {
        setGroupEvents(events);
      }
    };

    if (
      authStatus === "authenticated" &&
      userProfile?.group !== undefined &&
      dataCleared
    ) {
      fetchGroup();
    }
  }, [userProfile]);

  useEffect(() => {
    if(!collegeGroup || !dataCleared) return
      const collegeGroupSub = DataStore.observeQuery(Event, (festival) =>
        festival.groupID.eq(collegeGroup.id)
      ).subscribe(({ items }) => {
        setGroupEvents(items);
      });
      return () => collegeGroupSub.unsubscribe();
  }, [collegeGroup, dataCleared]);


  if (
    authStatus !== "authenticated" ||
    (!collegeGroup && authStatus === "authenticated")
  ) {
    return (
      <>
        <Header />
        <div className='bg-[url("/src/images/group.png")] w-full bg-cover flex flex-col items-center justify-center h-full min-h-screen p-2'>
          <div className="text-brandYellow font-bold flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-lg ">
              {authStatus !== "authenticated" ? (
                <>
                  <h1 className="m-4 text-xl">
                    Connect with your community
                  </h1>
                  <Link to="/account">
                    <Button>Sign In</Button>
                  </Link>
                </>
              ) : (
                <h1 className="m-4 text-xl">
                  Our community features is restricted to college students only.
                  If you&apos;re a college student and believe you should be
                  able to access this feature, please contact us.
                </h1>
              )}
            </div>
          </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4 mt-4">
        <div className="text-xl sm:text-2xl lg:text-3xl text-center w-full">
          Welcome to the {collegeGroup?.name} community page!
        </div>
        <div className='flex justify-center m-4'>
          <Button onClick={() => setIsCreateEventModalOpen(true)}>
            Create Event
          </Button>
        </div>
        <div className="grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-4">
          {events?.map((event) => (
            <EventCard
              event={event}
              key={event.id}
            />
          ))}
        </div>

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
