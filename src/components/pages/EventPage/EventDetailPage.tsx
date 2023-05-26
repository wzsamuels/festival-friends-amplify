import React, { useContext, useEffect, useState } from "react";
import {Festival, UserProfile} from "../../../models";
import { DataStore } from "@aws-amplify/datastore";
import ImageContext from "../../../context/ImageContext";
import FriendCard from "../../ui/FriendCard";
import { Link, useParams } from "react-router-dom";
import Header from "../../layout/Header";
import { Ride } from "../../../models";
import Button from "../../common/Button/Button";
import NewRideModal from "./Modals/NewRideModal";
import RideCard from "../../ui/RideCard";
import useFriendStore from "../../../stores/friendProfileStore";
import useEventStore from "../../../stores/eventStore";
import useDataClearedStore from "../../../stores/dataClearedStore";

const EventDetailPage = () => {
  const { id } = useParams();
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles)
  const loadingFriendProfiles = useFriendStore(state => state.loadingFriends)
  const event = useEventStore(state => state.events).find(event => event.id === id)
  const [eventImage, setEventImage] = React.useState("");
  const [attendees, setAttendees] = useState<UserProfile[]>([]);
  const [attendeeFriends, setAttendeeFriends] = useState<UserProfile[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [isNewRideModalOpen, setIsNewRideModalOpen] = useState(false);
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { getSignedURL } = useContext(ImageContext);


  useEffect(() => {
    if(!event || !dataCleared) return;

    const fetchEventImage = async () => {
      return await getSignedURL(event.image, "public");
    }
    const fetchEventData = async () => {
      const attendeeProfiles: UserProfile[] = [];
      const eventData = await DataStore.query(Festival, id as string) as Festival;

      for await (const attendee of eventData.attendees) {
        const profile = await attendee.userProfile;
        attendeeProfiles.push(profile as UserProfile);
      }
      setAttendees(attendeeProfiles);

    };
    try {
      fetchEventImage()
        .then(image => setEventImage(image));
      fetchEventData();

      // Fetch rides
      const rideSub = DataStore.observeQuery(Ride, (c) =>
        c.eventID.eq(id as string)
      ).subscribe(({ items }) => {
        // Todo: Remove old rides
        setRides(items);
      });
      return () => {
        rideSub.unsubscribe();
      };
    } catch (e) {
      console.log("Error fetching event data: ", e);
    }
  }, [event]);


  useEffect(() => {
    if (friendProfiles.length === 0 || loadingFriendProfiles) {
      return;
    }
    const friendIds = new Set(friendProfiles.map((friend) => friend.id));
    const newAttendeeFriends = attendees.filter((attendee) =>
      friendIds.has(attendee.id)
    );
    setAttendeeFriends(newAttendeeFriends);
  }, [friendProfiles, attendees, loadingFriendProfiles]);

  return (
    <>
      <Header>
        <span className="mx-4 ">
          <Link className="underline text-primary-default " to="/">
            Events
          </Link>{" "}
          / {event?.name}
        </span>
      </Header>
      <div className="w-screen max-h-[75vh] h-full relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={eventImage}
          alt={event?.name}
        />
        <div className="rounded-xl z-10 text-primary-default shadow-md absolute bottom-4 left-4 bg-white p-4 bg-light-default min-w-[250px]">
          <h1 className="text-xl mb-2">{event?.name}</h1>
          <p className="mb-2"> {event?.location}</p>
          <p>{event?.startDate}</p>
        </div>
      </div>
      {/* Ride Section */}
      <section className="w-full p-4">
        <div className=" my-4 flex justify-between">
          <h1 className="text-2xl">Rides</h1>
          <Button onClick={() => setIsNewRideModalOpen(true)}>
            Create Ride
          </Button>
        </div>
        {rides.length > 0 ? (
          <div className="flex flex-wrap w-full">
            {rides.map((ride) => (
              <RideCard ride={ride} key={ride.id} className="w-full max-w-xl" />
            ))}
          </div>
        ) : (
          <div>No rides yet</div>
        )}
      </section>

      <div className="w-full p-4">
        {attendeeFriends.length > 0 && (
          <>
            <h2 className="text-2xl my-4">Friends Attending</h2>
            <div className="flex flex-wrap w-full">
              {attendeeFriends.map((attendee) => (
                <FriendCard
                  profile={attendee}
                  link={true}
                  key={attendee.id}
                  className="m-4"
                />
              ))}
            </div>
          </>
        )}
        <h2 className="text-2xl my-4">People Attending</h2>
        {attendees.length > 0 ? (
          <div className="flex flex-wrap w-full">
            {attendees.map((attendee) => (
              <FriendCard
                profile={attendee}
                link={true}
                key={attendee.id}
                className="m-4"
              />
            ))}
          </div>
        ) : (
          <p>No one is attending this event</p>
        )}
      </div>
      {event && (
        <NewRideModal
          isOpen={isNewRideModalOpen}
          setIsOpen={setIsNewRideModalOpen}
          event={event}
        />
      )}
    </>
  );
};

export default EventDetailPage;
