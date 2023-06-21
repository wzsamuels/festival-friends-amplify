import React, {useEffect, useState} from "react";
import {Event, Group, Profile} from "../../../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../../../stores/profileStore";
import useDataClearedStore from "../../../../stores/dataClearedStore";
import {DataStore} from "@aws-amplify/datastore";
import Button from "../../../common/Button/Button";
import EventCard from "../../../ui/EventCard";
import CreateEventModal from "../Modals/CreateEventModal";
import {SubmitHandler, useForm} from "react-hook-form";

const BrandPage = () => {
  const [group, setGroup] = useState<Group | null>(null);
  const [events, setGroupEvents] = useState<Event[]>([]);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const { register, handleSubmit, formState: { errors }} = useForm<{information: string}>();
  const [errorMessage, setErrorMessage] = useState("")
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendApplication: SubmitHandler<{ information: string }> = async (data) => {
    setSubmitting(true);
    if(!userProfile || !dataCleared) {
      console.log("Not ready");
      setErrorMessage("No profile or database not ready");
      setSubmitting(false);
      return;
    }
    try {
      const latestProfile = await DataStore.query(Profile, userProfile?.id)
      if (!latestProfile) {
        console.log("No profile");
        setErrorMessage("No profile");
        return;
      }
      await DataStore.save(Profile.copyOf(latestProfile, (updated) => {
        updated.brandSubmitted = true;
      }))
    } catch (e) {
      
    }


    setSubmitting(false);
  }

  useEffect(() => {
    const fetchGroup = async () => {
      const group = await userProfile?.group;
      console.log(group);
      if(!group || group.id !== "aff79b4e-3141-4c3a-bdcc-29a1cf4814bc") {
        console.log("Not a brand group");
        return null;
      }

      const events = await group?.events.toArray();
      if (events) {
        setGroupEvents(events);
      }
      return group;
    };

    if (
      authStatus === "authenticated" &&
      userProfile?.group !== undefined &&
      dataCleared
    ) {
      fetchGroup().then(group => setGroup(group));
    }
  }, [userProfile]);

  useEffect(() => {
    if(!group || !dataCleared) return
    const groupSub = DataStore.observeQuery(Event, c => c.and( c => [
      c.groupID.eq(group.id),
      c.cancelled.eq(false),
      c.endDate.ge(new Date().toISOString()),
    ])).subscribe(({ items }) => {
      setGroupEvents(items);
    });
    return () => groupSub.unsubscribe();
  }, [group, dataCleared]);


  if (!group) {
    return (
      <div className='bg-[url("https://twinsilver.mo.cloudinary.net/eventfriends/public/website/Untitled-2.png?tx=q_auto,f_auto")] w-full bg-cover relative min-h-[calc(100vh-5rem)] h-full'>
        <div className="flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="m-4 text-lg md:text-xl">
            This feature is restricted to influencers, brands, and content creators only.
          </h1>
          <p>The apply to access this feature, please fill out the form below. Please provide as much information about as possible about your work as a content creator, influencer, or brand. Your account and profile information will automatically be sent as well.</p>
          <form onSubmit={handleSubmit(sendApplication)}>
            <textarea rows={5} {...register("information")} className="w-full p-2 my-4 rounded-md border-2 border-gray-300" placeholder="Please provide as much information about your work as a content creator, influencer, or brand."></textarea>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 mt-4">
        <div className="text-xl sm:text-2xl lg:text-3xl text-center w-full">
          Welcome to the Content Creators & Influencers Group Page!
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
      {group && (
        <CreateEventModal
          group={group}
          isOpen={isCreateEventModalOpen}
          setIsOpen={setIsCreateEventModalOpen}
        />
      )}
    </>
  );
}

export default BrandPage;