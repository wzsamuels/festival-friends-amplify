import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {Group, Event} from "../../../models";
import Button from "../../../components/common/Button/Button";
import EventCard from "../../../components/ui/EventCard";
import { DataStore } from "@aws-amplify/datastore";
import CreateEventModal from "../Modals/CreateEventModal";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
const UniversityPage = () => {
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
      if(group?.id === "aff79b4e-3141-4c3a-bdcc-29a1cf4814bc") return;
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
      const collegeGroupSub = DataStore.observeQuery(Event, c => c.and( c => [
        c.groupID.eq(collegeGroup.id),
        c.cancelled.eq(false),
        c.endDate.ge(new Date().toISOString()),
      ])).subscribe(({ items }) => {
        setGroupEvents(items);
      });
      return () => collegeGroupSub.unsubscribe();
  }, [collegeGroup, dataCleared]);


  if (!collegeGroup) {
    return (
      <div className='bg-[url("https://twinsilver.mo.cloudinary.net/eventfriends/public/website/Untitled-2.png?tx=q_auto,f_auto")] w-full bg-cover relative min-h-[calc(100vh-5rem)] h-full'>
        <div className="flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="m-4 text-lg md:text-xl">
            Our community features is restricted to college students only.
            If you&apos;re a college student and believe you should be
            able to access this feature, please contact us.
          </h1>
          </div>
        </div>
    );
  }

  return (
    <>
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

export default UniversityPage;
